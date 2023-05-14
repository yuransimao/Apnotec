import {NavLink} from"react-router-dom"
import Styles from "./Styles.module.scss"
import { useState} from "react";
import { FaBars } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"
import Apnotec from "../../image/Apnotec.jpeg"
import {Button} from "../Button/button"
export function Navbar(){

    const [Mobile, setMobile] = useState(false)
    const[Header, setHeader] =useState(false)

    const activeLink =({isActive}) => isActive ? `${Styles.active}`: "";

    window.addEventListener('resize', () =>{
    
        if(  window.innerWidth > 750){
           setMobile(false)
        }
        
            
        
           
    })

    window.addEventListener('scroll', ()=>{


        if(window.scrollY >= 90){
            setHeader(true)
            
        }
        if(window.scrollY >= 270){
            setHeader(false)
        }
        if(window.scrollY == 0){
            setHeader(false)
        }

    })
    
    return(
        <>
        <div className={Header ? `${Styles.header_active}`:`${Styles.header}`}>

            <div className={Styles.Menu}><button onClick={() => setMobile(true)}><FaBars/></button></div>

            <nav className={Mobile ? `${Styles.Mobile_menu}` :`${Styles.Nav}` }>
                <div className={Styles.btnremove}><button onClick={() => setMobile(false)}><RxCross2/></button></div>
                <div className={Styles.logo}><img src={Apnotec} alt='apnotec'/></div>
            <ul>
                <li><NavLink className={activeLink} to={"/"}>Home</NavLink></li>
                <li><NavLink className={activeLink} to={"/Portifolios"}>Portifolio</NavLink></li>
                <li><NavLink className={activeLink} to={"/how"}>How its works</NavLink></li>
                <li><NavLink className={activeLink} to={"/team"}>Team</NavLink></li>
            </ul>
            </nav>

            <div className={Styles.sign}>
            <Button text="Log in" CustomClass="Btn_Transp"/>
            <Button text="Sign up" CustomClass="Btn"/>
           
        </div>   
        </div>

        </>
    )
}