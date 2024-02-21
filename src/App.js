import { useState, useContext, createContext } from "react";
import FollowMe from "./components/followme/FollowMe";
import Header from "./globals/header/Header";
import AboutPage from "./pages/aboutpage/AboutPage";
import HomePage from "./pages/homepage/HomePage";
import Footer from "./globals/footer/Footer";
import AppContext from './AppContext'
import ResumePage from "./pages/resumepage/ResumePage";


function App() {

    function sayfaDegistirici(sayfa) {
        setactivePage(sayfa);
    }
    function SayfayaTiklandi(tiklananSayfa) {
        setClickedPageItem(tiklananSayfa);
    }

    const [activePage, setactivePage] = useState(<HomePage />);
    const [clickedPageItem, setClickedPageItem] = useState(1);

    return (
        <AppContext.Provider value={{ pageChanger: sayfaDegistirici, pageClick: SayfayaTiklandi, pageClicked: clickedPageItem }}>
            <FollowMe />
            <Header />
            {activePage}
            <ResumePage />
            <Footer />
        </AppContext.Provider>
    );
}
export default App;