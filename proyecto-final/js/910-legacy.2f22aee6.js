"use strict";(self["webpackChunkproyecto_final"]=self["webpackChunkproyecto_final"]||[]).push([[910],{910:function(e,a,s){s.r(a),s.d(a,{default:function(){return c}});var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"container"},[s("h2",[e._v("Nuevo Usuario")]),s("form",{staticClass:"form",attrs:{action:""}},[s("div",{staticClass:"floating-content"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"floating-input",attrs:{type:"text",id:"username",placeholder:" "},domProps:{value:e.user.username},on:{keyup:function(a){return e.validateUsername()},input:function(a){a.target.composing||e.$set(e.user,"username",a.target.value)}}}),s("label",{staticClass:"floating-label",attrs:{for:"username"}},[e._v("Usuario: ")])]),""!=e.validUsername?s("div",{staticClass:"row"},[s("p",{staticClass:"errorForm"},[e._v(e._s(e.validUsername))])]):e._e(),s("div",{staticClass:"floating-content"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"floating-input",attrs:{type:"password",id:"password",placeholder:" "},domProps:{value:e.user.password},on:{keyup:function(a){return e.validatePassword()},input:function(a){a.target.composing||e.$set(e.user,"password",a.target.value)}}}),s("label",{staticClass:"floating-label",attrs:{for:"password"}},[e._v("Contraseña: ")])]),""!=e.validPassword?s("div",{staticClass:"row"},[s("p",{staticClass:"errorForm"},[e._v(e._s(e.validPassword))])]):e._e(),s("div",{staticClass:"floating-content"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"floating-input",attrs:{type:"text",id:"nombre",placeholder:" "},domProps:{value:e.user.name},on:{keyup:function(a){return e.validateNombre(a)},input:function(a){a.target.composing||e.$set(e.user,"name",a.target.value)}}}),s("label",{staticClass:"floating-label",attrs:{for:"nombre"}},[e._v("Nombre y Apellido: ")])]),""!=e.validNombre?s("div",{staticClass:"row"},[s("p",{staticClass:"errorForm"},[e._v(e._s(e.validNombre))])]):e._e(),s("div",{staticClass:"floating-content"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"floating-input",attrs:{type:"text",id:"email",placeholder:" "},domProps:{value:e.user.email},on:{keyup:function(a){return e.validateEmail()},input:function(a){a.target.composing||e.$set(e.user,"email",a.target.value)}}}),s("label",{staticClass:"floating-label",attrs:{for:"email"}},[e._v("Mail: ")])]),""!=e.validMail?s("div",{staticClass:"row"},[s("p",{staticClass:"errorForm"},[e._v(e._s(e.validMail))])]):e._e(),s("div",{staticClass:"floating-content"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.edad,expression:"user.edad"}],staticClass:"floating-input",attrs:{type:"number",id:"edad"},domProps:{value:e.user.edad},on:{keyup:function(a){return e.validateEdad()},change:function(a){return e.validateEdad()},input:function(a){a.target.composing||e.$set(e.user,"edad",a.target.value)}}}),s("label",{staticClass:"floating-label",attrs:{for:"edad"}},[e._v("Edad: ")])]),""!=e.validEdad?s("div",{staticClass:"row"},[s("p",{staticClass:"errorForm"},[e._v(e._s(e.validEdad))])]):e._e(),s("div",{staticClass:"row divLogin"},[s("button",{staticClass:"btn-login",on:{click:e.agregarUsuario}},[s("span",[e._v("Agregar")])])])]),s("div",{staticClass:"row divVolver"},[s("router-link",{attrs:{to:"/"}},[s("button",{staticClass:"btn-volver"},[s("span",[e._v("Volver")])])])],1)])},r=[],i=s(3019),o=s(6489),n=s(4665),l=(s(8309),s(4916),s(7601),{data:function(){return{user:{username:"",name:"",email:"",edad:0,password:"",rol:1},validEdad:"",validMail:"",validNombre:"",validPassword:"",validUsername:""}},methods:{resetForm:function(){this.user.username="",this.user.name="",this.user.email="",this.user.edad=0,this.user.password=""},checkNewUserForm:function(){return this.validateUsername()&&this.validateNombreSubmit()&&this.validateEmail()&&this.validateEdad()&&this.validatePassword()},validateUsername:function(){var e=/^\S[a-zA-Z]{3,}/;return e.test(this.user.username)?(this.validUsername="",!0):(this.validUsername="Su nombre de usuario debe tener al menos 4 letras y no puede contener espacios",!1)},validateNombre:function(e){if(e.keyCode>47&&e.keyCode<58||e.keyCode>95&&e.keyCode<106)return this.user.name=this.user.name.substring(0,this.user.name.length-1),!1;var a=/[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*/;return a.test(this.user.name)?(this.validNombre="",!0):(this.validNombre="Formato de nombre inválido",!1)},validateNombreSubmit:function(){var e=/[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*/;return e.test(this.user.name)?(this.validNombre="",!0):(this.validNombre="Formato de nombre inválido",!1)},validateEmail:function(){var e=/^[^@]+@[^@]+.[a-zA-Z]{2,}$/;return e.test(this.user.email)?(this.validMail="",!0):(this.validMail="Mail inválido",!1)},validateEdad:function(){return this.user.edad>=18&&this.user.edad<=100?(this.validEdad="",!0):(this.user.edad<0?this.user.edad=0:this.user.edad>100&&(this.user.edad=100),this.validEdad="Debe ingresar una edad entre 18 y 100 años.",!1)},validatePassword:function(){var e=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;return e.test(this.user.password)?(this.validPassword="",!0):(this.validPassword="La contraseña debe contener al menos 8 caracteres, una mayúscula, un caracter especial y un número.",!1)}}}),d={mixins:[l],methods:{agregarUsuario:function(){this.checkNewUserForm()?(o.Z.dispatch("users/addUser",this.user),alert("Su cuenta fue creada exitosamente. Será redirigido al menú de Login."),this.$router.push("/")):alert("Por favor, corrija los errores del formulario y vuelva a intentarlo")}},computed:(0,i.Z)((0,i.Z)({},(0,n.rn)(["users","userLogged","orders"])),(0,n.Se)(["getUsers","getUserLogged","getOrders"]))},u=d,v=s(1001),m=(0,v.Z)(u,t,r,!1,null,"b95c8cfe",null),c=m.exports}}]);
//# sourceMappingURL=910-legacy.2f22aee6.js.map