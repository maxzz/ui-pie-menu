import { CSSProperties, Fragment } from 'react';
import { appState, filterValues, setFilter, useSnapshot } from './components/store';
import { Section1_Tabs } from './components/Section1_Tabs';
import { TabsControl } from './components/Demo1_TabsRounded';
import { TabsTwUI } from './components/Demo2_TabsTwUI';
import { Demo3_GridPreview } from './components/Demo3_GridPreview';
import { Demo4_PieMenu } from './components/Demo4_PieMenu';

const styleDots: CSSProperties = { //https://daisyui.com/components/tab
    backgroundImage: 'radial-gradient(#0002 0.5px, #0000 0.5px)',
    backgroundSize: '5px 5px',
};

const Filters = () => { //https://valtio.pmnd.rs/docs/introduction/getting-started
    const snap = useSnapshot(appState);
    return (<>
        {filterValues.map((filter) => (
            <Fragment key={filter}>
                <label className="space-x-1">
                    <input
                        type="radio"
                        name="filter"
                        value={filter}
                        checked={snap.filter === filter}
                        onChange={() => setFilter(filter)}
                    />
                    <span>{filter}</span>
                </label>
            </Fragment>
        ))}
    </>);
};

export function App() {
    const { activeTab } = useSnapshot(appState);
    return (
        <div className="h-screen">
            <div className="fixed inset-0 bg-violet-700 select-none" style={styleDots}></div>

            <div className="relative h-full grid grid-rows-[auto_2fr_1fr]">
                <Section1_Tabs />

                <div className={(activeTab === 4) ? 'hidden' : ''}>
                    {(activeTab === 1 || activeTab === 0) && <TabsControl />}
                    {(activeTab === 2 || activeTab === 0) && <TabsTwUI />}
                    {(activeTab === 3 || activeTab === 0) && <Demo3_GridPreview />}

                    <div className="mx-2 my-4 px-4 py-4 border-neutral-500/50 border rounded">
                        <nav className="flex items-center text-green-500/80 space-x-4">
                            <Filters />
                        </nav>
                    </div>
                </div>

                {(activeTab === 4 || activeTab === 0) && <Demo4_PieMenu />}
            </div>
        </div>
    );
}
