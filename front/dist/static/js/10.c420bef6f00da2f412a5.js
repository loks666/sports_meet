webpackJsonp([10],{VNJE:function(t,e){},W1Qr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("2CGT"),s={data:function(){return{currentPage:1,pageSize:3,total:0,draftList:[],img:"http://localhost:9090/image/",imgUrl:""}},created:function(){this.getList()},methods:{getRandomInt:function(t,e){this.data=Math.floor(Math.random()*(e-t+1))+t},getList:function(){var t=this;Object(i.E)({params:{PageNum:this.currentPage,PageSize:this.pageSize,search:this.search}}).then(function(e){console.log("=====>>",e.data),t.total=e.data.data.total,t.draftList=e.data.data.records;for(var a=0;a<t.draftList.length;a++){var i=Math.round(2*Math.random()+1);console.log("---\x3e",t.imgUrl),console.log("---\x3e",t.index),t.imgUrl="static/img/"+[i]+".png"}console.log("=====>》》》》>",t.draftList)})},sizeChange:function(t){this.page.pageSize=t},handleSizeChange:function(t){this.pageSize=t,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"10px 10px 10px 10px",margin:"3px 0px 0px 3px","box-shadow":"0 0 5px #888888","background-color":"#f0f2fa"}},[t._l(t.draftList,function(e,i){return a("div",{key:i,staticClass:"block"},[a("div",{staticStyle:{width:"14%",height:"185px",margin:"8px 8px 8px 18px"}},[a("div",{staticStyle:{width:"118px",height:"118px","border-radius":"50%","margin-left":"25px"}},[a("img",{staticClass:"img",attrs:{src:t.img+e.usersList[0].usersUrl,alt:""}})]),t._v(" "),a("div",{staticClass:"nameclass"},[t._v(t._s(e.usersName))])]),t._v(" "),a("div",{staticStyle:{width:"80%",height:"185px","margin-left":"10px",margin:"8px","background-color":"#ffffff","border-radius":"3px","box-shadow":"0 0 3px #D3D3D3"}},[a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{width:"80px",height:"30px"}},[a("el-tag",{staticStyle:{"margin-top":"6px","margin-left":"9px"},attrs:{size:"medium"}},[t._v(t._s(e.collegeName))])],1),t._v(" "),t._m(0,!0),t._v(" "),t._m(1,!0),t._v(" "),t._m(2,!0)]),t._v(" "),a("div",{staticClass:"texts"},[a("textarea",{staticClass:"textarea-text",attrs:{cols:"105",readonly:"",rows:"5.7"}},[t._v(t._s(e.draftContent))])])])])}),t._v(" "),a("div",{staticStyle:{margin:"10px 0"}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,"page-sizes":[3,6,20],total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"32px",height:"32px","margin-left":"750px","margin-top":"4px"}},[e("img",{attrs:{src:"static/img/1.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"32px",height:"32px","margin-left":"15px","margin-top":"4px"}},[e("img",{attrs:{src:"static/img/像素_树.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"32px",height:"32px","margin-left":"15px","margin-top":"4px"}},[e("img",{attrs:{src:"static/img/像素_游戏机.png"}})])}]};var n=a("VU/8")(s,r,!1,function(t){a("VNJE")},"data-v-37d2e52c",null);e.default=n.exports}});
//# sourceMappingURL=10.c420bef6f00da2f412a5.js.map