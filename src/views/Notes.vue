<template>
    <div>
        <header-page></header-page>
        <view-notes></view-notes>
        <div id="footerdiv">        
            <footer-page></footer-page>
        </div>

    </div>
</template>

<script>
import HeaderPage from "../components/Header.vue"
import ViewNotes from "../components/ViewNotes.vue"
import FooterPage from "../components/Footer.vue"
    export default {
        name:"notes-page",
        components: {
            HeaderPage,
            ViewNotes,
            FooterPage
        },
        
    }
</script>

<style lang="scss" scoped>
#footerdiv{
    margin-top: 50vh;
}

</style>