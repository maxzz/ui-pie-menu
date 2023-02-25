import { proxy } from "valtio";
export { useSnapshot } from "valtio";

// Filters

type Status = "pending" | "completed";
export type Filter = Status | "all";

export const filterValues: Filter[] = ["all", "pending", "completed"];

export const setFilter = (filter: Filter) => {
    appState.filter = filter;
};

// Store

export const appState = proxy<{
    activeTab: number,
    filter: Filter;
}>({
    activeTab: 0,
    filter: "pending",
});
