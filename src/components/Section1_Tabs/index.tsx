import { useSnapshot } from "valtio";
import { appState } from "../store";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

type Tab = { id: number; name: string; };

function TabButtons({ tabs, selected, onSelect }: { tabs: Tab[]; selected: number; onSelect?: (id: number) => void; }) {
    return (<>
        {tabs.map((tab, idx) => (
            <button
                key={tab.name}
                className={classNames(
                    idx === 0 ? 'rounded-l-lg' : '',
                    idx === tabs.length - 1 ? 'rounded-r-lg' : '',
                    tab.id === selected ? 'text-green-500' : 'text-green-500/50 hover:text-green-500',
                    'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 focus:z-10',
                    'text-sm font-medium text-center transition-colors duration-300',
                    'bg-violet-900/20  hover:bg-violet-900/50',
                )}
                aria-current={tab.id === selected ? 'page' : undefined}
                onClick={() => onSelect?.(tab.id)}
            >
                <span>{tab.name}</span>
                <span className={classNames(tab.id === selected ? 'bg-indigo-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-1')} aria-hidden="true" />
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
        <nav className="px-4 py-2 isolate flex divide-x divide-violet-900 shadow" aria-label="Tabs">
            <TabButtons tabs={tabs} selected={snap.activeTab} onSelect={(id) => {
                appState.activeTab = id;
            }} />
        </nav>
    );
}
