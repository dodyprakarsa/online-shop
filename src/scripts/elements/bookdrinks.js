class BookforDrinks extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <section class="drink section-padding" id="drink">
    <div class="grid-container">
      <!-- first item -->
      <form class="drink-form">
        <p class="drink-form__feedback">some text</p>
        <h3 class="drink-form__title bell-fonts">to get free drinks</h3>
        <div class="drink-form__input">
          <input type="text" name="" id="" maxlength="15" class="input-name" placeholder="name">
        </div>
        <div class="drink-form__input">
          <input type="text" name="" id="" maxlength="15" class="input-lastname" placeholder="last name">
        </div>
        <div class="drink-form__input">
          <input type="email" name="" id="" maxlength="15" class="input-email" placeholder="email">
        </div>
        <input type="submit" value="sign up" class="input-submit">
      </form>
      <!-- sedond item -->
      <article class="drink-card">
        <h3 class="drink-card__title bell-fonts">lucky people:</h3>
        <div class="drink-card__list">
          <!-- <div class="person">
            <img src="img/person-1.jpeg" alt="person" class="person__thumbnail">
            <h4 class="person__name">john</h4>
            <h4 class="person__last-name">doe</h4>
          </div> -->
          <!-- <div class="person">
            <img src="img/person-1.jpeg" alt="person" class="person__thumbnail">
            <h4 class="person__name">john</h4>
            <h4 class="person__last-name">doe</h4>
          </div> -->
        </div>
      </article>
    </div>
  </section>`;
    }
  }
  
  customElements.define('custom-booking', BookforDrinks);
  

