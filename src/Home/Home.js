import React from 'react';
import './Home.css';
import Typewriter from 'react-typewriter-effect';


function Home() {
  return (
    <div className="App">
      <div className="header">NB</div>
      <div className="main">
        <h1>Navika Budhraja</h1>
        <div className="typewriter">
          <Typewriter
                  textStyle={{
                    fontSize: '35px'
                  }}
           startDelay={100}
           text="🖥️ 🏀 👩‍🎓"
           hideCursorAfterText= {true}
           typeSpeed={150}

          />
        </div>
        <div className="descriptor">
          <p>Hi! I'm a Software Engineer at Visa and recent grad from UC San Diego who loves basketball (Go Dubs!), food {"&"} coffee, and learning new things. I love building user-friendly applications that solve people's day-to-day problems and leave a positive impact on society!</p>
        </div>
        <div className="external">
          <p><a href="/#/work">Work</a></p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1zVvnV8hdeOOqtL9XjEJQZBsjcI8KEKXK/view?usp=sharing">Resume</a></p>
          <p><a href="mailto: nbudhraja01@gmail.com">Contact</a></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
