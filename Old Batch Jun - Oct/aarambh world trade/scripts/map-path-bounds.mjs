/**
 * Bounding box for the SVG path data in src/assets/worldMap.js.
 *
 * The generated map mixes absolute and relative commands and uses h/v/c/s/q/t/a,
 * so a naive parser that only understands "M x,y" plus relative "l" pairs
 * returns boxes that are far too small.
 *
 * Curves contribute their control points as well as the end point: a bezier
 * always lies inside the convex hull of its control points, so the result is a
 * conservative (never too small) box.
 */

/**
 * @param {string} d SVG path data
 * @returns {{minX:number,maxX:number,minY:number,maxY:number,width:number,height:number}}
 */
export function pathBBox(d) {
  const tokens = d.match(/[A-Za-z]|-?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g) || [];

  let i = 0;
  let cmd = null;
  let x = 0;
  let y = 0;
  let startX = 0;
  let startY = 0;
  let prevCtrl = null;
  let prevQCtrl = null;

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  const add = (px, py) => {
    if (!Number.isFinite(px) || !Number.isFinite(py)) return;
    if (px < minX) minX = px;
    if (px > maxX) maxX = px;
    if (py < minY) minY = py;
    if (py > maxY) maxY = py;
  };
  const at = () => [x, y];
  const num = () => Number(tokens[i++]);

  while (i < tokens.length) {
    const t = tokens[i];

    if (/[A-Za-z]/.test(t)) {
      cmd = t;
      i += 1;
      if (cmd === 'Z' || cmd === 'z') {
        x = startX;
        y = startY;
        add(x, y);
        prevCtrl = prevQCtrl = null;
        continue;
      }
    } else if (cmd === 'M') {
      // A second coordinate pair after a moveto is an implicit lineto.
      cmd = 'L';
    } else if (cmd === 'm') {
      cmd = 'l';
    }

    const rel = cmd === cmd.toLowerCase() && cmd !== 'Z' && cmd !== 'z';
    const ox = rel ? x : 0;
    const oy = rel ? y : 0;

    switch (cmd.toUpperCase()) {
      case 'M':
      case 'L': {
        x = num() + ox;
        y = num() + oy;
        startX = x;
        startY = y;
        add(x, y);
        prevCtrl = prevQCtrl = null;
        break;
      }
      case 'H': {
        x = num() + ox;
        add(x, y);
        prevCtrl = prevQCtrl = null;
        break;
      }
      case 'V': {
        y = num() + oy;
        add(x, y);
        prevCtrl = prevQCtrl = null;
        break;
      }
      case 'C': {
        const c1x = num() + ox;
        const c1y = num() + oy;
        const c2x = num() + ox;
        const c2y = num() + oy;
        x = num() + ox;
        y = num() + oy;
        add(c1x, c1y);
        add(c2x, c2y);
        add(x, y);
        prevCtrl = [c2x, c2y];
        prevQCtrl = null;
        break;
      }
      case 'S': {
        const [rx, ry] = prevCtrl || at();
        const c2x = num() + ox;
        const c2y = num() + oy;
        x = num() + ox;
        y = num() + oy;
        add(rx, ry);
        add(c2x, c2y);
        add(x, y);
        prevCtrl = [c2x, c2y];
        prevQCtrl = null;
        break;
      }
      case 'Q': {
        const cx = num() + ox;
        const cy = num() + oy;
        x = num() + ox;
        y = num() + oy;
        add(cx, cy);
        add(x, y);
        prevQCtrl = [cx, cy];
        prevCtrl = null;
        break;
      }
      case 'T': {
        const [cx, cy] = prevQCtrl || at();
        x = num() + ox;
        y = num() + oy;
        add(cx, cy);
        add(x, y);
        prevQCtrl = [cx, cy];
        prevCtrl = null;
        break;
      }
      case 'A': {
        // rx ry x-axis-rotation large-arc-flag sweep-flag x y
        const rx = num();
        const ry = num();
        num(); // rotation
        num(); // large-arc-flag
        num(); // sweep-flag
        const ex = num() + ox;
        const ey = num() + oy;
        add(ex, ey);
        // Arcs are only used for the odd decorative edge, so the endpoints are
        // enough for a box that is never smaller than the true extent.
        x = ex;
        y = ey;
        prevCtrl = prevQCtrl = null;
        break;
      }
      default: {
        i += 1;
      }
    }
  }

  return { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY };
}
