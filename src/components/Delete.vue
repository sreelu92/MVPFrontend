<template>
  <div>
    <h3 id="delh3">Enter your password</h3>
    <input
      type="password"
      id="passwordInput"
      v-model="password"
      placeholder="Enter your password"
    />
    <h3 id="deleteh3" @click="deleteMessage">Delete</h3>
    <div v-if="isClicked" id="deleteDiv">
      <h3 id="confirmh3">Are you sure?</h3>
      <div id="deletedivStylings">
        <button class="delbtnstyling" @click="cancelMessage">Cancel</button>
        <button class="delbtnstyling" @click="deleteProfile">Ok</button>
      </div>
    </div>
    <h3 id="statush3">{{ status }}</h3>
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
      status: "",
    };
  },
  methods: {
    deleteProfile: function () {
      axios
        .request({
          url: "https://noteapp.ml/api/users",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: this.token,
            password: this.password,
          },
        })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "welcome-page" });
          cookies.remove("userId");
          cookies.remove("username");
          cookies.remove("loginToken");
        })
        .catch((error) => {
          console.log(error);
          this.status = "Something went wrong!. Try again";
        });
    },
    deleteMessage: function () {
      this.isClicked = true;
    },
    cancelMessage: function () {
      this.isClicked = false;
      this.status = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap");

#delh3 {
  color: orange;
  text-align: center;
  font-family: "Merienda", cursive;
}
#passwordInput {
  margin-top: 6vh;
  border-radius: 15px;
  height: 5vh;
  text-align: center;
  box-shadow:5px 2px grey;

}

#deleteh3 {
  font-size: x-large;
  color: orange;
  text-align: center;
  font-family: "Merienda", cursive;
  margin-top: 4vh;
}
#deleteDiv {
  margin-top: 3vh;
  #confirmh3 {
    text-align: center;
  }
  #deletedivStylings {
    display: grid;
    margin-top: 2vh;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    .delbtnstyling {
      border-radius: 10px;
      height: 5vh;
      width: 60%;
      background-color: orange;
      color: white;
    }
  }
}
#statush3 {
  margin-top: 3vh;
  margin-left: 4vw;
}

@media only screen and(min-width:600px) {
  #delh3 {
    font-size: xx-large;
  }
  #deleteh3 {
    font-size: 2.5em;
  }
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
  #confirmh3 {
    font-size: 2.5em;
  }
  #deletedivStylings {
    .delbtnstyling {
      font-size: x-large;
    }
  }
  #statush3 {
    font-size: xx-large;
  }
}
@media only screen and(min-width:1020px) {
  #delh3{
    font-size: x-large;
  }
  #passwordInput{
    font-size:large;
  }
  #deleteh3{
    font-size: xx-large;
  }
  #deleteDiv{
    #confirmh3{
      font-size: x-large;
    }
    #deletedivStylings{
      .delbtnstyling{
        font-size: large;
      }
    }

  }

}

</style>