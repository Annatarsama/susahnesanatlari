import efepng from "../media/imgaaa.png"
import style from   "../styles.module.scss"
export default function About (){
    return (
        <div id="about" className={style.about}>
            <div className={style.aboutText}>
                <h3>Hakkımızda</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur labore autem atque officiis consequatur mollitia nobis non accusamus quam quia earum pariatur unde impedit, at veritatis commodi sunt veniam nam consequuntur. Odio ullam laborum velit iure, esse odit. Nesciunt reiciendis voluptates voluptatem laboriosam possimus, molestiae soluta delectus, nam ipsam aperiam quisquam dolor ipsa esse deserunt reprehenderit, fugit facere quaerat! Delectus temporibus aliquam, suscipit mollitia molestias non fugit repudiandae harum eaque eligendi qui eum eveniet quibusdam modi sequi ad nisi nulla cum nemo dicta accusamus sed ipsam. Ratione eligendi unde asperiores quam fugit fuga adipisci. Ut placeat repellat sunt! Reiciendis?</p>
            </div>
            <img src={efepng} alt="yasarabi" />
        </div>
    )
}