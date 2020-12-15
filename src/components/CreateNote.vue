<template>
  <div id="container">
    <div id="createfirstdiv">
      <img
        id="createimg"
        src="https://st2.depositphotos.com/1060916/6816/i/600/depositphotos_68160003-stock-photo-man-with-diary.jpg"
        alt="image of note"
      />

      <h3 id="noteh3" @click="shownote">New Note</h3>
    </div>
    <div v-if="!isClicked" id="createsecdiv">
     
      <textarea v-model="notes" id="createtextarea" placeholder="Write a note"></textarea>
      <div id="createthirddiv">
        <h3 @click="createnote">Save</h3>
        <br /><br />
        <h3 @click="clearlist">Clear</h3>
      </div>
      <h4 id="createh4">{{ status }}</h4>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
export default {
  name: "create-note",
  data() {
    return {
      isClicked: true,
      status: "",
      notes:"",
      token:cookies.get("loginToken")
    };
  },
  methods: {
    shownote: function () {
      this.isClicked = !this.isClicked;
    },
    createnote: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/notes",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            content:this.notes,
            loginToken:this.token
          },
        })
        .then((response) => {
          console.log(response);
          console.log("created");

          this.status = "New note added to your list";
        })
        .catch((error) => {
          console.log(error);
          this.status = "Something went wrong";
        });
    },
    clearlist:function(){
      this.status="";
      this.notes="";

    }
  },
};
</script>

<style lang="scss" scoped>
#createfirstdiv {
  margin-top: 25vh;
  display: inline-flex;

  #noteh3 {
    text-align: center;
    color: orange;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: x-large;
    margin-left: 10vw;
    margin-top: 3vh;
  }
  #createimg {
    width: 30%;
    margin-left: 2vh;
  }
}
#createsecdiv {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 2fr 1fr;
  #createtextarea {
    border-radius: 5px;
    line-height: 8vh;
    width: 92%;
    margin-top: 4vh;
    text-align: center;
  }
  #createtextarea::selection{
    background-color: yellow;
  }
  #createthirddiv {
    margin-top: 2vh;
    color: orange;
  }
}

</style>