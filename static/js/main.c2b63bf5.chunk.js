(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{37:function(t,e,c){},52:function(t,e,c){},58:function(t,e,c){"use strict";c.r(e);var n=c(5),s=c(1),o=c.n(s),a=c(9),i=c.n(a),r=(c(52),c(13)),j=(c(37),c(86)),l=c(90),d=c(29),b=c(14),u=c(25),O=c(91),x=c(92),h=function(t){var e=t.setStatus,c=t.setInputText,s=t.setToDos,o=t.toDos,a=t.inputText;return Object(n.jsx)("form",{children:Object(n.jsxs)(j.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",children:[Object(n.jsx)(j.a,{item:!0,children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(O.a,{value:a,onChange:function(t){c(t.target.value)},type:"text",className:"todo-input",id:"standard-basic",label:"My new task",variant:"standard"}),Object(n.jsx)(x.a,{variant:"contained",color:"secondary",className:"todo-button",type:"submit",onClick:function(t){t.preventDefault(),s([].concat(Object(b.a)(o),[{input:a,completed:!1,id:1e3*Math.random()}])),c("")},children:Object(n.jsx)(u.c,{})})]})}),Object(n.jsx)(j.a,{item:!0,children:Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)("select",{onChange:function(t){e(t.target.value)},name:"todo",className:"filter-todo",children:[Object(n.jsx)("option",{value:"ALL",children:"All"}),Object(n.jsx)("option",{value:"COMPLETED",children:"completed"}),Object(n.jsx)("option",{value:"UNCOMPLETED",children:"uncompleted"})]})})})})]})})},f=c(33),m=function(t){var e=t.text,c=t.todo,s=t.setToDos,o=t.toDos;return Object(n.jsxs)("div",{className:"todo",children:[Object(n.jsx)("li",{className:"todo-item ".concat(c.completed?"completed":""),children:e}),Object(n.jsx)(x.a,{onClick:function(){s(o.map((function(t){return t.id===c.id?Object(f.a)(Object(f.a)({},t),{},{completed:!t.completed}):t})))},className:"check-btn",children:Object(n.jsx)(u.a,{})}),Object(n.jsx)(x.a,{onClick:function(){s(o.filter((function(t){return t.id!==c.id})))},className:"trash-btn",children:Object(n.jsx)(u.b,{})})]})},p=function(t){var e=t.filteredToDos,c=t.toDos,s=t.setToDos;return Object(n.jsxs)("div",{className:"todo-container",children:[Object(n.jsx)("ul",{className:"todo-list"}),e.map((function(t){return Object(n.jsx)(m,{setToDos:s,toDos:c,todo:t,text:t.input},t.id)}))]})};var D=function(){var t=Object(s.useState)(""),e=Object(r.a)(t,2),c=e[0],o=e[1],a=Object(s.useState)([]),i=Object(r.a)(a,2),b=i[0],u=i[1],O=Object(s.useState)("all"),x=Object(r.a)(O,2),f=x[0],m=x[1],D=Object(s.useState)([]),v=Object(r.a)(D,2),g=v[0],T=v[1];Object(s.useEffect)((function(){return N()}),[]);var N=function(){if(null===localStorage.getItem("toDos"))localStorage.setItem("toDos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("toDos"));u(t)}};return Object(s.useEffect)((function(){!function(){switch(f){case"COMPLETED":T(b.filter((function(t){return!0===t.completed})));break;case"UNCOMPLETED":T(b.filter((function(t){return!1===t.completed})));break;default:T(b)}}(),localStorage.setItem("toDos",JSON.stringify(b))}),[f,b]),Object(n.jsxs)(j.a,{container:!0,children:[Object(n.jsx)(j.a,{item:!0,xs:12,children:Object(n.jsx)(l.a,{children:Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"My List"})})})}),Object(n.jsx)(j.a,{item:!0,xs:12,children:Object(n.jsx)(l.a,{children:Object(n.jsx)(h,{setStatus:m,setInputText:o,setToDos:u,toDos:b,inputText:c})})}),Object(n.jsx)(j.a,{item:!0,xs:12,className:"list-icon-section",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(d.b,{}),Object(n.jsx)(d.a,{}),Object(n.jsx)(d.c,{})]})}),Object(n.jsx)(j.a,{item:!0,xs:12,children:Object(n.jsx)(l.a,{children:Object(n.jsx)(p,{filteredToDos:g,setToDos:u,toDos:b})})})]})},v=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,o=e.getLCP,a=e.getTTFB;c(t),n(t),s(t),o(t),a(t)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),v()}},[[58,1,2]]]);
//# sourceMappingURL=main.c2b63bf5.chunk.js.map