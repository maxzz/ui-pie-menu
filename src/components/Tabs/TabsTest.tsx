export function TabsTest() {
    function onSelect(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        event.currentTarget.parentElement?.querySelectorAll('a').forEach((elm) => elm.classList.remove('tab-active'));
        event.currentTarget.classList.add('tab-active');
    }
    return (
        <div className="p-4">
            <div className="p-4  min-h-[6rem] min-w-[18rem] max-w-4xl bg-cover bg-top border rounded-b-2xl rounded-tr-2xl flex items-center justify-center flex-wrap gap-2 overflow-x-hidden">
                <div className="tabs">
                    <a className="tab tab-lifted [--tab-color:#65b165]" onClick={onSelect}>Tab 1</a>
                    <a className="tab tab-lifted [--tab-color:#65b165] tab-active" onClick={onSelect}>Tab 2</a>
                    <a className="tab tab-lifted [--tab-color:#65b165]" onClick={onSelect}>Tab 3</a>
                </div>
            </div>
        </div>
    );
}
