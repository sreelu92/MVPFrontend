<template>
  <div>
    <input type="password" id="passwordInput" v-model="password" />
    <h3 id="deleteh3" @click="deleteMessage">Delete</h3>
    <div v-if="isClicked" id="deleteDiv">
      <h3>Are you sure?</h3>
      <div id="deletedivStylings">
        <button @click="cancelMessage">Cancel</button>
        <button @click="deleteProfile">Ok</button>
      </div>
    </div>
    <h3>{{ status }}</h3>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  name: "delete-page",
  data() {
    return {
      token: cookies.get("loginToken"),
      password: "",
      isClicked: false,
      status: ""
    };
  },
  methods: {
    deleteProfile: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/users",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: this.token,
            password: this.password
          }
        })
        .then(response => {
          console.log(response)
          this.$router.push({ name: "welcome-page" });
          cookies.remove("userId");
          cookies.remove("username");
          cookies.remove("loginToken");
        })
        .catch(error => {
          console.log(error);
          this.status = "Password incorrect";
        });
    },
    deleteMessage: function() {
      this.isClicked = true;
    },
    cancelMessage: function() {
      this.isClicked = false;
    }
  }
};
</script>

<style lang="scss" scoped>

  #deleteh3 {
    font-size: x-large;
    color:orange;
    text-align: center;
  }
  #deleteDiv {
    #deletedivStylings {
      display: grid;
    }
  
  @media only screen and(min-width:600px) {
    #passwordInput {
      width: 90%;
      height: 50px;
      font-size: x-large;
    }
    #deletebtnStyling {
      height: 50px;
      width: 200px;
      font-size: x-large;
    }
  }
}
</style>