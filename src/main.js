import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import BaseBadge from "./components/UI/BaseBadge.vue";

const app = createApp(App);

app.component("BaseBadge", BaseBadge);
app.mount("#app");
