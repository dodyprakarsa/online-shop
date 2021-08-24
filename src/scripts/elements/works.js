class WorksElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="work-container">
    <!-- single work item -->
    <article class="work-item item-1">
      <img src="images/work-1.jpeg" alt="" class="work-item__img">
      <a href="#" class="work-item__icon" data-id="1">
        <i class="fas fa-search"></i>
      </a>
    </article>
    <!-- end single work item -->
    <!-- single work item -->
    <article class="work-item item-2">
      <img src="images/work-2.jpeg" alt="" class="work-item__img">
      <a href="#" class="work-item__icon" data-id="2">
        <i class="fas fa-search"></i>
      </a>
    </article>
    <!-- end single work item -->
    <!-- single work item -->
    <article class="work-item item-3">
      <img src="images/work-3.jpeg" alt="" class="work-item__img">
      <a href="#" class="work-item__icon" data-id="3">
        <i class="fas fa-search"></i>
      </a>
    </article>
    <!-- end single work item -->
    <!-- single work item -->
    <article class="work-item item-4">
      <img src="images/work-4.jpeg" alt="" class="work-item__img">
      <a href="#" class="work-item__icon" data-id="4">
        <i class="fas fa-search"></i>
      </a>
    </article>
    <!-- end single work item -->
    <!-- single work item -->
    <article class="work-item item-5">
      <img src="images/work-4.jpeg" alt="" class="work-item__img">
      <a href="#" class="work-item__icon" data-id="5">
        <i class="fas fa-search"></i>
      </a>
    </article>
    <!-- end single work item -->
    <!-- single work item -->
    <article class="work-item item-6">
      <img src="images/work-6.jpeg" alt="" class="work-item__img">
      <a href="#" class="work-item__icon" data-id="6">
        <i class="fas fa-search"></i>
      </a>
    </article>
    <!-- end single work item -->
    <!-- single work item -->
    <article class="work-item item-7">
      <img src="images/work-7.jpeg" alt="" class="work-item__img">
      <a href="#" class="work-item__icon" data-id="7">
        <i class="fas fa-search"></i>
      </a>
    </article>
    <!-- end single work item -->
    <!-- single work item -->
    <article class="work-item item-8">
      <img src="images/work-8.jpeg" alt="" class="work-item__img">
      <a href="#" class="work-item__icon" data-id="8">
        <i class="fas fa-search"></i>
      </a>
    </article>
    <!-- end single work item -->
    <!-- single work item -->
    <article class="work-item item-9">
      <img src="images/work-9.jpeg" alt="" class="work-item__img">
      <a href="#" class="work-item__icon" data-id="9">
        <i class="fas fa-search"></i>
      </a>
    </article>
    <!-- end single work item -->
  </div>
  <!-- modal -->
  <div class="work-modal">
    <div class="work-modal__item"></div>
    <div class="work-modal__close">
      <i class="fas fa-window-close"></i>
    </div>
  </div>`;
  }
}

customElements.define('custom-works', WorksElement);
