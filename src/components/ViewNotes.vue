<template>
  <div id="maincontainer">
    <div id="styling">
      <h3
        class="buttonStyling"
        @click="
          getmyNotes();
          show = true;
        "
      >
        View all notes
      </h3>
      <h3
        class="buttonStyling"
        @click="
          orderNotes();
          show = false;
        "
      >
        Order by date
      </h3>
    </div>
    <div id="notelayout">
      <div id="noteStyling" v-for="note in notes" :key="note.noteId">
        <h3 id="h3Styling">{{ note.note }}</h3>
        <br /><br />
        <div id="editdiv">
          <img
            id="deleteimg"
            @click="deleteNote(note.noteId)"
            src="https://cdn.onlinewebfonts.com/svg/img_416864.png"
            alt="image of trash can"
          />
          <edit-notes
            :noteid="note.noteId"
            @contentChanged="updateList"
          ></edit-notes>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import EditNotes from "./EditNotes.vue";
export default {
  name: "view-notes",
  components: {
    EditNotes,
  },
  data() {
    return {
      userid: cookies.get("userId"),
      token: cookies.get("loginToken"),
      notes: [],
      show: true,
    };
  },
  mounted() {
    this.getmyNotes();
    if (this.token == undefined) {
      this.$router.push({ name: "welcome-page" });
    }
  },
  methods: {
    getmyNotes: function () {
      axios
        .request({
          url: "https://noteapp.ml/api/notes",

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
          this.notes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    orderNotes: function () {
      axios
        .request({
          url: "https://noteapp.ml/api/ordernotes",

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
          this.notes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteNote(noteId) {
      axios
        .request({
          url: "https://noteapp.ml/api/notes",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },

          data: {
            loginToken: this.token,
            noteId: noteId,
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
      if (this.show) {
        this.getmyNotes();
      } else {
        this.orderNotes();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap");
#maincontainer {
  #styling {
    margin-top: 25vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8vw;
    .buttonStyling {
      border-radius: 8px;
      height: 5vh;
      color: orange;
      font-family: "Merienda", cursive;
    }
  }
  display: grid;
  row-gap: 2vh;
  justify-items: center;
  align-items: center;
  #notelayout {
    display: grid;
    justify-items: center;
    align-items: center;
    #noteStyling {
    border: 1px solid grey;
    border-radius: 5px;
    width: 80%;
    margin-top: 6vh;
    text-align: center;
    border-color: orange;
    #editdiv {
      display: grid;
      grid-template-columns: 1fr 1fr;
      #deleteimg {
        width: 15%;
        margin-left: 5vw;
      }
      
    }
  }

  }

  
  @media only screen and(min-width:600px) {
    #styling {
      .buttonStyling {
        font-size: xx-large;
      }
    }
    #notelayout {
      #noteStyling {
        height: 26vh;
        border-radius: 10px;
        #h3Styling {
          font-size: 2.5em;
        }
        #editdiv {
          margin-top: 5vh;
          #deleteimg {
            width: 14%;
          }
           
        }
      }
    }
  }
  @media only screen and(min-width:1020px) {
    #styling {
      .buttonStyling {
        font-size: x-large;
        transition: all 0.25s ease-in-out;
        &:hover{
          color: coral;
        }
      }
    }
    #notelayout {
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
       
      #noteStyling {
        width: 60%;

        #h3Styling {
          font-size: x-large;
          
        }
        
      }
    }
  }
}
</style>