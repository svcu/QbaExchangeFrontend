(this.webpackJsonpqbae=this.webpackJsonpqbae||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(5),o=n.n(c),s=(n(11),n(4)),i=n.n(s),l=n(6),u=n(2),d=(n(13),n(0));function j(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(u.a)(c,2),s=o[0],j=o[1],b=Object(a.useState)(""),p=Object(u.a)(b,2),h=p[0],O=p[1],x=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({crypto:"USDT",amount:n,transaction_id:s})});case 2:return t=e.sent,e.next=5,t.json();case 5:"OK"==(t=e.sent)?alert("Estamos validando su transaccion, sus USDT deberan llegar pronto"):alert("Se ha producido un error, reintente");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{class:"logo",children:"QbaExchange"}),Object(d.jsx)("input",{type:"number",placeholder:"Cantidad (USDT)",onChange:function(e){r(e.target.value),O(5*parseFloat(e.target.value,10)/100)}}),Object(d.jsx)("input",{type:"number",placeholder:"Numero de tarjeta",onChange:function(e){j(e.target.value)}}),Object(d.jsx)("h3",{class:"mg",children:"Transferir a 9225:XXXX:XXXX:XXXX : "+(parseFloat(h,10)+parseFloat(n,10))})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{class:"mg",onClick:x,children:"Transaccion echa"})}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"Transfiera la cantidad expuesta en el texto encima del boton a la tarjeta con el numero expuesto encima del boton, cuando haya echo la tranferencia presione el boton y nosotros validaremos la transaccion"})})]})}n(15);var b=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(j,{})})};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3cba68aa.chunk.js.map