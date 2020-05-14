import BottomNavItem from './BottomNavItem'
function BottomNavbar(props) {
    return (
        <div className='bottom-navbar'>
            <ul className='bottom-nav-items-container'>
                <BottomNavItem icon='routes' caption='Linie' href='/' active={props.activePage}/>
                <BottomNavItem icon='bus-stop' caption='Przystanki' href='/about' active={props.activePage}/>
                <BottomNavItem icon='road-variant' caption='Ulice' href='/portfolio' active={props.activePage}/>
            </ul>
        </div>
    )
}
export default BottomNavbar