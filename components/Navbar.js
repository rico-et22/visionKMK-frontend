import Link from 'next/link'
function Navbar(props) {
    return (
        <nav className='navbar'>
            <div className='navbar-logo-wrapper'>
                <Link href='/'>
                    <a>
                        <div className='navbar-logo'>
                            <img src='/KMK_logo.svg' alt='MPK Kraków'/>
                            <h1>Rozkłady jazdy</h1>
                        </div>
                    </a>
                </Link>
            </div>
            <div className='navbar-language-switch'>
                test
            </div>
        </nav>
    )
} 

export default Navbar