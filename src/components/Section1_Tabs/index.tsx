import { classNames } from "../../utils";
import { appState, useSnapshot } from "../store";

type Tab = { id: number; name: string; };

function TabButtons({ tabs, selected, onSelect }: { tabs: Tab[]; selected: number; onSelect?: (id: number) => void; }) {
    return (<>
        {tabs.map((tab, idx) => (
            <button
                key={tab.name}
                className={classNames(
                    idx === 0 ? 'rounded-l' : '',
                    idx === tabs.length - 1 ? 'rounded-r' : '',
                    tab.id === selected ? 'text-green-500 bg-violet-900/50' : 'text-green-500/70 hover:text-green-500',
                    'group relative min-w-0 flex-1 overflow-hidden px-2 py-3 focus:z-10',
                    'text-sm font-medium text-center select-none transition-colors duration-300',
                    'bg-violet-900/20  hover:bg-violet-900/50',
                )}
                aria-current={tab.id === selected ? 'page' : undefined}
                onClick={() => onSelect?.(tab.id)}
            >
                <span>{tab.name}</span>
                <span
                    className={classNames('absolute inset-x-0 bottom-0 h-0.5', tab.id === selected ? 'bg-indigo-500' : 'bg-transparent')}
                    aria-hidden="true"
                />
            </button>
        ))
        }
    </>);
}

const tabs: Tab[] = [
    { id: 1, name: 'Rounded Tabs' },
    { id: 2, name: 'Classic Tabs' },
    { id: 3, name: 'Grid Preview' },
    { id: 4, name: 'Pie Menu' },
    { id: 0, name: 'All' },
];

export function Section1_Tabs() {
    const snap = useSnapshot(appState);
    return (
        <nav className="px-4 pt-4 pb-2 divide-violet-900 shadow isolate flex divide-x" aria-label="Tabs">
            <TabButtons tabs={tabs} selected={snap.activeTab} onSelect={(id) => {
                appState.activeTab = id;
            }} />
        </nav>
    );
}
