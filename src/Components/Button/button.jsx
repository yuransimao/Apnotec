import Styles from "./styles.module.scss"

export function Button({text, CustomClass}){
    return(
        <button className={`${Styles[CustomClass]}`}>{text}</button>
    )
}