import Popup from "reactjs-popup";
import styles from "./About.module.scss";

export default function About(){
    return(
        <>

            <div className={styles.aboutMe}>
                <h1 className={styles.hello}>Hello, my name is Moris Khoudari</h1>
                <img className={styles.mePhoto} alt="me" src={process.env.PUBLIC_URL+"/images/me.png"}/>
                <h3 className={styles.brandStatment}>I am a Full-Stack Web Developer with strong JavaScript skills. I improve the workflow of my teams with my strong technical and leadership skills, and I am able to keep cool under pressure. My goal is to expand my knowledge and understanding of software engineering by learning more skills to add to my arsenal of technical skills, as well as helping others improve and making a positive impact on the world.</h3>
                <Popup trigger={<button className={styles.expBtn}>Experience & Skills</button>} position="right center">
                    <span className={styles.skills}>
                    <li>JavaScript</li> 
                    <li>TypeScript</li> 
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>React.js</li>
                    <li>Angular.js</li> 
                    <li>MongoDB</li>
                    <li>no-SQL databases</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>Flask</li>
                    <li>Django</li>
                    <li>HTML</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>CSS3</li>
                    <li>RESTful routes </li>
                    <li>APIs</li>
                    <li>Heroku deployment & similar</li>
                    <li>JWT Web Tokens</li>
                    <li>HTTP verbs</li>
                    <li>MVC Patterns</li>
                    </span>
                </Popup>
            </div>

            <p className={styles.resumeP}>Click here to download my resume</p>
            <form className={styles.resume} method="get" action="https://drive.google.com/file/d/1lKA8mnPjCLNDh_hL8ye5CA8g51PYHZSY/view?usp=share_link" target="_blank">
                <button type="submit">My Resume</button>
            </form>


        </>
    );
};