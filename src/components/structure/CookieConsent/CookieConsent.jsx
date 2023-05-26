import React, { useEffect } from 'react';
import pluginConfig from '../CookieConsentConfig/CookieConsentConfig';
import 'vanilla-cookieconsent';

const CookieConsent = () => {
  useEffect(() => {
    /**
     * useEffect is executed twice (React 18+),
     * make sure the plugin is initialized and executed once
     */
    console.log('useEffect');
    if (!document.getElementById('cc--main')) {
      window.CookieConsentApi = window.initCookieConsent();
      window.CookieConsentApi.run(pluginConfig);
      console.log('cc!');
    }
  }, []);

  return null;
};

export default CookieConsent;