import { CSSProperties } from 'react';
import { appState, AppPage, useSnapshot } from './store';
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
                    {(activeTab === AppPage.tabsRounded || activeTab === AppPage.all) && <Demo1_TabsRounded />}
                    {(activeTab === AppPage.tabsTw || activeTab === AppPage.all) && <Demo2_TabsTwUI />}
                    {(activeTab === AppPage.grid || activeTab === AppPage.all) && <Demo3_GridPreview />}
                    {(activeTab === AppPage.radio || activeTab === AppPage.all) && <Demo5_Radio />}
                    {(activeTab === AppPage.panels || activeTab === AppPage.all) && <Demo6_Panels />}
                </div>

                {(activeTab === AppPage.pieMenu || activeTab === AppPage.all) && <Demo4_PieMenu />}
            </div>
        </div>
    );
}
