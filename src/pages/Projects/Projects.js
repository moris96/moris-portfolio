

export default function Projects(){
    return(
        <>
            <div className="projects-page">
                <h1 className="portfolio-pg">web developer portfolio</h1>
                <h3 className="portfolio-expl">From vanilla JS to full stack web apps using React.js, Node.js, MongoDB, Express.js; and building games with HTML canvas!</h3>
            </div>

            <div className="projs-names">
                <a className="p1" href="https://moris96.github.io/tower-defense-game/index.html" target="_blank">Game: Soldiers vs Meme Zombies!</a>
                <a className="p2" href="https://tumble.herokuapp.com/" target="_blank">Tumble: tumblr.com clone</a>
                <a className="p3" href="https://timely-lollipop-c213d5.netlify.app/" target="_blank">Game: Pokemon Game Clone</a>
            </div>
            
            
            <img className="project1" alt="proj1" src={process.env.PUBLIC_URL+"/images/project1.png"}/>
            <img className="groupProject" alt="groupproj" src={process.env.PUBLIC_URL+"/images/tumble.png"}/>
            <img className="capstone" alt="capstoneproj" src={process.env.PUBLIC_URL+"/images/poke.png"}/>
            
        </>
    )
}