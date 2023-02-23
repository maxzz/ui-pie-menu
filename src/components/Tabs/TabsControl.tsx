import { useState } from "react";

function Tabs({ onClick }: { onClick?: (name: string) => void; }) {
    function onSelect(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const elm = event.currentTarget;
        elm.parentElement?.querySelectorAll('a').forEach((elm) => elm.classList.remove('tab-active'));
        elm.classList.add('tab-active');
        onClick?.(elm.innerText);
    }
    return (
        <div className="tabs">
            <a className="tab tab-lifted [--tab-bg:#eee] [--tab-color:#65b165]" onClick={onSelect}>Tab 1</a>
            <a className="tab tab-lifted [--tab-bg:#eee] [--tab-color:#65b165] tab-active" onClick={onSelect}>Tab 2</a>
            <a className="tab tab-lifted [--tab-bg:#eee] [--tab-color:#65b165]" onClick={onSelect}>Tab 3</a>
        </div>
    );
}

export function TabsControl() {
    const [tab, setTab] = useState('none');
    return (
        <div className="p-4">
            <div
                className="p-4 min-h-[6rem] min-w-[18rem] max-w-4xl 
                bg-cover bg-top border rounded-b-2xl rounded-tr-2xl flex flex-col flex-wrap"
            >
                <Tabs onClick={(name) => {
                    setTab(name);
                    console.log(name);
                }} />
                <div
                    className="-mt-px px-4 py-4 
                    text-green-500 bg-purple-400/20 
                    border-violet-200 border-2
                    border-t-violet-100 border-t-2 
                    rounded-b-md
                    "
                >
                    {tab}
                </div>
            </div>
        </div>
    );
}
