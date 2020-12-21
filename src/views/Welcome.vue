<template>
  <div id="container">
    <h2 id="headtag">My Note App</h2>
    <!-- <img
      id="logo"
      src="(https://i.pinimg.com/originals/5a/f2/aa/5af2aadc5d7213c756513ddc633e8769.jpg"
      alt="image of note"
    /> -->
    <div id="links">
      <router-link class="linkStyling" to="/signup"> Sign up</router-link>
      <router-link class="linkStyling" to="/login">Login</router-link>
    </div>
  </div>
</template>z

<script>
export default {
  name: "welcome-page",
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');
#container {
  border-radius: 25px;
  border:2px solid black;
  height:99vh;
  background-image: url(https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80);
  #headtag {
    text-align: center;
    margin-top: 20vh;
    
   font-family: 'Kalam', cursive;

    color: orange;
    font-size: xx-large;
  }
  #logo {
      width:35%;
      margin-left:30vw;
      margin-top: 10vh;
  }
  #links {
    display: grid;
    row-gap: 5vh;
    justify-items: center;
    align-items: center;
    margin-top: 12vh;

    .linkStyling {
      text-decoration: none;
      color: orange;
      text-align: center;
      font-size: x-large;
       font-family: 'Kalam', cursive;

    }
  }
  @media only screen and(min-width:600px) {
    background-image: url(https://wallpapercave.com/wp/wp4590354.jpg);
    #headtag{
      font-size: 3.5em;
    }
    #links{
      .linkStyling{
        font-size: 3em;
        margin-top: 4vh;
        font-weight:900;
      }
    }
  }
  @media only screen and(min-width:1020px) {
    border-radius:0;
    background-image: url(https://images.pexels.com/photos/97076/pexels-photo-97076.jpeg?cs=srgb&dl=notebook-pen-table-97076.jpg&fm=jpg);
   #links{
     font-size: small;
   }
  
  }



}
</style>