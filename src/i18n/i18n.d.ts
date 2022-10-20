// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import en from "../i18n/localization/en.json"
import pt from "../i18n/localization/pt.json"

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "en";
    // custom resources type
    resources: {
      en: typeof en;
      pt: typeof pt;
    };
    // other
  }
}