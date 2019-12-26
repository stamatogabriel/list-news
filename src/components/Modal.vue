<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header" id="modalTitle">
        <slot name="header">
          <h1 id="title">{{news.title}}</h1>
          <h3 id="subtitle">{{news.description}}</h3>
          <span>{{news.publishedAt}}</span>
        </slot>
      </header>
      <section class="modal-body" id="modalDescription">
        <slot name="body">
          <img :src="news.urlToImage" :alt="news.title" id="image" />
          <div id="content-conteiner">
            <p id="content">{{news.content}}</p>
            <a :href="news.url">See more...</a>
          </div>
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <button
            type="button"
            class="button-close"
            @click="close"
            aria-label="Close modal"
          >Close me!</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    }
  },
  props: {
    news: Object
  }
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 55px;
  overflow: auto;
}

img {
  max-width: 100%;
  height: auto !important;
}

.modal {
  text-align: center;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 25px;
  border-radius: 10px;
  overflow: auto;
}

.button-close {
  font-size: 20px;
  cursor: pointer;
  color: white;
  background: #777;
  border-radius: 5px;
  padding: 6px;
  border: none;
  margin: 25px;
}

.button-close:hover {
  background: #222;
}

@media screen and (max-width: 700px){
  h1 {
    font-size: 20px !important;
  }

  h3 {
    font-size: 16px !important;
  }

  .modal-backdrop {
    padding: 0;
    overflow: none;
  }

  .modal {
    width: 95%;
    height: 100%;
    overflow: auto;
    margin: 0
  }
}
</style>