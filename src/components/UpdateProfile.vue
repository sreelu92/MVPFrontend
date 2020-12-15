<template>
  <div>
    <h3>{{ status }}</h3>
    <div id="infos">
      <h3>Email</h3>
      <input class="inputStyling" type="text" id="updateEmail" v-model="email"/>
      <h3>Username</h3>
      <input
        class="inputStyling"
        type="text"
        id="updateUsername"
        v-model="username"
      />
      <h3>Password</h3>
      <input
        class="inputStyling"
        type="password"
        id="updatePass"
        v-model="password"
      />
    </div>
    <h3 id="updateh3" @click="updateProfile">Update</h3>
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
          url: "http://127.0.0.1:5000/api/users",

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
#updateh3 {
  height: 30px;
  color: orange;
  text-align: center;
  margin-top:3vh ;
  font-size: x-large;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
#infos{
      display: grid;
      row-gap: 2vh;
      margin-top: 6vh;
  }
@media only screen and(min-width:600px) {
  .inputStyling {
    width: 90%;
    height: 50px;
    font-size: x-large;
  }
  
  #updatebtnStyling {
    height: 50px;
    width: 200px;

    font-size: x-large;
  }

  @media only screen and(min-width:1020px) {
  }
}
</style>