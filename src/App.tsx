import { CSSProperties } from 'react';
import { useSnapshot } from 'valtio';
import { GridPreview } from './components/GridPreview';
import { PieMenu } from './components/PieMenu';
import { appState } from './components/store';
import { TabsControl } from './components/Tabs';
import { Tabs as TopTabs } from './components/Tabs2';
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
                <TopTabs />

                <div className="">
                    {snap.activeTab === 0 && <TabsControl />}
                    {snap.activeTab === 1 && <TabsTwUI />}
                    {snap.activeTab === 2 && <GridPreview />}
                    {snap.activeTab === 3 && <PieMenu />}
                </div>
            </div>
        </div>
    );
}
