import style from "../styles.module.scss";
import {GrInstagram} from "react-icons/gr";
import {BsWhatsapp, BsTelephone} from "react-icons/bs";
import {BiLogoGmail} from "react-icons/bi";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact (){
    
    const copyNumber = ()=> {
        navigator.clipboard.writeText("+90 553 483 18 63")
        toast.success('Telefon Numarası Panoya Kopyalandı', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    
    return (
        <div id="contact" className={style.contact}>
           <ToastContainer/>
            <div className={style.contactText}>Bize Katılın/Ulaşın</div>
            <ul>
                <li><a href="https://www.instagram.com/susahnesanatlari_kayseri/" rel="noreferrer" target="_blank" ><GrInstagram /></a></li>
                <li><a href="https://wa.me/+905534831863" rel="noreferrer" target="_blank"><BsWhatsapp /></a></li>
                <li onClick={copyNumber}><BsTelephone /></li>
                <li><a href="mailto:susahnesanatlari@gmail.com" rel="noreferrer"><BiLogoGmail /></a></li>
            </ul>
        </div>
    )
}

//////linkleri logolara değil butonlara basınca çalıştır