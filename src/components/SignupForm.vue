<template>
  <div id="maincontainer">
    <div id="formStyling">
      <p class="ptagStyling">Email</p>
      <input
        class="inputStyling"
        type="text"
        id="email-input"
        v-model="email" placeholder="Enter your email"
      />
      <p class="ptagStyling">Username</p>
      <input
        class="inputStyling"
        type="text"
        id="username-input"
        v-model="username" placeholder="Enter your username"
      />
      <p class="ptagStyling">Password</p>
      <input
        class="inputStyling"
        type="password"
        id="pawwsord-input"
        v-model="password" placeholder="Enter your password"
      />
    </div>
    <h3 @click="signupUser" id="signupStyling">Sign Up</h3>
    <h2 id="signh2styling">{{ status }}</h2>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "signup-form",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      status: "",
    };
  },
  methods: {
    signupUser: function () {
      axios
        .request({
          url: "https://noteapp.ml/api/users",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data.loginToken == "") {
            this.$router.push({ name: "signup-page" });
          } else {
            cookies.set("loginToken", response.data.loginToken);
            cookies.set("userId", response.data.userId);
            cookies.set("username", response.data.username);
            this.$router.push({ name: "home-page" });
          }
        })
        .catch((error) => {
          console.log(error);
          this.status = "Something went wrong. Try again";
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap');
#maincontainer {
  margin-top: 15vh;
  display: grid;
  font-size: large;
  font-weight: bold;
  justify-items: center;
  align-items: center;
  row-gap: 4vh;
  .inputStyling {
    height: 30px;
    width: 200px;
    border-radius:20px;
    text-align: center;
  }
  #formStyling {
    display: grid;
    text-align: center;
    row-gap: 3vh;
    color: orange;
    font-family: 'Nanum Myeongjo', serif;
    font-size: large;



  }
  #signupStyling {
    color: orange;
    text-align: center;
    font-family: 'Nanum Myeongjo', serif;
  }
  
  #signh2styling{
    color:orange;
    font-size: large;
  }
  @media only screen and(min-width:600px) {
    
    .inputStyling {
      height: 50px;
      width: 300px;
      font-size: x-large;
    }
    .ptagStyling {
      font-size: 2em;
      font-weight: bolder;

    }
    #signupStyling {
      border-radius: 20px;
      width: 150px;
      font-size: 2em;
      padding: 20px;
    }
  }
  
  #signh2styling{
    font-size: 2em;
  }
  @media only screen and(min-width:1020px) {
    #formStyling{
      margin-top: -3vh;
      .ptagStyling{
        font-size:1.5em;
      }
      .inputStyling{
        font-size: small;
        width:200px;
        height: 40px;
      }
    }
  }
}
</style>