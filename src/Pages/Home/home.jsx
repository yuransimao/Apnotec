import Styles from "./styles.module.scss"
import Manlaptop from "../../image/imagem-1.png"
import {HiClock} from "react-icons/hi"


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

        <div className={Styles.wave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffff" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,176C384,192,480,224,576,224C672,224,768,192,864,186.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
        </div>
    </div>

    <div className={Styles.Conteiner_promove}>
        <div  className={Styles.promove_text}>
            <h1>A new site for your <br/> agency ? its here. </h1>

            <ul className={Styles.Item}>

             <li className={Styles.List}>
             <div className={Styles.List_icon}>
             <span><HiClock/></span>
            </div>

             
            <div className={Styles.List_text}>
                <h3>Sucessful products</h3>
                
                <ul className={Styles.subItem}><li>Blue</li></ul>
            </div>
            </li>

             <li className={Styles.List}>

             <div className={Styles.List_icon}>
             <span><HiClock/></span>
             </div>
            
             <div className={Styles.List_text}>

                <h3>Brand identities</h3>
                <ul  className={Styles.subItem} ><li>Black</li></ul>
                </div>

            
            </li>

             <li className={Styles.List}>

             <div className={Styles.List_icon}>
            <span><HiClock/></span>
            </div>

            <div className={Styles.List_text}>
            <h3>Business strategy</h3>
            <ul className={Styles.subItem}><li>Yellow</li></ul>
            </div>
            </li>
            

            </ul>
        </div>
    </div>
    </>
    )
}