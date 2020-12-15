<template>
    <div>
        <div id="taskfirstdiv">
            <img  id="createtaskimg" src="https://media.istockphoto.com/vectors/tick-mascot-person-vector-id481454581?k=6&m=481454581&s=612x612&w=0&h=5xeQ_szL0HQbrAKH9vUuZe9Q7hv9gwaKyJmHAO2YxKQ=" alt="image of task">
            <h3 id="taskh3" @click="showtask">New Task</h3>

           

        </div>
        <div v-if="!isClicked" id="taskseconddiv">
            <textarea v-model="taskcontent" id="textStyling" placeholder="Write a new task"></textarea>
            <input v-model="taskdate" type="date" id="taskdate">
            <h3 id="saveStyling" @click="createtask">Save</h3> 
            <h3 id="clearStyling" @click="clearlist">Clear</h3>
            <h4 id="taskh4">{{status}}</h4>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
        name:"create-task",
        data() {
            return {
                isClicked:true,
                token:cookies.get('loginToken'),
                status:"",
                taskcontent:"",
                taskdate:""
            };
        },
        methods: {
            showtask:function(){
                this.isClicked=!this.isClicked;
            },
            clearlist:function(){
                this.taskcontent="";
                this.taskdate="";
                this.status="";
            },
            createtask: function () {
                axios
                .request({
                    url: "http://127.0.0.1:5000/api/tasks",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        content:this.taskcontent,
                        loginToken:this.token,
                        date:this.taskdate
                    },
                })
                .then((response) => {
                    console.log(response);
                    console.log("created");
                    this.status = "New task added to your list";
                })
                .catch((error) => {
                    console.log(error);
                    this.status = "Something went wrong";
                });
            }
           
        }
        
    };
</script>

<style lang="scss" scoped>
#taskfirstdiv{
    display: inline-flex;
    #createtaskimg{
    width:23%;
    margin-top: 5vh;
    margin-left: 4vw;
    }
    #taskh3 {
    text-align: center;
    color: orange;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: x-large;
    margin-left: 16vw;
    margin-top: 10vh;
  }
  

  
 

}
#taskseconddiv{
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 3vh;
    min-height: 30vh;
    #textStyling::selection{
    background-color: yellow;
  }
     #textStyling{
        border-radius: 5px;
        line-height: 4vh;
        
        width:60%;
        text-align: center;

    }
    #saveStyling{
        color: orange;
    }
    #taskh4{
        text-align: center;
    }
   #clearStyling{
       color:orange;
   }
  


}
 

   


</style>