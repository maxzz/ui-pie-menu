import { CSSProperties } from 'react';
import { appState, useSnapshot } from './components/store';
import { Section1_Tabs } from './components/Section1_Tabs';
import { TabsControl } from './components/Tabs';
import { TabsTwUI } from './components/TabsTwUI';
import { GridPreview } from './components/GridPreview';
import { PieMenu } from './components/PieMenu';

const styleDots: CSSProperties = { //https://daisyui.com/components/tab
    backgroundImage: 'radial-gradient(#0002 0.5px, #0000 0.5px)',
    backgroundSize: '5px 5px',
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
                    {(activeTab === 3 || activeTab === 0) && <GridPreview />}
                </div>

                {(activeTab === 4 || activeTab === 0) && <PieMenu />}
            </div>
        </div>
    );
}
