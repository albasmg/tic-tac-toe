(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(a,e,n){"use strict";n.r(e);var t=n(0),c=n.n(t),r=n(3),o=n.n(r),u=(n(9),n(1)),l=function(a){var e=a.board;return c.a.createElement("div",{className:"board"},e.map((function(a,e){return c.a.createElement("div",{className:"board__row",key:e},a.map((function(a,n){return c.a.createElement("div",{className:"board__col",key:"".concat(e,"-").concat(n)},a)})))})))},i=function(a){var e=a.message;return c.a.createElement("p",{className:"notification"},e)},m=function(){var a=function(){for(var a=[],e=3,n=3,t=0;t<2;t++){a[t]=[];for(var c=0;c<3;c++){"X"===["O","X"][Math.round(Math.random())]?e>0?(a[t]=[].concat(Object(u.a)(a[t]),["X"]),e-=1):a[t]=[].concat(Object(u.a)(a[t]),["O"]):n>0?(a[t]=[].concat(Object(u.a)(a[t]),["O"]),n-=1):a[t]=[].concat(Object(u.a)(a[t]),["X"])}}return a[2]=["","",""],a}(),e=function(a){return"X"===a[0][0]&&"X"===a[1][0]||"X"===a[0][2]&&"X"===a[1][1]}(a),n=function(a){return"X"===a[0][1]&&"X"===a[1][1]}(a),t=function(a){return"X"===a[0][2]&&"X"===a[1][2]||"X"===a[0][0]&&"X"===a[1][1]}(a);return c.a.createElement("div",{className:"app"},c.a.createElement(l,{board:a}),e&&c.a.createElement(i,{message:"La m\xe1quina gana con la celda de abajo a la izquierda"}),n&&c.a.createElement(i,{message:"La m\xe1quina gana con la celda de abajo al centro"}),t&&c.a.createElement(i,{message:"La m\xe1quina gana con la celda de abajo a la derecha"}),!e&&!n&&!t&&c.a.createElement(i,{message:"La m\xe1quina no puede ganar"}))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},4:function(a,e,n){a.exports=n(10)},9:function(a,e,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.3254943e.chunk.js.map