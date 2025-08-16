import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");

  const languages = [
    { value: "en", text: "English" },
    { value: "de", text: "Deutsch" },
  ];

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div>
      <select value={lang} onChange={handleChange}>
        {languages.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
