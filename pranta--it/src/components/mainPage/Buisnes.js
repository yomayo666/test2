import React, { useRef, useState, useEffect } from 'react';
import '../../css/mainPage/header/Buisnes.css';

function Buisnes() {
  const buttonRefs = useRef([]);
  const containerRef = useRef(null);
  const [buttonsData, setButtonsData] = useState([
    { id: 0, velocity: { x: 0, y: 0 }, animationSpeed: 1, isAnimating: false },
    { id: 1, velocity: { x: 0, y: 0 }, animationSpeed: 1, isAnimating: false },
    { id: 2, velocity: { x: 0, y: 0 }, animationSpeed: 1, isAnimating: false },
    { id: 3, velocity: { x: 0, y: 0 }, animationSpeed: 1, isAnimating: false },
    { id: 4, velocity: { x: 0, y: 0 }, animationSpeed: 1, isAnimating: false },
    { id: 5, velocity: { x: 0, y: 0 }, animationSpeed: 1, isAnimating: false },
    { id: 6, velocity: { x: 0, y: 0 }, animationSpeed: 1, isAnimating: false },
    { id: 7, velocity: { x: 0, y: 0 }, animationSpeed: 1, isAnimating: false },
    { id: 8, velocity: { x: 0, y: 0 }, animationSpeed: 1, isAnimating: false },
  ]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  useEffect(() => {
    const animateButton = (buttonData) => {
      if (buttonData.isAnimating) {
        const button = buttonRefs.current[buttonData.id];
        const container = containerRef.current;

        const animate = () => {
          if (buttonData.animationSpeed > 0.01) {
            const newX = parseFloat(button.style.left) + buttonData.velocity.x * buttonData.animationSpeed;
            const newY = parseFloat(button.style.top) + buttonData.velocity.y * buttonData.animationSpeed;
            const buttonRect = button.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            const reachedLeftEdge = newX < 0;
            const reachedRightEdge = newX + buttonRect.width > containerRect.width;
            const reachedTopEdge = newY < 0;
            const reachedBottomEdge = newY + buttonRect.height > containerRect.height;

            if (reachedLeftEdge) {
              buttonData.velocity.x = Math.abs(buttonData.velocity.x);
            } else if (reachedRightEdge) {
              buttonData.velocity.x = -Math.abs(buttonData.velocity.x);
            }

            if (reachedTopEdge) {
              buttonData.velocity.y = Math.abs(buttonData.velocity.y);
            } else if (reachedBottomEdge) {
              buttonData.velocity.y = -Math.abs(buttonData.velocity.y);
            }

            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;

            setButtonsData((prevButtonsData) =>
              prevButtonsData.map((data) =>
                data.id === buttonData.id
                  ? { ...data, animationSpeed: buttonData.animationSpeed - 0.01 }
                  : data
              )
            );
          }
        };

        requestAnimationFrame(animate);
      }
    };

    buttonsData.forEach((buttonData) => animateButton(buttonData));
  }, [buttonsData]);

  const handleMouseDown = (e, index) => {
    setActiveButtonIndex(index);
    const buttonData = buttonsData[index];
    const button = buttonRefs.current[index];
    const container = containerRef.current;

    if (!button || !container) return;

    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const offsetX = e.clientX - buttonRect.left;
    const offsetY = e.clientY - buttonRect.top;

    let lastX = e.clientX;
    let lastY = e.clientY;

    const handleMouseMove = (e) => {
      const x = e.clientX - offsetX - containerRect.left;
      const y = e.clientY - offsetY - containerRect.top;

      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;

      lastX = e.clientX;
      lastY = e.clientY;

      const maxX = containerRect.width - buttonRect.width;
      const maxY = containerRect.height - buttonRect.height;

      const clampedX = Math.min(maxX, Math.max(0, x));
      const clampedY = Math.min(maxY, Math.max(0, y));

      button.style.left = `${clampedX}px`;
      button.style.top = `${clampedY}px`;

      setButtonsData((prevButtonsData) =>
        prevButtonsData.map((data) =>
          data.id === buttonData.id
            ? {
                ...data,
                velocity: { x: deltaX, y: deltaY },
              }
            : data
        )
      );
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      const mouseVelocity = Math.sqrt(Math.pow(buttonData.velocity.x, 2) + Math.pow(buttonData.velocity.y, 2));
      const maxVelocity = 1;
      const limitedVelocity = Math.min(maxVelocity, mouseVelocity);

      setButtonsData((prevButtonsData) =>
        prevButtonsData.map((data) =>
          data.id === buttonData.id
            ? {
                ...data,
                animationSpeed: limitedVelocity,
                isAnimating: true,
              }
            : data
        )
      );
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <article className="for-buisnes" ref={containerRef}>
      <h2 className='for-buisness-h2'>Для <span>любой</span> сферы бизнеса</h2>
      <div className='eleps'>
          <div className='eleps1'></div>
          <div className='eleps2'></div>
        </div>
      <button
        className={`selling-goods`}
        ref={(el) => (buttonRefs.current[0] = el)}
        onMouseDown={(e) => handleMouseDown(e, 0)}
        style={{
          position: 'absolute',
          zIndex: activeButtonIndex === 0 ? 1 : 0, // Установите zIndex на 1 для активной кнопки
        }}
      >
        Продажа товаров
      </button>
      <button
        className={`сoffee-shops`}
        ref={(el) => (buttonRefs.current[1] = el)}
        onMouseDown={(e) => handleMouseDown(e, 1)}
        style={{
          position: 'absolute',
          zIndex: activeButtonIndex === 1 ? 1 : 0, // Установите zIndex на 1 для активной кнопки
        }}
      >
        Кофейни
      </button>
      <button
          className={`franchises`}
          ref={(el) => (buttonRefs.current[2] = el)}
          onMouseDown={(e) => handleMouseDown(e, 2)}
          style={{
            position: 'absolute',
            zIndex: activeButtonIndex === 2 ? 1 : 0, // Установите zIndex на 1 для активной кнопки
          }}
        >
          Франшизы
        </button>
        <button
          className={`repair-and-construction`}
          ref={(el) => (buttonRefs.current[3] = el)}
          onMouseDown={(e) => handleMouseDown(e, 3)}
          style={{
            position: 'absolute',
            zIndex: activeButtonIndex === 3 ? 1 : 0, // Установите zIndex на 1 для активной кнопки
          }}
        >
          Ремонт и строительство
        </button>
        <button
          className={`restaurants-and-cafes`}
          ref={(el) => (buttonRefs.current[4] = el)}
          onMouseDown={(e) => handleMouseDown(e, 4)}
          style={{
            position: 'absolute',
            zIndex: activeButtonIndex === 4 ? 1 : 0, // Установите zIndex на 1 для активной кнопки
          }}
        >
          Рестораны и кафе
        </button>
        <button
          className={`real-estate`}
          ref={(el) => (buttonRefs.current[5] = el)}
          onMouseDown={(e) => handleMouseDown(e, 5)}
          style={{
            position: 'absolute',
            zIndex: activeButtonIndex === 5 ? 1 : 0, // Установите zIndex на 1 для активной кнопки
          }}
        >
          Недвижимость
        </button>
        <button
          className={`infobusiness`}
          ref={(el) => (buttonRefs.current[6] = el)}
          onMouseDown={(e) => handleMouseDown(e, 6)}
          style={{
            position: 'absolute',
            zIndex: activeButtonIndex === 6 ? 1 : 0, // Установите zIndex на 1 для активной кнопки
          }}
        >
          Инфобизнес
        </button>
        <button
          className={`cars`}
          ref={(el) => (buttonRefs.current[7] = el)}
          onMouseDown={(e) => handleMouseDown(e, 7)}
          style={{
            position: 'absolute',
            zIndex: activeButtonIndex === 7 ? 1 : 0, // Установите zIndex на 1 для активной кнопки
          }}
        >
          Автомобили
        </button>
        <button
          className={`marketing-agencies`}
          ref={(el) => (buttonRefs.current[8] = el)}
          onMouseDown={(e) => handleMouseDown(e, 8)}
          style={{
            position: 'absolute',
            zIndex: activeButtonIndex === 8 ? 1 : 0, // Установите zIndex на 1 для активной кнопки
          }}
        >
          Маркетинговые агенства
        </button>
    </article>
  );
}

export default Buisnes;



