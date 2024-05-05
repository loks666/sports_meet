<template>
  <div class="ae">
<!--    <div style="margin-bottom:10px">-->
<!--      &lt;!&ndash; 比赛名称 &ndash;&gt;-->
<!--      <el-input v-model="formData.competitionNe" placeholder="请输入比赛名称" style="width:200px"></el-input>-->
<!--      <el-input v-model="formData.usersName" placeholder="请输入用户姓名" style="width:200px"></el-input>-->
<!--      <el-input v-model="formData.groupLabel" placeholder="请输入分组标签" style="width:200px"></el-input>-->
<!--      <el-input v-model="formData.groupIndex" placeholder="请输入组内序号" style="width:200px"></el-input>-->
<!--      <el-button icon="el-icon-search" @click="searchList"></el-button>-->
<!--      <el-button icon="el-icon-delete" @click="emptyInput"></el-button>-->
<!--    </div>-->
    <div>
      <avue-crud :data="data" :option="option" @on-load="getList" @size-change="sizeChange" @row-update="update"
                 @row-save="insert" @row-del="deletes">
      </avue-crud>
    </div>
    <div style="margin: 10px 0">
      <el-pagination :current-page="currentPage" :page-size="pageSize" :page-sizes="[5, 10, 20]" :total="total"
                     layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"></el-pagination>
    </div>
  </div>
</template>

<script>
import {GdeleteAPI, GinsertAPI, GupdateAPI, GgetLisetAPI, GselectAll} from '@/request/api';

export default {
  data() {
    return {
      formData: {
        competitionNe: '',
        usersName: '',
        usersSex: 0,
        collegeName: '',
        groupLabel: '',
        groupIndex: ''
      },
      loading: false,
      option: {
        column: [
          {prop: 'competitionNe', label: '比赛名称'},
          {prop: 'usersName', label: '用户姓名'},
          {prop: 'usersSex', label: '用户性别'},
          {prop: 'collegeName', label: '学院名称'},
          {prop: 'groupLabel', label: '分组标签'},
          {prop: 'groupIndex', label: '组内序号'}
        ]
      },
      obj: {},
      data: [],
      search: '',
      competition_ne: '',
      competition_st: '',
      competition_ed: '',
      currentPage: 1,
      pageSize: 10,
      total: 0,
      dialogFormVisible: false,
      formLabelWidth: '90px',
      vale: '',
      competitionOption: [],
      competition_site: '',
      formsing: {
        Cnumber: '',
        Cname: '',
        Cstart: '',
        Cend: '',
        Astart: '',
        Aend: '',
        Csite: '',
        Ctnor: '',
      },
      rulesing: {
        Cname: [{required: true, trigger: '请输入比赛名称', validator: this.idValidator}],
      },
    };
  },
  methods: {
    getList() {
      GgetLisetAPI({
        params: {
          pageNum: this.currentPage,  // 确保参数名称与后端接口期望的名称一致
          pageSize: this.pageSize,
        }
      }).then(res => {
        this.data = res.data.data.records;
        this.total = res.data.data.total;
      }).catch(error => {
        this.$message.error('获取列表失败: ' + error.message);
      });
    }
    ,
    searchList() {
      // 构建查询参数对象
      const queryParams = {
        competitionNe: this.formData.competitionNe,
        usersName: this.formData.usersName,
        groupLabel: this.formData.groupLabel,
        groupIndex: this.formData.groupIndex
      };

      // 调用后端API进行条件查询
      GselectAll({
        params: queryParams
      }).then(res => {
        this.data = res.data.data.records;
        this.total = res.data.data.total;
      }).catch(error => {
        this.$message.error('查询失败: ' + error.message);
      });
    },
    //新增
    insert(params) {
      this.loading = true;
      console.log("Insert method called with:", params); // 确保这是从表格中传来的数据

      GinsertAPI(params).then(res => {
        if (res.data.code === '200') {
          this.$message({
            type: "success",
            message: "新增成功"
          });
          this.getList();
        } else {
          this.$message({
            type: "error",
            message: "新增失败: " + res.data.message
          });
        }
      }).catch(error => {
        console.error('插入错误:', error);
        this.$message({
          type: "error",
          message: "新增失败：" + error.message
        });
      }).finally(() => {
        this.loading = false;
      });
    },
    // 调用示例
    update(params, index, done, loading) {
      let group = {
        groupId: params.groupId,
        competitionNe: params.competitionNe,
        usersName: params.usersName,
        usersSex: params.usersSex,
        collegeName: params.collegeName,
        groupLabel: params.groupLabel,
        groupIndex: params.groupIndex
      };
      GupdateAPI(group).then(res => {
        if (res.data && res.data.code === '200') {
          this.$message({
            type: "success",
            message: "更新成功"
          });
          this.getList();
          done();
        } else {
          this.$message({
            type: "error",
            message: res.data.message || "更新失败"
          });
          done();
        }
      }).catch(error => {
        console.error('Update error:', error);
        this.$message({
          type: "error",
          message: error.response && error.response.data ? error.response.data.message : "网络错误"
        });
        loading(false);
      });
    },
    deletes(params) {
      console.log("deletes:"+params.groupId)
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(params)
        return GdeleteAPI(params.groupId);
      }).then((res) => {
        this.getList();
        if (res.data.code === '200') {
          this.$message({type: "success", message: "删除成功"});
        } else {
          this.$message({type: "error", message: "删除失败"});
        }
      });
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
    },
    emptyInput() {
      this.competition_ne = "";
      this.competition_st = "";
      this.competition_ed = "";
    },
  },
}
</script>

<style scoped>
.ae {
  padding: 10px 10px 10px 10px;
  margin: 3px 0px 0px 3px;
  box-shadow: 0 0 5px #888888;
}
</style>
