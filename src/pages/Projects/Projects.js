

export default function Projects(){
    return(
        <>
            <div className="projects-page">
                <br/><a href="https://moris96.github.io/tower-defense-game/index.html" target="_blank">p1</a>
                <br/><img className="project1" src={process.env.PUBLIC_URL+"/images/project1.png"}/>
                
                <br/><a href="https://tumble.herokuapp.com/" target="_blank">group tumblr</a>
                <br/><a href="https://timely-lollipop-c213d5.netlify.app/" target="_blank">capstone</a>
            </div>
            
        </>
    )
}