<template>  
  <el-container>  

    <el-header>  
      <div class="header-container">  
        <img src="D:/学习/新建文件夹/1.jpg" alt="头像" class="avatar" />  
        <el-button text class="header-button">大会员</el-button>  
        <el-button text class="header-button">消息</el-button>  
        <el-button text class="header-button">动态</el-button>  
        <el-button text class="header-button">收藏</el-button>  
        <el-button text class="header-button">历史</el-button>  
        <el-button text class="header-button">创作中心</el-button>  
        <el-button type="primary" class="post-button">投稿</el-button>  
      </div>  
    </el-header>  

    <el-container class="content-container">  
      <el-aside width="200px" class="sidebar">  
        <div class="button-group">  
          <el-button class="sidebar-button" round @click="navigateTo('home')">首页</el-button>  
          <el-button class="sidebar-button primary" round @click="navigateTo('content')">内容管理</el-button>  
          <el-button class="sidebar-button success" round @click="navigateTo('data')">数据中心</el-button>  
          <el-button class="sidebar-button info" round @click="navigateTo('upload')">视频投稿</el-button>  
        </div>  
      </el-aside>  

      <el-main>  
        <el-card class="upload-card">  
          <h2 class="card-title">视频投稿</h2>  
          <el-upload  
            class="upload-demo"  
            drag  
            action="#"  
            :on-change="handleChange"  
            :before-upload="beforeUpload"  
            :show-file-list="false"  
          >  
            <i class="el-icon-upload"></i>  
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>  
            <div class="el-upload__tip" slot="tip">只能上传视频文件，且不超过 1GB</div>  
          </el-upload>  

          <div v-if="videoUrl" class="video-preview">  
            <h3>上传的视频:</h3>  
            <video controls class="preview-video">  
              <source :src="videoUrl" type="video/mp4" />  
              Your browser does not support the video tag.  
            </video>  
          </div>  
        </el-card>  
      </el-main>  
    </el-container>  
  </el-container>  
</template>  

<script setup lang="ts">  
import { ref } from 'vue';  

const videoUrl = ref('');  

const handleChange = (file) => {  
  const reader = new FileReader();  
  reader.onload = (e) => {  
    videoUrl.value = e.target.result; // 设置视频 URL  
  };  
  reader.readAsDataURL(file.raw); // 读取文件为 Data URL  
};  

const beforeUpload = (file) => {  
  const isVideo = file.type.startsWith('video/');  
  const isLt100M = file.size / 1024 / 1024 < 100;  

  if (!isVideo) {  
    this.$message.error('上传文件必须是视频文件!');  
  }  
  if (!isLt100M) {  
    this.$message.error('上传视频大小不能超过 100MB!');  
  }  
  return isVideo && isLt100M; // 返回 true 以允许上传  
};  

const navigateTo = (page) => {  
  // 处理导航逻辑  
  console.log(`Navigating to ${page}`);  
};  
</script>  

<style scoped>  
.header-container {  
  display: flex;  
  align-items: center;  
  padding: 10px;  
  background-color: #72c9c9; /* 深蓝色背景 */  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 阴影效果 */  
}  

.avatar {  
  width: 40px;  
  height: 40px;  
  border-radius: 50%;  
  margin-right: 10px;  
  border: 2px solid #ffffff; /* 更亮的边框 */  
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */  
}  

.header-button {  
  color: #ffffff; /* 按钮文字颜色 */  
  margin-left: 15px;  
}  

.post-button {  
  margin-left: auto; /* 自适应按钮位置 */  
}  

.content-container {  
  display: flex;  
}  

.sidebar {  
  background-color: #2C3E50; /* 更深的颜色 */  
  color: #ECF0F1; /* 浅色字体 */  
  padding: 20px;  
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);  
}  

.button-group {  
  display: flex;  
  flex-direction: column;  
  gap: 15px; /* 增加按钮之间的间距 */  
}  

.sidebar-button {  
  width: 100%;  
  padding: 12px;  
  text-align: left;  
  background-color: #34495E; /* 按钮背景色 */  
  border: none; /* 去除默认边框 */  
  color: #ECF0F1; /* 按钮文字颜色 */  
  transition: background-color 0.3s; /* 动画效果 */  
}  

.sidebar-button:hover {  
  background-color: #5D6D7E; /* 悬停时背景色 */  
}  

.upload-card {  
  padding: 20px;  
  background-color: #ffffff;  
  border-radius: 8px;  
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);  
  margin-left: 20px; /* 添加左边距与侧边栏分隔 */  
}  

.card-title {  
  color: #34495E; /* 标题颜色 */  
  font-size: 1.5em;  
  margin-bottom: 20px;  
}  

.video-preview {  
  margin-top: 20px;  
}  

.preview-video {  
  max-width: 100%;  
  margin-top: 10px;  
  border: 1px solid #E0E0E0; /* 视频边框 */  
  border-radius: 5px; /* 视频圆角 */  
}  
</style>