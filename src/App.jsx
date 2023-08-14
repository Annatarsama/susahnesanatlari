
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";



export default function App(){
    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Services/>
            <Contact/>
        </div>
    )
}