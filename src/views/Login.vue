<template>
  <div id="container">
    <router-link class="routerStyling" to="/"> Go Back</router-link>

    <div id="formStyling">
      <p class="ptagStyling">Email</p>
      <input class="stylingInput" type="text" id="email-input" v-model="email" placeholder="Enter your email "/>
      <p class="ptagStyling">Password</p>
      <input class="stylingInput" type="password" id="password-input" v-model="password" placeholder="Type your password" />
    </div>
    <h2 @click="loginUser" id="loginStyling">Login</h2>
    <h3 id="loginh3Styling">{{ loginStatus }}</h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      email: "",
      password: "",
      loginStatus: ""
    };
  },
  
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading";
      axios
        .request({
          url: "https://noteapp.ml/api/login",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          if (response.data.loginToken == undefined) {
            this.$router.push({ name: "login-page" });
          } else {
            this.loginStatus = "success";
            cookies.set("loginToken", response.data.loginToken);
            cookies.set("username", response.data.username);
            cookies.set("userId", response.data.userId);
            this.$router.push({ name: "home-page" });
            console.log(response)
          }
        })
        .catch(error => {
          console.log(error);
          this.loginStatus = "Invalid Login";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap');

  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: 4vh;
  background-image: url(https://wallpapercave.com/wp/wp6850797.jpg);
  border-radius: 25px;
  border:2px solid black;
  height:99vh;
  .routerStyling{
    text-decoration: none;
    font-size: large;
    color: orange;
    margin-right: 70vw;
    font-family: 'Nanum Myeongjo', serif;

    margin-bottom: 10vh;
  }
  #h3Styling{
    display: none;
  }
  #formStyling {
    display: grid;
    row-gap: 4vh;
    text-align: center;
    color:orange;
      font-family: 'Nanum Myeongjo', serif;

    .ptagStyling {
      font-size: large;
      font-weight: bold;
    }
    .stylingInput{
      border-radius: 20px;
      height: 30px;
      width: 200px;
      text-align: center;
    }
  }
  #loginStyling {
    color: orange;
    text-align: center;
    font-family: 'Nanum Myeongjo', serif;

  }
  #loginh3Styling{
    color: orange;
  }
  @media only screen and(min-width:600px) {
    background-image: url(https://wallpapercave.com/wp/wp4590354.jpg);
    #h3Styling{
      display:block;
      font-size:xx-large;
    }
    .routerStyling{
      font-size: xx-large;
    }
    #formStyling {
      margin-top: -15vh;
      
      .ptagStyling{
        font-size: 2em;
      }
      .stylingInput{
        width:280px;
        height: 55px;
        font-size:x-large;
      }
    }
    #loginStyling{
      padding: 15px;
      font-size: 2.5em;
    }
    #loginh3Styling{
      font-size: 2em;
    }

  }
  @media only screen and(min-width:1020px) {
    background-image: url(https://wallpapercave.com/wp/wp6850797.jpg);
    row-gap: 3vh;
    border-radius: 0;
    .routerStyling{
       font-size: 1em;
       margin-left: -14vw;
    }
    #h3Styling{ 
      font-size:3em;
    }
    #formStyling {
      padding:6%;
      .stylingInput{
        font-size: 1em;
        font-size: small;
        width:200px;
        height: 40px;
      }
      .ptagStyling{
        font-size: 1.5em;
      }
    }
    #loginStyling{
      font-size: 2em;
      margin-top: -40px;
    }


  }


}
</style>