import "../../css/mainPage/header/UsWorks.css";
import React, { useEffect, useState } from "react";

function UsWorks() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1300 && window.scrollY < 2750) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <article className="us-works">
      <h2 className={`title-us-works ${isFixed ? 'fixed' : 'not-fixed'}`}>Наши работы</h2>
      <div className="firs-div">
        <div className="cont-1 cont">
            <h3>FRINGE</h3>
            <p>Программирование бизнес процессов на основе нейронных сетей</p>
            <div className="cont-1-buttons buttons-down">
                <button>ФИРМЕННЫЙ СТИЛЬ</button>
            </div>
        </div>
        <div className="cont-2 cont">
            <h3>фотосъёмка парфюмерии</h3>
            <p>Предметная фотография</p>
            <div className="cont-2-buttons buttons-down">
                <button>ФОТО</button>
            </div>
        </div>
      </div>
      <div className="secons-div">
        <div className="cont-3 cont">
            <h3>blag product</h3>
            <p>Крупнолистовой заварной чай от производителя</p>
            <div className="cont-3-buttons buttons-down">
                <button>MOTION</button>
                <button>ФОТО</button>
            </div>
        </div>
        <div className="cont-4 cont">
        <h3>снЭкс</h3>
            <p>Снековая продукция от производителя</p>
            <div className="cont-4-buttons buttons-down">
            <button>рАЗРАБОТКА</button>
                <button>ФОТО</button>
                <button>MOTION</button>
            </div>
        </div>
      </div>
      <div className="third-div">
        <div className="cont-5 cont">
        <h3>снэкс</h3>
            <p>Снековая продукция от производителя</p>
            <div className="cont-5-buttons buttons-down">
                <button>рАЗРАБОТКА</button>
                <button>ФОТО</button>
                <button>MOTION</button>
            </div>
        </div>
        <div className="cont-6 cont">
        <h3>фотосъёмка парфюмерии</h3>
            <p>Предметная фотография</p>
            <div className="cont-6-buttons buttons-down">
                <button>ФОТО</button>
            </div>
        </div>
      </div>
    </article>
  );
}
export default UsWorks