import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthSection from './components/AuthModule';
import './style.css';

function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const wrapper = track?.parentElement;

  if (!track || !prevBtn || !nextBtn || !wrapper) return;

  const firstClone = track.firstElementChild.cloneNode(true);
  const lastClone = track.lastElementChild.cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, track.firstElementChild);

  let index = 1;
  let isMoving = false;

  function setPosition(animate) {
    track.style.transition = animate ? 'transform 0.45s ease' : 'none';
    track.style.transform = `translateX(-${index * 100}%)`;
    if (!animate) {
      track.offsetHeight;
    }
  }

  function goTo(step) {
    if (isMoving) return;
    isMoving = true;
    index += step;
    setPosition(true);
  }

  track.addEventListener('transitionend', (event) => {
    if (event.target !== track || event.propertyName !== 'transform') return;
    const lastIndex = track.children.length - 1;
    if (index === lastIndex) {
      index = 1;
      setPosition(false);
    } else if (index === 0) {
      index = lastIndex - 1;
      setPosition(false);
    }
    isMoving = false;
  });

  prevBtn.addEventListener('click', () => goTo(-1));
  nextBtn.addEventListener('click', () => goTo(1));
  setPosition(false);

  let timer = setInterval(() => goTo(1), 4000);
  wrapper.addEventListener('mouseenter', () => clearInterval(timer));
  wrapper.addEventListener('mouseleave', () => {
    timer = setInterval(() => goTo(1), 4000);
  });
}

function LandingPage() {
  useEffect(() => {
    initCarousel();
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo-group">
          <img
            className="brand-badge"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RPSw7vAIatjgEWzmAyN0U0yGhotoPc7t0AFMkl0EREp8g0E472trTvM&s=10"
            alt="RV University logo"
          />
          <div>
            <span className="university-name">RV UNIVERSITY<sup>®️</sup></span>
            <p className="sub-dept">School Of Computer Science & Engineering</p>
          </div>
        </div>
        <div className="nav-actions">
          <a href="#auth-section" className="btn-secondary">Login</a>
          <a href="#auth-section" className="btn-primary">Register</a>
        </div>
      </header>

      <section className="hero-banner">
        <div className="hero-content">
          <span className="module-tag">CS3301 - FULL STACK DEVELOPMENT</span>
          <h1>CAMPUS CONNECT PORTAL</h1>
          <p className="subtitle">Connecting Students, Faculty, and Administrators on a Single Digital Platform</p>
          <div className="hero-cta-group">
            <a href="#auth-section" className="btn-hero-primary">Explore user Portal</a>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Campus Life & Portal Highlights</h2>
        <p className="section-subtitle">Explore the features and benefits of our campus portal</p>
        <div className="carousel-wrapper">
          <button className="carousel-btn prev-btn" id="prevBtn" aria-label="Previous slide">&#10094;</button>
          <div className="carousel-track" id="carouselTrack">
            <div className="slide">
              <img src="https://www.admissionwala.in/storage/productimages/RV-University-Bengaluru-2.jpg" alt="Slide 1" />
              <div className="slide-content">Modern University infrastructure and Facilities</div>
            </div>
            <div className="slide">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Slide 2" />
              <div className="slide-content">Collaborative Learning Environment</div>
            </div>
            <div className="slide">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" alt="Slide 3" />
              <div className="slide-content">Real-Time Academic Management</div>
            </div>
          </div>
          <button className="carousel-btn next" id="nextBtn" aria-label="Next slide">&#10095;</button>
        </div>
      </section>

      <section className="portal-section">
        <h2 className="section-title">Choose Your Portal View</h2>
        <p className="section-subtitle">Select the role that fits you best</p>
        <div className="portal-cards">
          <a href="#auth-section" className="portal-card">
            <div className="portal-icon">🎓</div>
            <h3>Student</h3>
            <p>Access courses, assignments, grades, and campus resources</p>
          </a>
          <a href="#auth-section" className="portal-card">
            <div className="portal-icon">👨‍🏫</div>
            <h3>Faculty</h3>
            <p>Manage classes, upload materials, and track student progress</p>
          </a>
          <a href="#auth-section" className="portal-card">
            <div className="portal-icon">🛡️</div>
            <h3>Admin</h3>
            <p>Oversee portal settings, user management, and system configurations</p>
          </a>
        </div>
      </section>

      <AuthSection />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
