<template>
    <div class="note">
        <el-button @click="drawer = true" type="primary" style="margin-left: 200px;">
  添加记录
</el-button>

<el-drawer
  title=" "
  size= 60%
  :visible.sync="drawer"
  :direction="direction"
 :before-close="handleClose">
  <div class="list">
    <div>
    <div class="row">

        <el-button type="text" @click="dialogVisible = true"><img src="../assets/image/note/剪毛.png"> </el-button>
        <el-button type="text" @click="dialogVisible = true"><img src="../assets/image/note/体检.png"> </el-button>
        <el-button type="text" @click="dialogVisible = true"><img src="../assets/image/note/驱虫.png"> </el-button>
        
    </div>
    <div class="row">
      <el-button type="text" @click="dialogVisible = true"><img src="../assets/image/note/剪指甲.png"> </el-button>
      <el-button type="text" @click="dialogVisible = true"><img src="../assets/image/note/刷牙.png"> </el-button>
      <el-button type="text" @click="dialogVisible = true"><img src="../assets/image/note/体重.png"> </el-button>
    </div>
    <div class="row">
      <el-button type="text" @click="dialogVisible = true"><img src="../assets/image/note/洗澡.png"> </el-button>
      <el-button type="text" @click="dialogVisible = true"><img src="../assets/image/note/异常.png"> </el-button>
      <el-button type="text" @click="dialogVisible = true"><img src="../assets/image/note/疫苗.png"> </el-button>
    </div>
  </div>
  </div>
</el-drawer>
<el-dialog title="宠物日常记录" :visible.sync="dialogVisible" width="7rem" >
  <el-form :model="form">
    <el-form-item label="记录类别" :label-width="formLabelWidth">
      <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-form-item>
    <el-form-item label="活动时间" :label-width="formLabelWidth">
      <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
  </div>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </div>
</el-dialog>

    </div>
</template>

<script >
import { Button } from 'element-ui';

export default {
    data() {
      return {
        drawer: false,
        innerDrawer: false,
        direction: 'btt',
        dialogVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        options: [{
          value: '选项1',
          label: '剪毛'
        }, {
          value: '选项2',
          label: '剪指甲'
        }, {
          value: '选项3',
          label: '驱虫'
        }, {
          value: '选项4',
          label: '刷牙'
        }, {
          value: '选项5',
          label: '体检'
        }, {
          value: '选项6',
          label: '体重'
        }, {
          value: '选项7',
          label: '洗澡'
        }, {
          value: '选项8',
          label: '异常'
        }, {
          value: '选项9',
          label: '疫苗'
        }],
        value: '',
        pickerOptions: {
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
        value1: '',
        
      };
    
      
    },
 
  }
</script>

<style scoped lang='less'>
.note{
    padding: 0.2rem;
}
.list{
    display: flex;
    padding-bottom: 0.2rem;
    div {
    flex: 1;
    text-align: center;
    color: #666;
   
  }
   
}

  .row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img{
  width: 0.9rem;
  height: 1.3rem;
}
  
}
 


</style>
