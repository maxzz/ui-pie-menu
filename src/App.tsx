import { CSSProperties } from 'react';
import { useSnapshot } from 'valtio';
import { GridPreview } from './components/GridPreview';
import { PieMenu } from './components/PieMenu';
import { appState } from './components/store';
import { TabsControl } from './components/Tabs';
import { Section1_Tabs } from './components/Section1_Tabs';
import { TabsTwUI } from './components/TabsTwUI';

const styleDots: CSSProperties = { //https://daisyui.com/components/tab
    backgroundImage: 'radial-gradient(#0002 0.5px, #0000 0.5px)',
    backgroundSize: '5px 5px',
};

export function App() {
    const snap = useSnapshot(appState);
    return (
        <div className="h-screen bg-violet-700" style={styleDots}>
            <div className="relative h-full grid grid-rows-[auto_2fr_1fr]">
                <Section1_Tabs />

                <div className="">
                    {(snap.activeTab === 1 || snap.activeTab === 0) && <TabsControl />}
                    {(snap.activeTab === 2 || snap.activeTab === 0) && <TabsTwUI />}
                    {(snap.activeTab === 3 || snap.activeTab === 0) && <GridPreview />}
                    {(snap.activeTab === 4 || snap.activeTab === 0) && <PieMenu />}
                </div>
            </div>
        </div>
    );
}
