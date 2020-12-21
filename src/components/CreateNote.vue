<template>
  <div id="notecontainer">
    <div id="createfirstdiv">
      <img
        id="createimg"
        src="https://st2.depositphotos.com/1060916/6816/i/600/depositphotos_68160003-stock-photo-man-with-diary.jpg"
        alt="image of note"
      />

      <h3 id="noteh3">New Note</h3>
      <img
        id="createimg2"
        @click="shownote"
        src="https://icon-library.com/images/5631de589c.png"
        alt="icon for create"
      />
    </div>
    <div v-if="!isClicked" id="createsecdiv">
      <textarea
        v-model="notes"
        id="createtextarea"
        placeholder="Write a new note"
      ></textarea>
      <div id="createthirddiv">
        <h3 id="thirdh3one" @click="createnote">Save</h3>
        <br id="brone" /><br id="brtwo" />
        <h3 id="thirdh3two" @click="clearlist">Clear</h3>
      </div>
    </div>
    <div v-if="!showyes" id="yesdiv">
      <img
        id="yesimg"
        src="https://coastalsafety.com/wp-content/uploads/2019/06/people-of-the-world-25.jpg"
        alt="image of yes"
      />
      <h4 id="yesh4" class="createh4">{{ status }}</h4>
    </div>
    <div v-if="!showno" id="nodiv">
      <img id="noimg" src="https://3.bp.blogspot.com/-GSIC3wSXvjo/UOZ-nRbjiOI/AAAAAAAAAoE/dlenZIw-t9E/s1600/14.jpg" alt="image of no" />
      <h4 id="noh4" class="createh4">{{ status }}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "create-note",
  data() {
    return {
      isClicked: true,
      status: "",
      notes: "",
      token: cookies.get("loginToken"),
      showyes: true,
      showno: true,
    };
  },

  methods: {
    shownote: function () {
      this.isClicked = !this.isClicked;
    },
    createnote: function () {
      axios
        .request({
          url: "https://noteapp.ml/api/notes",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            content: this.notes,
            loginToken: this.token,
          },
        })
        .then((response) => {
          console.log(response);
          console.log("created");
          this.showyes = !this.showyes;
          this.showno=true;

          this.status = "New note added to your list";
        })
        .catch((error) => {
          console.log(error);
          this.status = "Something went wrong!";
          this.showno=!this.showno;
          this.showyes=true;
        });
    },
    clearlist: function () {
      this.status = "";
      this.notes = "";
      this.showyes=true;
      this.showno=true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap");

#createfirstdiv {
  margin-top: 10vh;
  #createimg2 {
    width: 12%;
    margin-left: 45%;
    margin-top: 3vh;
  }

  #noteh3 {
    text-align: center;
    margin-top: -10vh;
    color: orange;
    font-family: "Nanum Myeongjo", serif;
    font-weight: bolder;
    font-size: x-large;
    margin-left: 4vw;
  }
  #createimg {
    width: 30%;
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
    border-color: orange;
  }
  #createtextarea::selection {
    background-color: yellow;
  }
  #createthirddiv {
    margin-top: 2vh;
    color: orange;
  }
}
#yesdiv {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(50px,1fr));
  margin-top: 3vh;
  justify-items: center;
  align-items: center;
  #yesimg {
    width: 40%;
    margin-left: -13vw;
  }

  .createh4 {
    color: orange;
    margin-top: 4vh;
  }
  #yesh4{
    margin-left: -30vw;
  }
}
#nodiv{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(50px,1fr));
  justify-items: center;
  align-items: center;
  margin-top: 3vh;
  #noimg {
    width: 40%;
    margin-left: -13vw;
  }
   .createh4 {
    color: orange;
    margin-top: 4vh;
  }
  #noh4{
    margin-left: -30vw;
  }

}
@media only screen and(min-width:600px) {
  #createfirstdiv {
    margin-top: 3vh;
    #createimg {
      margin-top: 4vh;
      width: 35%;
    }
    #noteh3 {
      margin-top: -15vh;
      font-size: 3em;
      margin-left: 7vw;
    }
    #createimg2 {
      margin-left: 45vw;
    }
  }
  #createsecdiv {
    #createtextarea {
      font-size: 2.5em;
    }
    #createthirddiv {
      font-size: 1.8em;
    }
    .createh4 {
      margin-top: 4vh;
      font-size: xx-large;
    }
  }
  #yesdiv{
    #yesh4{
      font-size: xx-large;
    }
    
  }
  #nodiv{
    #noh4{
      font-size:xx-large ;
    }

  }
}
@media only screen and(min-width:1020px) {
  #createfirstdiv {
    #createimg {
      width: 30%;
    }
    #noteh3 {
      font-size: xx-large;
      transition: all 0.25s ease-in-out;
      &:hover {
        color: coral;
      }
    }
    #createimg2 {
      width: 8%;
      margin-left: 26vw;
      transition:all 0.25s ease-in-out;
      &:hover{
        opacity: 0.7;
      }
    }
  }
  #createsecdiv {
    margin-top: 6vh;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    margin-left: 9vw;

    #createtextarea {
      font-size: x-large;
      height: 20vh;
      width: 70%;
    }
    #createthirddiv {
      font-size: x-large;
      margin-top: 6vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      #brone,
      #brtwo {
        display: none;
      }
      #thirdh3one {
        margin-right: 10vw;
      }
      #thirdh3two {
        margin-left: 10vw;
      }
    }
    .createh4 {
      margin-top: 9vh;
      font-size: x-large;
      color: orange;
    }
  }
  #yesdiv{
    margin-top:6vh ;
    #yesh4{
      font-size:x-large;
      margin-left: -7vw;

    }
    #yesimg{
      margin-left:12vw ;
    }
    
  }
  #nodiv{
    margin-top: 6vh;

    #noimg{
      margin-left: 12vw;
    }

    #noh4{
      font-size:x-large ;
      margin-left: -7vw;
    }

  }
}
</style>