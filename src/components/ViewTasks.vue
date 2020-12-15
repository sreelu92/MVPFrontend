<template>
    <div id="container">
        <div id="btnStyling">
            <button class="buttonStyling"  @click="getmyTasks">View all tasks</button>
            <button class="buttonStyling"  @click="ordermyTasks">Order by date</button>
            <button class="buttonStyling"  @click="todaysTasks">Today's task</button>


            
        </div>
        
        <div id="taskStyling"  v-for="task in tasks" :key="task.taskId" >
            <h3>{{ task.task }}</h3><br>
            <h3>{{"on"+" "+  task.targetDate}}</h3>
            <div id="editdiv">
                <img id="deleteimg" @click="deleteTask(task.taskId)" src="https://cdn.onlinewebfonts.com/svg/img_416864.png" alt="image of trash can">
                <edit-task :taskid="task.taskId" @contentChanged="updateList"></edit-task>
            </div>
           
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
import EditTask from './EditTask.vue'
export default {
  name:"view-task",
  components: {
    EditTask,
  },
 
  data() {
      return {
        userid:cookies.get("userId"),
        token:cookies.get("loginToken"),
        tasks:[]
      };
  },
  mounted() {
    this.getmyTasks();
    if (this.token == undefined) {
      this.$router.push({ name: "welcome-page" });
    }
  },
  methods: {
    getmyTasks:function() {
      
      axios
        .request({
          url: "http://127.0.0.1:5000/api/tasks",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            userId: this.userid
          }
        })
        .then(response => {
          console.log(response)
          this.tasks= response.data; 
        })
        .catch(error => {
          console.log(error);
        });
    },
    ordermyTasks:function(){
      axios
        .request({
          url: "http://127.0.0.1:5000/api/ordertasks",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            userId: this.userid
          }
        })
        .then(response => {
          console.log(response)
          this.tasks= response.data;
        })
        .catch(error => {
          console.log(error);
        });

    },
    todaysTasks:function(){
       axios
        .request({
          url: "http://127.0.0.1:5000/api/daytasks",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            userId: this.userid
          }
        })
        .then(response => {
          console.log(response)
          this.tasks= response.data;
        })
        .catch(error => {
          console.log(error);
        });

    },
     deleteTask(taskId) {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/tasks",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },

          data: {
            loginToken: this.token,
            taskId:taskId
          }
        })
        .then(response => {
          console.log(response)
          this.getmyTasks();
        })
        .catch(error => {
          console.log(error);
        });
     },
     updateList:function(){
        this.getmyTasks();

     }
    
  }
};
                
            
        
        
    
    
</script>

<style lang="scss" scoped>
#container{
    display: grid;
    row-gap: 3vh;
    justify-items: center;
    align-items: center;
    #btnStyling{
        margin-top:8vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 6vw;
        .buttonStyling{
            background-color: orange;
            color: white;
            border-radius: 5px;
            height: 5vh;

        }
    }
    #taskStyling{
        
    border:1px solid grey;
    width:80%;
    border-radius:5px;
    text-align: center;
    #editdiv{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        margin-top: 4vh;
        #deleteimg{
            width:20%;
            margin-left: 5vw;

        }

    }
    
    }

}


    



</style>