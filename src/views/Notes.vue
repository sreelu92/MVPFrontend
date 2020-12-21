<template>
  <div id="notepagecontainer">
    <header-page></header-page>
    <view-notes></view-notes>
    <div id="footerdiv">
      <footer-page></footer-page>
    </div>
  </div>
</template>

<script>
import HeaderPage from "../components/Header.vue";
import ViewNotes from "../components/ViewNotes.vue";
import FooterPage from "../components/Footer.vue";
import cookies from 'vue-cookies'
export default {
  name: "notes-page",
  components: {
    HeaderPage,
    ViewNotes,
    FooterPage,
  },
  data() {
      return {
          token:cookies.get('loginToken')
      };
  },
  mounted() {
    if (this.token == undefined) {
      this.$router.push({ name: "welcome-page" });
    }
  },
};
</script>

<style lang="scss" scoped>
#notepagecontainer {
  border-radius: 30px;

  border: 2px solid black;
  #footerdiv {
    margin-top: 50vh;
  }
  @media only screen and(min-width:1020px) {
    border-radius: 0px;
  }
}
</style>