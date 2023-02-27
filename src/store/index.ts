import { proxy } from "valtio";
export { useSnapshot } from "valtio";

// Pages

export const enum Pages {
    all,
    tabsRounded,
    tabsTw,
    grid,
    radio,
    pieMenu,
    panels,
}


// Filters

type Status = "pending" | "completed";
export type Filter = Status | "all";

export const filterValues: Filter[] = ["all", "pending", "completed"];

export const setFilter = (filter: Filter) => {
    appState.filter = filter;
};

// Store

export const appState = proxy<{
    activeTab: Pages,
    filter: Filter;
}>({
    activeTab: Pages.all,
    filter: "pending",
});
