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
    <div id="moddiv">
      <h3 @click="show">Edit My Profile</h3>
      <h3 @click="show">Delete My Profile</h3>



    </div>
    <div id="thirddiv" v-if="isClicked">
      <update-page></update-page>

    </div>
    <div  id="fourthdiv" v-if="!isClicked">
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
      isClicked:true
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
          url: "https://noteapp.ml/api/users",

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
    show:function(){
      this.isClicked=!this.isClicked;
    }
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap');

#container {
  min-height: 20vh;
  border: 2px solid black;
  border-radius: 30px;
  
  #firstprodiv {
    margin-top: 25vh;
    text-align: center;
    #profileimage{
      width:23%;
    }
  }
  #secondprodiv {
    display:grid;
    justify-items: center;
    align-items: center;
    margin-top: 4vh;
    row-gap: 2vh;
    
  }
  #moddiv{
    display: grid;
    color: orange;
    margin-top: 9vh;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    font-family: 'Merienda', cursive;

  }
  #thirddiv{
    display: grid;
    margin-top: 13vh;
    justify-items: center;
    align-items: center;
  }
  #fourthdiv{
    display: grid;
    margin-top: 4vh;
    justify-items: center;
    align-items: center;
    min-height: 30vh;
  }
  @media only screen and(min-width:600px) {
    #secondprodiv{
      font-size: 2em;
    }
    #moddiv{
      font-size: xx-large;
    }
  }
  @media only screen and(min-width:1020px) {
    border-radius: 0px;
    #firstprodiv{
      #profileimage{
        width: 7%;
      }
    }
    #secondprodiv{
      font-size: x-large;
    }
    #moddiv{
      font-size: x-large;
        transition: all 0.25s ease-in-out;
        &:hover{
          color: coral;
        }
      
    }
    #fourthdiv{
      margin-top: 13vh;
    }
  }


  
}
</style>