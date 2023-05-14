import {Lista} from "./Lista/lista"
import Styles from "./styles.module.scss"
import Apnotec from "../../image/Apnotec.jpeg"
import {FaFacebook} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
export function Footer(){
    return(
        <div className={Styles.footer}>

<div className={Styles.container}>
    <div className={Styles.logo}><img src={Apnotec} alt="Apnotec" /></div>

    <ul>
        <li><a href='#'><FaFacebook/></a></li>
        <li><a href='#'><BsInstagram/></a></li>
        <li><a href='#'><AiFillLinkedin/></a></li>
    </ul>
</div>
 
<Lista

text={'About'}
text1={'Sellers: Register to sell'}
text2={'Seller portal'}
text3={`Payments`}
text4={`Delivery`}
text5={'Contact us - Get in touch'}
text6={'Guides and Reviews'}
text7={'Compare devices'}
/>
<Lista

text={'Company'}
text1={'Sellers: Register to sell'}
text2={'Seller portal'}
text3={`Payments`}
text4={`Delivery`}
text5={'Contact us - Get in touch'}
text6={'Guides and Reviews'}
text7={'Compare devices'}
/>
<Lista

text={'Support'}
text1={'Sellers: Register to sell'}
text2={'Seller portal'}
text3={`Payments`}
text4={`Delivery`}
text5={'Contact us - Get in touch'}
text6={'Guides and Reviews'}
text7={'Compare devices'}
/>


        </div>
    )
}