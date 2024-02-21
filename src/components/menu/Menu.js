import AboutPage from "../../pages/aboutpage/AboutPage";
import ContactPage from "../../pages/contactpage/ContactPage";
import HomePage from "../../pages/homepage/HomePage";
import Portfolio from "../../pages/portfoliopage/Portfolio";
import ResumePage from "../../pages/resumepage/ResumePage";
import MenuItem from "./MenuItem";
function Menu() {
    return (
        <div id="menu">
            <ul>
                <MenuItem numara="1" page={<HomePage />} text="Anasayfa" href="#homePage" />
                <MenuItem numara="2" page={<AboutPage />} text="Hakkımda" href="#aboutPage" />
                <MenuItem numara="3" page={<Portfolio />} text="Portfolyo" href="#portfolioPage" />
                <MenuItem numara="4" page={<ResumePage />} text="Resume" href="#resumePage" />
                <MenuItem numara="5" page={<ContactPage />} text="İletişim" href="#contactPage" />
            </ul>
        </div>
    );
}
export default Menu;