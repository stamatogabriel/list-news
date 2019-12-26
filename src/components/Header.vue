<template>
  <div class="header">
    <router-link to="/" class="logo">List News</router-link>
    <h2 class='news-title'>{{this.$store.state.title}}</h2>
    <div class="header-right">
      <a class="active" href="/">Home</a>
      <a href="#">More News</a>
      <a>Contact</a>
    </div>
  </div>
</template>

<script>
</script>


<style>
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100% !important;
  top: 0;
}

.header a {
  float: left;
  color: #333;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  margin: 15px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: #0e47e8;
  color: white;
}

.header-right {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .header {
    flex-direction: column;
    height: 100%;
  }

  .header-right {
      flex-direction: column;
      width: 100%;
  }

  .header-right a{
      margin: 2px;
  }
}

.news-title {
  width: 40%;
  font-size: 20px;
  text-align: center;
}
</style>