import type { App } from "vue";
import { ElementPlusContainer } from "vitepress-preview-component";
import DefaultTheme from "vitepress/theme";
import ToyDesignUi from "toy-design-ui";

import "vitepress-preview-component/style.css";
import "toy-design-ui/dist/index.css";

export default {
    ...DefaultTheme,
    enhanceApp({ app }: { app: App }) {
        app.component("demo-preview", ElementPlusContainer);
        app.use(ToyDesignUi);
    },
};