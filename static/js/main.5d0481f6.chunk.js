(this["webpackJsonpcontact-app"]=this["webpackJsonpcontact-app"]||[]).push([[0],{18:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),s=n.n(i),r=(n(18),n(12)),l=n(10),o=n(11),d=n(6),j=n(0);function u(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"ui fixed menu",children:Object(j.jsx)("div",{className:"ui container center",children:Object(j.jsx)("h2",{children:"Contact Manager"})})})})}n(24);var b=n(7),m=n(8),h=n(13),O=n(9),f=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={name:"",email:""},e.add=function(t){t.preventDefault(),""!==e.state.name&&""!==e.state.email?(e.props.addContactHandler(e.state),e.setState({name:"",email:""})):alert("ALl the fields are mandatory!")},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"ui main",children:[Object(j.jsx)("h2",{children:"Add Contact"}),Object(j.jsxs)("form",{className:"ui form",onSubmit:this.add,children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})]}),Object(j.jsx)("button",{className:"ui button blue",children:"Add"})]})]})}}]),n}(a.a.Component),x=f;function v(e){return Object(j.jsx)("div",{className:"item",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("div",{className:"header",children:e.contact.name}),Object(j.jsx)("div",{className:"",children:e.contact.email}),Object(j.jsx)("i",{style:{color:"red"},className:"trash alternate outline icon",onClick:function(){return e.clickHandler(e.contact.id)}})]})})}function p(e){var t=function(t){e.getContactId(t)},n=e.contacts.map((function(e){return Object(j.jsx)(v,{contact:e,clickHandler:t},e.id)}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"ui celled list",children:[Object(j.jsx)("h2",{children:"Contact list"}),n]})})}var g=function(){var e="contacts",t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(e));t&&i(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(a))}),[a]),Object(j.jsxs)("div",{className:"ui container",children:[Object(j.jsx)(u,{}),Object(j.jsx)(x,{addContactHandler:function(e){i([].concat(Object(l.a)(a),[Object(r.a)({id:Object(d.uuid)()},e)]))}}),Object(j.jsx)(p,{contacts:a,getContactId:function(e){var t=a.filter((function(t){return t.id!==e}));i(t)}})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),N()}},[[26,1,2]]]);
//# sourceMappingURL=main.5d0481f6.chunk.js.map