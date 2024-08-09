import { makeInstaller } from "@toy-design-ui/utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import components from "./components";
import printLogo from "./printLogo";
import "@toy-design-ui/theme/index.css"

printLogo();

library.add(fas);
const installer = makeInstaller(components)

export * from "@toy-design-ui/components"
export default installer;