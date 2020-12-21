<template>
  <div id="container">
    <header-page></header-page>
    <div id="hidiv">
      <h3 id="hih3" class="welcome">Hi</h3>
      <h3 id="welcomeh3" class="welcome">{{ this.user }}</h3>
    </div>

    <img
      id="hiimage"
      src="https://thumbs.dreamstime.com/b/3d-small-people-welcome-12776289.jpg"
      alt="image of 3d person"
    />
    <div id="layout">
       <create-note></create-note><br /><br />
       <create-task></create-task>

    </div>
    
    <div id="dektopview">
       <create-note></create-note>
       <create-task></create-task>
    </div>

    <footer-page></footer-page>
  </div>
</template>

<script>
import HeaderPage from "../components/Header.vue";
import CreateNote from "../components/CreateNote.vue";
import CreateTask from "../components/CreateTask.vue";
import FooterPage from "../components/Footer.vue";
import cookies from "vue-cookies";
export default {
  name: "home-page",
  data() {
    return {
      user: cookies.get("username"),
      token:cookies.get('loginToken')
    };
  },
  components: {
    HeaderPage,
    CreateNote,
    CreateTask,
    FooterPage,
  },
   mounted() {
    if (this.token == undefined) {
      this.$router.push({ name: "welcome-page" });
    }
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap");
#container {
  border-radius: 30px;
  border: 2px solid black;
  //background-image: url(https://cdn.pixabay.com/photo/2018/05/28/02/08/diary-3435095_960_720.jpg) ;
  #hidiv {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    margin-top: 28vh;

    #hih3 {
      margin-left: 12vw;
    }
    #welcomeh3 {
      margin-right: 4vw;
    }
  }
  #hiimage {
    width: 25%;
    margin-left: 35vw;
    margin-top: -8vh;
  }
  .welcome {
    color: orange;
    text-align: center;
    font-size: x-large;
    font-weight: bolder;
    font-family: "Merienda", cursive;
    margin-top: 2vh;
  }
  #dektopview{
      display: none;
    }
  @media only screen and(min-width:600px) {
    #hidiv {
      .welcome {
        font-size: 2.8em;
      }
    }
    #dektopview{
      display: none;
    }
  }
  @media only screen and(min-width:1020px) {
    border-radius: 0px;
    #hiimage{
      width:10%;
      margin-left: 45vw;
      margin-top:-10vh ;

    }
    #hidiv{
      #hih3{
        font-size: xx-large;
        margin-top: -3vh;
        margin-left: 35vw;
      }
      #welcomeh3{
        margin-top: -3vh;
        font-size: xx-large;
        margin-right: 30vw;


      }

    }
    #layout{
      display: none;
    }
    #dektopview{
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    }
  }

}
</style>