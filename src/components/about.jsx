import data from '../data.json';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { parseStrings } from './helper';

export default function About() {
  return (
    <section id="about">
      <div>
        <h1>ABOUT ME</h1>
        <p>I am a {data.yearOfStudy} year student, and my degree is {data.degree}.</p>
        <p>Some of my hobbies include:</p>
        <ul>
          <li>Learning New Coding Skills</li>
          <li>Making my <Latex>$\LaTeX$</Latex> notes look more pretty</li>
          <li>Learning cool stuff from textbooks. Right now I'm learning {parseStrings(data.learning)}.</li>
          <li>Working out in the gym</li>
          <li>Running</li>
        </ul>
      </div>
    </section>
  );  
}