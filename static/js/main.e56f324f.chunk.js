(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{16:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var c=o(0),n=o(1),s=o.n(n),a=o(9),i=o.n(a),l=(o(16),o(4)),r=(o(8),o(10)),u=o(3),j=function(t){var e=t.setStatus,o=t.setInputText,n=t.setToDos,s=t.toDos,a=t.inputText;return Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{value:a,onChange:function(t){o(t.target.value)},type:"text",className:"todo-input"}),Object(c.jsxs)("button",{className:"todo-button",type:"submit",onClick:function(t){t.preventDefault(),n([].concat(Object(r.a)(s),[{input:a,completed:!1,id:1e3*Math.random()}])),o("")},children:[Object(c.jsx)("i",{className:"fab fa-facebook"}),Object(c.jsx)(u.c,{})]}),Object(c.jsx)("div",{className:"select",children:Object(c.jsxs)("select",{onChange:function(t){e(t.target.value)},name:"todo",className:"filter-todo",children:[Object(c.jsx)("option",{value:"ALL",children:"All"}),Object(c.jsx)("option",{value:"COMPLETED",children:"completed"}),Object(c.jsx)("option",{value:"UNCOMPLETED",children:"uncompleted"})]})})]})},d=o(7),b=function(t){var e=t.text,o=t.todo,n=t.setToDos,s=t.toDos;return Object(c.jsxs)("div",{className:"todo",children:[Object(c.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:e}),Object(c.jsx)("button",{onClick:function(){n(s.map((function(t){return t.id===o.id?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t})))},className:"check-btn",children:Object(c.jsx)(u.a,{})}),Object(c.jsx)("button",{onClick:function(){n(s.filter((function(t){return t.id!==o.id})))},className:"trash-btn",children:Object(c.jsx)(u.b,{})})]})},O=function(t){var e=t.filteredToDos,o=t.toDos,n=t.setToDos;return Object(c.jsxs)("div",{className:"todo-container",children:[Object(c.jsx)("ul",{className:"todo-list"}),e.map((function(t){return Object(c.jsx)(b,{setToDos:n,toDos:o,todo:t,text:t.input},t.id)}))]})};var f=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),o=e[0],s=e[1],a=Object(n.useState)([]),i=Object(l.a)(a,2),r=i[0],u=i[1],d=Object(n.useState)("all"),b=Object(l.a)(d,2),f=b[0],m=b[1],p=Object(n.useState)([]),x=Object(l.a)(p,2),h=x[0],D=x[1];Object(n.useEffect)((function(){return v()}),[]);var v=function(){if(null===localStorage.getItem("toDos"))localStorage.setItem("toDos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("toDos"));u(t)}};return Object(n.useEffect)((function(){!function(){switch(f){case"COMPLETED":D(r.filter((function(t){return!0===t.completed})));break;case"UNCOMPLETED":D(r.filter((function(t){return!1===t.completed})));break;default:D(r)}}(),localStorage.setItem("toDos",JSON.stringify(r))}),[f,r]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"My List"})}),Object(c.jsx)(j,{setStatus:m,setInputText:s,setToDos:u,toDos:r,inputText:o}),Object(c.jsx)(O,{filteredToDos:h,setToDos:u,toDos:r})]})},m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,18)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;o(t),c(t),n(t),s(t),a(t)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),m()},8:function(t,e,o){}},[[17,1,2]]]);
//# sourceMappingURL=main.e56f324f.chunk.js.map