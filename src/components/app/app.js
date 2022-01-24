import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "../../screens/home";
import HeaderMenu from "../header-menu";
import About from "../../screens/about";
import ContactForm from "../../screens/contact-form";
import Footer from "../footer";

const App = () => {
    return (
        <>
            <Router>
                <div style={{
                    minHeight: 'calc(100vh - 62px)'
                }}>
                    <HeaderMenu/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/about' element={<About/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/contact' element={<ContactForm/>}/>
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </>
    )
};

export default App;