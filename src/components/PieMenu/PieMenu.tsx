export function PieMenu() {
    return (
        <nav className='relative'>
            <input className='menu-toggler' id='menu-toggler' type='checkbox' />
            <label htmlFor='menu-toggler'></label>
            <ul>
                <li className='menu-item'> <a target='_blank' className='fa fa-facebook' href='https://www.facebook.com'></a> </li>
                <li className='menu-item'> <a target='_blank' className='fa fa-google' href='https://www.google.com'></a> </li>
                <li className='menu-item'> <a target='_blank' className='fa fa-dribbble' href='https://dribbble.com'></a> </li>
                <li className='menu-item'> <a target='_blank' className='fa fa-codepen' href='https://codepen.io'></a> </li>
                <li className='menu-item'> <a target='_blank' className='fa fa-linkedin' href='https://www.linkedin.com'></a> </li>
                <li className='menu-item'> <a target='_blank' className='fa fa-github' href='https://github.com'></a> </li>
            </ul>
        </nav>
    );
}
