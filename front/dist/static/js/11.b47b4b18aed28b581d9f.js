webpackJsonp([11],{coKC:function(t,a){},thTJ:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("2CGT"),i={name:"EchartsPage",data:function(){return{tableData:[],massage:"",massage2:"",massage3:"",name:[],num:[],msg:"Welcome to Your Vue.js App"}},created:function(){this.selectList(),this.getGuantity(),this.getEcharts()},mounted:function(){this.drawLine()},methods:{drawLine:function(){this.$echarts.init(document.getElementById("myChart")).setOption({title:{text:"各学院报名详情"},tooltip:{},legend:{data:["人数"]},xAxis:{data:this.name,name:"学院",axisTick:{color:"blue",width:300}},yAxis:{name:"人数"},series:[{name:"销量",type:"bar",data:this.num}]})},selectList:function(){Object(e.u)({}).then(function(t){console.log("更新数据")})},getGuantity:function(){var t=this;Object(e.q)().then(function(a){console.log("人数===》",a.data),console.log("token",window.sessionStorage.getItem("token")),t.massage=a.data.num,t.massage2=a.data.girl,t.massage3=a.data.boy})},getEcharts:function(){var t=this;Object(e.p)().then(function(a){console.log("图标数据===》",a.data),t.name=a.data.name,t.num=a.data.num,t.drawLine()})},goUmanage:function(){this.$router.replace("/uManage")}}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("div",[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:6}},[s("div",[s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.goUmanage}},[t._v("立即报名")])])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"btn2"},[s("div",{staticClass:"imgs"},[s("img",{attrs:{src:"static/img/icons8-人群-80.png"}})]),t._v(" "),s("div",{staticStyle:{"padding-top":"10px","font-size":"20px",color:"#8C8C8C"}},[t._v("报名总人数:")]),t._v(" "),s("div",{staticStyle:{"padding-top":"10px","font-size":"30px",color:"#8C8C8C"}},[t._v(t._s(t.massage)+"人")])])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"btn2"},[s("div",{staticClass:"imgs2"},[s("img",{attrs:{src:"static/img/icons8-女商人-80.png"}})]),t._v(" "),s("div",{staticStyle:{"padding-top":"10px","font-size":"20px",color:"#8C8C8C"}},[t._v("报名女生数:")]),t._v(" "),s("div",{staticStyle:{"padding-top":"10px","font-size":"30px",color:"#8C8C8C"}},[t._v(t._s(t.massage2)+"人")])])]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"btn2"},[s("div",{staticClass:"imgs3"},[s("img",{attrs:{src:"static/img/icons8-商人-80.png"}})]),t._v(" "),s("div",{staticStyle:{"padding-top":"10px","font-size":"20px",color:"#8C8C8C"}},[t._v("报名男生数:")]),t._v(" "),s("div",{staticStyle:{"padding-top":"10px","font-size":"30px",color:"#8C8C8C"}},[t._v(t._s(t.massage3)+"人")])])])],1)],1),t._v(" "),s("div",{staticClass:"ech"},[s("div",{style:{width:"1255px",height:"500px"},attrs:{id:"myChart"}})])])},staticRenderFns:[]};var o=s("VU/8")(i,n,!1,function(t){s("coKC")},"data-v-1f5c8b11",null);a.default=o.exports}});
//# sourceMappingURL=11.b47b4b18aed28b581d9f.js.map