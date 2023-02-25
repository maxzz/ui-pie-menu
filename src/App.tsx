import { CSSProperties } from 'react';
import { GridPreview } from './components/GridPreview';
import { PieMenu } from './components/PieMenu';
import { TabsControl } from './components/Tabs';
import { Tabs2 } from './components/Tabs2';
import { TabsTwUI } from './components/TabsTwUI';

const styleDots: CSSProperties = { //https://daisyui.com/components/tab
    backgroundImage: 'radial-gradient(#0002 0.5px, #0000 0.5px)',
    backgroundSize: '5px 5px',
};

export function App() {
    return (
        <div className="h-screen bg-violet-700" style={styleDots}>
            <div className="relative h-full grid grid-rows-[auto_auto_1fr_1fr]">
                <TabsControl />
                <TabsTwUI />
                <Tabs2 />
                <GridPreview />
                <PieMenu />
            </div>
        </div>
    );
}
