"use strict";(self["webpackChunkproyecto_final"]=self["webpackChunkproyecto_final"]||[]).push([[992],{992:function(t,o,e){e.r(o),e.d(o,{default:function(){return u}});var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("form",{attrs:{action:""}},[e("div",{staticClass:"floating-content"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.producto.name,expression:"producto.name"}],staticClass:"floating-input",attrs:{type:"text",id:"nombre",placeholder:" "},domProps:{value:t.producto.name},on:{input:function(o){o.target.composing||t.$set(t.producto,"name",o.target.value)}}}),e("label",{staticClass:"floating-label",attrs:{for:"nombre"}},[t._v("Nombre:")])]),e("div",{staticClass:"floating-content"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.producto.img,expression:"producto.img"}],staticClass:"floating-input",attrs:{type:"text",id:"imagen",placeholder:" "},domProps:{value:t.producto.img},on:{input:function(o){o.target.composing||t.$set(t.producto,"img",o.target.value)}}}),e("label",{staticClass:"floating-label",attrs:{for:"imagen"}},[t._v("Imagen:")])]),e("div",{staticClass:"floating-content"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.producto.desc,expression:"producto.desc"}],staticClass:"floating-input",attrs:{id:"descripcion",placeholder:" "},domProps:{value:t.producto.desc},on:{input:function(o){o.target.composing||t.$set(t.producto,"desc",o.target.value)}}}),e("label",{staticClass:"floating-label",attrs:{for:"descripcion"}},[t._v("Descripcion:")])]),e("div",{staticClass:"floating-content"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.producto.price,expression:"producto.price"}],staticClass:"floating-input",attrs:{type:"number",id:"precio"},domProps:{value:t.producto.price},on:{input:function(o){o.target.composing||t.$set(t.producto,"price",o.target.value)}}}),e("label",{staticClass:"floating-label",attrs:{for:"precio"}},[t._v("Precio:")])]),e("div",{staticClass:"floating-content"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.producto.stock,expression:"producto.stock"}],staticClass:"floating-input",attrs:{type:"number",id:"stock"},domProps:{value:t.producto.stock},on:{input:function(o){o.target.composing||t.$set(t.producto,"stock",o.target.value)}}}),e("label",{staticClass:"floating-label",attrs:{for:"stock"}},[t._v("Stock:")])]),e("div",{staticClass:"divEditar"},[e("button",{staticClass:"btn-editar edit",on:{click:function(o){return t.editarProducto()}}},[e("span",[t._v("Editar Producto")])]),e("router-link",{attrs:{to:"/admin"}},[e("button",{staticClass:"btn-editar volver"},[e("span",[t._v("Volver")])])])],1)])])},i=[],r=e(3019),s=(e(8309),e(1539),e(4747),e(4665)),c={data:function(){return{producto:{name:"",img:"",desc:"",price:0,stock:0}}},methods:(0,r.Z)((0,r.Z)({},(0,s.nv)("products",["getProductsFromAPI","editProduct","deleteProduct","editProductToAPI"])),{},{editarProducto:function(){var t=this.editProductToAPI(this.producto);t&&(alert("El producto ".concat(this.producto.name," fue editado exitosamente")),this.$router.push("/admin"))}}),computed:(0,r.Z)((0,r.Z)({},(0,s.rn)(["products"])),(0,s.Se)(["getProducts"])),mounted:function(){var t=this,o=this.$route.params.id;this.products.products.forEach((function(e){e.id==o&&(t.producto=e)}))}},n=c,d=e(1001),l=(0,d.Z)(n,a,i,!1,null,"d5880e9e",null),u=l.exports}}]);
//# sourceMappingURL=992-legacy.1c29c6eb.js.map