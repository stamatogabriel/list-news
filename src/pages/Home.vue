<template>
  <div class="root">
    <top-header />
    <transition name="fade" mode="out-in">
      <div v-if="loader" key="loading">
        <div class="loader" />
      </div>

      <div v-else key="list" class="root">
        <input type="text" v-model="query" placeholder="Search news" />
        <transition-group name="list" tag="div" class="root">
          <router-link
            v-for="(news, idx) in filterNews"
            :key="idx"
            :to="{name: 'News', params: {news}}"
            style="textDecoration: none; width: 95%"
          >
            <!--div
            class="container"
            v-for="(news, idx) in filterNews"
            :key="idx"
            v-on:click="showModal(idx)"
            v-bind:title="news.description"
            -->
            <div v-bind:title="news.description" class="container" @click="changeTitle(news.title)">
              <h1 class="title">{{news.title}}</h1>
              <div class="news-body">
                <p>Author: {{news.author}}</p>
                <p>Font: {{news.source.name}}</p>
              </div>
            </div>
          </router-link>
        </transition-group>
      </div>
    </transition>
  </div>
  <!--<transition name="slide-fade">
     <modal v-if="isModalVisible" @close="closeModal()" :news="news" />
  </transition>-->
</template>

<script>
//import Modal from "../components/Modal";
import TopHeader from "../components/Header";

export default {
  components: {
    //Modal,
    TopHeader
  },

  data: function() {
    return {
      newsList: Array,
      news: Object,
      isModalVisible: false,
      loader: true,
      query: ""
    };
  },

  computed: {
    filterNews: function() {
      return this.newsList.filter(
        news =>
          news.title.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
      );
    }
  },

  methods: {
    async init() {
      const response = await this.$http.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=b04a014e29a04ab3910afc8ce3cbdfd2"
      );
      return response.body.articles;
    },

    showModal(idx) {
      this.news = this.newsList[idx];
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

    changeTitle(text) {
      this.$store.commit('newTitle', text);
    }
  },

  async beforeMount() {
    this.$store.commit('newTitle', '')
    document.title = 'List News - Home'
    this.newsList = await this.init();
    this.loader = false;
  }
};
</script>

<style>
p {
  margin: 5px;
}

input {
  margin: 15px;
  height: 30px;
  font-size: 20px;
  outline: 0;
  width: 60%;
  border-radius: 6px;
  border: 1px solid #777;
  padding: 2px 10px;
  color: #333;
}

.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.container {
  margin: 15px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 2px 2px #555;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  color: #333;
  text-decoration: none !important;
  background: #f3f3f3;
}
.container:hover {
  box-shadow: none;
  border: 1px solid #777;
}

.title {
  text-align: center;
  font-size: 25px;
}

.news-body {
  display: flex;
  margin-top: 5px;
  width: 50%;
  flex-direction: row;
  justify-content: space-around;
}

.loader {
  margin-top: 180px;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3d3d3d;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.5s ease-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
