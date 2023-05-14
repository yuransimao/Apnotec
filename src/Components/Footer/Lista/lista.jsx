import Styles from "./styles.module.scss"
import {Link} from "react-router-dom"

export function Lista (props){
    return(
        <ul className={Styles.Lista}>
        <li >
        <Link className={Styles.active}to={props.to}><h3>{props.text}</h3></Link>
        <ul>
        <li><Link to={props.to1}>{props.text1}</Link></li>
        <li><Link to={props.to2}>{props.text2}</Link></li>
        <li><Link to={props.to3}>{props.text3}</Link></li>
        <li><Link to={props.to4}>{props.text4}</Link></li>
        <li><Link to={props.to5}>{props.ext5}</Link></li>
    
        </ul>
        </li>
        
    </ul>    

    )
}