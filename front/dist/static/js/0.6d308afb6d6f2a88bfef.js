webpackJsonp([0],{"7kpa":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={border:!0,index:!0,indexLabel:"序号",stripe:!0,calcHeight:30,searchMenuSpan:4,searchSpan:5,searchShowBtn:!1,dialogDrag:!0,page:!1,addBtn:!0,align:"center",menuAlign:"center",formslot:!0,column:[{label:"场地id",prop:"siteId",display:!1,hide:!0,showColumn:!1},{label:"场地编号",prop:"siteNumber",rules:[{required:!0,message:"学院编号不能为空",trigger:"blur"},{validator:function(e,t,a){if(t){if(!/^.+$/.test(t))return a(new Error("请输入正确的学院编号"));a()}else a(new Error("请输入学院编号"))},trigger:"blur"}]},{label:"场地位置",prop:"competitionSite",rules:[{required:!0,message:"学院名称不能为空",trigger:"blur"},{validator:function(e,t,a){if(t){if(!/^[\u4e00-\u9fa5]{3,12}$/.test(t))return a(new Error("请输入正确的学院名称"));a()}else a(new Error("请输入学院名称"))},trigger:"blur"}]}]},r=a("2CGT"),s={data:function(){return{option:n,form:{},data:[],search:"",currentPage:1,pageSize:10,total:0}},created:function(){this.getList()},methods:{getList:function(){var e=this;Object(r.B)({params:{PageNum:this.currentPage,PageSize:this.pageSize,search:this.search}}).then(function(t){console.log("11111111"),console.log(t.data.data.records),e.data=t.data.data.records,e.total=t.data.data.total})},insert:function(e,t,a){var n=this;Object(r.C)(e).then(function(e){t(),a(),n.getList(),"200"==e.data.code?n.$message({type:"success",message:"新增成功"}):n.$message({type:"error",message:"新增失败"})})},update:function(e,t,a,n){var s=this;Object(r.D)(e).then(function(e){a(),s.getList(),console.log(e),"200"==e.data.code?s.$message({type:"success",message:"更新成功"}):s.$message({type:"error",message:"更新失败"})}).catch(function(){n()}),console.log(e)},deletes:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return Object(r.A)(e.siteId)}).then(function(e){t.getList(),"200"==e.data.code?t.$message({type:"success",message:"删除成功"}):t.$message({type:"error",message:"删除失败"}),console.log(e)})},emptyInput:function(){this.users_ne="",this.users_nb="",this.college_ne=""},refreshList:function(){this.getList()},sizeChange:function(e){this.page.pageSize=e},handleSizeChange:function(e){this.pageSize=e,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"as"},[a("basic-container",[a("avue-crud",{attrs:{data:e.data,option:e.option},on:{"on-load":e.getList,"size-change":e.sizeChange,"row-update":e.update,"row-save":e.insert,"row-del":e.deletes,"refresh-change":e.refreshList},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})],1),e._v(" "),a("div",{staticStyle:{margin:"10px 0"}},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,"page-sizes":[5,10,20],total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var o=a("VU/8")(s,i,!1,function(e){a("fEvD")},"data-v-e2d04836",null);t.default=o.exports},fEvD:function(e,t){}});
//# sourceMappingURL=0.6d308afb6d6f2a88bfef.js.map