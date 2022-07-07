import './Drawer.css';

const Drawer = (props: any) => {
    const { show } = props;
    let drawerClass = 'drawer-menu'
    if (show) {
        drawerClass = 'drawer-menu open'
    }
    return (
        <div className={drawerClass}>
            <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>Admin</li>
                <li>Managment</li>
            </ul>
        </div>
    )
}

export default Drawer;