class AboutUs extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <section class="about section-padding" id="about">
    <div class="grid-container grid-container--medium-2">
      <!-- about container -->
      <article class="about-container">
        <!-- first child -->
        <div class="section-title">
          <h1 class="section-title__name bell-fonts">our story</h1>
          <div class="section-title__underline"></div>
          <p class="section-title__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et, doloremque blanditiis tempora deserunt repudiandae!
            Reprehenderit amet reiciendis recusandae odio.</p>
        </div>
        <!-- second child -->
        <div class="about__img ">
          <img src="images/aboutImg-1.jpeg" class="about__img-item" alt="about-img">
        </div>
      </article>
      <!-- end of about container -->
      <!-- about container -->
      <article class="about-container">
        <!-- first child -->
        <div class="section-title">
          <h1 class="section-title__name bell-fonts">what we do</h1>
          <div class="section-title__underline"></div>
          <p class="section-title__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et, doloremque blanditiis tempora deserunt repudiandae!
            Reprehenderit amet reiciendis recusandae odio.</p>
        </div>
        <!-- second child -->
        <div class="about__img about__img-special">
          <img src="images/aboutImg-2.jpeg" class="about__img-item" alt="about-img">
        </div>
      </article>
      <!-- end of about container -->
    </div>
  </section>`;
    }
  }
  
  customElements.define('custom-about', AboutUs);
  