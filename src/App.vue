<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
  outline: 0;
}

html,
body {
  height: 100%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #333;
  -webkit-font-smoothing: antialiased !important;
  background-image: url('./assets/background.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
