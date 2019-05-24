<template>
		<div class="container-users">
			<el-date-picker
				v-model="value"
				align="right"
				type="date"
				placeholder="选择日期"
				:picker-options="pickerOptions">
			</el-date-picker>
			<el-table
				:data="tableData"
				border
				style="width: 100%">
				<el-table-column
					prop="date"
					label="日期"
					width="180">
				</el-table-column>
				<el-table-column
					prop="name"
					label="姓名"
					width="180">
				</el-table-column>
				<el-table-column
					prop="address"
					label="地址">
				</el-table-column>
			</el-table>
		</div>
</template>
<script>
export default {
		name: "users",
		  data() {
      return {
				title: "用户",
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
				tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],            
        value: '',
      };
    },
		head(){
			return {
				title: this.title
			}
		}
}
</script>
<style lang="less" scoped>
	.container-users {
		margin: 0 auto;
		text-align: center;
		color: red;
	}
</style>