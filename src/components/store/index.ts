import { proxy } from "valtio";
export { useSnapshot } from "valtio";

export const appState = proxy({
    activeTab: 0,
});
