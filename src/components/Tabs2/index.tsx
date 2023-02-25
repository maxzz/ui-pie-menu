import { useState } from "react";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

type Tab = { id: number; name: string; };

function Tabs({ tabs, onSelect }: { tabs: Tab[]; onSelect?: (id: number) => void; }) {
    const [active, setActive] = useState(0);
    return (
        <nav className="isolate flex divide-x divide-violet-900 rounded-lg shadow" aria-label="Tabs">
            {tabs.map((tab, idx) => (
                <button
                    key={tab.name}
                    className={classNames(
                        idx === 0 ? 'rounded-l-lg' : '',
                        idx === tabs.length - 1 ? 'rounded-r-lg' : '',
                        idx === active ? 'text-green-500' : 'text-green-500/50 hover:text-green-500',
                        'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 focus:z-10',
                        'text-sm font-medium text-center transition-colors duration-300',
                        'bg-violet-900/20  hover:bg-violet-900/50',
                    )}
                    aria-current={idx === active ? 'page' : undefined}
                    onClick={() => (setActive(idx), onSelect?.(tab.id))}
                >
                    <span>{tab.name}</span>
                    <span className={classNames(idx === active ? 'bg-indigo-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-1')} aria-hidden="true" />
                </button>
            ))
            }
        </nav >
    );
}

const tabs: Tab[] = [
    { id: 0, name: 'My Account' },
    { id: 1, name: 'Company' },
    { id: 2, name: 'Team Members' },
    { id: 3, name: 'Billing' },
];

export function Tabs2() {
    return (
        <div className="m-3 p-4 bg-violet-600/40 border-violet-900/30 border rounded-md shadow">
            <Tabs tabs={tabs} onSelect={(idx) => {
                console.log('selected', idx);                
            }} />
        </div>
    );
}