import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { scrollToElement } from '../utils/format.js';

const EnquiryContext = createContext(null);

/**
 * Coordinates the conversion flow.
 *
 * Every "Request a Quote" / "Request Product Details" button anywhere on the
 * page calls `startEnquiry(productName)`. That:
 *   1. records the product so the quote form selects + pre-fills it,
 *   2. scrolls to the bulk-order / quote section.
 *
 * Keeping this in one place means a new CTA never has to know how the form
 * works.
 */
export function EnquiryProvider({ children }) {
  const [product, setProduct] = useState('');
  const [seq, setSeq] = useState(0);
  const anchorRef = useRef('#bulk-order');

  const startEnquiry = useCallback((productName = '', { anchor } = {}) => {
    if (productName) setProduct(productName);
    // Bump the sequence even when re-requesting the same product so the form
    // can react (e.g. to re-focus a field) on repeat clicks.
    setSeq((n) => n + 1);

    const target = anchor || anchorRef.current;
    requestAnimationFrame(() => {
      scrollToElement(target, { offset: 88 });
      if (!productName) {
        // Let the visitor choose from the product field instead.
        const field = document.getElementById('q-product');
        if (field && document.activeElement !== field) field.focus({ preventScroll: true });
      }
    });
  }, []);

  const clearProduct = useCallback(() => setProduct(''), []);

  const value = useMemo(
    () => ({ product, seq, startEnquiry, clearProduct }),
    [product, seq, startEnquiry, clearProduct]
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error('useEnquiry must be used inside <EnquiryProvider>.');
  return ctx;
}

export default EnquiryContext;
