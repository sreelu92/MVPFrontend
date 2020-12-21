<template>
    <div>
        <img id="editimg" @click="confirmEdit" src="https://www.clipartmax.com/png/middle/322-3225969_service-icon-edit-icon-transparent-background.png" alt="image of edit icon">
        <div v-if="!isClicked" >
            <textarea v-model="newContent" id="editcontent" placeholder="Edit this note"></textarea>
            <h4 id="edith4" @click="EditNote">Update</h4>

        </div>


    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
export default {
    name:"edit-notes",
    props: {
        noteid:Number
    },
    data() {
        return {
            token:cookies.get("loginToken"),
            isClicked:true,
            newContent:""
            };
    },
    methods: {
        EditNote:function(){


            axios
            .request({
                url: "https://noteapp.ml/api/notes",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    },
                data: {
                    loginToken: this.token,
                    noteId: this.noteid,
                    content: this.newContent
                }
            })
            .then(response => {
                console.log(response)
                this.newContent = response.data;
                this.$emit("contentChanged", response.data.content);
                this.newContent="";
                this.isClicked=!this.isClicked;


            })
            .catch(error => {
                console.log(error);
                this.isClicked=!this.isClicked;

            });
        },
        confirmEdit:function(){
            this.isClicked=!this.isClicked;
        }
    }
         
        
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap');

#editimg{
    width: 19%;
    margin-left: 7vw;
}
#editcontent{
    margin-top: -6vh;
    height: 10vh;
    border-color:orange;
    margin-right: 2vw;
    text-align: center;
}
#edith4{
    font-family: 'Merienda', cursive;
    color:orange;


}

  @media only screen and(min-width:600px) {
    
           #editimg{

          width: 17%;
           }
           #editcontent{
          height: 12vh;
          margin-top: -11vh;
          width: 100%;
          font-size: xx-large;
          text-align: center;
          margin-left: -3vw;
       
        
        }
        #edith4{
            font-size: xx-large;
        }
         
         
        
     

      }
    @media only screen and(min-width:1020px) {
        #editcontent{
            font-size: larger;

        }
        #edith4{
            font-size: larger;
        }

    }

     
  


</style>