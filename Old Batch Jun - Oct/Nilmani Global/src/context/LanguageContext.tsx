import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Lang } from '../i18n/translations'

type LangContext = {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations
}

const Context = createContext<LangContext | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <Context.Provider value={{ lang, setLang, t: translations }}>
      {children}
    </Context.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(Context)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
