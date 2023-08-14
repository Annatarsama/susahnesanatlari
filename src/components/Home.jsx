import susahnevideo from "../media/susahnevideo.mp4";
import susahnevideo2 from "../media/susahnevideo2.mp4";
import susahnevideo3 from "../media/susahnevideo.mp4";
import susahnevideo4 from "../media/susahnevideo2.mp4";
import style from "../styles.module.scss";
import { useState } from "react";
import {FaChevronRight ,FaChevronLeft} from "react-icons/fa"

export default function Home(){
    const [videoIndex,setVideoIndex] = useState(0);
    const videoArray = [susahnevideo,susahnevideo2,susahnevideo3,susahnevideo4]
    let video1;
    let video2;
    let video3;
    const  slideBack = ()=>{
        if(videoIndex === 0){
            setVideoIndex(videoArray.length -1);
        } else {
            setVideoIndex(videoIndex-1)
        }
    }
    const slideForward = ()=>{
        if (videoIndex === videoArray.length-1){
            setVideoIndex(0);
        } else {
            setVideoIndex(videoIndex+1)
        }
    }

    if(videoIndex === 0){
        video1 = videoArray[videoIndex+ videoArray.length-1];
        video2 = videoArray[videoIndex];
        video3 = videoArray[videoIndex+1]
    } else if (videoIndex === videoArray.length-1){
        video1 = videoArray[videoIndex-1];
        video2 = videoArray[videoIndex];
        video3 = videoArray[videoIndex - videoArray.length +1]
    } else {
        video1 = videoArray[videoIndex-1];
        video2 = videoArray[videoIndex];
        video3 = videoArray[videoIndex+1]
    }



    return (
        <div id="home" className={style.home}>
            <h3>Son Eklenenler</h3>
            <div className={style.slider}>
                <div onClick={slideBack} className={`${style.buttons} ${style.button_back}`}><FaChevronLeft/></div>
                <video className={style.otherVids} src={video1} controls ></video>
                <video src={video2} controls height="280px"></video>
                <video className={style.otherVids} src={video3} controls ></video>
                <div onClick={slideForward} className={`${style.buttons} ${style.button_forward}`}><FaChevronRight/></div>
            </div>
        </div>
    )
}