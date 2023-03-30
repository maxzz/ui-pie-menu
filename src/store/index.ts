import { proxy, subscribe } from "valtio";
export { useSnapshot } from "valtio";

// Pages

export const enum AppPage {
    all,
    tabsRounded,
    tabsTw,
    grid,
    radio,
    pieMenu,
    panels,
}

export namespace demoRadio {
    // Filters

    type Status = "pending" | "completed";
    export type Filter = Status | "all";

    export const filterValues: Filter[] = ["all", "pending", "completed"];
}

// Store

const STORE_KEY = 'ui-pie-menu';
const STORE_VER = 'v1';

type AppState = {
    activeTab: AppPage,
    filter: demoRadio.Filter;
};

const initialState: AppState = {
    activeTab: AppPage.radio,
    filter: "pending",
};

function loadState(): AppState {
    const store = localStorage.getItem(STORE_KEY);
    if (store !== null) {
        try {
            const saved = JSON.parse(store)[STORE_VER];
            return saved || initialState;
        } catch (error) {
        }
    }
    return initialState;
}

export const appState = proxy<AppState>(loadState());

subscribe(appState, () => {
    console.log('state', appState);
    localStorage.setItem(STORE_KEY, JSON.stringify({[STORE_VER]: appState}));
});
