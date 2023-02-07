

export default function Contact(){
    return(
        <>
        <div className="about-me">
            <h1 className="get-in-touch">Get in touch</h1>
            <p className="lets-talk">If you want to talk to me, collaborate on a project, or simply say hi, send an email to <a href="mailto:moriskhoudari@gmail.com">moriskhoudari@gmail</a>. Let's talk!</p>
        </div>

        <h1 className="socials">Socials</h1>
        <div className="socials">
            <button className="linkden-btn"><img className="linkden" src="https://cdn3.iconfinder.com/data/icons/sociocons/256/linkedin-sociocon.png" alt="linkden" /></button>
            <button className="github-btn"><img className="github" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="github" /></button>
        </div>
    </>
    )
}