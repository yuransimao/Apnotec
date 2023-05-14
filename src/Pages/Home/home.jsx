import Styles from "./styles.module.scss"
import Manlaptop from "../../image/man-laptop.png"

export function Home(){

    return (
        <>
        <div className={Styles.sectionCreactive}>

            
            <div className={Styles.sectionCreactive_image}>
                <img src={Manlaptop}  alt="man-laptop"/>
               
        </div>
        <div className={Styles.sectionCreactive_text}>
            <h1>Criete web site  <br/> & Experience</h1>
            <p>Discuss your goals, determine succes metrices identify problems to salve and define visitars of the website</p>
            <form >
                <input type="email" placeholder="Type your email here"/>
                <button className={Styles.Btn}>Sign up</button>
                
            </form>
        </div>
    </div>
    </>
    )
}