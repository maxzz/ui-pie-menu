import { CSSProperties } from 'react';
import './menu.scss';
//import './tabs.css';

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

const styleDots: CSSProperties = { //https://daisyui.com/components/tab
    backgroundImage: 'radial-gradient(#0002 0.5px, #0000 0.5px)',
    backgroundSize: '5px 5px',
};

export function App() {
    return (
        <div className="h-screen bg-violet-700" style={styleDots}>
            <div className="relative h-full grid grid-rows-2">
                <div className="">
                    <div className="tabs tabs-boxed">
                        <a className="tab">Tab 1</a>
                        <a className="tab tab-active">Tab 2</a>
                        <a className="tab">Tab 3</a>
                    </div>
                </div>
                <PieMenu />
            </div>
        </div>
    );
}
