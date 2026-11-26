import { useEffect } from 'react'

/**
 * Adds an `is-visible` class to every `[data-reveal]` element as it enters the viewport.
 * Uses IntersectionObserver with a graceful fallback for older browsers.
 * A MutationObserver keeps track of elements added later (for example when
 * product category tabs swap their panel content).
 */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      const showAll = (root) => {
        if (root.nodeType === 1 && root.matches?.('[data-reveal]')) {
          root.classList.add('is-visible')
        }
        root.querySelectorAll?.('[data-reveal]').forEach((el) => el.classList.add('is-visible'))
      }
      showAll(document.body)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    const observe = (node) => {
      if (node.nodeType === 1 && node.matches?.('[data-reveal]')) {
        observer.observe(node)
      }
      node.querySelectorAll?.('[data-reveal]').forEach((el) => observer.observe(el))
    }

    observe(document.body)

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(observe))
    })
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutations.disconnect()
    }
  }, [])
}
