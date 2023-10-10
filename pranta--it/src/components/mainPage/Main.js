import code from "../../assets/mainPage/Code.svg";
import box from "../../assets/mainPage/BoundingBox.svg";
import video from "../../assets/mainPage/Video.svg";
import React, { useEffect, useState } from 'react';
import '../../css/mainPage/header/Main.css'
function Main() {
    const [isFixed, setIsFixed] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
                setIsFixed(false);
            } else {
                setIsFixed(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const mainContainerStyles = {
        marginTop: isFixed ? '100px' : '0',
        zIndex: 2,
        transition: 'margin-top 0.5s ease',
    };

    const servicesStyles = {
        color: isFixed ? 'var(--ffffff, #FFF)' : 'white',
        opacity: isFixed ? 1 : 0.8,
        top: isFixed? '-100px' :  "-50px"
    };

    return (
        <main>
            <div className={`main-container ${isFixed ? 'fixed' : 'not-fixed'}`}>
            <div className="div=h2">
                <h2 className="services" style={servicesStyles}>Услуги</h2>
            </div>
                <div className="development-article">
                    <div className="development-div">
                        <img src={code} alt="Значек кода"></img>
                        <h3>Разработка</h3>
                    </div>
                    <hr></hr>
                    <div>
                        <h4>Сайты</h4>
                        <p>Создание сайтов любой сложности, Привлекайте клиентов и развивайте свой бизнес онлайн</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h4>Чат боты для телеграм</h4>
                        <p>Улучшите свою коммуникацию с клиентом за счет автоматизации ответов и расширения функционала в мессенджере telegram</p>
                    </div>
                </div>
                <div className="design-article" style={mainContainerStyles}>
                    <div className="box-div">
                        <img src={box} alt="Значек коробки"></img>
                        <h3>Дизайн</h3>
                    </div>
                    <hr></hr>
                    <div>
                        <h4>Брендинг</h4>
                        <p>Анализ аудитории, конкурентов, создание логотипа, цветовой палитры и стиля. Привлекайте клиентов с помощью уникального бренда</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h4>UI/UX</h4>
                        <p>Создание привлекательного и интуитивно понятного пользовательского интерфейса</p>
                    </div>
                </div>
                <div className="creative-article">
                    <div className="player-div">
                        <img src={video} alt="Значек плеера"></img>
                        <h3>Motion</h3>
                    </div>
                    <hr></hr>
                    <div>
                        <h4>Креатив</h4>
                        <p>Оживите свой контент с помощью анимации, визуальных эффектов и привлекательных рекламных роликов</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h4>Промо видео</h4>
                        <p>Уникальный концепт, сценарий, монтаж и озвучка для вашего бренда. Воздействуйте на целевую аудиторию и увеличьте конверсию с помощью продающих видео роликов</p>
                    </div>
                </div>
                
            </div>
        </main>
    )
}

export default Main;
