<template>
    <div class="login-wrap">
        <el-form label-position="top"  v-model="formData" class="login-form">
            <h2>用户登入</h2>
            <el-form-item label="用户名">
                <el-input v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item label="用户密码">
                <el-input v-model="formData.password"></el-input>
            </el-form-item>
            <el-button type="primary" class="login-but">登入</el-button>
        </el-form>
    </div>
</template>editorconfig

<script>
    export default {
        name: "login",
        data(){
            return{
                formData:{
                    username:null,
                    password:null
                }
            }
        },
        methods:{
            aaa(){
              
            }
        }
    }
</script>

<style scoped>
   @import "./index.css";
</style>