(function(e){function t(t){for(var o,s,i=t[0],l=t[1],c=t[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"0a30":function(e,t,n){"use strict";var o=n("5dc7"),a=n.n(o);a.a},"1e3b":function(e,t,n){"use strict";var o=n("b3f8"),a=n.n(o);a.a},"245a":function(e,t,n){const o=n("96eb"),a=o.Random;o.mock("/login",/post/i,(function(e){let t=JSON.parse(e.body);return"admin"==t.username&&"123"==t.password?{status:!0}:{status:!1,reason:"密码错误"}})),o.mock("/files",/post/i,(function(e){let t=a.integer(3,10),n=[];for(i=0;i<t;i++)n.push({name:a.cname(),date:a.date(),size:a.float(0,15682),self:!0,public:!0,anoymous:!0,id:1234});let o="README.md",r=a.paragraph();return{status:!0,directory:n,fileContent:r,fileName:o}})),o.mock(RegExp("/info.*"),"get",(function(e){return{status:!0,info:{username:a.cname(),uploadtime:a.datetime(),filesize:a.integer(),md5:a.id()}}}))},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s={},i=s,l=(n("034f"),n("2877")),c=Object(l["a"])(i,a,r,!1,null,null,null),u=c.exports,f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"min-percent"},[n("el-header",{staticClass:"header"},[n("el-row",{staticStyle:{height:"100%",display:"flex","align-items":"center"}},[n("el-col",{attrs:{span:18,offset:3}},[n("i",{staticClass:"head_title"},[e._v("Vue And Go File Website")])])],1)],1),n("el-main",{staticClass:"main"},[n("el-row",[n("el-col",{attrs:{span:16,offset:4}},[n("el-card",[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.paths,(function(t,o){return n("el-breadcrumb-item",{attrs:{to:t.completeUrl}},[e._v(e._s(t.path)+" ")])})),1)],1),n("el-card",[n("el-row",[n("UploadButton",{staticClass:"margin_left"}),n("el-button",{staticClass:"margin_left",attrs:{size:"mini",type:"danger"},on:{click:e.hidden}},[n("i",{staticClass:"far",class:e.eyeClass})])],1)],1),n("Directory",{staticStyle:{"margin-bottom":"50px"},attrs:{myfiles:e.directory.data},on:{refresh:e.refresh}}),n("File",{attrs:{fileName:e.fileName,fileContent:e.fileContent}})],1)],1)],1),n("iframe",{attrs:{src:"https://zhanyuzhang.github.io/lovely-cat/cat.html",border:"0",id:"catIframe"}}),n("el-footer",{staticClass:"footer"},[n("el-row",{staticStyle:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[n("i",{staticStyle:{color:"gray","font-size":"smaller"}},[e._v("Vue And Go File Website.And Others Information hahaha")])])],1)],1)},m=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{attrs:{shadow:"always"}},[n("el-dialog",{staticClass:"min_dialog",attrs:{title:"文件配置",visible:e.config.dialogVisible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.config,"dialogVisible",t)}}},[n("el-form",[n("el-form-item",{attrs:{label:"是否公开："}},[n("el-radio",{attrs:{label:!0},model:{value:e.config.row.public,callback:function(t){e.$set(e.config.row,"public",t)},expression:"config.row.public"}},[e._v("公开")]),n("el-radio",{attrs:{label:!1},model:{value:e.config.row.public,callback:function(t){e.$set(e.config.row,"public",t)},expression:"config.row.public"}},[e._v("不公开")])],1),n("el-form-item",{attrs:{label:"公开方式："}},[n("el-radio",{attrs:{label:!0},model:{value:e.config.row.anoymous,callback:function(t){e.$set(e.config.row,"anoymous",t)},expression:"config.row.anoymous"}},[e._v("匿名公开")]),n("el-radio",{attrs:{label:!1},model:{value:e.config.row.anoymous,callback:function(t){e.$set(e.config.row,"anoymous",t)},expression:"config.row.anoymous"}},[e._v("实名公开")])],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.config.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.updateConfig}},[e._v("确 定")])],1)],1),n("el-dialog",{staticClass:"min_dialog",attrs:{title:"文件配置",visible:e.info.visible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.info,"visible",t)}}},[n("el-form",{attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"上传人"}},[n("el-input",{attrs:{readonly:!0},model:{value:e.info.info.username,callback:function(t){e.$set(e.info.info,"username",t)},expression:"info.info.username"}})],1),n("el-form-item",{attrs:{label:"上传时间"}},[n("el-date-picker",{attrs:{readonly:!0,type:"datetime"},model:{value:e.info.info.uploadtime,callback:function(t){e.$set(e.info.info,"uploadtime",t)},expression:"info.info.uploadtime"}})],1),n("el-form-item",{attrs:{label:"文件大小"}},[n("el-input",{attrs:{readonly:!0},model:{value:e.info.info.filesize,callback:function(t){e.$set(e.info.info,"filesize",t)},expression:"info.info.filesize"}},[n("template",{slot:"append"},[e._v("KB")])],2)],1),n("el-form-item",{attrs:{label:"文件md5"}},[n("el-input",{attrs:{readonly:!0},model:{value:e.info.info.md5,callback:function(t){e.$set(e.info.info,"md5",t)},expression:"info.info.md5"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.info.visible=!1}}},[e._v("确 定")])],1)],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.myfiles}},[n("el-table-column",{attrs:{prop:"name",label:"Name"}}),n("el-table-column",{attrs:{prop:"size",label:"Size"}}),n("el-table-column",{attrs:{prop:"date",label:"ModTime"}}),n("el-table-column",{attrs:{label:"Actions"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-download point",on:{click:function(n){return e.download(t.row)}}}),t.row.self?n("i",{staticClass:"el-icon-delete point",on:{click:function(e){return delete t.row}}}):e._e(),t.row.self?n("i",{staticClass:"el-icon-setting point",on:{click:function(n){return e.mconfig(t.row)}}}):e._e(),n("i",{staticClass:"el-icon-info point",on:{click:function(n){return e.showInfo(t.row)}}})]}}])})],1)],1)},b=[],h={name:"directory",props:["myfiles"],data(){return{config:{dialogVisible:!1,row:{}},info:{visible:!1,info:{}}}},methods:{download(e){},delete(e){refresh()},mconfig(e){console.log(e),this.config.row=e,this.config.dialogVisible=!0},refresh(){this.$emit("refresh")},updateConfig(){this.config.dialogVisible=!1},showInfo(e){let t=this;this.$ajax.get(`/info?fileid=${e.id}`).then((function(e){let n=e.data;n.status?(t.info.info=n.info,t.info.visible=!0):t.$message.warning(n.reason)})).catch((function(e){t.$message.warning(e)}))}}},g=h,w=(n("0a30"),Object(l["a"])(g,p,b,!1,null,null,null)),v=w.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{attrs:{shadow:"always"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(e.fileName))]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[e._v("操作按钮")])],1),n("mavon-editor",{attrs:{value:e.fileContent,editable:!1,toolbarsFlag:!1,subfield:!1,defaultOpen:"preview"}})],1)},_=[],$={name:"file",components:{},data(){return{}},props:["fileName","fileContent"]},x=$,C=Object(l["a"])(x,y,_,!1,null,null,null),k=C.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-upload",{attrs:{action:"这里写地址",multiple:"","show-file-list":!1,"on-success":e.success,"on-error":e.error,"on-progress":e.progress}},[n("el-button",{attrs:{size:"mini",type:"danger"}},[n("i",{staticClass:"el-icon-upload"})])],1)},O=[],S={name:"UploadButton",data(){return{data:{},success:function(e,t,n){},error:function(e,t,n){},progress:function(e,t,n){}}},methods:{}},F=S,z=Object(l["a"])(F,j,O,!1,null,"1fde075c",null),E=z.exports,N={name:"home",components:{Directory:v,File:k,UploadButton:E},data(){return{hiddenFile:!0,directory:{data:[]},fileName:"",fileContent:""}},created(){this.getData(this.$store.state.urls,!1)},computed:{paths(){let e=[],t="";for(let n of this.$store.state.urls.split("/"))t+="/"+n,e.push({path:n,completeUrl:t});return e},eyeClass(){return{"fa-mavon-eye":this.hiddenFile,"fa-mavon-eye-slash":!this.hiddenFile}}},methods:{refresh(){getData(this.$store.state.urls,!1)},hidden(){this.hiddenFile=!this.hiddenFile},getData(e,t){let n=this;this.$ajax.post("/files",{urls:e,showHidden:t}).then((function(e){let t=e.data;t.status?(n.fileName=t.fileName,n.fileContent=t.fileContent,n.directory.data=t.directory):n.$message.error(t.reason)})).catch((function(e){n.$message.warning(e)}))}}},P=N,V=(n("1e3b"),Object(l["a"])(P,d,m,!1,null,null,null)),D=V.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"bg"},[n("el-card",{staticClass:"login"},[n("el-form",{ref:"elform",attrs:{model:e.user,rules:e.rules}},[n("el-form-item",{attrs:{label:"Username",prop:"username"}},[n("el-input",{attrs:{placeholder:"用户名"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),n("el-form-item",{attrs:{label:"Password",prop:"password"}},[n("el-input",{attrs:{placeholder:"密码","show-password":""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("elform")}}},[e._v("立即创建")]),n("el-button",{on:{click:function(t){return e.resetForm("elform")}}},[e._v("重置")])],1)],1)],1)],1)},U=[],A={name:"login",data(){return{user:{username:"admin",password:"123"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入用户名",trigger:"blur"}]}}},methods:{submitForm(e){let t=this;this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;t.$ajax.post("/login",{username:t.user.username,password:t.user.password}).then((function(e){e.data.status?(t.$message.success("登录成功"),t.$store.commit("loginSucessful"),t.$router.push("home")):t.$message.error(`${e.data.reason}`)})).catch((function(e){t.$message.warning("内部错误"+e)}))})},resetForm(e){this.$refs[e].resetFields()}}},B=A,I=(n("d6db"),Object(l["a"])(B,M,U,!1,null,null,null)),T=I.exports,q=n("323e"),J=n.n(q),R=n("2f62");o["default"].use(R["a"]);var G=new R["a"].Store({state:{urls:"home",logined:!1},mutations:{loginSucessful(){this.state.logined=!0}},actions:{},modules:{}});o["default"].use(f["a"]);const W=[{path:"/login",name:"login",component:T},{path:"/",name:"home",component:D,alias:"/home"}],H=new f["a"]({routes:W});H.beforeEach((e,t,n)=>{J.a.start(),"login"===e.name||"register"===e.name?n():G.state.logined?n():(n("login"),J.a.done())}),H.afterEach((e,t,n)=>{J.a.done()});var K=H,L=n("5c96"),Q=n.n(L),X=(n("0fae"),n("b2d8")),Y=n.n(X),Z=(n("64e1"),n("bc3a")),ee=n.n(Z),te=(n("245a"),n("a5d8"),n("ecee")),ne=n("c074"),oe=n("b702"),ae=n("f2d1"),re=n("ad3d");te["c"].add(ne["a"],oe["a"],ae["a"]),J.a.inc(.2),J.a.configure({easing:"ease",speed:500,showSpinner:!1}),o["default"].prototype.$ajax=ee.a,o["default"].component("font-awesome-icon",re["a"]),o["default"].component("font-awesome-layers",re["b"]),o["default"].component("font-awesome-layers-text",re["c"]),ee.a.interceptors.request.use((function(e){return J.a.start(),e}),(function(e){return Promise.reject(e)})),ee.a.interceptors.response.use((function(e){return J.a.done(),e}),(function(e){return J.a.done(),Promise.reject(e)})),o["default"].use(Y.a),o["default"].config.productionTip=!1,o["default"].use(Q.a),new o["default"]({router:K,store:G,render:function(e){return e(u)}}).$mount("#app")},"5dc7":function(e,t,n){},"85ec":function(e,t,n){},b3f8:function(e,t,n){},d6db:function(e,t,n){"use strict";var o=n("e67a"),a=n.n(o);a.a},e67a:function(e,t,n){}});
//# sourceMappingURL=app.a29352ab.js.map