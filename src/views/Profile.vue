<template>
  <div id="container">
    <header-page></header-page>
    <div id="firstprodiv">
      <img id="profileimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejflJotGiETggVtun9j5DaFOTDQszDKSuXA&usqp=CAU" alt="image of profile icon">
    </div>
    <div id="secondprodiv">
      <h3>{{ "Username:" + " " + username }}</h3>
      <h3>{{ "Email:" + " " + email }}</h3>
    </div>
    <div id="thirddiv">
      <h2>Edit My Profile</h2>
      <update-page></update-page>

    </div>
    <div  id="fourthdiv">
      <h2>Delete My Profile</h2>
      <delete-page></delete-page>
     

    </div>
     <div id="profilefooter">
        <footer-page></footer-page>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import HeaderPage from "../components/Header.vue";
import UpdatePage from "../components/UpdateProfile.vue";
import DeletePage from "../components/Delete.vue";
import FooterPage from "../components/Footer.vue"

export default {
  name: "profile-page",
  components: {
    HeaderPage,
    UpdatePage,
    DeletePage,
    FooterPage
  },
  data() {
    return {
      userid: cookies.get("userId"),
      token: cookies.get("loginToken"),
      username: "",
      email: "",
    };
  },
  mounted() {
    this.getInfo();
    if (this.token == undefined) {
      this.$router.push({ name: "welcome-page" });
    }
  },
  methods: {
    getInfo: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/users",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            userId: this.userid,
          },
        })
        .then((response) => {
          this.username = response.data.username;
          this.email = response.data.email;
          console.log(response);
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
  min-height: 10vh;
  
  #firstprodiv {
    margin-top: 15vh;
    text-align: center;
    #profileimage{
      width:18%;
    }
  }
  #secondprodiv {
    display:grid;
    justify-items: center;
    align-items: center;
    margin-top: 4vh;
    row-gap: 2vh;
    
  }
  #thirddiv{
    display: grid;
    margin-top: 13vh;
    justify-items: center;
    align-items: center;
  }
  #fourthdiv{
    display: grid;
    margin-top: 10vh;
    justify-items: center;
    align-items: center;
    min-height: 30vh;
  }
  
}
</style>