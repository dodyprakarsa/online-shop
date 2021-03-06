class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="header" id="header">
    <!-- banner -->
    <div class="banner">
      <h1 class="banner__title bell-fonts">coffee junkie</h1>
      <div class="banner__icons">
        <a href="#" class="banner__social-icon">
          <i class="fab fa-facebook fa-fw"></i>
        </a>
        <a href="#" class="banner__social-icon">
          <i class="fab fa-twitter fa-fw"></i>
        </a>
        <a href="#" class="banner__social-icon">
          <i class="fab fa-google-plus fa-fw"></i>
        </a>
        <a href="#" class="banner__social-icon">
          <i class="fab fa-instagram fa-fw"></i>
        </a>
      </div>
    </div>
    <!-- end of banner -->
    <!-- video  -->
    <article class="video__container">
      <video class="video__item" autoplay muted loop>
        <source src="video/coffee.mp4" type="video/mp4">
        <source src="video/coffee.ogv" type="video/ogv">
        <source src="video/coffee.webm" type="video/webm"> Your browser does not support vidoe tag
      </video>
    </article>
    <!-- end of video  -->
    <!-- nav btn -->
    <div class="navBtn">
      <i class="fas fa-bars"></i>
    </div>
    <!-- nav -->
    <nav class="nav">
      <ul class="nav__links">
        <!-- logo -->
        <li>
          <a href="#" class="nav__single-link nav__logo">
            <img src="images/navLogo.svg" alt="">
          </a>
        </li>
        <li>
          <a href="#header" class="nav__single-link">home</a>
        </li>
        <li>
          <a href="#about" class="nav__single-link">about</a>
        </li>
        <li>
          <a href="#drink" class="nav__single-link">free dink</a>
        </li>
        <li>
          <a href="#work" class="nav__single-link">work</a>
        </li>
        <li>
          <a href="#contact" class="nav__single-link">contact</a>
        </li>
      </ul>
    </nav>
    <div class="video__switch-container">
      <div class="video__switch">
        <span>on</span>
        <span>off</span>
        <div class="video__switch-btn"></div>
      </div>
    </div>
  </header>`;
  }
}

customElements.define('custom-header', CustomHeader);
