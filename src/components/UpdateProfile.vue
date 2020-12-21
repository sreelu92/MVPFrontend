<template>
  <div>
    <div id="infos">
      <h3 class="proh3styling">Email</h3>
      <input class="inputStyling" type="text" id="updateEmail" v-model="email" placeholder="Enter your new email"/>
      <h3 class="proh3styling">Username</h3>
      <input
        class="inputStyling"
        type="text"
        id="updateUsername"
        v-model="username" placeholder="Enter your new username"
      />
      <h3 class="proh3styling">Password</h3>
      <input
        class="inputStyling"
        type="password"
        id="updatePass"
        v-model="password" placeholder="Enter your new password"
      />
    </div>
    <h3 id="updateh3" @click="updateProfile">Update</h3>
    <h3 id="updateprostatus">{{ status }}</h3>

  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "update-page",
  data() {
    return {
      email: "",
      password: "",
      token: cookies.get("loginToken"),
      status: "",
      username: "",
    };
  },
  methods: {
    updateProfile: function () {
      axios
        .request({
          url: "https://noteapp.ml/api/users",

          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: this.email,
            password: this.password,
            loginToken: this.token,
            username: this.username,
          },
        })
        .then((response) => {
          console.log(response);
          console.log("updated");

          this.status = "Profile successfully updated";
        })
        .catch((error) => {
          console.log(error);
          this.status = "Something went wrong";
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap');

#updateh3 {
  height: 30px;
  color: orange;
  text-align: center;
  margin-top:5vh ;
  font-size: x-large;
  font-family: 'Merienda', cursive;
}
#infos{
      display: grid;
      row-gap: 2vh;
      margin-top: 1vh;
      .proh3styling{
        text-align: center;
      }
      .inputStyling{
        border-radius: 15px;
        height:5vh;
        box-shadow:5px 2px grey;
          text-align: center;


      }
  }
  #updateprostatus{
    margin-top: 4vh;
  }
@media only screen and(min-width:600px) {
  .inputStyling {
    width: 100%;
    height: 50px;
    font-size: x-large;
    text-align: center;
  }
  .proh3styling{
        font-size: xx-large;
      }
  
  #updatebtnStyling {
    height: 50px;
    width: 200px;

    font-size: x-large;
  }
  #updateh3{
    font-size: 2.5em;
  }
  #updateprostatus{
    margin-top: 7vh;
    text-align: center;
    font-size: xx-large;
  }

  @media only screen and(min-width:1020px) {
     #infos{
       .proh3styling{
         font-size: x-large;
       }
       .inputStyling{
         font-size: small;
       }
     }
     #updateh3{
       font-size: xx-large;
     }
     #updateprostatus{
       font-size: larger;
     }
  }
}
</style>