import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t, lang } = useLanguage()
  const year = new Date().getFullYear()

  const quickLinks = [
    { label: t.nav.home[lang], href: '#hero' },
    { label: t.nav.about[lang], href: '#about' },
    { label: t.nav.products[lang], href: '#products' },
    { label: t.nav.whyUs[lang], href: '#why' },
    { label: t.nav.blog[lang], href: '#blog' },
    { label: t.nav.contact[lang], href: '#contact' },
  ]

  const categories = [
    t.footer.catWallets[lang],
    t.footer.catBelts[lang],
    t.footer.catLamps[lang],
  ]

  return (
    <footer style={{ background: '#1F1F1F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 md-px-16 py-16 md-py-20">
        <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-10 lg-gap-12">
          <div className="lg-col-span-1">
            <img
              src="/assets/logo.png"
              alt="Nilmani Global"
              className="img-footer mb-3"
            />
            <p className="text-sm mb-4" style={{ color: '#B28A45' }}>
              {t.footer.tagline[lang]}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {t.footer.desc[lang]}
            </p>
          </div>

          <div>
            <h4
              className="text-sm font-semibold mb-5 tracking-wider uppercase"
              style={{ color: '#C49A6C' }}
            >
              {t.footer.quickLinks[lang]}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs transition-colors duration-200 hover-opacity-100"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-semibold mb-5 tracking-wider uppercase"
              style={{ color: '#C49A6C' }}
            >
              {t.footer.productCats[lang]}
            </h4>
            <ul className="space-y-3">
              {categories.map((p, i) => (
                <li key={i}>
                  <a
                    href="#products"
                    className="text-xs transition-colors duration-200 hover-opacity-100"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-semibold mb-5 tracking-wider uppercase"
              style={{ color: '#C49A6C' }}
            >
              {t.footer.contactTitle[lang]}
            </h4>
            <ul className="space-y-3 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li>
                <a href="tel:9076197336" className="hover-opacity-100 transition-colors">
                  9076197336
                </a>
              </li>
              <li>
                <a
                  href="mailto:business@nilmaniglobal.com"
                  className="hover-opacity-100 transition-colors"
                >
                  business@nilmaniglobal.com
                </a>
              </li>
              <li className="leading-relaxed">
                B10/34/2:1, Dattaguru Nagar,
                <br />
                Sector 15, Vashi,
                <br />
                Navi Mumbai, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="border-t text-center py-6 px-6"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          &copy; {year} Nilmani Global. {t.footer.rights[lang]}
        </p>
      </div>
    </footer>
  )
}
