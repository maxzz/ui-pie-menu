import './menu.scss';

function PieMenu() {
    return (
        <nav className='menu'>
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

export function App() {
    return (
        <div className="h-screen bg-violet-700">
            <PieMenu />
        </div>
    );
}
