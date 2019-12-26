<template>
  <div>
    <top-header />
    <div id="root">
      <h1 id="title">{{news.title}}</h1>
      <h3 id="subtitle">{{news.description}}</h3>
      <span>{{news.publishedAt}}</span>
      <div id="container">
        <img :src="news.urlToImage" :alt="news.title" id="image" />
        <div id="content-conteiner">
          <p id="content">{{news.content}}</p>
          <a :href="news.url" target="_blank" :alt='news.description'>See more...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "../components/Header";

export default {
  props: {
    news: Object
  },
  components: {
    TopHeader
  },
  beforeMount() {
    document.title = 'List News - ' + this.$store.state.title
  }
};
</script>

<style>
#root {
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin: 70px auto auto auto;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px #777;
  padding: 15px;
  background: #fff;
}

#title {
  font-size: 30px;
  margin: 15px 5px 2px 5px;
  color: #222;
}

#subtitle {
  font-size: 20px;
  color: #555;
}

#image {
  height: 500px;
  margin: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px #777;
  border-radius: 5px;
}

#container {
  display: flex;
}

#content {
  color: #333;
  text-align: justify;
}

#content-container {
  display: flex;
  flex-direction: column;
}

a {
  margin-bottom: 30px;
}
</style>