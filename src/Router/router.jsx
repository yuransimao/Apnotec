import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from "../Pages/Home/home"
import {Team} from "../Pages/Team/team"
import {How} from "../Pages/Hows/how"
import {Portifolios} from "../Pages/Portifolio/portifolio"
import {Navbar} from "../Components/Navbar/Navbar"
import {Footer} from "../Components/Footer"


import Styles from "./styles.module.scss"

export function Routers(){
return(
   <BrowserRouter>
   <Navbar/>
   <div className={Styles.Container}>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/how" element={<How/>}/>
        <Route path="/Portifolios" element={<Portifolios/>}/>
    </Routes>
    </div>
    <Footer/>
   </BrowserRouter>
)
}