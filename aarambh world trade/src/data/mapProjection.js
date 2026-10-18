/**
 * Latitude/longitude -> SVG coordinate transform for the world map in
 * src/assets/worldMap.js.
 *
 * The map is an equirectangular projection, but the shipped geometry is not
 * laid out on the textbook full -180..180 / -90..90 grid: it is very slightly
 * compressed horizontally and shifted vertically. Assuming the textbook formula
 * puts route markers tens of units away from where they should be, which is
 * enough to drop a marker into the wrong country.
 *
 * The coefficients below were measured from the geometry itself by least
 * squares over a dozen known country bounding boxes:
 *
 *   node scripts/fit-map-projection.mjs
 *
 * Validation against the measured India box, whose centre is also exported as
 * INDIA_ORIGIN:
 *
 *   predicted  x 669.4 / y 258.8
 *   actual     x 678.9 / y 270.1   (~1.5% of the map width, uniformly low)
 *
 * Re-run the fit script if src/assets/worldMap.js is ever regenerated, and
 * update these numbers if the output changes.
 */
export const MAP_PROJECTION = {
  xScale: 2.552595,
  yScale: -3.433718,
  xOffset: 458.838,
  yOffset: 336.046,
};

/**
 * Projects a geographic coordinate onto the map's viewBox coordinate space.
 * @param {number} lat degrees north, -90..90
 * @param {number} lon degrees east, -180..180
 * @returns {{ x: number, y: number }}
 */
export function projectLatLon(lat, lon) {
  return {
    x: lon * MAP_PROJECTION.xScale + MAP_PROJECTION.xOffset,
    y: lat * MAP_PROJECTION.yScale + MAP_PROJECTION.yOffset,
  };
}
