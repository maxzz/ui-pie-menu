import { CSSProperties } from 'react';
import { GridPreview } from './components/GridPreview';
import { PieMenu } from './components/PieMenu';
import { TabsTest } from './components/Tabs';

const styleDots: CSSProperties = { //https://daisyui.com/components/tab
    backgroundImage: 'radial-gradient(#0002 0.5px, #0000 0.5px)',
    backgroundSize: '5px 5px',
};

export function App() {
    return (
        <div className="h-screen bg-violet-700" style={styleDots}>
            <div className="relative h-full grid grid-rows-[auto_1fr_1fr]">
                <TabsTest />
                <GridPreview />
                <PieMenu />
            </div>
        </div>
    );
}
