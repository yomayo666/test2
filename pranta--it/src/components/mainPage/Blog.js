import '../../css/mainPage/header/Blog.css';
import mark from "../../assets/mainPage/Mask group.svg";
import grup from "../../assets/mainPage/Group 1587.svg";
import markwhite from "../../assets/mainPage/Mask group-white.svg";
function Blog() {
  return (
    <div className="blog-cont">
      <div className="main-cont-blog">
        <h3>Блог</h3>
        <p>Делимся новостями из мира IT, инсайдами нашей студии и возрождаем жанр текстовых интервью</p>
        <div className='continer-for-events'>
            <div className='blog-cont-event1'>
                <button key="event-button">СОБЫТИЕ</button>
                
                <p>Команда разработчиков PRANA IT посетила крупнейшее мероприятие по IT технологиям</p>
            </div>
            <div className='blog-cont-event2'>
              <button key="useful-button">ПОЛЕЗНОСТИ</button>
              <p>Разнообразие дизайна без ограничений: Правда о конструкторе Tilda!</p>
            </div>
        </div>
      </div>
      <div className="contact-with-us">
        <div className='left-map-container'>
        <div className="map-container">
        </div>
        <div className='vacancies-contacts'>
        <div className="vacancies">
          <div className='vacancies-content'>
            <h4>Вакансии</h4>
            <hr />
            <div className="web-designer">
              <h5>Веб-дизайнер</h5>
              <p>В своём стремлении улучшить пользовательский опыт мы упускаем, что сделанные на базе интернет-аналитики</p>
            </div>
            <div className="back-end-developer">
              <h5>BackEnd разработчик</h5>
              <p>Вот вам яркий пример современных тенденций — укрепление и развитие внутренней структуры обеспечивает широкому кругу</p>
            </div>
            <hr />
            <a href="https://www.example.com">Посмотреть все вакансии<img src={mark} alt="" className='mark-arr'/></a>
          </div>
        </div>
        <div className="contacts">
          <div  className='contacts-block'>
            <div>
              <h4>Контакты</h4>
              <hr />
            </div>
            <div>
              <h5>Email</h5>
              <p>info@pranait.ru</p>
            </div>
            <div>
              <h5>Телефон</h5>
              <p>+7 938 306 99 90</p>
            </div>
            <div>
              <a href="https://www.example.com"><img src={grup} alt="" className='grup-svg' /></a>
            </div>
          </div>
        </div>
        </div>
        </div>
        
        <div className="contacts-us">
          <div className='contacts-us-container'>
          <div>
            <h4>Свяжитесь с нами</h4>
            <p>Оставьте заявку и команда PRANA IT свяжется с вами любым удобным способом</p>
          </div>
          <hr />
          <div>
            <input type="text" className='your-name-input' placeholder="Ваше имя" />
            <input type="email" className='your-email-input' placeholder="Email" />
            <input type="number" className='your-number-input' placeholder="Номер телефона" />
          </div>
          <hr></hr>
          <p>Выберите удобный способ связи</p>
          <div className='buttons-contacts-us'>
            <button>звонок</button>
            <button>telegram</button>
            <button>whats app</button>
          </div>
          <hr />
          <div>
            <button className='input-button-call-us'>ОТПРАВИТЬ<img src={markwhite} alt="" className='mark-button'/></button>
          </div>
          <div>
            <p className='our-conditions'>Нажимая кнопку “Отправить” вы соглашаетесь с политикой конфиденциальности</p>
          </div>

          </div>
        </div>
      </div>
      <footer className='main-page-footer'>
        <div>
          <p>ООО «PRANA IT» © 2023</p>
        </div>
        <div>
          <p>Политика конфиденциальности</p>
        </div>
      </footer>
      <div className='eleps-box-blog'>
          <div className='eleps-box-blog1'></div>
          <div className='eleps-box-blog2'></div>
        </div>
    </div>
  );
}

export default Blog;
