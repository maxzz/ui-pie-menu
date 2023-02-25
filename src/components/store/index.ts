import { proxy } from "valtio";

export const appState = proxy({
    activeTab: 0,
});
