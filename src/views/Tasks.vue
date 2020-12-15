<template>
    <div>
        <header-page></header-page>
        <view-task></view-task>
        <div id="taskfooter">
            <footer-page></footer-page>

        </div>

    </div>
</template>

<script>
import HeaderPage from "../components/Header.vue"
import ViewTask from "../components/ViewTasks.vue"
import FooterPage from "../components/Footer.vue"

    export default {
        name:"notes-page",
        components: {
            HeaderPage,
            ViewTask,
            FooterPage
        },
        
    }
</script>

<style lang="scss" scoped>
#taskfooter{
    margin-top: 50vh;
}

</style>