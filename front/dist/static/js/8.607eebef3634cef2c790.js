webpackJsonp([8],{"ook+":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("2CGT"),r=s("NC6I"),a=s.n(r),i={name:"Login",data:function(){return{src:"",usersStnumber:"",usersPwd:"",codetext:"",code:"",responseResult:[],captchaUrl:""}},created:function(){this.createCode()},methods:{switch:function(e){for(var t="",s=0;s<e.length;s++)if(e[s].charCodeAt()>=65&&e[s].charCodeAt()<=91){var o=e[s].charCodeAt()+32;t+=String.fromCharCode(o)}else t+=e[s];return t},createCode:function(){for(var e="",t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"],s=0;s<4;s++){e+=t[parseInt(Math.random()*t.length,10)]}this.code=e,this.src="http://localhost:9090/authCode/code?code="+e},login:function(){var e=this,t=this.switch(this.codetext);this.switch(this.code);1111==t?(window.sessionStorage.setItem("upd",this.usersPwd),Object(o.x)({params:{usersStnumber:this.usersStnumber,usersPwd:a()(this.usersPwd)}}).then(function(t){if(console.log(t),"200"!==t.data.code)return e.$message.error("学号或密码错误");e.$message.success("登陆成功"),window.sessionStorage.setItem("id",e.usersStnumber),window.sessionStorage.setItem("token",t.data.data),console.log("登陆返回信息",t),console.log("登陆id",window.sessionStorage.getItem("id")),e.$router.replace({path:"/echartsPage"})})):this.$message({message:"验证码错误",type:"error"})},updatePwd:function(){console.log("重置密码"),window.location.hash="#/retrievePwd"}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"a"},[s("div",{staticClass:"b"}),e._v(" "),s("div",{staticClass:"c"},[s("div",{staticClass:"d"},[s("el-form",{attrs:{"label-position":"left","label-width":"0px"}},[s("h1",[e._v("运动报名管理系统")]),e._v(" "),s("el-form-item",[s("el-input",{attrs:{"auto-complete":"off",clearable:"",placeholder:"账号","prefix-icon":"el-icon-user",type:"text"},model:{value:e.usersStnumber,callback:function(t){e.usersStnumber=t},expression:"usersStnumber"}})],1),e._v(" "),s("el-form-item",[s("el-input",{attrs:{"auto-complete":"off",placeholder:"密码","prefix-icon":"el-icon-lock","show-password":"",type:"password"},model:{value:e.usersPwd,callback:function(t){e.usersPwd=t},expression:"usersPwd"}})],1),e._v(" "),s("el-form-item",[s("div",{staticStyle:{display:"flex"}},[s("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入验证码","prefix-icon":"el-icon-key"},model:{value:e.codetext,callback:function(t){e.codetext=t},expression:"codetext"}}),e._v(" "),s("el-image",{staticClass:"image",staticStyle:{height:"30px","margin-left":"30px"},attrs:{src:e.src},on:{click:function(t){return e.createCode()}}})],1)]),e._v(" "),s("el-form-item",{staticStyle:{width:"100%"}},[s("el-button",{staticClass:"h",attrs:{type:"primary"},on:{click:function(t){return e.login()}}},[e._v("登录\n          ")])],1),e._v(" "),s("div",[s("el-link",{attrs:{type:"primary"},on:{click:e.updatePwd}},[e._v("忘记密码？点击重置")])],1)],1)],1)])])},staticRenderFns:[]};var c=s("VU/8")(i,n,!1,function(e){s("yO0E")},"data-v-3d5733b4",null);t.default=c.exports},yO0E:function(e,t){}});
//# sourceMappingURL=8.607eebef3634cef2c790.js.map