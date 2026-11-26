import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaGlobe, FaChevronDown, FaCheck } from 'react-icons/fa';

const LanguageSelector = ({ isMobile = false }) => {
  const { currentLanguage, setLanguage, languages, currentLangMeta } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div 
      className={`lang-selector-container ${isMobile ? 'lang-selector-mobile' : ''}`} 
      ref={dropdownRef}
    >
      <button 
        type="button"
        className="lang-selector-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        <FaGlobe className="lang-globe-icon" />
        <span className="lang-flag">{currentLangMeta.flag}</span>
        <span className="lang-label">{currentLangMeta.nativeName}</span>
        <FaChevronDown className={`lang-chevron ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <div className="lang-dropdown-menu">
          <div className="lang-dropdown-header">
            <span>Select Language</span>
          </div>
          <div className="lang-dropdown-list">
            {Object.values(languages).map((lang) => {
              const isSelected = lang.code === currentLanguage;
              return (
                <button
                  key={lang.code}
                  type="button"
                  className={`lang-option-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(lang.code)}
                >
                  <span className="lang-option-flag">{lang.flag}</span>
                  <div className="lang-option-text">
                    <span className="lang-option-native">{lang.nativeName}</span>
                    <span className="lang-option-name">{lang.name}</span>
                  </div>
                  {isSelected && <FaCheck className="lang-check-icon" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
