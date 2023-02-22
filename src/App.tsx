import { CSSProperties } from 'react';
import './menu.scss';
import './tabs.css';

function PieMenu() {
    return (
        <nav className=''>
            <input className='menu-toggler' id='menu-toggler' type='checkbox' />
            <label htmlFor='menu-toggler'></label>
            <ul>
                <li className='menu-item'>
                    <a className='fa fa-facebook' href='https://www.facebook.com/' target='_blank'></a>
                </li>
                <li className='menu-item'>
                    <a className='fa fa-google' href='https://www.google.com/' target='_blank'></a>
                </li>
                <li className='menu-item'>
                    <a className='fa fa-dribbble' href='https://dribbble.com/' target='_blank'></a>
                </li>
                <li className='menu-item'>
                    <a className='fa fa-codepen' href='https://codepen.io/' target='_blank'></a>
                </li>
                <li className='menu-item'>
                    <a className='fa fa-linkedin' href='https://www.linkedin.com/' target='_blank'></a>
                </li>
                <li className='menu-item'>
                    <a className='fa fa-github' href='https://github.com/' target='_blank'></a>
                </li>
            </ul>
        </nav>
    );
}

function TabsTest() {
    function onSelect(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        event.currentTarget.parentElement?.querySelectorAll('a').forEach((elm) => elm.classList.remove('tab-active'));
        event.currentTarget.classList.add('tab-active');
    }
    return (
        <div className="p-4">
            <div className="tabs">
                <a className="tab-lifted" onClick={onSelect}>Tab 1</a>
                <a className="tab-lifted tab-active" onClick={onSelect}>Tab 2</a>
                <a className="tab-lifted" onClick={onSelect}>Tab 3</a>
            </div>
        </div>
    );
}

const styleDots: CSSProperties = { //https://daisyui.com/components/tab
    backgroundImage: 'radial-gradient(#0002 0.5px, #0000 0.5px)',
    backgroundSize: '5px 5px',
};

export function App() {
    return (
        <div className="h-screen bg-violet-700" style={styleDots}>
            <div className="relative h-full grid grid-rows-2">
                <TabsTest />
                <PieMenu />
            </div>
        </div>
    );
}
