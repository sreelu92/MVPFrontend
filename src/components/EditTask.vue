<template>
    <div>
        <img id="editimg" @click="confirmEdit" src="https://www.clipartmax.com/png/middle/322-3225969_service-icon-edit-icon-transparent-background.png" alt="image of edit icon">
        <div v-if="!isClicked">
            <textarea v-model="newContent"></textarea>
            <input v-model="taskdate" type="date">
            <h4 @click="EditTask">Edit</h4>

        </div>


    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
export default {
    name:"edit-task",
    props: {
        taskid:Number
    },
    data() {
        return {
            token:cookies.get("loginToken"),
            isClicked:true,
            newContent:"",
            taskdate:""
            };
    },
    methods: {
        EditTask:function(){
            

            axios
            .request({
                url: "http://127.0.0.1:5000/api/tasks",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    },
                data: {
                    loginToken: this.token,
                    taskId: this.taskid,
                    content: this.newContent,
                    date:this.taskdate
                }
            })
            .then(response => {
                console.log(response)
                this.newContent = response.data;
                this.$emit("contentChanged", response.data.content);
                this.isClicked=true;
                this.newContent="";
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
    width: 22%;
}

</style>