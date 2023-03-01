import Popup from "reactjs-popup";

export default function Projects(){
    return(
        <>
            <div className="projects-page">
                <h1 className="portfolio-pg">web developer portfolio</h1>
                <h3 className="portfolio-expl">From vanilla JS to full stack web apps using OOP (object oriented programming), React.js, Node.js, MongoDB, Express.js, RESTFUL routes, CRUD functionality; and building games with HTML canvas!</h3>
                <h4 className="fun-fact">Fun fact: this portfolio was made using React!</h4>
            </div>

            <div className="projs-names">
                <a className="p1" href="https://moris96.github.io/tower-defense-game/index.html" target="_blank">Game: Soldiers vs Meme Zombies!</a>
                <a className="p2" href="https://tumble.herokuapp.com/" target="_blank">Tumble: tumblr.com clone</a>
                <a className="p3" href="https://pokemon-clone-game.netlify.app/" target="_blank">Game: Pokemon Game Clone in React.js!</a>
            </div>
            
            
            <img className="project1" alt="proj1" src={process.env.PUBLIC_URL+"/images/project1.png"}/>
            <img className="groupProject" alt="groupproj" src={process.env.PUBLIC_URL+"/images/tumble.png"}/>
            <img className="capstone" alt="capstoneproj" src={process.env.PUBLIC_URL+"/images/poke.png"}/>

            <Popup trigger={<button className="p1-about">About: Soldiers vs Meme Zombies</button>} position="right center">
                <div className="p1-info">
                    <p>A browser based game inspired by the classic tower defense strategy game: Plants vs Zombies. Heavy emphasis on OOP</p>
                    <span><p className="tutorial">Tutorial & Rules:</p>
                        <ol className="rules">
                            <li>You must kill all enemies to win each level!</li>
                            <li>If a single enemy breaks through your defenses, you lose!</li>
                            <li>Each hero costs 100 money to train, so train wisely!</li>
                            <li>On top left side of canvas you can click to choose a hero to play as.</li>
                            <li>Money will randomly appear on canvas at random intervals. Hover over them to get it!</li>
                            <li>Click anywhere on canvas to place hero. You can choose up to 2 heroes to play (one at a time).</li>
                        </ol>
                    </span>
                </div>
            </Popup>

            <Popup trigger={<button className="p2-about">About: tumblE</button>} position="right center">
                <div className="p2-info">
                    <p>This full-stack project is a modern re-imagining of Tumblr.com. It includes a full suite of CRUD (Create, Read, Update, Delete) capabilities, allowing you to easily create, edit, view, and delete posts with ease.</p>
                    <span className="tumble-about">
                        <p>Dummy Account to login:</p>
                        <li>Email: green@green.com</li>
                        <li>Password: green123</li>
                    </span>
                </div>
            </Popup>

            <Popup trigger={<button className="p3-about">About: Pokemon Clone</button>} position="right center">
                <div className="p3-info">
                <p>A browser based game inspired by the classic Nintendo game Pokemon. Heavy emphasis on OOP</p>
                    <span><p className="tutorial">Tutorial & Rules:</p>
                        <ol className="rules">
                            <li>"W A S D" keys to move</li>
                            <li>W for up. A for left. S for down. D for right</li>
                            <li>Click on the canvas (map) to begin</li>
                            <li>To ecounter a wild Pokemon you must walk on the patch of dark green grass</li>
                        </ol>
                    </span>
                </div>
            </Popup>

            
            
        </>
    )
}