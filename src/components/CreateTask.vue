<template>
  <div>
    <div id="taskfirstdiv">
      <img
        id="createtaskimg"
        src="https://i.pinimg.com/originals/fc/87/ad/fc87ad6897df2ad0656cc5ea01da958b.jpg"
        alt="image of task"
      />
      <h3 id="taskh3">New Task</h3>
      <img
        id="taskimage"
        @click="showtask"
        src="https://icon-library.com/images/5631de589c.png"
        alt="icon for create"
      />
    </div>
    <div v-if="!isClicked" id="taskseconddiv">
      <textarea
        v-model="taskcontent"
        id="textStyling"
        placeholder="Write a new task"
      ></textarea>
      <input v-model="taskdate" type="date" id="taskdate" />
      <div id="taskbutton">
        <h3 id="saveStyling" @click="createtask">Save</h3>
        <h3 id="clearStyling" @click="clearlist">Clear</h3>
      </div>
    </div>
    <div v-if="!showyes" id="taskyesdiv">
      <img
        id="taskyesimg"
        src="https://coastalsafety.com/wp-content/uploads/2019/06/people-of-the-world-25.jpg"
        alt="image of yes"
      />
      <h4 id="taskyesh4" class="taskcreateh4">{{ status }}</h4>
    </div>
    <div v-if="!showno" id="tasknodiv">
      <img
        id="tasknoimg"
        src="https://3.bp.blogspot.com/-GSIC3wSXvjo/UOZ-nRbjiOI/AAAAAAAAAoE/dlenZIw-t9E/s1600/14.jpg"
        alt="image of no"
      />
      <h4 id="tasknoh4" class="taskcreateh4">{{ status }}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "create-task",
  data() {
    return {
      isClicked: true,
      token: cookies.get("loginToken"),
      status: "",
      taskcontent: "",
      taskdate: "",
      showyes: true,
      showno: true,
    };
  },
  methods: {
    showtask: function () {
      this.isClicked = !this.isClicked;
    },
    clearlist: function () {
      this.taskcontent = "";
      this.taskdate = "";
      this.status = "";
      this.showyes = true;
      this.showno = true;
    },
    createtask: function () {
      axios
        .request({
          url: "https://noteapp.ml/api/tasks",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            content: this.taskcontent,
            loginToken: this.token,
            date: this.taskdate,
          },
        })
        .then((response) => {
          console.log(response);
          console.log("created");
          this.status = "New task added to your list";
          this.showyes = !this.showyes;
          this.showno=true;
        })
        .catch((error) => {
          console.log(error);
          this.status = "Something went wrong!";
          this.showno = !this.showno;
          this.showyes=true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap");

#taskfirstdiv {
  margin-top: -3vh;
  #taskimage {
    width: 12%;
    margin-left: 45%;
    margin-top: 3vh;
  }
  #createtaskimg {
    width: 23%;
    margin-top: 5vh;
    margin-left: 4vw;
  }
  #taskh3 {
    text-align: center;
    color: orange;
    font-family: "Nanum Myeongjo", serif;
    font-weight: bolder;

    font-size: x-large;
    margin-left: 4vw;
    margin-top: -14vh;
    transition: all 0.25s ease-in-out;
    &:hover {
      color: coral;
    }
  }
}
#taskseconddiv {
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: 3vh;
  margin-top: 4vh;
  #textStyling::selection {
    background-color: yellow;
  }
  #textStyling {
    border-radius: 5px;
    line-height: 8vh;

    width: 60%;
    text-align: center;
    border-color: orange;
  }
  #saveStyling {
    color: orange;
  }
  #taskh4 {
    text-align: center;
    color: orange;
  }
  #clearStyling {
    margin-top: 2vh;
    color: orange;
  }
  #taskdate {
    border-color: orange;
  }
}
#taskyesdiv {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  margin-top: 3vh;
  justify-items: center;
  align-items: center;
  #taskyesimg {
    width: 40%;
    margin-left: -13vw;
  }

  .taskcreateh4 {
    color: orange;
    margin-top: 4vh;
  }
  #taskyesh4 {
    margin-left: -30vw;
  }
}
#tasknodiv {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  justify-items: center;
  align-items: center;
  margin-top: 3vh;
  #tasknoimg {
    width: 40%;
    margin-left: -13vw;
  }
  .taskcreateh4 {
    color: orange;
    margin-top: 4vh;
  }
  #tasknoh4 {
    margin-left: -30vw;
  }
}
@media only screen and(min-width:600px) {
  #taskfirstdiv {
    #taskh3 {
      font-size: 3em;
      margin-left: 5vw;
    }
    #taskimage {
      margin-left: 45vw;
    }
  }
  #taskseconddiv {
    #textStyling {
      font-size: 2em;
      height: 15vh;
    }
    #taskdate {
      height: 3vh;
      font-size: 2em;
    }
    #saveStyling {
      font-size: 2.5em;
    }
    #clearStyling {
      font-size: 2.5em;
    }
  }
   #taskyesdiv{
    #taskyesh4{
      font-size: xx-large;
    }
    
  }
  #tasknodiv{
    #tasknoh4{
      font-size:xx-large ;
    }

  }
}
@media only screen and(min-width:1020px) {
  #taskfirstdiv {
    margin-top: -4vh;
    #createtaskimg {
      width: 18%;
      margin-top: 11vh;
    }
    #taskh3 {
      font-size: xx-large;
    }
    #taskimage {
      width: 8%;
      margin-left: 26vw;
      transition: all 0.25s ease-in-out;
      &:hover{
          opacity:0.7;
          }
     
    }
  }
  #taskseconddiv {
    margin-top: 10vh;
    #textStyling {
      line-height: 10vh;
      height: 19vh;
      font-size: x-large;
    }
    #taskdate {
      font-size: larger;
      margin-top: 2vh;
      height: 5vh;
    }
    #taskbutton {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
      font-size: 0.7em;
      margin-top: 3vh;
      #saveStyling {
        margin-right: 24vw;
      }
      #clearStyling {
        margin-left: 12vw;
        margin-top: 0vh;
      }
    }
  }
  #taskyesdiv{
    margin-top: 6vh;

    #taskyesh4{
      font-size:x-large;
        margin-left: -19vw;

    }
    #taskyesimg{
      margin-left: 3vw;

    }
    
  }
  #tasknodiv{
     margin-top: 6vh;
     #tasknoimg{
         margin-left: 3vw;
     }


    #tasknoh4{
      font-size:x-large ;
      margin-left: -19vw;
    }

  }
}
</style>