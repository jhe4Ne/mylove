// Modo Oscuro
const toggleDarkModeButton = document.getElementById("toggleDarkMode");
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';
const musicControl = document.createElement('button');

// Comprobar el estado guardado del modo oscuro en localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggleDarkModeButton.innerHTML = moonIcon;
}

// Función para actualizar el botón de música en modo oscuro
const updateMusicButtonStyle = () => {
  if (body.classList.contains("dark-mode")) {
    musicControl.classList.add("dark-mode-music");
  } else {
    musicControl.classList.remove("dark-mode-music");
  }
};

toggleDarkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    toggleDarkModeButton.innerHTML = moonIcon;
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleDarkModeButton.innerHTML = sunIcon;
  }

  // Actualizar el estilo del botón de música
  updateMusicButtonStyle();
});

document.getElementById("logoutButton").addEventListener("click", () => {
  const confirmation = confirm("¿Estás seguro de que quieres cerrar sesión?");
  if (confirmation) {
    window.location.href = "index.html";
  }
});

// Navegación entre secciones
const links = document.querySelectorAll(".sidebar nav ul li a");
const sections = document.querySelectorAll(".content-section");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    // Oculta todas las secciones
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    // Muestra la sección seleccionada
    document.getElementById(targetId).classList.add("active");

    // Marca el enlace como activo
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Mostrar/Ocultar Sidebar
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

window.addEventListener("load", () => {
  // Recuperar la fecha de aniversario desde el localStorage
  const anniversaryDate = localStorage.getItem("anniversaryDate");

  if (anniversaryDate) {
    const anniversary = new Date(anniversaryDate);
    const today = new Date();

    // Calcular la diferencia en años, meses y días
    let years = today.getFullYear() - anniversary.getFullYear();
    let months = today.getMonth() - anniversary.getMonth();
    let days = today.getDate() - anniversary.getDate();

    // Si el mes actual es anterior al mes de aniversario, restamos 1 año
    if (months < 0) {
      years--;
      months += 12; // Ajustamos los meses a 12 si restamos un año
    }

    // Si el día actual es anterior al día de aniversario, restamos 1 mes
    if (days < 0) {
      months--;
      // Ajustamos los días al último día del mes anterior
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // Función para manejar singular o plural
    const yearText = years === 1 ? "año" : "años";
    const monthText = months === 1 ? "mes" : "meses";
    const dayText = days === 1 ? "día" : "días";

    // Mostrar el número de años, meses y días en el dashboard
    document.getElementById(
      "daysCount"
    ).innerText = `Ya han pasado ${years} ${yearText}, ${months} ${monthText} y ${days} ${dayText}, desde que comenzó nuestra historia de amor. Me alegra mucho estar aún a tu lado y disfrutar cada momento, eres la persona que amaré de por vida. ¡Te Amoo❤️!`;
  }
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 10, // Número de partículas (corazones)
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: "image",
      image: {
        src: "https://img.icons8.com/?size=100&id=12306&format=png&color=000000", // Aquí puedes usar cualquier imagen de corazón
        width: 2,
        height: 2,
      },
    },
    move: {
      enable: true,
      speed: 1, // Velocidad de caída
      direction: "top", // Dirección hacia abajo
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
    },
  },
  retina_detect: true,
});

const mensajes = [
  "Eres mi razón de sonreír cada día. 💖",
  "Contigo, cada momento es especial. 🌟",
  "Tu amor es mi mayor tesoro. 🏆",
  "Eres mi hoy, mi mañana y mi siempre. 🌹",
  "Gracias por hacerme tan feliz. 😊",
  "Eres la mejor parte de mi día. ☀️",
  "Mi corazón late por ti. 💓",
];

const mensajeTexto = document.getElementById("mensaje-texto");
const nuevoMensajeBtn = document.getElementById("nuevo-mensaje-btn");

function mostrarMensajeAleatorio() {
  const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
  mensajeTexto.textContent = mensajeAleatorio;
}

// Mostrar un mensaje aleatorio al cargar la página
mostrarMensajeAleatorio();

// Cambiar mensaje al hacer clic en el botón
nuevoMensajeBtn.addEventListener("click", mostrarMensajeAleatorio);

document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const volumeControl = document.getElementById('volumeControl');

  playBtn.addEventListener('click', function () {
    audio.play();
  });

  pauseBtn.addEventListener('click', function () {
    audio.pause();
  });

  volumeControl.addEventListener('input', function () {
    audio.volume = volumeControl.value;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audio-player');
  const playlistItems = document.querySelectorAll('.playlist ul li');

  playlistItems.forEach(item => {
    item.addEventListener('click', function () {
      const src = this.getAttribute('data-src');
      audioPlayer.src = src;
      audioPlayer.play();
    });
  });
});

// Controlador de Audio
const initAudioController = () => {
  const backgroundMusic = new Audio('assets/music/Lugar Seguro.mp3');
  backgroundMusic.loop = true;

  musicControl.id = 'musicControl';
  musicControl.className = 'floating-button music-control';
  musicControl.title = 'Control de Música';
  musicControl.style.position = 'fixed';
  musicControl.style.bottom = '70px';
  musicControl.style.top = '160px';
  musicControl.style.right = '20px';
  musicControl.style.zIndex = '1000';

  document.body.appendChild(musicControl);

  let isPlaying = false;

  const saveMusicState = (playing) => {
    localStorage.setItem('musicPlaying', playing ? 'true' : 'false');
  };

  const loadMusicState = () => {
    return localStorage.getItem('musicPlaying') === 'true';
  };

  const updateIcon = () => {
    musicControl.innerHTML = isPlaying
      ? '<i class="ri-volume-up-fill"></i>'
      : '<i class="ri-volume-mute-fill"></i>';
  };

  const toggleMusic = () => {
    if (isPlaying) {
      backgroundMusic.pause();
    } else {
      backgroundMusic.play().catch(error => {
        console.log("Error al reproducir música:", error);
      });
    }
    isPlaying = !isPlaying;
    saveMusicState(isPlaying);
    updateIcon();
  };

  musicControl.addEventListener('click', toggleMusic);

  const restoreMusicState = () => {
    isPlaying = loadMusicState();
    if (isPlaying) {
      backgroundMusic.play().catch(() => {
        isPlaying = false;
        saveMusicState(false);
      });
    }
    updateIcon();
  };

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && isPlaying) {
      backgroundMusic.pause();
    } else if (!document.hidden && isPlaying) {
      backgroundMusic.play().catch(error => {
        console.log("Error al reanudar música:", error);
      });
    }
  });

  backgroundMusic.volume = 0.5;
  restoreMusicState();

  // Aplicar modo oscuro al botón de música
  updateMusicButtonStyle();
};

// Inicializar el controlador de audio cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initAudioController, 1000);
});

document.getElementById('sorpresa-btn').addEventListener('click', function () {
  const contenido = document.getElementById('sorpresa-content');
  contenido.classList.toggle('hidden'); // Muestra u oculta la sorpresa
});
