<template>
  <div id="headcontainer">
    <div id="firstdiv">
      <img id="hamicon" @click="showlist" src="https://www.foldsdelivers.com/wp-content/uploads/2018/12/mobile-menu-icon-orange.png" alt="hamburger icon">

      <h3 id="logouttag" @click="logout">Log out</h3>

    </div>
    <!-- <div id="seconddiv">
        <router-link to="/home"> <img id="firstimage" src="https://www.freeiconspng.com/thumbs/homepage-icon-png/homepage-icon-png-9.png"  alt="image of home icon"></router-link>
    </div> -->
    <div v-if="!isClicked" id="thirddiv">
      <div id="menudiv">
        <router-link class="routerStyling" to="/home"> Home</router-link>
        <router-link class="routerStyling" to="/notes">Notes</router-link>
        <router-link class="routerStyling" to="/task">Task</router-link>
        <router-link class="routerStyling" to="/profile">Profile</router-link>

      </div>
      

    </div>
    <div id="menudiv2">
        <router-link class="routerStyling" to="/home"> Home</router-link>
        <router-link class="routerStyling" to="/notes"> My Notes</router-link>
        <router-link class="routerStyling" to="/task">My Task</router-link>
        <router-link class="routerStyling" to="/profile">Profile</router-link>

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
      isClicked:true
    };
  },
  methods: {
    logout: function () {
      axios
        .request({
          url: "https://noteapp.ml/api/login",

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
    showlist:function(){
      this.isClicked=!this.isClicked;

    }

  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap');
  #headcontainer {
    width: 98.5%;
    height: 20vh;
    display: grid;
    border:1px  solid grey;
    border-radius: 30px 30px 1px 1px;
    opacity:1;
    background-image: url(https://wallpapercave.com/wp/wp3269194.jpg);
    position: fixed;
    #firstdiv {
      display: grid;
      grid-template-columns: 1fr 1fr;
      #hamicon{
        width: 20%;
        margin-top:2vh ;
      }
      
      #logouttag {
        color: orange;
        margin-top: 2vh;
        font-size:larger;
        margin-left: 28vw;
        font-family: 'Vollkorn', serif;

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
        position: relative;
        #menudiv{
          display: grid;
          row-gap: 1vh;
          position: absolute;
          top:-11vh;
          left:13vw;
          font-family: 'Nanum Myeongjo', serif;
          font-weight: bold;

        
        }
        
        .routerStyling{
            text-decoration: none;
            color: orange;

            font-family: Georgia, 'Times New Roman', Times, serif;
        }
    }
    #menudiv2{
      display: none;
    }
    @media only screen and(min-width:600px) {
      width: 99.3%;
      #firstdiv{
        #logouttag{
          font-size: 2.5em;
        }
        
      }
      #thirddiv{
        #menudiv{
          font-size: 1.7em;
          row-gap: 1vh;
        }

      }
       #menudiv2{
      display: none;
      }

    }
    @media only screen and(min-width:1020px) {
      background-image: url(https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80);
      border-radius: 0;
      width:100%;
      height: 15vh;
      #firstdiv{
        grid-template-columns:none;
        #hamicon{
          display: none;
        }
        #logouttag{
          margin-left: 90vw;
          font-size: x-large;
          transition: all 0.25s ease-in-out;
          &:hover{
            color: beige;
          }
        }
      }
      #menudiv2{
        display: grid;
        grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
        margin-left: 3vw;
        margin-top: -2vh;
        transition: all 0.25s ease-in-out;
        .routerStyling{
          text-decoration: none;
          color: orange;
          font-size: x-large;
          font-weight: bolder;
          &:hover{
            color:beige;
          }
        }
      }
    }


  }

</style>