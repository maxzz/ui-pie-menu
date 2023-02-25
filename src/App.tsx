import { CSSProperties } from 'react';
import { appState, useSnapshot } from './store';
import { Demo1_TabsRounded } from './components/Demo1_TabsRounded';
import { Demo2_TabsTwUI } from './components/Demo2_TabsTwUI';
import { Demo3_GridPreview } from './components/Demo3_GridPreview';
import { Demo4_PieMenu } from './components/Demo4_PieMenu';
import { Demo5_Radio } from './components/Demo5_Radio';
import { Section1_Tabs } from './components/Section1_Tabs';

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

                <div className={(activeTab === 5) ? 'hidden' : ''}>
                    {(activeTab === 1 || activeTab === 0) && <Demo1_TabsRounded />}
                    {(activeTab === 2 || activeTab === 0) && <Demo2_TabsTwUI />}
                    {(activeTab === 3 || activeTab === 0) && <Demo3_GridPreview />}
                    {(activeTab === 4 || activeTab === 0) && <Demo5_Radio />}
                </div>

                {(activeTab === 5 || activeTab === 0) && <Demo4_PieMenu />}
            </div>
        </div>
    );
}
