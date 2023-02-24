/* 
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
//http://localhost:8090/components/tabs
//C:\Y\w\7-third-parties-learn\tailwind-ui-27-01-23\react\components\application-ui\navigation\tabs\tabs_with_underline.jsx 

const tabs = [
    { name: 'My Account', href: '#', current: false },
    { name: 'Company', href: '#', current: true },
    { name: 'Team Members', href: '#', current: false },
    { name: 'Billing', href: '#', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

function Tabs() {
    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>

                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue={tabs.find((tab) => tab.current)?.name || ''}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>

            <div className="hidden sm:block">
                <nav className="isolate flex divide-x divide-violet-900 rounded-lg shadow" aria-label="Tabs">
                    {tabs.map((tab, tabIdx) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                                tab.current ? 'text-green-500' : 'text-green-500/50 hover:text-green-500',
                                tabIdx === 0 ? 'rounded-l-lg' : '',
                                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                                'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 focus:z-10',
                                'text-sm font-medium text-center',
                                'bg-violet-900/20  hover:bg-violet-900/50',
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            <span>{tab.name}</span>
                            <span className={classNames(tab.current ? 'bg-indigo-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-1')} aria-hidden="true" />
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export function TabsTwUI() {
    return (
        <div className="m-3 p-4 bg-violet-600/40 border-violet-900/30 border rounded-md shadow">
            <Tabs />
        </div>
    );
}
