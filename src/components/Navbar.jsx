import styles from '../styles.module.scss';
import sitename from "../media/site-name.png";
import { IoMdClose} from "react-icons/io";
import {FaBars} from "react-icons/fa";
import { useState ,useRef ,useEffect } from 'react';

export default function Navbar(){
    const [isdropdownActive, setIsdropdownActive] = useState(false);
    const dropdownUl = useRef();
    
    useEffect(()=>{
    if(document.body.clientWidth > 415){

    } else {
        if(isdropdownActive === false){
            dropdownUl.current.style.display = "none";
        } else {
            dropdownUl.current.style.display = "flex";
        }
    }

    
    }, [isdropdownActive])
    const handleDropdown = ()=> {
        if(document.body.clientWidth > 415){

        } else{
        setIsdropdownActive(!isdropdownActive);
        }
    }
   
   
    
    return (
        <div  className={styles.navbar}>
            <div className={styles.mobileContainer}>
            <div className={styles.imgContainer}>
                <img src={sitename} alt="ss" />
            </div>
            <button onClick={handleDropdown} className={styles.navbarBtn}>{isdropdownActive ? <IoMdClose/>:<FaBars/>  }</button>
            </div>
            <ul ref={dropdownUl} >
                <li onClick={handleDropdown}><a href="#home">Anasayfa</a></li>
                <li onClick={handleDropdown}><a href="#about">Hakkımızda</a></li>
                <li onClick={handleDropdown}><a href="#services">Hizmetler</a></li>
                <li onClick={handleDropdown}><a href="#contact">Bize Ulaşın</a></li>
            </ul>
            
        </div>
    )
}