import Latex from 'react-latex-next';
import Pdf from '../template.pdf';

export default function Projects () {
  return (
    <section id="projects">
      <div>
        <h1>PROJECTS</h1>
        <ul>
          <li>I used <Latex>$\LaTeX$</Latex> to write up my notes for my math and physics courses. I optimised my setup over time to benefit my workflow a lot, and it's now a breeze. I also enjoy catering the aesthetic of the notes to my liking. I also made a few documents for my part-time maths tutoring job (theory, booklets, exams, revision sheets, etc).</li>
          <a href={Pdf} style={{color: 'white', 'text-decoration': 'none', 'font-weight': 'bold'}}>My barebones <Latex>$\LaTeX$</Latex> notes template here. </a>
          <li>Making this website using React.js :)</li>
          <li>Uni Assignments include emulating Bloons Tower Defense using C in the CLI, simulating trains using pointers, emulating Pacman using Mips in the CLI, recreating a file management system (rysnc), recreating Kahoot via a backend in Javascript, using trees to compress and reopen files, using graphs to model transport systems and </li>
        </ul>
      </div>  
    </section>
  );  
}