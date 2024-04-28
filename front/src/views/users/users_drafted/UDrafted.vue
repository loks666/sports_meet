<template>
  <div class="as">
    <basic-container>
      <avue-crud v-model="form"
                 :data="data"
                 :option="option"

                 @size-change="sizeChange"
                 @row-update="update"
                 @row-save="insert"
                 @row-del="deletes"
                 @refresh-change="refreshList"

      >

        <template slot="draftState" slot-scope="scope">
          <el-switch
            v-model=scope.row.draftState
            active-color="#409EFF"
            active-text="已审核"
            active-value="1"
            class="switch"
            disabled
            inactive-color="#CCCCCC"
            inactive-text="未审核"
            inactive-value="0"

          >
          </el-switch>
          <!--          </el-tooltip>-->
        </template>
        <template slot="menuLeft">
          <el-button icon="el-icon-edit" type="success" @click.native="dialogFormVisible = true">发布加油稿</el-button>
        </template>
        >

      </avue-crud>
    </basic-container>

    <!--    分页-->
    <div style="margin: 10px 0">
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="[5, 10, 20]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>


    <el-dialog :visible.sync="dialogFormVisible" title="加油稿发布">
      <el-form ref="form" :model="form" label-width="100px">

        <!--        一行-->
        <el-row>

          <el-col :span="12">
            <el-form-item :label-width="formLabelWidth" label="姓名:">
              <el-input v-model="form.usersName" :disabled="true" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item :label-width="formLabelWidth" label="学号:">
              <el-input v-model="form.usersStnumber" :disabled="true" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

        <!--        两行-->
        <el-row>

          <el-col :span="12">
            <el-form-item :label-width="formLabelWidth" label="学院:">
              <el-tag size="medium" style="float:left">{{ form.collegeName }}</el-tag>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item :label-width="formLabelWidth" label="状态:" prop="number">
              <el-radio v-model="form.draftState" disabled label="0">未审核</el-radio>
              <el-radio v-model="form.draftState" disabled label="1">已审核</el-radio>
            </el-form-item>
          </el-col>

        </el-row>

        <!--        三行-->
        <el-row>

          <el-col :span="24">
            <el-form-item :label-width="formLabelWidth" label="内容:">
              <textarea v-model="form.draftContent"
                        class="textar"
                        cols="77"
                        maxlength="300"
                        minlength="3"
                        rows="6"
                        @input="descInput">
              </textarea>
              <i><span>内容字数0~300字以内，剩余字数:{{ remnant }}/300</span></i>
            </el-form-item>
          </el-col>


        </el-row>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="insert">发 布</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script scoped>
import {draftedAvue} from '@/api/Avue/Udrafted';
import {DdeleteAPI, DinsertAPI, DselectStateAPI, UselectByIdAPI} from '@/request/api';

export default {
  data() {
    return {
      option: draftedAvue,
      form: {
        usersStnumber: '',
        usersName: '',
        collegeName: '',
        draftContent: '',
        draftState: '',
      },
      paramsTest: [],
      data: [],
      search: '',
      //分页
      currentPage: 1,
      pageSize: 10,
      total: 0,

      remnant: 300,
      users_ne: '',
      users_nb: '',
      college_ne: '',
      dialogFormVisible: false,
      formLabelWidth: '90px',  //input边距

    }
  },
  created() {
    this.searchLiset()
    this.getUser()
  },
  methods: {

    //文本域显示字数
    descInput() {
      var txtVal = this.form.draftContent.length;
      this.remnant = 300 - txtVal;
    },

//登陆用户数据渲染
    getUser() {
      UselectByIdAPI({
        params: {
          usersStnumber: window.sessionStorage.getItem('id')
        }
      }).then(res => {
        console.log("顶部用户数据====》", res)
        this.dataList = res.data.data.records
        this.form.usersStnumber = res.data.data.records[0].usersStnumber
        this.form.usersName = res.data.data.records[0].usersName
        this.form.collegeName = res.data.data.records[0].collegeName
        this.form.draftState = "0"
      })

    },


    //查询
    searchLiset() {
      DselectStateAPI({
        params: {
          PageNum: this.currentPage,
          PageSize: this.pageSize,
          usersStnumber: window.sessionStorage.getItem('id'),
        }
      }).then(res => {
        console.log(res.data.data.records)
        // console.log(res)
        console.log('111')
        this.data = res.data.data.records
        this.total = res.data.data.total
      })

    },

    //新增
    // insert(){
    //   this.paramsTest = this.form
    //   if (this.form.draftState == "0"){
    //     this.paramsTest.draftState = 0
    //   }else {
    //     this.paramsTest.draftState = 1
    //   }
    //   console.log("稿子==》",this.paramsTest)
    // },
    insert() {
      this.paramsTest = this.form
      if (this.form.draftState == "0") {
        this.paramsTest.draftState = 0
      } else {
        this.paramsTest.draftState = 1
      }
      DinsertAPI(this.paramsTest).then(res => {
        // done();  // 关闭表单
        // loading(); // 按钮停止加载
        this.searchLiset()
        if (res.data.code == '200') {
          this.$message({
            type: "success",
            message: "加油稿发布成功",

          })
        } else {
          this.$message({
            type: "error",
            message: "加油稿发布失败",

          })
        }
        this.dialogFormVisible = false
      })

      // console.log(res)
      console.log('999')
    },

    //修改
    update(params, index, done, loading) {
      UupdateAPI(params).then(res => {
        done();
        this.searchLiset()
        console.log(res)
        if (res.data.code == '200') {
          this.$message({
            type: "success",
            message: "更新成功"
          })
        } else {
          this.$message({
            type: "error",
            message: "更新失败"
          })
        }
      })
        .catch(() => {
          loading();

        })

      // this.onLoad(this.page, this.query);
      console.log(params)

      // this.getList()
    },

    // 删除按钮
    deletes(params) {

      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return DdeleteAPI(params.draftId)
      }).then((res) => {
        this.searchLiset()
        // this.$message.success('删除成功')
        if (res.data.code == '200') {
          this.$message({
            type: "success",
            message: "删除成功"
          })
        } else {
          this.$message({
            type: "error",
            message: "删除失败"
          })
        }
        console.log(res);

      })

    },

    //清空搜索栏
    emptyInput() {
      this.users_ne = "";
      this.users_nb = "";
      this.college_ne = "";
    },

    //刷新按钮
    refreshList() {
      this.getList()
    },

    //最大条数
    sizeChange(pageSize) {
      this.page.pageSize = pageSize
    },
    //改变当前每页的个数触发
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.getList()
    },
    //改变当前页码触发
    handleCurrentChange(pageNum) {
      this.currentPage = pageNum
      this.getList()
    }
  },
}
</script>
<style>
.as {
  /*上 右 下 左*/
  padding: 10px 10px 10px 10px;
  margin: 3px 0px 0px 3px;
  /*box-shadow: 0 5px 15px rgba(0,0,0,.8);*/
  /*background-color:#ff9900;*/
  /*-moz-box-shadow: 10px 10px 5px #888888; !* 老的 Firefox *!*/
  box-shadow: 0 0 5px #888888;
  /*border:1px solid #fff*/
  /*border:1px dashed #888888*/
  /*box-shadow: 0 5px 15px*/
}

.textar {
  border: 1px solid #6CA6CD;
  font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  font-size: 13px;
  color: #555f77;
}

/* switch按钮样式 */
.switch .el-switch__label {
  position: absolute;
  display: none;
  color: #fff !important;
}

/*打开时文字位置设置*/
.switch .el-switch__label--right {
  z-index: 1;
}

/* 调整打开时文字的显示位子 */
.switch .el-switch__label--right span {
  margin-right: 9px;
}

/*关闭时文字位置设置*/
.switch .el-switch__label--left {
  z-index: 1;
}

/* 调整关闭时文字的显示位子 */
.switch .el-switch__label--left span {
  margin-left: 9px;
}

/*显示文字*/
.switch .el-switch__label.is-active {
  display: block;
}

/* 调整按钮的宽度 */
.switch.el-switch .el-switch__core,
.el-switch .el-switch__label {
  width: 68px !important;
  margin: 0;
}


</style>

