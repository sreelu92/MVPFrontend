<template>
  <div id="container">
    <div id="btnStyling">
      <h5
        class="buttonStyling"
        @click="
          getmyTasks();
          show = false;
        "
      >
        All tasks
      </h5>
      <h5
        class="buttonStyling"
        @click="
          ordermyTasks();
          show = true;
        "
      >
        Order by date
      </h5>

      <h5 class="buttonStyling" @click="todaysTasks();click=false">Today's task</h5>
    </div>
    <div id="tasklayout">
      <div id="taskStyling" v-for="task in tasks" :key="task.taskId">
        <h3 class="taskStyleh3">{{ "Task: " + "" + task.task }}</h3>
        <br />
        <h3 class="taskStyleh3">
          {{ "Target date: " + "  " + task.targetDate }}
        </h3>
        <div id="editdiv">
          <img
            id="deleteimg"
            @click="deleteTask(task.taskId)"
            src="https://cdn.onlinewebfonts.com/svg/img_416864.png"
            alt="image of trash can"
          />
          <edit-task
            :taskid="task.taskId"
            @contentChanged="updateList"
          ></edit-task>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import EditTask from "./EditTask.vue";
export default {
  name: "view-task",
  components: {
    EditTask,
  },

  data() {
    return {
      userid: cookies.get("userId"),
      token: cookies.get("loginToken"),
      tasks: [],
      show: true,
      click: true,
    };
  },
  mounted() {
    this.getmyTasks();
    if (this.token == undefined) {
      this.$router.push({ name: "welcome-page" });
    }
  },
  methods: {
    getmyTasks: function () {
      axios
        .request({
          url: "https://noteapp.ml/api/tasks",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            userId: this.userid,
          },
        })
        .then((response) => {
          console.log(response);
          this.tasks = response.data;
          this.click=true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ordermyTasks: function () {
      axios
        .request({
          url: "https://noteapp.ml/api/ordertasks",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            userId: this.userid,
          },
        })
        .then((response) => {
          console.log(response);
          this.tasks = response.data;
          this.click=true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    todaysTasks: function () {
      axios
        .request({
          url: "https://noteapp.ml/api/daytasks",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            userId: this.userid,
          },
        })
        .then((response) => {
          console.log(response);
          this.tasks = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteTask(taskId) {
      axios
        .request({
          url: "https://noteapp.ml/api/tasks",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },

          data: {
            loginToken: this.token,
            taskId: taskId,
          },
        })
        .then((response) => {
          console.log(response);
          this.updateList();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateList: function () {
      if(this.show==true &&this.click==false){
        this.todaysTasks();
      }
      if(this.show==false&&this.click==false){
        this.todaysTasks();
      }
      if (this.show==true&&this.click==true) {
        this.ordermyTasks();
      } else {
        this.getmyTasks();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap");

#container {
  display: grid;
  row-gap: 3vh;
  justify-items: center;
  align-items: center;
  #btnStyling {
    margin-top: 29vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 6vw;
    justify-items: center;
    align-items: center;
    .buttonStyling {
      color: orange;
      border-radius: 5px;
      height: 5vh;
      font-family: "Merienda", cursive;
    }
  }
  #tasklayout{
    display: grid;
    justify-items: center;
    align-items: center;
     #taskStyling {
    border: 1px solid grey;
    width: 80%;
    border-radius: 5px;
    text-align: center;
    margin-top: 4vh;
    border-color: orange;
    #editdiv {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 4vh;
      #deleteimg {
        width: 15%;
        margin-left: 5vw;
      }
    }
  }

  }
 
  @media only screen and(min-width:600px) {
    #btnStyling {
      font-size: 2.2em;
    }
    #taskStyling {
      height: 28vh;
      border-radius: 10px;
      .taskStyleh3 {
        font-size: 2em;
      }
      #editdiv {
        margin-top: 6vh;
        #deleteimg {
          width: 12%;
        }
      }
    }
  }
  @media only screen and(min-width:1020px) {
    #btnStyling{
      .buttonStyling{
        transition: all 0.25s ease-in-out;
        &:hover{
          color: coral;
        }
      }

    }
    
    #tasklayout {
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      
      #taskStyling {
        width: 60%;
        height: 30vh;

        .taskStyleh3{
          font-size: x-large;
        }
        #editdiv{
          margin-top: 5vh;

          #deleteimg{
            width: 12%;
          }

        }
      }
     
    }
  }
}
</style>