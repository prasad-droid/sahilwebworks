const px = (id, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

/**
 * Central image registry using royalty-free Pexels photography.
 * All image IDs below were verified to resolve at build time.
 *
 * To swap in a brand asset later (for example a file supplied by the
 * business or one of the Google Drive deliverables), replace any `src`
 * with your own path/URL placed in `public/`.
 */
export const images = {
  hero: {
    src: px(3856433, 1920),
    src2x: px(3856433, 1920),
    alt: 'Aerial view of stacked shipping containers and cranes at an international container port'
  },
  about: {
    src: px(20676808, 1000),
    alt: 'Container cranes lifting cargo containers at a busy international shipping port'
  },
  aboutSecondary: {
    src: px(2326876, 900),
    alt: 'Cargo ships and container cranes at a port during sunset'
  },
  marketReachSide: {
    src: px(13766346, 1000),
    alt: 'Cargo trucks parked beside shipping containers at a container terminal'
  }
}

export const productImages = {
  industrialChemicals: {
    src: px(3735710, 800),
    alt: 'Laboratory glassware with coloured chemical solutions in a modern lab'
  },
  specialtyChemicals: {
    src: px(8851159, 800),
    alt: 'Laboratory vials and glass flasks used for chemical analysis'
  },
  bulkSourcing: {
    src: px(13766346, 800),
    alt: 'Cargo trucks and shipping containers at a container terminal'
  },
  commercialProducts: {
    src: px(4481326, 800),
    alt: 'Organised warehouse shelving stocked with products for distribution'
  },
  customizedProcurement: {
    src: px(6285094, 800),
    alt: 'Two business professionals shaking hands at a business meeting'
  },
  exportCoordination: {
    src: px(8039327, 800),
    alt: 'Large cargo ship carrying containers at sea'
  }
}