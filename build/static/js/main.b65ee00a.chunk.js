(this.webpackJsonpupbank=this.webpackJsonpupbank||[]).push([[0],{65:function(t,e,n){},87:function(t,e,n){},88:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),A=n(24),r=n.n(A),s=(n(65),n(16)),i=n(42),o=n(8),j=n(95),h=n(96),l=n(10),d=n.n(l),b=n(20),u=n(92),g=n(93),B=n(94),Q=(n(52),n(54)),x=n(55),E=n(56),O=function(){function t(){Object(Q.a)(this,t),this.url="https://api.up.com.au/api/v1",this.status="undefined",this.data="undefined",this.loading=!1}return Object(x.a)(t,[{key:"getJSON",value:function(){var t=Object(b.a)(d.a.mark((function t(e,n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,Object(E.backOff)((function(){return fetch(e,n)}));case 4:return a=t.sent,this.status=a.status,t.next=8,a.json();case 8:this.data=t.sent,this.loading=!1,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.error(t.t0);case 15:case"end":return t.stop()}}),t,this,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"pingToken",value:function(){var t=Object(b.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",headers:{Authorization:"Bearer "+document.getElementById("formBasicPassword").value,"Content-Type":"application/x-www-form-urlencoded"}},t.next=3,this.getJSON("".concat(this.url,"/util/ping"),e);case 3:return t.abrupt("return",{status:this.status,data:this.data});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getAccounts",value:function(){var t=Object(b.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/x-www-form-urlencoded"}},t.next=3,this.getJSON("".concat(this.url,"/accounts"),e);case 3:return t.abrupt("return",{status:this.status,data:this.data});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getIdAccount",value:function(){var t=Object(b.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/x-www-form-urlencoded"}},t.next=3,this.getJSON("".concat(this.url,"/accounts/").concat(e),n);case 3:return t.abrupt("return",{status:this.status,data:this.data});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"retrieveTransactions",value:function(){var t=Object(b.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/x-www-form-urlencoded"}},t.next=3,this.getJSON("".concat(this.url,"/accounts/").concat(e,"/transactions"),n);case 3:return t.abrupt("return",{status:this.status,data:this.data});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),w=n(91),C=n(1);function I(t){var e=Object(a.useState)(t.show),n=Object(s.a)(e,2),c=n[0],A=n[1],r=t.title,i=t.content,o=function(){return A(!c)};return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(w.a,{show:c,onHide:o,style:{color:"white"},children:[Object(C.jsx)(w.a.Header,{closeButton:!0,children:Object(C.jsx)(w.a.Title,{children:r})}),Object(C.jsx)(w.a.Body,{children:i}),Object(C.jsx)(w.a.Footer,{children:Object(C.jsx)(h.a,{variant:"secondary",onClick:o,children:"Close"})})]})})}var p,f,m,k,F,M=n(30),D=n(31),v=D.a.div(p||(p=Object(M.a)(["\n    min-height: 100vh;\n    width: 100%;\n    background-color: #1A1A22;\n    color: #FF7A64;\n    text-align: center;\n"]))),N=D.a.div(f||(f=Object(M.a)(["\n    margin: auto;\n    width: 60%;\n    padding: 15% 0;\n    text-align: left;\n"]))),Y=D.a.div(m||(m=Object(M.a)(["\n    display: flex;\n    margin: auto;\n    flex-direction: column;mj\n    justify-content: center;\n    align-items: space-between;\n    flex-wrap: wrap;\n    width: 60%;\n    padding-bottom: 4%;\n"]))),S=D.a.div(k||(k=Object(M.a)(["\n    margin-top: 2%;\n    margin-bottom: 20%;\n    transition: 0.5s;\n    color: white;\n    text-align: left;\n    opacity: 0.85;\n\n    &:hover {\n        cursor: pointer; \n        opacity: 1;\n    }\n"]))),y=D.a.div(F||(F=Object(M.a)(["\n    margin: auto;\n    margin-top: 3%; \n    width: 80%; \n    color: #FFF06B;\n    letter-spacing: 1.5px;\n    line-height: 200%;\n    font-size: large;\n    padding-bottom: 15%;\n    &:hover {\n        cursor: cursor;\n    }\n"]))),U=n(26),R=n.n(U);function J(t){var e=Object(a.useState)(!1),n=Object(s.a)(e,2),c=n[0],A=n[1],r=Object(a.useState)("No Title"),i=Object(s.a)(r,2),j=i[0],l=i[1],g=Object(a.useState)("No Content"),B=Object(s.a)(g,2),Q=B[0],x=B[1],E=Object(a.useState)(null!==localStorage.getItem("token")),w=Object(s.a)(E,2),p=w[0],f=w[1],m=function(){var t=Object(b.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A(!1),l("No Title"),x("No Content"),e.preventDefault(),t.next=6,(new O).pingToken();case 6:200!==(n=t.sent).status?(console.log(n.data.errors[0].detail),l("Error "+n.data.errors[0].status),x(n.data.errors[0].title),A(!0)):(localStorage.setItem("token",document.getElementById("formBasicPassword").value),console.log(JSON.stringify(n.data)),f(!0));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(N,{children:[Object(C.jsx)("h1",{children:"Log In"})," ",Object(C.jsx)("br",{}),Object(C.jsx)("div",{children:c&&Object(C.jsx)(I,{show:c,title:j,content:Q})}),Object(C.jsx)("div",{children:p&&Object(C.jsx)(o.a,{to:"/accounts"})}),Object(C.jsxs)(u.a,{onSubmit:m,children:[Object(C.jsxs)(u.a.Group,{controlId:"formBasicPassword",children:[Object(C.jsx)(u.a.Label,{children:"Up Api Token"}),Object(C.jsx)(u.a.Control,{type:"password",placeholder:"Paste token here"}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"Token is not shared. All sensitive data is stored to your local machine."})]}),Object(C.jsx)(h.a,{className:"btn btn-primary",type:"submit",children:"Log In"}),Object(C.jsx)("a",{className:"btn btn-link text-left text-muted",href:"https://api.up.com.au/getting_started",rel:"noreferrer",target:"_blank",children:"Don't have a token?"})]})]})})}var G=function(t){var e=t.data,n=Object(a.useState)(!1),c=Object(s.a)(n,2),A=c[0],r=c[1],i=Object(a.useState)("No Title"),o=Object(s.a)(i,2),j=o[0],h=o[1],l=Object(a.useState)("No Content"),u=Object(s.a)(l,2),Q=u[0],x=u[1];if("object"!==typeof e)return Object(C.jsxs)("div",{children:["Error ",e.status," ",e.title]});if(void 0!==e.status)return Object(C.jsxs)("div",{children:["Error ",e.status,", ",e.title," ",Object(C.jsx)("br",{}),e.detail]});var E=e.attributes,w=E.displayName,p=E.accountType,f=E.balance.value,m=E.createdAt.substring(0,E.createdAt.indexOf("T")),k=function(){var t=Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!1),h("No Title"),x("No Content"),t.next=5,(new O).retrieveTransactions(e.id);case 5:200===(n=t.sent).status?(h(w+"'s Recent Transactions"),x((a=n.data.data,Object(C.jsx)(g.a,{children:a.map((function(t,e){return Object(C.jsxs)(g.a.Item,{children:[e+1,". ",t.attributes.description,Object(C.jsxs)("text",{style:{float:"right"},children:["Value: ",t.attributes.amount.currencyCode," $",t.attributes.amount.value]}),Object(C.jsx)("br",{})]},e)}))}))),r(!0)):(h("Error "+n.status),x(n.title),r(!0));case 7:case"end":return t.stop()}var a}),t)})));return function(){return t.apply(this,arguments)}}();return Object(C.jsxs)(S,{children:[Object(C.jsx)("div",{children:A&&Object(C.jsx)(I,{show:A,title:j,content:Q})}),Object(C.jsxs)(B.a,{className:"hvr-underline-from-left",onClick:k,children:[Object(C.jsxs)(B.a.Header,{children:["Account Type: ",p]}),Object(C.jsxs)(B.a.Body,{children:[Object(C.jsx)(B.a.Title,{children:w}),Object(C.jsxs)(B.a.Subtitle,{className:"mb-3 mt-2 text-muted text-small",children:["Created on: ",m]}),Object(C.jsxs)(B.a.Title,{className:"mb-4",children:["Balance: ",f]}),Object(C.jsx)(B.a.Link,{className:"btn btn-secondary",onClick:k,children:"Show Recent Transactions"})]})]})]})};function K(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],A=e[1],r=function(t){var e=t.map((function(t){return t}));A(e)},i=function(){var t=Object(b.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A([]),t.next=3,(new O).getAccounts();case 3:200===(e=t.sent).status?(n=e.data.data,r(n)):(console.log(e),A([{status:e.status,title:e.data.errors[0].title,detail:e.data.errors[0].detail}]));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.a.useEffect((function(){i()}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(h.a,{onClick:i,children:"Refresh Accounts"}),Object(C.jsx)(Y,{children:n.map((function(t,e){return Object(C.jsx)(R.a,{transitionDuration:"800",children:Object(C.jsx)(G,{data:t},e)})}))})]})}var L=n.p+"static/media/love.dedb77d3.gif";function T(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{style:{paddingTop:"3%"},children:"About the app"}),Object(C.jsxs)(y,{style:{},children:["This is a project that I have wanted to do ever since I happened upon up bank quite a while ago. ",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"There were so many reasons as to why I actually decided to make this. In fact, I had dwelled on creating an app such as this around the november of 2019, when I first signed up for upbank and saw their\xa0",Object(C.jsx)("a",{className:"hvr-bob",variant:"link",href:"https://up.com.au/tree/",rel:"noreferrer",target:"_blank",children:"tree of up."})," ",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"Up had yet to create their own website/webapp (at the time that I created this app) so it evidently became the main driving force to start and continually work on this project. Ultimately It took me a while to create this as I felt I had yet to attain the frontend skills to create a tool such as this. But, after a long while, you are here now reading the 'about the app' page!",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"This app was created with React and Bootstrap-React customized with SASS. This project is completely open source so feel free to explore the repository of the standalone version\xa0",Object(C.jsx)("a",{className:"hvr-bob",variant:"link",href:"https://github.com/jnddao/upbank",rel:"noreferrer",target:"_blank",children:"here."})," ",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"You can checkout more about me at my website\xa0",Object(C.jsx)("a",{className:"hvr-bob",variant:"link",href:"https://johndao.dev",rel:"noreferrer",target:"_blank",children:"here!"})," ",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"Thanks for reading and have a good one!",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("text",{className:"text-muted",children:"From John."}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("img",{src:L,width:"100",height:"100",alt:"love upbank animation"})]})]})}var P=n(29);function H(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(i.a,{children:Object(C.jsxs)(o.d,{children:[Object(C.jsx)(o.b,{exact:!0,path:"/about",component:V}),Object(C.jsx)(o.b,{exact:!0,path:"/accounts",component:W}),Object(C.jsx)(o.b,{exact:!0,path:"/login",component:Z}),Object(C.jsx)(o.b,{exact:!0,path:"/",children:Object(C.jsx)(o.a,{to:"/login"})}),Object(C.jsx)(o.b,{component:z})]})})})}function V(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(v,{children:[Object(C.jsx)(j.a,{bg:"dark",variant:"dark",children:Object(C.jsx)(q,{})}),Object(C.jsx)(R.a,{children:Object(C.jsx)(T,{})})]}),Object(C.jsx)(X,{})]})}function W(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(v,{children:[Object(C.jsx)(j.a,{bg:"dark",variant:"dark",children:Object(C.jsx)(_,{})}),Object(C.jsx)("h1",{style:{paddingTop:"3%"},children:"Welcome!"}),Object(C.jsx)("h10",{children:"You're Logged In!"}),Object(C.jsx)("div",{style:{padding:"1%"},children:Object(C.jsx)(K,{})})]}),Object(C.jsx)(X,{})]})}function Z(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(v,{children:[Object(C.jsx)(j.a,{bg:"dark",variant:"dark",children:Object(C.jsx)(q,{})}),Object(C.jsx)(R.a,{children:Object(C.jsx)(J,{logged:void 0!==localStorage.getItem("token")&&!0})})]}),Object(C.jsx)(X,{})]})}function z(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(v,{children:[Object(C.jsx)(j.a,{bg:"dark",variant:"dark",children:Object(C.jsx)(q,{})}),Object(C.jsx)(R.a,{children:Object(C.jsx)("h1",{children:"Page not found."})})]}),Object(C.jsx)(X,{})]})}function X(){return Object(C.jsx)(j.a,{bg:"dark",variant:"dark",fixed:"bottom",children:Object(C.jsxs)(P.a,{className:"justify-content-end",children:[Object(C.jsx)(h.a,{className:"btn",variant:"link",href:"mailto:work@johndao.dev?subject=I%20found%20a%20bug%20in%20your%20Up%20Bank%20App.",children:"Found a bug?"}),Object(C.jsx)(h.a,{className:"btn",variant:"link",href:"https://johndao.dev",children:"About me"})]})})}function q(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)($,{}),Object(C.jsxs)(P.a,{className:"justify-content-end",children:[Object(C.jsx)(nt,{})," ",Object(C.jsx)(et,{})]})]})}function _(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)($,{}),Object(C.jsxs)(P.a,{className:"justify-content-end",children:[Object(C.jsx)(nt,{})," ",Object(C.jsx)(et,{})," ",Object(C.jsx)(tt,{})]})]})}function $(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(j.a.Brand,{href:"/",children:Object(C.jsx)("img",{src:"data:image/gif;base64,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",width:"40",height:"40",className:"d-inline-block align-top",alt:"Upbank Logo"})})})}function tt(){var t=Object(a.useState)(null===localStorage.getItem("token")),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[" ",n&&Object(C.jsx)(o.a,{to:"/login"})]}),Object(C.jsx)(h.a,{className:"mr-2 btn btn-secondary",onClick:function(t){t.preventDefault(),localStorage.removeItem("token"),c(!0)},children:"Log Out"})]})}function et(){return Object(C.jsx)(i.b,{className:"mr-2 btn btn-primary",to:"/about",children:"About"})}function nt(){return Object(C.jsx)(i.b,{className:"mr-2 btn btn-primary",to:"/",children:"Home"})}var at=function(){return Object(C.jsx)(H,{})},ct=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,A=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),A(t),r(t)}))};n(87),n(88);r.a.render(Object(C.jsx)(at,{}),document.getElementById("root")),ct()}},[[89,1,2]]]);
//# sourceMappingURL=main.b65ee00a.chunk.js.map