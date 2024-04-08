import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import yaml from "./messages.yml";

const i18n = createI18n({
  legacy: false,
  locale: navigator.language,
  fallbackLocale: "en",
  messages: yaml,
});

createApp(App).use(i18n).mount("#app");
