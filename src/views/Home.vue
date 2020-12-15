<template>
  <div id="container">
    <header-page></header-page>
    <create-note></create-note>
    <create-task></create-task>
    <footer-page></footer-page>

   
  </div>
</template>

<script>
import HeaderPage from "../components/Header.vue"
import CreateNote from "../components/CreateNote.vue"
import CreateTask from "../components/CreateTask.vue"
import FooterPage from "../components/Footer.vue"
export default {
  name: "home-page",
  components: {
    HeaderPage,
    CreateNote,
    CreateTask,
    FooterPage
  },
 
};
</script>

<style lang="scss" scoped>


</style>