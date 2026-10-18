export default function ExportMarketsSection({ activeRegion, setActiveRegion, hoverRegion, setHoverRegion, mapStats, setMapStats, REGION_DATA, t }) {
  const isRegionActive = (regionKey) => activeRegion === regionKey || hoverRegion === regionKey;
  const mapStatIcons = ['fa-circle-check', 'fa-truck-fast', 'fa-network-wired', 'fa-globe'];

  const handleMapHover = (regionKey) => setHoverRegion(regionKey);
  const handleMapLeave = () => setHoverRegion(null);

  const handleMapClick = (regionKey) => {
    if (activeRegion === regionKey) {
      setActiveRegion(null);
    } else {
      setActiveRegion(regionKey);
      const data = REGION_DATA[regionKey];
      if (data) {
        setMapStats({
          ports: data.ports.split(',')[0],
          transit: data.transit,
          products: data.products.split(',')[0]
        });
      }
    }
  };

  return (
    <section className="section map-section" id="export-markets">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('exportMarkets.badge')}</span>
          <h2 className="section-title">{t('exportMarkets.title').split(' ').slice(0, -2).join(' ')} <span>{t('exportMarkets.title').split(' ').slice(-2).join(' ')}</span></h2>
          <p className="section-desc">{t('exportMarkets.desc')}</p>
        </div>

        <div className="map-layout">
          <div className="map-stats">
            {t('exportMarkets.stats').map((stat, idx) => (
              <div key={idx} className="map-stat-card">
                <div className="map-stat-icon"><i className={`fa-solid ${mapStatIcons[idx] || 'fa-circle-check'}`}></i></div>
                <div className="map-stat-info">
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="map-container-interactive" id="interactive-map-block">
            <div className="map-graphic">
              <div className="map-graphic-grid"></div>
              {[
                { region: 'india', label: t('exportMarkets.tooltips.india'), left: '70%', top: '48%' },
                { region: 'middleEast', label: t('exportMarkets.tooltips.middleEast'), left: '58%', top: '48%' },
                { region: 'europe', label: t('exportMarkets.tooltips.europe'), left: '47%', top: '32%' },
                { region: 'asia', label: t('exportMarkets.tooltips.asia'), left: '70%', top: '30%' },
                { region: 'africa', label: t('exportMarkets.tooltips.africa'), left: '45%', top: '52%' },
                { region: 'northAmerica', label: t('exportMarkets.tooltips.northAmerica'), left: '18%', top: '28%' },
              ].map((point) => (
                <div key={point.region} className="map-pin" style={{ left: point.left, top: point.top }}>
                  <div className="map-pin-dot"></div>
                  <div className="map-pin-label">{point.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
