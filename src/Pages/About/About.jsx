import { Link } from 'react-router-dom';
import '../../App.css';

export default function About() {
  return (
    <div className='about'>
      <h2>Sobre o Login<span>Page</span></h2>
      <p>Este projeto consiste em um site feito com <span>React</span> no front-end e Firebase no back-end, com objetivo de aprender a implementar registro de usuários em aplicações.</p>
      <p>Projeto baseato no projeto Mini <span>Blog</span> do curso de React do professor <span>Matheus Battisti.</span></p>
    </div>
  )
}