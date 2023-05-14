import Styles from "./styles.module.scss"
import Manlaptop from "../../image/man-laptop.png"
import {HiClock} from "react-icons/hi"
import {IoFileTrayFullSharp} from "react-icons/io"

export function Home(){

    return (
        <>
        <div className={Styles.sectionCreactive}>

            
            <div className={Styles.sectionCreactive_image}>
                <img src={Manlaptop}  alt="man-laptop"/>
               
        </div>
        <div className={Styles.sectionCreactive_text}>
            <h1>Creative web site  <br/> & Experience</h1>
            <p>Discuss your goals, determine succes metrices identify problems to salve and define visitars of the website</p>
            <form >
                <input type="email" placeholder="Type your email here"/>
                <button className={Styles.Btn}>Sign up</button>
                
            </form>
        </div>
    </div>

    <div className={Styles.Conteiner_promove}>
        <div  className={Styles.promove_text}>
            <h1>A new site for your <br/> agency ? its here. </h1>

            <ul className={Styles.Item}>

             <li className={Styles.List}>
             <div className={Styles.List_icon}>
             <span><HiClock/></span>
            <h3>Sucessful products</h3>
            </div>

            <ul><li>Blue</li></ul>
            </li>

             <li className={Styles.List}>

             <div className={Styles.List_icon}>
                <span><IoFileTrayFullSharp/></span>
                <h3>Brand identities</h3>
             </div>

            <ul><li>Black</li></ul>
            </li>

             <li className={Styles.List}>

             <div className={Styles.List_icon}>
            <span><HiClock/></span>
            <h3>Business strategy</h3>
            </div>

            <ul><li>Yellow</li></ul>
            </li>

            </ul>
        </div>
    </div>
    </>
    )
}