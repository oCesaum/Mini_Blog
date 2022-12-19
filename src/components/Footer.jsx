import '../App.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <h3>Projeto de aprendizado</h3>
      <p>Mini Blog &copy; 2022</p>
      <div className='social-network'>
        <a href='https://github.com/oCesaum' target="_blank" rel="noreferrer">
          <span className='icon-github'></span>Github
        </a>
        <a href='https://www.linkedin.com/in/c%C3%A9sar-augusto-sousa-pinho/' target="_blank" rel="noreferrer">
          <span className='icon-linkedin'></span>Linkedin
        </a>
      </div>
    </footer>
  )
}