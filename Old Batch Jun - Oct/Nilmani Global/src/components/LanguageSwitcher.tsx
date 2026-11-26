import { useLanguage } from '../context/LanguageContext'

export default function LanguageSwitcher({ dark }: { dark?: boolean }) {
  const { lang, setLang } = useLanguage()
  const isEn = lang === 'en'

  const toggle = () => {
    setLang(isEn ? 'hi' : 'en')
  }

  const bgColor = dark ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.12)'
  const activeBg = '#C49A6C'
  const activeText = '#1F1F1F'
  const inactiveColor = dark ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.5)'

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label="Toggle language"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        width: 100,
        height: 34,
        padding: 3,
        borderRadius: 999,
        border: '1px solid rgba(255,255,255,0.15)',
        background: bgColor,
        cursor: 'pointer',
        backdropFilter: 'blur(4px)',
        transition: 'all 0.2s',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
    >
      <span
        style={{
          position: 'absolute',
          top: 3,
          left: isEn ? 3 : 'auto',
          right: isEn ? 'auto' : 3,
          width: 46,
          height: 26,
          borderRadius: 999,
          background: activeBg,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
          zIndex: 0,
        }}
      />
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.5px',
          color: isEn ? activeText : inactiveColor,
          transition: 'color 0.3s',
          fontFamily: "'Inter', sans-serif",
          userSelect: 'none',
        }}
      >
        EN
      </span>
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.5px',
          color: isEn ? inactiveColor : activeText,
          transition: 'color 0.3s',
          fontFamily: "'Inter', sans-serif",
          userSelect: 'none',
        }}
      >
        HI
      </span>
    </button>
  )
}
