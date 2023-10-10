// particlesConfig.js

const particlesConfig = {
  particles: {
    number: {
      value: 80, // Количество частиц
      density: {
        enable: true,
        value_area: 800, // Плотность частиц на экране
      },
    },
    color: {
      value: "#ffffff", // Цвет частиц
    },
    shape: {
      type: "circle", // Форма частиц ("circle" - круглые частицы)
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5, // Прозрачность частиц
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3, // Размер частиц
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150, // Расстояние, на котором частицы соединяются линиями
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6, // Скорость движения частиц
      direction: "none", // Направление движения ("none" - без направления)
      random: false,
      straight: false,
      out_mode: "out", // Выход частиц за пределы контейнера
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Реакция на наведение курсора ("repulse" - отталкивание)
      },
      onclick: {
        enable: true,
        mode: "push", // Реакция на клик ("push" - добавление частиц)
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200, // Расстояние отталкивания
        duration: 0.4,
      },
      push: {
        particles_nb: 4, // Количество добавляемых частиц при клике
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default particlesConfig;



