(this["webpackJsonpreact-lap"]=this["webpackJsonpreact-lap"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=(a(11),a(2)),s=a.n(l),u=a(5),i=a(1);a(13);function p(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),p=l[0],d=l[1],m=Object(n.useState)(""),h=Object(i.a)(m,2),f=h[0],b=h[1],E=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({crypto:"USDT",amount:a,transaction_id:p})});case 2:return t=e.sent,e.next=5,t.json();case 5:"OK"==(t=e.sent)?alert("Estamos validando su transaccion, sus USDT deberan llegar pronto"):alert("Se ha producido un error, reintente");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{class:"logo"},"QbaExchange"),r.a.createElement("input",{type:"number",placeholder:"Cantidad (USDT)",onChange:function(e){c(e.target.value),b(5*parseFloat(e.target.value,10)/100)}}),r.a.createElement("input",{type:"number",placeholder:"Numero de tarjeta",onChange:function(e){d(e.target.value)}}),r.a.createElement("h3",{class:"mg"},"Transferir a 9225:XXXX:XXXX:XXXX : "+(parseFloat(f,10)+parseFloat(a,10)))),r.a.createElement("div",null,r.a.createElement("button",{class:"mg",onClick:E},"Transaccion echa")),r.a.createElement("div",null,r.a.createElement("p",null,"Transfiera la cantidad expuesta en el texto encima del boton a la tarjeta con el numero expuesto encima del boton, cuando haya echo la tranferencia presione el boton y nosotros validaremos la transaccion")))}a(14);var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.b968096b.chunk.js.map