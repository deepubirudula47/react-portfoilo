import React, { useState } from 'react';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('about');

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return (
          <section className="About" style={{ backgroundImage: "url('/about-bg.jpg')" }}>
  <h2>About Me</h2>
  <p>I am an enthusiastic individual with a solid foundation in technical skills, including Python programming, object-oriented programming (OOP) using Python,
     MySQL database management, and familiarity with the Software Development Life Cycle (SDLC).
      I am also adept at crafting visually appealing web experiences using HTML and CSS.
       Complementing my technical prowess are strong soft skills such as effective teamwork,
        problem-solving, adaptability to diverse situations, critical thinking, and efficient time management.
         I hold certifications in Python from Kaggle and Hackerrank, and I am certified in CCNAv7: Introduction to Networks. 
          My coding profiles include HackerRank (deepubirudula471) and Codechef (deepubirudula4), 
         and I am proficient in English and Telugu languages. Beyond my technical interests, I enjoy basketball and photography as well.</p>
</section>

        );
      case 'skills':
        return (
          <section className="Skills" >
            <h2>Skills</h2>
            <section className="Skills">
  <h2>Skills</h2>
  <table class="skills-table">
    <tr>
      <th>Front-end</th>
      <th>Back-end</th>
      <th>Programming Languages</th>
    </tr>
    <tr>
      <td>HTML5, CSS3, JavaScript,React</td>
      <td>Node.js,MySQL, MongoDB</td>
      <td>Java, Python, C#</td>
    </tr>
    
  </table>
</section>

          </section>
        );
      
      case 'certifications':
        return (
          <section className="Certifications" style={{ backgroundImage: "url('/certifications-bg.jpg')" }}>
  <h2>Certifications</h2>
  <div class="certifications-table">
  <table>
  <tr>
    <th>Certification</th>
    <th>Open</th>
  </tr>
  <tr>
    <td>Python Certification from Kaggle</td>
    <td><a href="https://www.kaggle.com/learn/certification/deepubirudula/python" target="_blank" rel="noopener noreferrer">Open</a></td>
  </tr>
  <tr>
    <td>Python (Basic) Certificate from Hackerrank</td>
    <td><a href="https://www.hackerrank.com/certificates/1b60015f833etps://link-to-hackerrank-certificate" target="_blank" rel="noopener noreferrer">Open</a></td>
  </tr>
  <tr>
    <td>Problem Solving (Basic) Certificate from Hackerrank</td>
    <td><a href="https://www.hackerrank.com/certificates/d4387189f2a8" target="_blank" rel="noopener noreferrer">Open</a></td>
  </tr>
</table>

  </div>
</section>

        );
      case 'projects':
        return (
          <section className="Projects" >
            <h2>Projects</h2>
            <p>Here are some of the projects I've worked on:</p>
            <table>
  <tr>
    <th>PROJECTS</th>
    <th>Description</th>
    <th>Technologies Used</th>
  </tr>
  <tr>
    <td>FMCG Market Analysis using Machine Learning</td>
    <td>
      <ul>
        <li>Analyzed market trends and customer behavior with ML algorithms</li>
        <li>Utilized Scikit-learn, NumPy, Pandas, Mlxtend</li>
        <li>Enabled wholesalers and retailers to make data-driven decisions via a Website built using HTML, CSS, and JS.</li>
      </ul>
    </td>
    <td>Machine Learning (ML), Scikit-learn, NumPy, Pandas, Mlxtend, HTML, CSS, JS</td>
  </tr>
  <tr>
    <td>Emergency QR for Rescue in Accidents</td>
    <td>
      <ul>
        <li>Developed a system to generate QR codes with emergency contact information</li>
        <li>Used for quick access to necessary details during accidents</li>
        <li>Implemented using Python and qrcode library</li>
      </ul>
    </td>
    <td>Python, qrcode library</td>
  </tr>
</table>

          </section>
        );
      case 'education':
        return (
          <section className="Education" >
            <h2>Education</h2>
            <table>
  <tr>
    <th>Education</th>
    <th>Institution</th>
    <th>Year</th>
  </tr>
  <tr>
    <td>B.Tech in Computer Science and Engineering</td>
    <td>Veltech Dr.RR Dr.SR University</td>
    <td>2019-2023</td>
  </tr>
  <tr>
    <td>Intermediate</td>
    <td>Sri Chaitanya Junior College</td>
    <td>2018 - 2019</td>
  </tr>
  <tr>
    <td>X</td>
    <td>Sri Chaitanya School</td>
    <td>2016 - 2017</td>
  </tr>
</table>

          </section>
        );

        case 'contact':
        return (
          <section className="Contact" >
            <h2>Contact Me</h2>
            <section className="Contact" style={{ backgroundImage: "url('/contact-bg.jpg')" }}>
  <h2>Contact Me</h2>
  <div class="contact-table">
    <table>
      <tr>
        <td>
          <img src="/phone-icon.png" alt="Phone Icon" class="contact-icon" />
        </td>
        <td>+91 77 8072 5072</td>
      </tr>
      <tr>
        <td>
          <img src="/location-icon.png" alt="Location Icon" class="contact-icon" />
        </td>
        <td>Vishakapatnam, Andhra Pradesh</td>
      </tr>
      <tr>
        <td>
          <img src="/email-icon.png" alt="Email Icon" class="contact-icon" />
        </td>
        <td>deepubirudula47@gmail.com</td>
      </tr>
      <tr>
        <td>
          <a href="https://www.linkedin.com/in/deepu-birudula-670726189/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.png" alt="LinkedIn Icon" class="contact-icon" />
          </a>
        </td>
        <td>
          <a href="https://www.linkedin.com/in/deepu-birudula-670726189/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </td>
      </tr>
    </table>
  </div>
</section>


          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="name-text">Deepu Birudula</h1>


      
        <nav className="Nav-buttons">
          <button onClick={() => setActivePage('about')}>About</button>
          <button onClick={() => setActivePage('skills')}>Skills</button>
          <button onClick={() => setActivePage('contact')}>Contact</button>
          <button onClick={() => setActivePage('certifications')}>Certifications</button>
          <button onClick={() => setActivePage('projects')}>Projects</button>
          <button onClick={() => setActivePage('education')}>Education</button>
        </nav>
        
      </header>
      {renderPage()}
      <footer className="App-footer">
        <p>Copyright © 2023 Deepu Birudula. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
