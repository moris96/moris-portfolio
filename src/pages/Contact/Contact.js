import styles from "./Contact.module.scss";

export default function Contact(){
    return(
        <>
        <div className={styles.contactMe}>
            <h1 className={styles.getInTouch}>Get in touch</h1>
            <p className={styles.letsTalk}>If you want to talk to me, collaborate on a project, or simply say hi, send an email to <a href="mailto:moriskhoudari@gmail.com">moriskhoudari@gmail</a>. Let's talk!</p>
        </div>

        <h1 className={styles.socials}>Socials</h1>
        <div className={styles.socials}>
            <a className="linkden" href="https://www.linkedin.com/in/moris-khoudari-abady/" target="_blank">linkedin</a><br/>
            <br/><a className="github" href="https://github.com/moris96" target="_blank">Github</a>

        </div>
    </>
    );
};