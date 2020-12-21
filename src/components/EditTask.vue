<template>
  <div>
    <img
      id="editimg"
      @click="confirmEdit"
      src="https://www.clipartmax.com/png/middle/322-3225969_service-icon-edit-icon-transparent-background.png"
      alt="image of edit icon"
    />
    <div v-if="!isClicked" id="edittaskdisplay">
      <textarea
        id="taskedittext"
        v-model="newContent"
        placeholder="Edit this task"
      ></textarea>
      <input id="taskeditdate" v-model="taskdate" type="date" />
      <h4 id="edittaskh4" @click="EditTask">Update</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "edit-task",
  props: {
    taskid: Number,
  },
  data() {
    return {
      token: cookies.get("loginToken"),
      isClicked: true,
      newContent: "",
      taskdate: "",
    };
  },
  methods: {
    EditTask: function () {
      axios
        .request({
          url: "https://noteapp.ml/api/tasks",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: this.token,
            taskId: this.taskid,
            content: this.newContent,
            date: this.taskdate,
          },
        })
        .then((response) => {
          console.log(response);
          this.newContent = response.data;
          this.$emit("contentChanged", response.data.content);
          this.isClicked = true;
          this.newContent = "";
        })
        .catch((error) => {
          console.log(error);
          this.isClicked = !this.isClicked;
        });
    },
    confirmEdit: function () {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap");

#editimg {
  width: 19%;
}
#edittaskdisplay {
  display: grid;
  #taskedittext {
    border-color: orange;
    text-align: center;
  }
  #taskeditdate {
    border-color: orange;
  }
  #edittaskh4 {
    color: orange;
    font-family: "Merienda", cursive;
  }
}

@media only screen and(min-width:600px) {
  #editimg {
    width: 15%;
    margin-left: 6vw;
  }
  #edittaskdisplay {
    margin-top: -7vh;
    #taskedittext {
      height: 9vh;
      margin-left: -8vw;
      font-size: xx-large;
      border-radius: 10px;
      width: 110%;
    }
    #taskeditdate {
      width: 60%;
      height: 4vh;
      margin-left: 11vw;
      font-size: x-large;
    }
    #edittaskh4 {
      font-size: xx-large;
    }
  }
}
@media only screen and(min-width:1020px) {
    #edittaskdisplay{
        #taskedittext{
            font-size: large;
            margin-left: -3vw;
        }
        #taskeditdate{
            font-size: small;
            margin-left: 4vw;
            text-align: center;
        }
        #edittaskh4{
            font-size:large;
        }

    }

}

</style>