<template>
		<div class="container-login">
			<div class="form">
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="账号" prop="name">
					<el-input v-model="ruleForm.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
			</div>
		</div>
</template>
<script>
import utils from '~/utils/utils';
export default {
		layout: 'login',
		name: "login",
		data() {
      var validateName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        } else {
					//验证规则：字母、数字、下划线组成，字母开头，2-15 位。
					const regx = /^[a-zA-z]\w{2,15}$/;
					if(regx.test(value)){
						return callback();
					}else{
						return callback(new Error('请输入正确的账号'));
					}      
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空'));
        } else {
					//验证规则：只能输入6-20个字母、数字、下划线 。
					const regx = /^(\w){6,20}$/;
					if(regx.test(value)){
						return callback();
					}else{
						return callback(new Error('请输入正确的密码'));
					}   
          callback();
        }
      };
      return {
				title: "登录",
        ruleForm: {
          pass: '',
          name: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { validator: validateName, trigger: 'blur' }
          ]
        }
      };
    },
		head(){
			return {
				title: this.title
			}
		},
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
						const obj = {
							name: this.ruleForm['name'],
							pass: this.ruleForm['pass']
						};
						this.$axios.$post('http://127.0.0.1:3001/login',obj).then((result) => {
							if(result.status===1){
								this.$notify({
									title: '登录成功',
									message: ('i', { style: 'color: teal'},'')
								});
								utils.setcookiesInClient('token',result.token);
								this.$router.push({ path: '/'});
							}else if(result.status===2) {
								this.$message({
									message: `${result.mess}`,
									type: 'warning'
								});
							}else {
								this.$message.error(`${result.mess}`);
							}
							// console.log(result);
						}).catch((err) => {
							this.$message.error('服务器错误!');
							console.log(err);
						});
          } else {
						this.$message.error('请检查账号密码!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
		created() {
			//默认初始化删除token
			utils.removecookiesInClient('token');
		},
}
</script>
<style lang="less" scoped>
	.container-login {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		height:100vh;
		.form {
			width: 500px;
		}
	}
</style>