<template>
    <div id="maincontainer">
        <div id="styling">
            <button class="buttonStyling" @click="getmyNotes">View all notes</button>
            <button class="buttonStyling" @click="orderNotes">Order by date</button>
        </div>
        
        <div id="noteStyling" v-for="note in notes" :key="note.noteId">
            <h3 id="h3Styling">{{ note.note }}</h3><br><br>
            <div id="editdiv">
                <img id="deleteimg" @click="deleteNote(note.noteId)" src="https://cdn.onlinewebfonts.com/svg/img_416864.png" alt="image of trash can">
                <edit-notes :noteid="note.noteId"></edit-notes>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
import EditNotes from './EditNotes.vue'
export default {
  name:"view-notes",
  components: {
      EditNotes,
  },
  data() {
      return {
        userid:cookies.get("userId"),
        token:cookies.get("loginToken"),
        notes:[]
      };
  },
  mounted() {
    this.getmyNotes();
    if (this.token == undefined) {
      this.$router.push({ name: "welcome-page" });
    }
  },
  methods: {
    getmyNotes:function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/notes",

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
          this.notes = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    orderNotes:function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/ordernotes",

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
          this.notes = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteNote(noteId) {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/notes",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },

          data: {
            loginToken: this.token,
            noteId:noteId
          }
        })
        .then(response => {
          console.log(response)
          this.getmyNotes();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
                
            
        
        
    
    
</script>

<style lang="scss" scoped>
#maincontainer{
    #styling{
        margin-top: 8vh;
        display: grid;
        grid-template-columns:1fr 1fr;
        column-gap:8vw;
        .buttonStyling{
            border-radius:8px;
            height: 5vh;
            background-color: orange;
            color:white;
            
        }

    }
    display: grid;
    row-gap: 2vh;
    justify-items: center;
    align-items: center;
    #noteStyling{
    border: 1px solid grey;
    border-radius: 5px;
    width:80%;
    margin-top: 6vh;
    text-align: center;
    #editdiv{
        display: grid;
        grid-template-columns: 1fr 1fr;
        #deleteimg{
            width:20%;
            margin-left: 5vw;

        }

    }
    
    }
    
}


</style>