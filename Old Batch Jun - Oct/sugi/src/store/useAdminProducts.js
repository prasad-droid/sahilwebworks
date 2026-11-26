import { useMemo } from "react";
import { useSite } from "./SiteContext";
import {
  INDIAN_GROUPS,
  IMPORTED_GROUP,
  INDIAN_PRODUCTS,
  IMPORTED_PRODUCTS,
} from "../data/catalog";

// ==========================================================================
// ADMIN-AWARE PRODUCT LISTS
// --------------------------------------------------------------------------
// The bundled catalogue (src/data/catalog.js) stays as the base list. Products
// managed in the Admin Panel (Products module) are merged on top:
//   • an admin product with the same slug updates that product's image and
//     adds price / description / packaging details;
//   • a slug that doesn't exist in the catalogue is added as a new product;
//   • catalogue products are never removed by the admin — the client brief
//     defines that list.
// This keeps the client-supplied catalogue as the source of truth while the
// admin can extend and enrich it without code changes.
// ==========================================================================

const CATALOG_SLUGS = new Set([...INDIAN_PRODUCTS, ...IMPORTED_PRODUCTS].map((p) => p.slug));
const INDIAN_SLUGS = new Set(INDIAN_PRODUCTS.map((p) => p.slug));
const IMPORTED_SLUGS = new Set(IMPORTED_PRODUCTS.map((p) => p.slug));

function mergeProduct(base, admin) {
  return {
    ...base,
    ...(admin.name ? { name: admin.name } : null),
    ...(admin.image ? { images: [admin.image] } : null),
    ...(admin.price ? { price: admin.price } : null),
    ...(admin.description ? { description: admin.description } : null),
    ...(admin.packaging ? { packaging: admin.packaging } : null),
    ...(admin.specifications ? { specifications: admin.specifications } : null),
  };
}

function toAdminProduct(admin) {
  return {
    slug: admin.slug || admin.id,
    name: admin.name,
    origin: admin.origin || "Indian Origin",
    groupTitle: admin.categoryTag || "Other Products",
    groupId: INDIAN_GROUPS.some((g) => g.id === admin.categoryTag)
      ? admin.categoryTag
      : IMPORTED_GROUP.id === admin.categoryTag
        ? admin.categoryTag
        : "admin-added",
    images: admin.image ? [admin.image] : [],
    price: admin.price,
    description: admin.description,
    packaging: admin.packaging,
    specifications: admin.specifications,
  };
}

// Full merged product list (catalogue + admin additions/overrides).
export function useMergedProducts() {
  const { products: adminProducts = [] } = useSite();

  return useMemo(() => {
    const bySlug = new Map([...INDIAN_PRODUCTS, ...IMPORTED_PRODUCTS].map((p) => [p.slug, p]));
    const extra = [];

    (adminProducts || []).forEach((a) => {
      if (!a || !a.name) return;
      const slug = a.slug || a.id;
      if (bySlug.has(slug)) bySlug.set(slug, mergeProduct(bySlug.get(slug), a));
      else extra.push(toAdminProduct(a));
    });

    return [...bySlug.values(), ...extra];
  }, [adminProducts]);
}

// Products grouped the way ProductSection expects (Indian groups + Imported).
export function useProductsByGroup() {
  const all = useMergedProducts();

  return useMemo(() => {
    const isImported = (p) => IMPORTED_SLUGS.has(p.slug);
    const isIndian = (p) => INDIAN_SLUGS.has(p.slug);

    const indianProducts = all.filter((p) => isIndian(p) || (!isImported(p) && !CATALOG_SLUGS.has(p.slug)));
    const importedProducts = all.filter((p) => isImported(p));

    const placed = new Set();

    const indianGroups = INDIAN_GROUPS.map((g) => {
      const products = all.filter(
        (p) =>
          !isImported(p) &&
          (p.groupId === g.id || (!INDIAN_GROUPS.some((gg) => gg.id === p.groupId) && p.groupTitle === g.title))
      );
      products.forEach((p) => placed.add(p.slug));
      return { ...g, products };
    }).filter((g) => g.products.length > 0);

    const leftovers = indianProducts.filter((p) => !placed.has(p.slug));
    if (leftovers.length) {
      indianGroups.push({ id: "other-products", title: "Other Products", products: leftovers });
    }

    return {
      indianGroups,
      importedGroup: { ...IMPORTED_GROUP, products: importedProducts },
    };
  }, [all]);
}
