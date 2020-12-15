<template>
  <div id="container">
    <div id="firstdiv">
      <h3 id="welcome">{{ "Welcome" + " " + this.user }}</h3>
      <h3 id="logouttag" @click="logout">Log out</h3>
    </div>
    <div id="seconddiv">
        <router-link to="/home"> <img id="firstimage" src="https://www.freeiconspng.com/thumbs/homepage-icon-png/homepage-icon-png-9.png"  alt="image of home icon"></router-link>
    </div>
    <div id="thirddiv">
      <router-link class="routerStyling" to="/notes"> My notes</router-link>
      <router-link class="routerStyling" to="/task">My tasks</router-link>
      <router-link class="routerStyling" to="/profile">My account</router-link>


    </div>

  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  name: "header-page",
  data() {
    return {
      token: cookies.get("loginToken"),
      user: cookies.get("username"),
    };
  },
  methods: {
    logout: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/login",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: this.token,
          },
        })
        .then((response) => {
          console.log(response);
          cookies.remove("loginToken");
          cookies.remove("userId");
          cookies.remove("username");
          this.$router.push({ name: "welcome-page" });
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
};
</script>

<style lang="scss" scoped>
  #container {
    width: 100%;
    height: 22vh;
    background-color: orange;
    display: grid;
    row-gap: 1vh;
    #firstdiv {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      #welcome {
        color: white;
        margin-top: 2vh;
      }
      #logouttag {
        color: white;
        margin-top: 2vh;
        margin-left: 25vw;
      }
    }
    #seconddiv {
        display: grid;
        align-items: center;
        justify-items: center;
        #firstimage{
            width:13%;
            margin-top: 1vh;
            margin-left: 45%;
            
            
        }
    }
    #thirddiv{
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
        .routerStyling{
            text-decoration: none;
            color: white;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
    }
  }

</style>