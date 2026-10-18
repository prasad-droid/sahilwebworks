/**
 * Customer testimonials.
 *
 * No testimonials have been supplied by the business, so this list is empty.
 * The Testimonials section is therefore not rendered on the live site.
 *
 * TO ENABLE: add entries to the array below using the shape shown in the
 * commented example. The section and its carousel will appear automatically.
 *
 *   {
 *     id: 't1',
 *     name: 'Customer name',
 *     location: 'City',
 *     rating: 5,          // 1-5, optional
 *     text: 'What the customer said.',
 *   }
 *
 * Never invent names, ratings or reviews.
 */

export const testimonials = []

/** Renders a dev-only placeholder instead of the section when empty. */
export const showTestimonialsPlaceholder = import.meta.env.DEV
