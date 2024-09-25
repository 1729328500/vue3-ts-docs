<template>  
    <div>  
        <form @submit.prevent="submitForm">  
            <input type="text" placeholder="请输入邮箱" v-model="form.to" />  
            <input type="text" placeholder="请输入主题" v-model="form.subject" />  
            <input type="text" placeholder="请输入内容" v-model="form.body" />  
            <button type="submit">发送</button>  
        </form>  
    </div>  
</template>  

<script setup lang="ts">  
import { reactive } from 'vue';  

const form = reactive({  
    to: "",  
    subject: "",  
    body: "",  
});  

const emit = defineEmits<{"Email-form": [any] }>();  

const submitForm = () => {  
    // 触发提交事件并传递表单数据  
    emit("Email-form", form);  
};  
</script>  

<style scoped>  
form {  
    display: flex;  
    flex-direction: column;  
    max-width: 400px;  
    margin: 0 auto;  
    padding: 20px;  
    border: 1px solid #ccc;  
    border-radius: 5px;  
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
}  

input {  
    margin-bottom: 10px;  
    padding: 10px;  
    font-size: 16px;  
    border: 1px solid #ccc;  
    border-radius: 3px;  
}  

button {  
    padding: 10px;  
    font-size: 16px;  
    color: #fff;  
    background-color: #007bff;  
    border: none;  
    border-radius: 3px;  
    cursor: pointer;  
}  

button:hover {  
    background-color: #0056b3;  
}  
</style>