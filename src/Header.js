import Logo from "./Logo";
import Menu from "./Menu";
import Checkout from "./Checkout";


function Header(props) {
    
    return (
            <div className="header col-12">
            <Logo />
            <Menu />
            <Checkout boug = {props.boug}/>
            <a href="#" className="logout">выход</a>
        </div>
        
    )
}

export default Header