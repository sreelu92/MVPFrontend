<template>
  <div id="taskpagecontainer">
    <header-page></header-page>
    <view-task></view-task>
    <div id="taskfooter">
      <footer-page></footer-page>
    </div>
  </div>
</template>

<script>
import HeaderPage from "../components/Header.vue";
import ViewTask from "../components/ViewTasks.vue";
import FooterPage from "../components/Footer.vue";
import cookies from 'vue-cookies'
export default {
  name: "notes-page",
  components: {
    HeaderPage,
    ViewTask,
    FooterPage,
  },
  data() {
      return {
          token: cookies.get('loginToken')
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
#taskpagecontainer {
  min-height: 99vh;
  border: 2px solid black;
  border-radius: 30px;
  #taskfooter {
    margin-top: 62vh;
  }
  @media only screen and(min-width:1020px) {
    border-radius: 0px;
  }
}
</style>