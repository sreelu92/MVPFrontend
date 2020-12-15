<template>
  <div id="container">
    <div id="formStyling">
      <p class="ptagStyling">Email</p>
      <input
        class="inputStyling"
        type="text"
        id="email-input"
        v-model="email"
      />
      <p class="ptagStyling">Username</p>
      <input
        class="inputStyling"
        type="text"
        id="username-input"
        v-model="username"
      />
      <p class="ptagStyling">Password</p>
      <input
        class="inputStyling"
        type="password"
        id="pawwsord-input"
        v-model="password"
      />
    </div>
    <h3 @click="signupUser" id="signupStyling">Sign Up</h3>
    <h2>{{ status }}</h2>
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
          url: "http://127.0.0.1:5000/api/users",

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
          this.status = "User Already Exit";
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
  margin-top: 5vh;
  display: grid;
  font-size: large;
  font-weight: bold;
  justify-items: center;
  align-items: center;
  row-gap: 4vh;
  .inputStyling {
    height: 30px;
    width: 200px;
  }
  #formStyling {
    display: grid;
    text-align: center;
    row-gap: 3vh;
    color: orange;
    font-family: sans-serif;
  }
  #signupStyling {
    color: orange;
    text-align: center;
    font-family: sans-serif;
  }
  @media only screen and(min-width:600px) {
    #formStyling {
      padding: 15%;
      background-color: rgb(29, 161, 242);
    }
    .inputStyling {
      height: 35px;
      width: 300px;
      font-size: x-large;
    }
    .ptagStyling {
      font-size: xx-large;
    }
    #signupStyling {
      border-radius: 20px;
      width: 150px;
      font-size: x-large;
      padding: 20px;
    }
  }
  @media only screen and(min-width:1020px) {
    #formStyling {
      padding: 50px;
      #bio-input {
        font-size: larger;
      }
    }
  }
}
</style>