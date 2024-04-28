webpackJsonp([3],{exkZ:function(e,t){},tlXl:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={border:!0,index:!0,indexLabel:"序号",stripe:!0,calcHeight:30,searchMenuSpan:4,searchSpan:5,searchBtn:!1,viewBtn:!1,dialogDrag:!0,page:!1,addBtn:!1,align:"center",menuAlign:"center",formslot:!0,columnSort:!0,selection:!0,column:[{label:"姓名",prop:"usersName",rules:[{required:!0,message:"姓名不能为空",trigger:"blur"},{validator:function(e,t,s){/^(?=.{2,5}$)(((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·)*(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*)$/.test(t)?s():s(new Error("请输入2-5个汉字"))},trigger:"blur"}]},{label:"学号",prop:"usersStnumber",editDisabled:!0,rules:[{required:!0,message:"学号不能为空",trigger:"blur"},{validator:function(e,t,s){if(t){if(!/^20[0-9]\d{9}$/.test(t))return s(new Error("请输入正确的学号"));s()}else s(new Error("请输入学号"))},trigger:"blur"}]},{label:"密码",prop:"usersPwd",hide:!0,rules:[{required:!0,message:"密码不能为空",trigger:"blur"},{validator:function(e,t,s){if(t){if(!/^(\w){6,12}$/.test(t))return s(new Error("请输入正确的密码"));s()}else s(new Error("请输入6到12位字母或数字密码"))},trigger:"blur"}]},{label:"性别",prop:"usersSex",type:"radio",border:!0,rules:[{required:!0,message:"请选择性别",trigger:"blur"}],dicData:[{label:"男",value:0},{label:"女",value:1}]},{label:"电话",prop:"usersPhone",value:"",span:12,rules:[{required:!0,message:"电话号码不能为空",trigger:"blur"},{validator:function(e,t,s){if(t){if(!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(t))return s(new Error("请输入正确的电话"));s()}else s(new Error("请输入联系方式"))},trigger:"blur"}]},{label:"邮箱",prop:"usersEmail",hide:!0},{label:"院系",prop:"collegeName",type:"select",rules:[{required:!0,message:"请选择院系",trigger:"blur"}],dicData:[{label:"理工学院",value:"理工学院"},{label:"体育与健康学院",value:"体育与健康学院"},{label:"语言文学学院",value:"语言文学学院"},{label:"马克思学院",value:"马克思学院"},{label:"经济与管理学院",value:"经济与管理学院"},{label:"教育与音乐学院",value:"教育与音乐学院"},{label:"艺术与设计学院",value:"艺术与设计学院"},{label:"商贸与法律学院",value:"商贸与法律学院"},{label:"传媒学院",value:"传媒学院"}]}]},r=s("NC6I"),a=s.n(r),o=s("2CGT"),i={data:function(){return{BtnText:"导入信息",BtnIcon:"el-icon-upload",BtnDisabled:!1,option:l,form:{},data:[],usersParams:[],search:"",usersSex:"",collegeOption:[],imgsUrl:"default.jpg",currentPage:1,pageSize:10,total:0,test1:[],lists:[],dialogFormVisible:!1,options:[],forms:{id:"",name:"",sex:"",number:"",college:"",password:""},token:{token:window.sessionStorage.getItem("token")},rules:{name:[{required:!0,trigger:"blur",validator:this.nameValidator}],id:[{required:!0,trigger:"blur",validator:this.idValidator}],college:[{required:!0,message:"请选择学院",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],password:[{required:!0,trigger:"blur",validator:this.passwordValidator},{min:6,max:15,message:"长度在 6 到 15 个字符",trigger:"blur"}],number:[{required:!0,trigger:"blur",validator:this.numberValidator}]},formLabelWidth:"90px",vale:"",users_ne:"",users_nb:"",college_ne:""}},created:function(){this.getList(),this.selectCollegeName()},methods:{passwordValidator:function(e,t,s){t?/^[a-zA-Z0-9_]{1,30}$/.test(t)?s():(s(new Error("密码只能是数字、下划线、字母!")),console.log("密码只能是数字、下划线、字母!")):s(new Error("密码不能为空"))},numberValidator:function(e,t,s){t?/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(t)?s():(s(new Error("号码格式错误")),console.log("号码格式错误")):s(new Error("号码不能为空"))},idValidator:function(e,t,s){t?/^20[0-9]\d{9}$/.test(t)?s():(s(new Error("学号格式错误")),console.log("学号格式错误")):s(new Error("学号不能为空"))},nameValidator:function(e,t,s){t?/^(?=.{2,5}$)(((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·)*(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*)$/.test(t)?s():(s(new Error("名字格式错误")),console.log("名字格式错误")):s(new Error("名字不能为空"))},selectCollegeName:function(){var e=this;Object(o.N)().then(function(t){console.log("学院 ==》",t),e.collegeOption=t.data,console.log(t)})},Oerror:function(){this.BtnIcon="el-icon-upload",this.BtnText="导入信息",this.BtnDisabled=!1,this.getList(),this.$message({showClose:!0,message:"导入信息失败",type:"error"})},Osuccess:function(e,t){e.code,this.$message({showClose:!0,message:"导入信息成功",type:"success"}),this.BtnIcon="el-icon-upload",this.BtnText="导入信息",this.BtnDisabled=!1,this.getList()},Bupload:function(){this.BtnIcon="el-icon-loading",this.BtnText="正在导入",this.BtnDisabled=!0},selectionChange:function(e){this.lists=[];for(var t=0;t<e.length;t++)this.lists[t]=e[t].usersStnumber},toggleSelection:function(){var e=this;console.log("选中数据 =》",this.lists);for(var t=0;t<this.lists.length;t++)Object(o.G)({params:{usersStnumber:this.lists[t]}}).then(function(t){e.getList()});this.$message({type:"success",message:"删除成功"}),this.getList()},handleExcel:function(){var e=this;Object(o.J)().then(function(t){console.log("所有数据===>",t);var s={title:"用户信息表格",column:[{label:"姓名",prop:"usersName"},{label:"学号",prop:"usersStnumber"},{label:"性别",prop:"sex"},{label:"电话",prop:"usersPhone"},{label:"学院",prop:"collegeName"}],data:t.data};e.$Export.excel({title:s.title,columns:s.column,data:s.data})})},handleGet:function(){var e={title:"导入模板",column:[{label:"导入Excel模板",prop:"header",children:[{label:"姓名",prop:"title1"},{label:"学号",prop:"title2"},{label:"性别",prop:"title3"},{label:"电话",prop:"title4"},{label:"院系",prop:"title5"}]}],data:[{title1:"张三",title2:"201813007200",title3:"男",title4:"15077716861",title5:"理工学院"},{title1:"李四",title2:"201813007200",title3:"女",title4:"15077716862",title5:"经济与管理学院"}]};this.$Export.excel({title:e.title,columns:e.column,data:e.data})},getList:function(){var e=this;Object(o.I)({params:{PageNum:this.currentPage,PageSize:this.pageSize,search:this.search}}).then(function(t){e.data=t.data.data.records,e.total=t.data.data.total,console.log("1111111111111"),console.log(e.data);for(var s=0;s<=t.data.data.records.length;s++)0===t.data.data.records[s].usersSex?e.data[s].usersSex="男":e.data[s].usersSex="女"})},searchLiset:function(){var e=this;Object(o.O)({params:{PageNum:this.currentPage,PageSize:this.pageSize,usersName:this.users_ne,usersStnumber:this.users_nb,collegeName:this.college_ne}}).then(function(t){console.log(t.data.data.records),console.log("111"),e.data=t.data.data.records,e.total=t.data.data.total;for(var s=0;s<=t.data.data.records.length;s++)0===t.data.data.records[s].usersSex?e.data[s].usersSex="男":e.data[s].usersSex="女"})},insert:function(){var e=this;this.$refs.forms.validate(function(t){if(!t)return console.log("信息错误"),!1;var s={};s.usersStnumber=e.forms.id,s.usersPwd=a()(e.forms.password),s.usersName=e.forms.name,s.usersSex=e.forms.sex,s.usersPhone=e.forms.number,s.collegeName=e.forms.college,s.usersUrl=e.imgsUrl,Object(o.L)(s).then(function(t){e.getList(),"200"===t.data.code?e.$message({type:"success",message:"新增成功"}):e.$message({type:"error",message:"新增失败"}),e.dialogFormVisible=!1})})},update:function(e,t,s,l){var r=this;this.test1=e,0===e.usersSex?this.test1.usersSex=0:this.test1.usersSex=1,this.test1.usersPwd=a()(e.usersPwd),console.log("修改数据==》",e),Object(o.Q)(this.test1).then(function(e){s(),r.getList(),console.log(e),"200"==e.data.code?r.$message({type:"success",message:"更新成功"}):r.$message({type:"error",message:"更新失败"})}).catch(function(){l()}),console.log(e)},deletes:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return Object(o.F)(e.usersStnumber)}).then(function(e){t.getList(),"200"==e.data.code?t.$message({type:"success",message:"删除成功"}):t.$message({type:"error",message:"删除失败"}),console.log(e)})},emptyInput:function(){this.users_ne="",this.users_nb="",this.college_ne=""},refreshList:function(){this.getList()},sizeChange:function(e){this.page.pageSize=e},handleSizeChange:function(e){this.pageSize=e,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"as"},[s("div",{staticStyle:{"margin-bottom":"10px"}},[s("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入用户姓名"},model:{value:e.users_ne,callback:function(t){e.users_ne=t},expression:"users_ne"}}),e._v(" "),s("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入用户学号"},model:{value:e.users_nb,callback:function(t){e.users_nb=t},expression:"users_nb"}}),e._v(" "),s("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入院系"},model:{value:e.college_ne,callback:function(t){e.college_ne=t},expression:"college_ne"}}),e._v(" "),s("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.searchLiset}}),e._v(" "),s("el-button",{attrs:{icon:"el-icon-delete"},on:{click:e.emptyInput}})],1),e._v(" "),s("basic-container",[s("avue-crud",{attrs:{data:e.data,option:e.option},on:{"on-load":e.getList,"size-change":e.sizeChange,"row-update":e.update,"row-save":e.insert,"row-del":e.deletes,"refresh-change":e.refreshList,"selection-change":e.selectionChange},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[s("template",{slot:"menuLeft"},[s("el-button",{attrs:{icon:"el-icon-plus",size:"small",type:"primary"},nativeOn:{click:function(t){e.dialogFormVisible=!0}}},[e._v("新增\n        ")]),e._v(" "),s("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:function(t){return e.toggleSelection()}}},[e._v("删除选中")]),e._v(" "),s("el-button",{attrs:{icon:"el-icon-download",type:"success"},on:{click:e.handleExcel}},[e._v("导出表格")]),e._v(" "),s("el-button",{attrs:{icon:"el-icon-upload",type:"success"},on:{click:e.handleGet}},[e._v("下载模版")]),e._v(" "),s("el-upload",{staticClass:"upload",attrs:{"before-upload":e.Bupload,disabled:e.BtnDisabled,headers:e.token,"on-error":e.Oerror,"on-success":function(t,s){return e.Osuccess(t,s)},"show-file-list":!1,action:"http://localhost:9090/users/upload"}},[s("el-button",{attrs:{disabled:e.BtnDisabled,icon:e.BtnIcon,type:"success"},on:{click:function(e){}}},[e._v(e._s(e.BtnText))]),e._v(" "),s("div",{staticClass:"upload2",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传Excel文件")])],1),e._v(" "),s("el-dialog",{attrs:{visible:e.dialogFormVisible,title:"新增用户"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",{ref:"forms",attrs:{model:e.forms,rules:e.rules,"label-width":"100px"}},[s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"姓名:",prop:"name"}},[s("el-input",{attrs:{autocomplete:"off",placeholder:"请输入姓名"},model:{value:e.forms.name,callback:function(t){e.$set(e.forms,"name",t)},expression:"forms.name"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"学号:",prop:"id"}},[s("el-input",{attrs:{autocomplete:"off",placeholder:"请输入学号"},model:{value:e.forms.id,callback:function(t){e.$set(e.forms,"id",t)},expression:"forms.id"}})],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{staticStyle:{float:"left"},attrs:{"label-width":e.formLabelWidth,label:"性别:",prop:"sex"}},[s("el-radio",{attrs:{border:"",label:"0"},model:{value:e.forms.sex,callback:function(t){e.$set(e.forms,"sex",t)},expression:"forms.sex"}},[e._v("男")]),e._v(" "),s("el-radio",{attrs:{border:"",label:"1"},model:{value:e.forms.sex,callback:function(t){e.$set(e.forms,"sex",t)},expression:"forms.sex"}},[e._v("女")])],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"号码:",prop:"number"}},[s("el-input",{attrs:{autocomplete:"off",placeholder:"请输入电话号码"},model:{value:e.forms.number,callback:function(t){e.$set(e.forms,"number",e._n(t))},expression:"forms.number"}})],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"学院:",prop:"college"}},[s("el-select",{attrs:{placeholder:"请选择学院"},model:{value:e.forms.college,callback:function(t){e.$set(e.forms,"college",t)},expression:"forms.college"}},e._l(e.collegeOption,function(e){return s("el-option",{key:e.value,attrs:{label:e.college_name,value:e.college_name}})}),1)],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"密码:",prop:"password"}},[s("el-input",{attrs:{placeholder:"请输入密码",required:"","show-word-limit":"",type:"password"},model:{value:e.forms.password,callback:function(t){e.$set(e.forms,"password",t)},expression:"forms.password"}})],1)],1)],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.insert("forms")}}},[e._v("保存")])],1)],1)],1)],2)],1),e._v(" "),s("div",{staticStyle:{margin:"10px 0"}},[s("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,"page-sizes":[5,10,20],total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var c=s("VU/8")(i,n,!1,function(e){s("exkZ")},"data-v-82e59656",null);t.default=c.exports}});
//# sourceMappingURL=3.d1ef5aec22992cfc723a.js.map