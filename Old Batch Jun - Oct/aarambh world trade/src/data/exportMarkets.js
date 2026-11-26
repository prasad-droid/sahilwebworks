/**
 * EXPORT MARKETS
 * ==============
 * AARAMBH WORLDTRADE has not yet supplied verified export destinations, so this
 * list is intentionally EMPTY.
 *
 * The Global Markets world map is a VISUAL representation of international
 * focus only - it is not a claim about current or past export destinations.
 *
 * To activate real market data later:
 *   1. Add verified entries below, e.g.
 *        { code: 'AE', name: 'United Arab Emirates', region: 'Gulf & Middle East' }
 *   2. The map will pick them up automatically (markers appear on the map and
 *      the country names render in the market list).
 *
 * The map geometry is an accurate equirectangular world projection, so marker
 * positions are derived from real ISO-3166 alpha-2 country codes rather than
 * hand-placed coordinates.
 */
export const exportMarkets = [];

/** The buyer segments the company supplies to (from the supplied brief). */
export const buyerSegments = [
  { id: 'importers', label: 'International Importers' },
  { id: 'wholesalers', label: 'Wholesalers' },
  { id: 'distributors', label: 'Distributors' },
  { id: 'manufacturers', label: 'Food Manufacturers' },
  { id: 'retailers', label: 'Retailers' },
  { id: 'b2b', label: 'B2B Buyers' },
];

/**
 * Generic regions used for the animated "India -> Global Markets" routes.
 * These are broad world regions, NOT named export destinations, so the
 * animation communicates international focus without asserting a claim.
 * `lat` / `lon` are real geographic coordinates and are projected onto the
 * same equirectangular map the geometry uses.
 */
export const routeRegions = [
  { id: 'north-america', label: 'North America', lat: 44, lon: -78 },
  { id: 'south-america', label: 'South America', lat: -23, lon: -47 },
  { id: 'europe', label: 'Europe', lat: 50, lon: 12 },
  { id: 'middle-east', label: 'Middle East', lat: 26, lon: 52 },
  { id: 'africa', label: 'Africa', lat: -6, lon: 22 },
  { id: 'south-east-asia', label: 'South East Asia', lat: 3, lon: 108 },
  { id: 'east-asia', label: 'East Asia', lat: 36, lon: 132 },
  { id: 'oceania', label: 'Oceania', lat: -30, lon: 145 },
];

/** Small decorative markers on the map - trade, not destinations. */
export const mapMarkers = [
  { id: 'containers', label: 'International freight' },
  { id: 'port', label: 'Port & logistics coordination' },
  { id: 'quality', label: 'Quality & verification' },
  { id: 'docs', label: 'Export documentation' },
];
