<template>
  <div id="footcontainer">
    <div id="contentdiv">
      <h4 id="h4tagone">copyright@2020mynoteapp.ml.</h4>
      <h4 id="h4tagtwo">All rights reserved.</h4>
      <h5 id="h5tagone">Website designed by Sree</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-page",
};
</script>

<style lang="scss" scoped>

#footcontainer{
    height: 21vh;
    background-image: url(https://wallpapercave.com/wp/wp3269194.jpg);
     margin-top: 8vh;
     border-radius: 1px 1px 30px 30px;

   #contentdiv{
     display: grid;
     row-gap: 2vh;
     #h4tagone{
       color: orange;
      margin-top: 6vh;
      text-align: center;

       
     }
     #h4tagtwo{
       color: orange;
       text-align: center;
     }
     #h5tagone{
       color: orange;
       text-align: center;
     }


   }
    
   
    
  
  @media only screen and(min-width:600px) {
    font-size: xx-large;
  }
  @media only screen and(min-width:1020px) {
    border-radius: 0px;
    font-size:large ;
    height: 21vh;
    #contentdiv{
      #h5tagone{
        color: orange;
        margin-left: 87%;
      }

    }
  }




}
 
</style>