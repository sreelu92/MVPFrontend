<template>
    <div>
        <img id="editimg" @click="confirmEdit" src="https://www.clipartmax.com/png/middle/322-3225969_service-icon-edit-icon-transparent-background.png" alt="image of edit icon">
        <div v-if="!isClicked">
            <textarea v-model="newContent" id="editcontent"></textarea>
            <h4 @click="EditNote">Edit</h4>

        </div>


    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
export default {
    name:"edit-notes",
    props: {
        noteid:Number
    },
    data() {
        return {
            token:cookies.get("loginToken"),
            isClicked:true,
            newContent:""
            };
    },
    methods: {
        EditNote:function(){


            axios
            .request({
                url: "http://127.0.0.1:5000/api/notes",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    },
                data: {
                    loginToken: this.token,
                    noteId: this.noteid,
                    content: this.newContent
                }
            })
            .then(response => {
                console.log(response)
                this.newContent = response.data;
                this.$emit("contentChanged", response.data.content);
                this.newContent="";
                this.isClicked=true;
            })
            .catch(error => {
                console.log(error);
            });
        },
        confirmEdit:function(){
            this.isClicked=!this.isClicked;
        }
    }
         
        
};
</script>

<style lang="scss" scoped>
#editimg{
    width: 23%;
    margin-left: 7vw;
}
#editcontent{
    margin-top: 2vh;
}

</style>