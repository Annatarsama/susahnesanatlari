import styles from '../styles.module.scss'
import sitename from "../media/site-name.png"
export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <img src={sitename} alt="" />
            <ul>
                <li><a href="#home">Anasayfa</a></li>
                <li><a href="#about">Hakkımızda</a></li>
                <li><a href="#services">Hizmetler</a></li>
                <li><a href="#contact">Bize Ulaşın</a></li>
            </ul>
        </div>
    )
}