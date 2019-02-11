/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import Root from "./app/native/containers/Root";
import configureStore from "./app/store/configureStore.prod.js";

import { name as appName } from "./app.json";
const store = configureStore();

class AppIndex extends Component {
  render() {
    return <Root store={store} />;
  }
}

AppRegistry.registerComponent(appName, () => AppIndex);
