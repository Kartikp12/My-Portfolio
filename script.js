function NavBar(){
    return(
        <nav>
            <a href="./index.html"> <img src="./logo.png" className="logo"/>
            </a>
            <h1>Kartik Patil</h1>
            
            <a href="#social-media"><button id="contact-me"> CONTACT ME </button></a>
        </nav>
    )
}

function Section(){
    return(
        <div>
        <div className="section-about">
            <h1>Kartik Patil</h1>
            <p>👋 Hey! I am Kartik! <br/>
            I am currently a undergradute pursuing Bachelor of             Technology in Computer Science from Pune University.</p>
        </div>

        <div className="container">
        <div className="box1">
            <h1>
                --SKILLS--
            </h1>
            <div className="skills">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>JavaScript</h4>
            <h4>DataBase</h4>
            <h4>SQL , MYSQL</h4>
            <h4>React.js</h4>
            <h4>C++</h4>
            </div>

        </div>

        <div className="box2">
            <h1>EDUCATION</h1>
            <h4>B.Tech: <br/>
                Computer Science 
                (present) <br/>
            </h4>

            <h4>
                Higher Secondary: <br/>
                Narayana Education Socity , Hyderabad <br/>
                HSC Science[2020]
                79% (TS-Board)
            </h4>

            <h4>
                Secondary: <br/>
                D.E.S HighSchool , Datala , malkapur <br/>
                80% [2018] SSC <br/>
            </h4>
        </div>

        </div>
        <div className = "cv-div"> 
        <a href="Resume-Kartik-Patil (1).pdf" target="blank">
        <button className="cv-button">Download CV</button>
        </a>
        </div>
        </div>
    )
}

function Contact(){
    return(
        <div className="foot-contact" id="social-media">

            <a href="https://github.com/Kartikp12" target="blank">
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
            </a>
            <a href="kartikpatil1006@gmail.com" target="blank">
            <img width="50" height="50" src="email.png"
            alt="email"/>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100058135620135" target="blank">
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/>
            </a>

            <a href="https://instagram.com/_kartik_patil__?igshid=MzRlODBiNWFlZA==" target="blank">
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/instagram.png" alt="instagram"/>
            </a>

            <a href="https://www.linkedin.com/in/kartik-patil-6808121b6/" target="blank">
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
            </a>

            <a href="https://twitter.com/_kartik_patil" target="blank">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2ElEQVR4nO2ZW4hNURjHf+Moxj2XyaUkREwywhNlKLdCFCfUFG/uSjEKD+LJLTXnhShvQ5S8MIkXTS4vPJCoCUnCSDMalzOXs7TqU7vdnr332Xutszftf32dztlnrW/91u1b69uQKVOmTBXSNGAFsBVYA9QBOf4RDQeOAa8B5WFfgAsC6afxwCKvB3Owrw3A534AlMt+Ayc9RmgKUAB+AfPcDiYAP4DNFiEOAaWQEMphN4HFwGGgFeiT3697OTkgD4vAcgsQDREAlI99BGq8HN12DelGgxCTgZ8GIdqBWql7GLDS6eyd6896+PYZArliEOIZkAd2AM1AF7DK6ayjn4JXgZExIEbICJsC6XN9P+h2+Mmn8BtgWUSQvOG1oRx2ysvhoxAFb8jWV46OWwAoAUf6c3gmZCV6mlxyLLYgXTQM0QOs93O4MEKv3AW2A6N96m0yDPI9TO/dj1h5t5Q9AawFJgFVjiBoEqQjDMhsg/t9Ubb0t4ZBPvgB/O09rS0eW1ya7KUfyEDgObAHGCcwJiOxSbsTNK3aHX9+HxBXkrRCEEhLChqpQtiuIJD9KWikCmH6BumrUUBnChqqfKwz7DW4MQWNVT52jZDKxQiKlbA8ZSYGWlPQaOVxNNGXqLI0CDifssDYRAzVyu3uW8IQJWBmFID50gP6LnFWomlvgiDNUUeiGviagumk5GQ9nRjanQIIBZwjpnIpOLa0AUMxIJ09eZgQRC+wBIPS6+VyxFRnHGvEknTu9ZZc/itxFKnCsnTCbbXklGwEzBYJyNY1QI78XRYg7slUtg6gMySPLU0nfYKwOhITgZ3AK0sAPaYWdh0wF5gqn/WSdCtIxsLmon4BLMCQaqTR3ZYb7U6yHQUGY0Ez5HBWtAxwGhhDBTRWXvA8NRihHwDbgCEkpFnAXnnp2BYyuusEwRN5vbwpIMGdmKrlglMvW7Fu6DpgqdxhdPI6Uyb+I/0BtL6/+Ljwfj8AAAAASUVORK5CYII="/> 
            </a>
        </div>
    )
}



function App(){
    return(
        <div>
            <NavBar/>
            <Section/>
            <Contact/>

        </div>
    )
}

ReactDOM.render(<App/> , document.querySelector(".root"))
