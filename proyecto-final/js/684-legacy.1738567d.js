"use strict";(self["webpackChunkproyecto_final"]=self["webpackChunkproyecto_final"]||[]).push([[684],{2684:function(s,r,e){e.r(r),e.d(r,{default:function(){return m}});var t=function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("div",{staticClass:"container"},[e("img",{staticClass:"portada",attrs:{src:"https://i.imgur.com/eLUSUFJ.png",alt:"logo"}}),e("h2",[s._v("Inicio de Sesión")]),e("form",{staticClass:"form",attrs:{action:""}},[e("div",{staticClass:"floating-content"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.userForm.username,expression:"userForm.username"}],staticClass:"floating-input",attrs:{type:"text",id:"username",placeholder:" "},domProps:{value:s.userForm.username},on:{input:function(r){r.target.composing||s.$set(s.userForm,"username",r.target.value)}}}),e("label",{staticClass:"floating-label",attrs:{for:"username"}},[s._v("Usuario: ")])]),e("div",{staticClass:"floating-content"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.userForm.password,expression:"userForm.password"}],staticClass:"floating-input",attrs:{type:"password",id:"password",placeholder:" "},domProps:{value:s.userForm.password},on:{input:function(r){r.target.composing||s.$set(s.userForm,"password",r.target.value)}}}),e("label",{staticClass:"floating-label",attrs:{for:"password"}},[s._v("Contraseña: ")])]),e("div",{staticClass:"row divLogin"},[e("button",{staticClass:"btn-login",attrs:{type:"button"},on:{click:s.Login}},[e("span",[s._v("Login")])])]),e("div",{staticClass:"row centrado"},[e("router-link",{attrs:{to:"/register"}},[s._v("¿No estas registrado? ¡Registrate haciendo click aquí!")])],1)])])},o=[],a=e(7965),i=e(3019),n=(e(8862),e(4665)),u={name:"Login",data:function(){return{userForm:{username:"",password:""},msgError:""}},mounted:function(){this.getUsersFromAPI(),localStorage.removeItem("user")},methods:(0,i.Z)((0,i.Z)({},(0,n.nv)("users",["getUsersFromAPI","setUserLogged"])),{},{tryToLog:function(s){var r,e=(0,a.Z)(s);try{for(e.s();!(r=e.n()).done;){var t=r.value;if(t.username==this.userForm.username){if(t.password==this.userForm.password){var o={isValid:!0,user:t};return o}o={isValid:!1,err:-1}}else o={isValid:!1,err:-2}}}catch(i){e.e(i)}finally{e.f()}return o},Login:function(){var s=this.tryToLog(this.users.users);s.isValid?(this.setUserLogged(s.user),delete s.user.password,localStorage.setItem("user",JSON.stringify(s.user)),99==s.user.rol?this.$router.push("/admin"):this.$router.push("/index")):-1===s.err?(this.msgError="La contraseña no coincide con el usuario ingresado.",console.log(this.msgError)):-2===s.err&&(this.msgError="El usuario ingresado no se encuentra registrado.",console.log(this.msgError))}}),computed:(0,i.Z)((0,i.Z)({},(0,n.rn)(["users",["users","userLogged","orders"]])),(0,n.Se)(["getUsers","getUserLogged"]))},l=u,c=e(1001),d=(0,c.Z)(l,t,o,!1,null,"4cf298f4",null),m=d.exports}}]);
//# sourceMappingURL=684-legacy.1738567d.js.map