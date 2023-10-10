// ParticlesEffect.js
import React, { useEffect } from 'react';
import particlesJS from 'particles.js'; // Добавьте импорт библиотеки particles.js
import particlesConfig from './particlesConfig'; // Измените импорт конфигурации

const ParticlesEffect = () => {
  useEffect(() => {
    particlesJS('particles-js', particlesConfig);
  }, []);

  return (
    <div className="particles-container" id="particles-js">
      {/* Этот контейнер будет использоваться для частиц */}
    </div>
  );
};

export default ParticlesEffect;
