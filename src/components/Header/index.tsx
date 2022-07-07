import './Header.css'
const Header = (props: any) => {
    const { toggleHandler } = props;

    return (
        <div className="header">
            <div>Header</div>
            <div onClick={(e) => toggleHandler(e)} className="humburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Header