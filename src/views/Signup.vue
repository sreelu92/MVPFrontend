<template>
    <div id="container">
        <router-link id="routerStyling" to="/"> Go Back</router-link>

        <signup-form></signup-form>

    </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue"
    export default {
        name:"signup-page",
        components:{
            SignupForm,
        }
        
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap');

#container{
  border-radius: 25px;
  border:2px solid black;
  height:99vh;
  background-image: url(https://wallpapercave.com/wp/wp6850797.jpg);

    #routerStyling{
        text-decoration: none;
        color:orange;
        font-size: large;
        font-family: 'Nanum Myeongjo', serif;

        margin-left: 5vw;
    }
    @media only screen and(min-width:600px) {
        background-image: url(https://wallpapercave.com/wp/wp4590354.jpg);
        #routerStyling{
            font-size: 2em;

        }
    }
    @media only screen and(min-width:1020px) {
        background-image: url(https://wallpapercave.com/wp/wp6850797.jpg);
        border-radius: 0;
        #routerStyling{
            font-size: x-large;
        }
    }


}


</style>