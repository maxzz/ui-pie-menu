import { Fragment } from "react";
import { appState, demoRadio, useSnapshot } from "../../store";

function Filters() {
    const snap = useSnapshot(appState);
    return (<>
        {demoRadio.filterValues.map((filter: demoRadio.Filter) => (
            <Fragment key={filter}>
                <label className="space-x-1">
                    <input
                        type="radio"
                        name="filter"
                        value={filter}
                        checked={snap.filter === filter}
                        onChange={() => appState.filter = filter} />
                    <span>{filter}</span>
                </label>
            </Fragment>
        ))}
    </>);
}

export function Demo5_Radio() {
    return (
        <div className="mx-2 my-4 px-4 py-4 border-neutral-500/50 border rounded">
            <nav className="flex items-center text-green-500/80 space-x-4">
                <Filters />
            </nav>
        </div>
    );
}
