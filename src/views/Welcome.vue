<template>
  <div id="container">
    <h2 id="headtag">My Note App</h2>
    <img
      id="logo"
      src="https://i.pinimg.com/originals/cb/0c/48/cb0c488ec442345065ca70fc0d60dfbf.gif"
      alt="image of note"
    />
    <div id="links">
      <router-link class="linkStyling" to="/signup"> Sign up</router-link>
      <router-link class="linkStyling" to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome-page",
};
</script>

<style lang="scss" scoped>
#container {
  #headtag {
    text-align: center;
    margin-top: 20vh;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    color: orange;
    font-size: xx-large;
  }
  #logo {
      width:35%;
      margin-left:30vw;
      margin-top: 10vh;
  }
  #links {
    display: grid;
    row-gap: 5vh;
    justify-items: center;
    align-items: center;
    margin-top: 10vh;

    .linkStyling {
      text-decoration: none;
      color: orange;
      text-align: center;
      font-size: x-large;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
  }
}
</style>