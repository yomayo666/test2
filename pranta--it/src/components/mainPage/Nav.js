import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../../css/mainPage/header/Nav.css'
import logoImage from "../../assets/mainPage/firm.svg";
// Ваш компонент App
function App() {
  return (
    <BrowserRouter>
        <nav className='main-nav'>
          <ul>
            <li className='img-logo'>
              <Link to="/"><img src={logoImage} alt="Логотип компании" /></Link>
            </li>
            <li>
              <Link to="/">Портфолио</Link>
            </li>
            <li>
              <Link to="/about">Команда</Link>
            </li>
            <li>
              <Link to="/contact">Блог</Link>
            </li>
            <li>
              <Link to="/contact">Вакансии</Link>
            </li>
            <li>
              <Link to="/contact">Контакты</Link>
            </li>
            <li className='start-project'>
              <Link to="/contact" className="custom-link">Начать ПРОЕКТ</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" />
          <Route path="/about"  />
          <Route path="/contact"  />
        </Routes>
    </BrowserRouter>
  );
}

export default App;