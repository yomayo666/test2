import '../../css/mainPage/header/СalculateЕheСost.css';
import code from "../../assets/mainPage/BlueSvg/codeBlue.svg";
import box from "../../assets/mainPage/BlueSvg/rombBlue.svg";
import video from "../../assets/mainPage/BlueSvg/videoBlue.svg";
import mark from "../../assets/mainPage/Mask group.svg";
function СalculateЕheСost(){
    return(
        <article className="price-container">
            <div className='us-price'>
                <div className='header-price-div'>
                    <h3>Рассчитаем стоимость вашего будущего проекта</h3>
                    <p>Выберите необходимые услуги и опции, мы сможем рассчитать стоимость разработки вашего проекта</p>
                </div>
                <hr className='price-container-line'></hr>
                <div className='development-price-div'>
                    <img src={code} alt="Значек кода"></img>
                    <h4>Разработка</h4>
                    <p>Сложившаяся структура организации однозначно определяет каждого участника как способного принимать собственные решения касаемо соответствующих условий активизации</p>
                    <div className="parent-checkbox-development parent-container-checkbox">
                        <label htmlFor="development-switch" className="custom-switch">
                            <input type="checkbox" id="development-switch"  />
                            <div className="slider"></div>
                        </label>
                    </div>
                </div>
                <hr></hr>
                <div className='design-price-div'>
                    <img src={box} alt="Значек коробки"></img>
                    <h4>Дизайн</h4>
                    <p>Сложившаяся структура организации однозначно определяет каждого участника как способного принимать собственные решения касаемо соответствующих условий активизации</p>
                    <div className="design-checkbox-development parent-container-checkbox">
                        <label htmlFor="design-switch" className="custom-switch">
                        <input type="checkbox" id="design-switch" />
                            <div className="slider"></div>
                        </label>
                    </div>
                </div>
                <div className='check-price-container'>
                    <div>
                        <h5>Логотип</h5>
                        <p className='check-price-p1'>Фирменный символ, применяемый как визуальный идентификатор компании</p>
                        <input type="checkbox" className='logo-check price-check' name='logo'/>
                        <label htmlFor="logo">Не выбрано</label>
                    </div>
                    <div>
                        <h5>Брендинг</h5>
                        <p className='check-price-p2'>Полный набор уникального визуального имиджа компании</p>
                        <input type="checkbox" className='branding-check price-check' name='branding'/>
                        <label htmlFor="branding">Не выбрано</label>
                    </div>
                    <div>
                        <h5>Графический дизайн</h5>
                        <p className='check-price-p3'>Набор услуг по созданию дизайна материалов разной направленности</p>
                        <input type="checkbox" className='design-check price-check' />
                        <label htmlFor="branding">Не выбрано</label>
                    </div>
                </div>
                <hr></hr>
                <div className='motion-price-div'>
                    <img src={video} alt="Значек плеера"></img>
                    <h4>Motion</h4>
                    <p>Сложившаяся структура организации однозначно определяет каждого участника как способного принимать собственные решения касаемо соответствующих условий активизации</p>
                    <div className="motion-checkbox-development parent-container-checkbox">
                        <label htmlFor="motion-switch" className="custom-switch">
                        <input type="checkbox" id="motion-switch" />
                            <div className="slider"></div>
                        </label>
                    </div>
                </div>
                <hr></hr>
                <div className="container-for-button">
                    <button className='need-consultation'>НУЖНА КОНСУЛЬТАЦИЯ <img src={mark} alt="Значек плеера" className='need-consultation-mark'></img></button>
                </div>
            </div>

        </article>
    )
}

export default СalculateЕheСost