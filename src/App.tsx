import { CSSProperties } from 'react';
import { appState, Pages, useSnapshot } from './store';
import { Demo1_TabsRounded } from './components/Demo1_TabsRounded';
import { Demo2_TabsTwUI } from './components/Demo2_TabsTwUI';
import { Demo3_GridPreview } from './components/Demo3_GridPreview';
import { Demo4_PieMenu } from './components/Demo4_PieMenu';
import { Demo5_Radio } from './components/Demo5_Radio';
import { Demo6_Panels } from './components/Demo6_Panels';
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
                    {(activeTab === Pages.tabsRounded || activeTab === Pages.all) && <Demo1_TabsRounded />}
                    {(activeTab === Pages.tabsTw || activeTab === Pages.all) && <Demo2_TabsTwUI />}
                    {(activeTab === Pages.grid || activeTab === Pages.all) && <Demo3_GridPreview />}
                    {(activeTab === Pages.radio || activeTab === Pages.all) && <Demo5_Radio />}
                    {(activeTab === Pages.panels || activeTab === Pages.all) && <Demo6_Panels />}
                </div>

                {(activeTab === Pages.pieMenu || activeTab === Pages.all) && <Demo4_PieMenu />}
            </div>
        </div>
    );
}
