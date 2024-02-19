import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";
import "./Header.css";

function Header() {
    return (
        <div id="header">
            <div className="container">
                <Logo />
                <Menu />
            </div>
        </div>
    );
}
export default Header;
