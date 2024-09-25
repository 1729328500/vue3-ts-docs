<template>  
    <div>  
        <EmailForm @Email-form="handleSubmit" />  
        <p v-if="submitData">邮件已发送</p>  
    </div>  
</template>  

<script setup lang="ts">  
import EmailForm from './EmailForm.vue';  
import { ref } from 'vue';  
import axios from 'axios';  

const submitData = ref(null);  

const handleSubmit = async (data: any) => {  
    try {  
        const response = await axios.post("http://localhost:8080/mail", data);  
        console.log("邮件已发送:", response.data);  
        submitData.value = true; 
    } catch (error) {  
        console.error("发送邮件时出错:", error);  
        submitData.value = false;   
    }  
};  
</script>  

<style scoped>  
</style>