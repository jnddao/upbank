(this.webpackJsonpupbank=this.webpackJsonpupbank||[]).push([[0],{67:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(25),s=n.n(r),c=(n(67),n(12)),i=n(36),o=n(8),A=n(21),j=n.n(A),h=n(99),d=n(93),l=n(94),u=n(62),b=n(100),g=n(9),x=n.n(g),O=n(16),p=n(96),B=n(97),Q=n(98),w=(n(52),n(54)),E=n(55),f=n(56),I=function(){function e(){Object(w.a)(this,e),this.url="https://api.up.com.au/api/v1",this.status="undefined",this.data="undefined",this.loading=!1}return Object(E.a)(e,[{key:"getJSON",value:function(){var e=Object(O.a)(x.a.mark((function e(t,n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,Object(f.backOff)((function(){return fetch(t,n)}));case 4:return a=e.sent,this.status=a.status,e.next=8,a.json();case 8:this.data=e.sent,this.loading=!1,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"pingToken",value:function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{Authorization:"Bearer "+document.getElementById("formBasicPassword").value,"Content-Type":"application/x-www-form-urlencoded"}},e.next=3,this.getJSON("".concat(this.url,"/util/ping"),t);case 3:return e.abrupt("return",{status:this.status,data:this.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAccounts",value:function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{Authorization:"Bearer "+sessionStorage.getItem("token"),"Content-Type":"application/x-www-form-urlencoded"}},e.next=3,this.getJSON("".concat(this.url,"/accounts"),t);case 3:return e.abrupt("return",{status:this.status,data:this.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getIdAccount",value:function(){var e=Object(O.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{Authorization:"Bearer "+sessionStorage.getItem("token"),"Content-Type":"application/x-www-form-urlencoded"}},e.next=3,this.getJSON("".concat(this.url,"/accounts/").concat(t),n);case 3:return e.abrupt("return",{status:this.status,data:this.data});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"retrieveTransactions",value:function(){var e=Object(O.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{Authorization:"Bearer "+sessionStorage.getItem("token"),"Content-Type":"application/x-www-form-urlencoded"}},e.next=3,this.getJSON("".concat(this.url,"/accounts/").concat(t,"/transactions"),n);case 3:return e.abrupt("return",{status:this.status,data:this.data});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTransactions",value:function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{Authorization:"Bearer "+sessionStorage.getItem("token"),"Content-Type":"application/x-www-form-urlencoded"}},e.next=3,this.getJSON("".concat(this.url,"/transactions"),t);case 3:return e.abrupt("return",{status:this.status,data:this.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getTransactionPage",value:function(){var e=Object(O.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{Authorization:"Bearer "+sessionStorage.getItem("token"),"Content-Type":"application/x-www-form-urlencoded"}},e.next=3,this.getJSON("".concat(t),n);case 3:return e.abrupt("return",{status:this.status,data:this.data});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),m=n(95),C=n(1);function k(e){var t=Object(a.useState)(e.show),n=Object(c.a)(t,2),r=n[0],s=n[1],i=e.title,o=e.content,A=function(){return s(!1)};return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(m.a,{show:r,onHide:A,style:{color:"white"},children:[Object(C.jsx)(m.a.Header,{closeButton:!0,children:Object(C.jsx)(m.a.Title,{children:i})}),Object(C.jsx)(m.a.Body,{children:o}),Object(C.jsx)(m.a.Footer,{children:Object(C.jsx)(b.a,{variant:"secondary",onClick:A,children:"Close"})})]})})}var v,F,y,M,D,N,S=n(27),Y=n(28),R=Y.a.div(v||(v=Object(S.a)(["\n    min-height: 100vh;\n    width: 100%;\n    background-color: #25232F;\n    color: #FF7A64;\n    text-align: center;\n"]))),U=Y.a.div(F||(F=Object(S.a)(["\n    margin: auto;\n    width: 60%;\n    padding: 15% 0;\n    text-align: left;\n"]))),T=Y.a.div(y||(y=Object(S.a)(["\n    display: flex;\n    margin: auto;\n    flex-direction: column;mj\n    justify-content: center;\n    align-items: space-between;\n    flex-wrap: wrap;\n    width: 100%;\n    padding-bottom: 4%;\n"]))),G=Y.a.div(M||(M=Object(S.a)(["\n    margin-top: 2%;\n    margin-bottom: 20%;\n    transition: 0.5s;\n    color: white;\n    text-align: left;\n    opacity: 0.85;\n\n    &:hover {\n        cursor: pointer; \n        opacity: 1;\n    }\n"]))),J=Y.a.div(D||(D=Object(S.a)(["\n    margin: auto;\n    margin-top: 3%; \n    width: 80%; \n    color: #FFF06B;\n    letter-spacing: 1.5px;\n    line-height: 200%;\n    font-size: large;\n    padding-bottom: 15%;\n    &:hover {\n        cursor: cursor;\n    }\n"]))),L=Y.a.div(N||(N=Object(S.a)(["\n    text-align: left;\n    padding: 1%;\n    padding-bottom: 1\n    &:hover {\n        cursor: cursor;\n    }\n"]))),K=n(61),P=n.p+"static/media/loading.737bbfe6.svg";function H(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)("No Title"),A=Object(c.a)(i,2),j=A[0],h=A[1],d=Object(a.useState)("No Content"),l=Object(c.a)(d,2),u=l[0],g=l[1],B=Object(a.useState)(null!==sessionStorage.getItem("token")),Q=Object(c.a)(B,2),w=Q[0],E=Q[1],f=function(){var e=Object(O.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!1),h("No Title"),g("No Content"),t.preventDefault(),e.next=6,(new I).pingToken();case 6:200!==(n=e.sent).status?(h("Error "+n.data.errors[0].status),g(n.data.errors[0].title),s(!0)):(sessionStorage.setItem("token",document.getElementById("formBasicPassword").value),E(!0));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(U,{children:[Object(C.jsx)("h1",{children:"Log In"})," ",Object(C.jsx)("br",{}),Object(C.jsx)("div",{children:r&&Object(C.jsx)(k,{show:r,title:j,content:u})}),Object(C.jsx)("div",{children:w&&Object(C.jsx)(o.a,{to:"/accounts"})}),Object(C.jsxs)(p.a,{onSubmit:f,children:[Object(C.jsxs)(p.a.Group,{controlId:"formBasicPassword",children:[Object(C.jsx)(p.a.Label,{children:"Up Api Token"}),Object(C.jsx)(p.a.Control,{type:"password",placeholder:"Paste token here"}),Object(C.jsxs)(p.a.Text,{className:"text-muted",children:["By using this experimental app, you understand and agree to the ",Object(C.jsx)("a",{href:"https://johndao.dev/upbank/#/terms",rel:"noreferrer",target:"_blank",children:"terms of use."}),Object(C.jsx)("br",{}),"All sensitive data is stored to your local device and erased when you close your tab. If you feel if your token has been compromised, regenerate a new one ",Object(C.jsx)("a",{href:"https://api.up.com.au/getting_started",rel:"noreferrer",target:"_blank",children:"here."})]})]}),Object(C.jsx)(b.a,{className:"btn btn-primary",type:"submit",children:"Log In"}),Object(C.jsx)("a",{className:"btn btn-link text-left text-muted",href:"https://api.up.com.au/getting_started",rel:"noreferrer",target:"_blank",children:"Don't have a token?"})]})]})})}function V(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),i=Object(c.a)(s,2),o=i[0],A=i[1],h=Object(a.useState)(0),d=Object(c.a)(h,2),l=d[0],u=d[1],b=Object(a.useState)(!0),g=Object(c.a)(b,2),p=g[0],B=g[1],Q=function(){var e=Object(O.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==l){e.next=7;break}return e.next=3,(new I).getTransactions();case 3:200===(t=e.sent).status?(A(t.data),r(n.concat(t.data.data)),u(l+1)):(B(!1),console.error("help")),e.next=15;break;case 7:if(null===o.links.next){e.next=14;break}return e.next=10,(new I).getTransactionPage(o.links.next);case 10:200===(a=e.sent).status?(A(a.data),r(n.concat(a.data.data)),u(l+1)):B(!1),e.next=15;break;case 14:B(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){Q()}),[]),Object(C.jsxs)(j.a,{children:[Object(C.jsx)("h3",{style:{paddingBottom:"2.5%"},children:"Latest Transactions"}),Object(C.jsx)(L,{id:"scrollableDiv",style:{overflow:"auto",display:"flex",flexDirection:"column-reverse"},className:"w-full bg-white text-gray-900 rounded overflow-hidden",children:Object(C.jsx)(K.a,{dataLength:n.length,next:Q,hasMore:p,loader:Object(C.jsx)("h4",{style:{textAlign:"center",paddingTop:"5%"},children:Object(C.jsx)("img",{src:P,height:"75",width:"75"})}),endMessage:Object(C.jsx)("p",{style:{textAlign:"center"},children:Object(C.jsx)("b",{children:"No more transactions to show"})}),children:n.map((function(e,t){return Object(C.jsxs)("div",{style:{color:"black",background:"white",borderBottom:"3px solid #e2e8f0",minHeight:"50px",padding:"10px"},children:[e.attributes.description," ",Object(C.jsx)("span",{className:"text-muted small",children:e.attributes.settledAt}),Object(C.jsx)("br",{})," ",Object(C.jsx)("span",{style:{color:parseInt(e.attributes.amount.value)>=0?"green":"red"},children:e.attributes.amount.value})]},t)}))})})]})}var W=function(e){var t=e.data,n=Object(a.useState)(!1),r=Object(c.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)("No Title"),A=Object(c.a)(o,2),j=A[0],h=A[1],d=Object(a.useState)("No Content"),l=Object(c.a)(d,2),u=l[0],b=l[1];if("object"!==typeof t)return Object(C.jsxs)("div",{children:["Error ",t.status," ",t.title]});if(void 0!==t.status)return Object(C.jsxs)("div",{children:["Error ",t.status,", ",t.title," ",Object(C.jsx)("br",{}),t.detail]});var g=t.attributes,p=g.displayName,w=g.accountType,E=g.balance.value,f=g.balance.currencyCode,m=g.createdAt.substring(0,g.createdAt.indexOf("T")),v=function(){var e=Object(O.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h("Loading..."),b("Loading..."),i(!0),e.next=5,(new I).retrieveTransactions(t.id);case 5:n=e.sent,i(!1),200===n.status?(h(p+"'s Recent Transactions"),b((a=n.data.data,Object(C.jsx)(B.a,{children:a.map((function(e,t){return Object(C.jsxs)(B.a.Item,{children:[t+1,". ",e.attributes.description,Object(C.jsxs)("text",{style:{float:"right"},children:["Value: ",e.attributes.amount.currencyCode,"$ ",Object(C.jsx)("span",{style:{color:parseInt(e.attributes.amount.value)>=0?"green":"red"},children:e.attributes.amount.value})]}),Object(C.jsx)("br",{})]},t)}))}))),i(!0)):(h("Error "+n.status),b(n.title),i(!0));case 8:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(G,{children:[Object(C.jsx)("div",{children:s&&Object(C.jsx)(k,{show:s,title:j,content:u})}),Object(C.jsxs)(Q.a,{className:"hvr-underline-from-left",style:{minWidth:"200px",margin:"0 auto"},onClick:v,children:[Object(C.jsxs)(Q.a.Header,{children:["Account Type: ",w]}),Object(C.jsxs)(Q.a.Body,{children:[Object(C.jsx)(Q.a.Title,{children:p}),Object(C.jsxs)(Q.a.Subtitle,{className:"mb-3 mt-2 text-muted text-small",children:["Created on: ",m]}),Object(C.jsxs)(Q.a.Title,{className:"mb-4",children:["Balance: ",f,"$ ",E]}),Object(C.jsx)(Q.a.Link,{className:"btn btn-secondary",onClick:v,children:"Show Recent Transactions"})]})]})]})};function Z(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],s=function(e){var t=e.map((function(e){return e}));r(t)},i=function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r([]),e.next=3,(new I).getAccounts();case 3:200===(t=e.sent).status?(n=t.data.data,s(n)):r([{status:t.status,title:t.data.errors[0].title,detail:t.data.errors[0].detail}]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r([]),e.next=3,(new I).getAccounts();case 3:200===(t=e.sent).status?(n=t.data.data,s(n)):r([{status:t.status,title:t.data.errors[0].title,detail:t.data.errors[0].detail}]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(j.a,{children:Object(C.jsx)(b.a,{onClick:i,children:"Refresh Accounts"})}),Object(C.jsx)(T,{children:n.map((function(e,t){return Object(C.jsx)(j.a,{transitionDuration:"800",children:Object(C.jsx)(W,{data:e})},t)}))})]})}var z=n.p+"static/media/love.dedb77d3.gif";function X(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{style:{paddingTop:"3%"},children:"About the app"}),Object(C.jsxs)(J,{children:["This is a project that I have wanted to do ever since I happened upon up bank, a subsidiary bank of Bendigo, quite a while ago. ",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"There were so many reasons as to why I actually decided to make this. In fact, I had dwelled on creating an app such as this around the november of 2019, when I first signed up for upbank and saw their\xa0",Object(C.jsx)("a",{className:"hvr-bob",variant:"link",href:"https://up.com.au/tree/",rel:"noreferrer",target:"_blank",children:"tree of up."})," ",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"Up had yet to create their own website/webapp (at the time that I created this app) so it evidently became the main driving force to start and continually work on this project. Ultimately It took me a while to think about how I was going to make this as I felt I had yet to attain the frontend skills to create a tool such as this. But, after a long journey of learning React and some front end, you are here now reading the 'about the app' page!",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"This app was created with React and Bootstrap-React customized with SASS. All of the components you see built here were created from scratch using these tools. This project is completely open source so feel free to explore the repository\xa0",Object(C.jsx)("a",{className:"hvr-bob",variant:"link",href:"https://github.com/jnddao/upbank",rel:"noreferrer",target:"_blank",children:"here."})," ",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"You can checkout more about me at my website\xa0",Object(C.jsx)("a",{className:"hvr-bob",variant:"link",href:"https://johndao.dev",rel:"noreferrer",target:"_blank",children:"here!"})," ",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"Thanks for reading and have a good one!",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("text",{className:"text-muted",children:"From John."}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("img",{src:z,width:"100",height:"100",alt:"love upbank animation"})]})]})}function q(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{style:{paddingTop:"3%"},children:"Terms of use"}),Object(C.jsxs)(J,{style:{textAlign:"left"},children:[Object(C.jsx)("h5",{children:"About the functionality of the app and it's terms of use. By using this app, you understand and agree that: "})," ",Object(C.jsx)("br",{}),Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:"This app is a PERSONAL PROJECT and is not intended for commercial use. USE IT AT YOUR OWN RISK."}),Object(C.jsx)("li",{children:"This app stores your token locally (to your personal device), with it being deleted as you leave the tab. It retrives all data using a READ ONLY API."}),Object(C.jsx)("li",{children:"ALL of your financial data is limited to being stored in react state."}),Object(C.jsx)("li",{children:"You accept that this is experimental and a proof of concept (demo) and is intended to be used as such, meaning that it does not take any responsibility for any damages that may occur as a result of misuse."}),Object(C.jsxs)("li",{children:["I DO NOT store or collect any of your financial information. If you feel as though your token has been compromised, you can regenerate a new one ",Object(C.jsx)("a",{href:"https://api.up.com.au/getting_started",rel:"noreferrer",target:"_blank",children:"here."})]}),Object(C.jsx)("li",{children:"There is no warranty on this product."}),Object(C.jsxs)("li",{children:["It is distributed under the MIT Licence. You can see it ",Object(C.jsx)("a",{href:"https://github.com/jnddao/upbank/blob/main/LICENSE",rel:"noreferrer",target:"_blank",children:"here."})]})]})]})]})}var _=n(31),$=n.p+"static/media/fear.9cfc01b7.svg";function ee(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(i.a,{children:Object(C.jsxs)(o.d,{children:[Object(C.jsx)(o.b,{exact:!0,path:"/about",component:te}),Object(C.jsx)(o.b,{exact:!0,path:"/accounts",component:ae}),Object(C.jsx)(o.b,{exact:!0,path:"/login",component:re}),Object(C.jsx)(o.b,{exact:!0,path:"/terms",component:ne}),Object(C.jsx)(o.b,{exact:!0,path:"/",children:Object(C.jsx)(o.a,{to:"/login"})}),Object(C.jsx)(o.b,{component:se})]})})})}function te(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(R,{children:[Object(C.jsx)(h.a,{bg:"dark",variant:"dark",children:Object(C.jsx)(ie,{})}),Object(C.jsx)(j.a,{children:Object(C.jsx)(X,{})})]}),Object(C.jsx)(ce,{})]})}function ne(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(R,{children:[Object(C.jsx)(h.a,{bg:"dark",variant:"dark",children:Object(C.jsx)(ie,{})}),Object(C.jsx)(j.a,{children:Object(C.jsx)(q,{})})]}),Object(C.jsx)(ce,{})]})}function ae(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(R,{children:[Object(C.jsx)(h.a,{bg:"dark",variant:"dark",children:Object(C.jsx)(oe,{})}),Object(C.jsxs)(j.a,{children:[Object(C.jsx)("h1",{style:{paddingTop:"3%"},children:"Welcome!"}),Object(C.jsx)("h5",{style:{paddingBottom:"3%"},children:" You're Logged In!"})]}),Object(C.jsx)(d.a,{children:Object(C.jsxs)(l.a,{children:[Object(C.jsx)(u.a,{children:Object(C.jsx)("div",{style:{padding:"1%"},children:Object(C.jsx)(Z,{})})}),Object(C.jsx)(u.a,{children:Object(C.jsx)(V,{})})]})})]}),Object(C.jsx)(ce,{})]})}function re(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(R,{children:[Object(C.jsx)(h.a,{bg:"dark",variant:"dark",children:Object(C.jsx)(ie,{})}),Object(C.jsx)(j.a,{children:Object(C.jsx)(H,{logged:void 0!==sessionStorage.getItem("token")&&!0})})]}),Object(C.jsx)(ce,{})]})}function se(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(R,{children:[Object(C.jsx)(h.a,{bg:"dark",variant:"dark",children:Object(C.jsx)(ie,{})}),Object(C.jsxs)(j.a,{children:[Object(C.jsxs)("div",{style:{paddingTop:"5%",paddingBottom:"2%"},children:[Object(C.jsx)("h1",{children:"Uh Oh!"}),Object(C.jsx)("h3",{children:"Page doesn't exist."}),Object(C.jsx)("img",{src:$,width:"100",height:"100",className:"d-inline-block align-top",alt:"Oh No Emoji"})]}),Object(C.jsx)(de,{})]})]}),Object(C.jsx)(ce,{})]})}function ce(){return Object(C.jsx)(h.a,{bg:"dark",variant:"dark",fixed:"bottom",children:Object(C.jsxs)(_.a,{className:"justify-content-end",children:[Object(C.jsx)(b.a,{className:"btn",variant:"link",href:"https://github.com/jnddao/upbank",children:"Github"}),Object(C.jsx)(b.a,{className:"btn",variant:"link",href:"mailto:work@johndao.dev?subject=I%20found%20a%20bug%20in%20your%20Up%20Bank%20App.",children:"Found a bug?"}),Object(C.jsx)(b.a,{className:"btn",variant:"link",children:Object(C.jsx)(i.b,{to:"/terms",children:"Terms of use"})}),Object(C.jsx)(b.a,{className:"btn",variant:"link",href:"https://johndao.dev",children:"About me"})]})})}function ie(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Ae,{}),Object(C.jsxs)(_.a,{className:"justify-content-end",children:[Object(C.jsx)(de,{})," ",Object(C.jsx)(he,{})]})]})}function oe(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Ae,{}),Object(C.jsxs)(_.a,{className:"justify-content-end",children:[Object(C.jsx)(de,{})," ",Object(C.jsx)(he,{})," ",Object(C.jsx)(je,{})]})]})}function Ae(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(h.a.Brand,{href:"/upbank",children:Object(C.jsx)("img",{src:"data:image/gif;base64,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",width:"40",height:"40",className:"d-inline-block align-top",alt:"Upbank Logo"})})})}function je(){var e=Object(a.useState)(null===sessionStorage.getItem("token")),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[" ",n&&Object(C.jsx)(o.a,{to:"/login"})]}),Object(C.jsx)(b.a,{className:"mr-2 btn btn-secondary",onClick:function(e){e.preventDefault(),sessionStorage.removeItem("token"),r(!0)},children:"Log Out"})]})}function he(){return Object(C.jsx)(i.b,{className:"mr-2 btn btn-primary",to:"/about",children:"About"})}function de(){return Object(C.jsx)(i.b,{className:"mr-2 btn btn-primary",to:"/",children:"Home"})}var le=function(){return Object(C.jsx)(ee,{})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};n(89),n(90);s.a.render(Object(C.jsx)(le,{}),document.getElementById("root")),ue()}},[[91,1,2]]]);
//# sourceMappingURL=main.a3e79d0d.chunk.js.map