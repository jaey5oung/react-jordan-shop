(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{65:function(e,t,c){},66:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var n=c(19),r=c(0),i=c.n(r),a=c(14),s=c.n(a),j=(c(65),c(41)),d=(c(66),c(101)),o=c(102),l=c(100),h=c(99),b=c(58),O=[{id:0,title:"Jordan 1 Court Purple",content:"Born in USA",price:3e5,picture:"https://image.frogbyhinter.com/products/20200221/20200221-4217719024.jpg"},{id:1,title:"Jordan 1 Back Board ",content:"Born in USA",price:278e3,picture:"https://image.frogbyhinter.com/products/20200228/20200228-3713479994.jpg"},{id:2,title:"Jordan 1 University Gold",content:"Born in USA",price:25e4,picture:"https://image.frogbyhinter.com/products/20200225/20200225-6106571042.jpg"}],u=c(27),x=c(7),p=c(55),f=c.n(p),v=c(98),m=c(32),g=c(2);var y=Object(m.b)((function(e){return{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)(v.a,{responsive:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(g.jsx)("th",{children:"\uc218\ub7c9"}),Object(g.jsx)("th",{children:"\ubcc0\uacbd"})]})}),Object(g.jsx)("tbody",{children:e.state.map((function(t,c){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t.id}),Object(g.jsx)("td",{children:t.name}),Object(g.jsx)("td",{children:t.quan}),Object(g.jsxs)("td",{children:[Object(g.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uc99d\uac00",payload:t.id})},children:"+"}),Object(g.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uac10\uc18c",payload:t.id})},children:"-"})]})]},c)}))})]}),!0===e.alert\uc5f4\ub838\ub2c8?Object(g.jsxs)("div",{className:"my-alert2",children:[Object(g.jsx)("p",{children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud560\uc778 20%"}),Object(g.jsx)("button",{onClick:function(){e.dispatch({type:"alert\ub2eb\uae30"})},children:"\ub2eb\uae30"})]}):null]})}));var k=function(){return Object(g.jsxs)("div",{className:"jordan",children:[Object(g.jsx)("p",{children:"\uc5ec\uae30\ub294\uc774\uc81c \uc870\ub2e8\ud398\uc774\uc9c0\uc5d0\uc694"}),Object(g.jsx)("button",{children:"\uacb0\uc81c\ubc84\ud2bc\uc774\uc5d0\uc694"})]})},C=Object(r.lazy)((function(){return Promise.all([c.e(3),c.e(4)]).then(c.bind(null,111))})),S=i.a.createContext();function N(e){Object(r.useContext)(S);var t=Object(x.f)();return Object(g.jsxs)("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+e.shoes.id)},children:[Object(g.jsx)("img",{src:e.shoes.picture,style:{width:"100%"}}),Object(g.jsx)("h4",{children:e.shoes.title}),Object(g.jsx)("p",{children:e.shoes.content}),Object(g.jsx)("p",{children:e.shoes.price}),Object(g.jsx)(B,{})]})}function B(){var e=Object(r.useContext)(S);return Object(g.jsxs)("p",{children:["\uc7ac\uace0 : ",e]})}var I=function(){var e=Object(r.useState)(O),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(r.useState)([10,11,12]),s=Object(j.a)(a,2),p=s[0],v=s[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)(d.a,{bg:"light",expand:"lg",children:[Object(g.jsx)(d.a.Brand,{href:"#home",children:"Shoe Shop"}),Object(g.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(o.a,{className:"mr-auto",children:[Object(g.jsx)(o.a.Link,{as:u.b,to:"/",children:"Home"}),Object(g.jsx)(o.a.Link,{as:u.b,to:"/detail",children:"Detail"}),Object(g.jsxs)(l.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(g.jsx)(l.a.Item,{href:"#action/3.1",children:"Action"}),Object(g.jsx)(l.a.Item,{href:"#action/3.2",children:"Another action"}),Object(g.jsx)(l.a.Item,{href:"#action/3.3",children:"Something"}),Object(g.jsx)(l.a.Divider,{}),Object(g.jsx)(l.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(g.jsxs)(x.c,{children:[Object(g.jsxs)(x.a,{exact:!0,path:"/",children:[Object(g.jsxs)(h.a,{className:"background",children:[Object(g.jsx)("h1",{children:"20% Season Off"}),Object(g.jsx)("p",{}),Object(g.jsx)("p",{children:Object(g.jsx)(b.a,{variant:"primary",className:"mainButton",children:"\ub354\ubcf4\uae30"})})]}),Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(S.Provider,{value:p,children:Object(g.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(g.jsx)(N,{shoes:c[t]},t)}))})})})]}),Object(g.jsx)(x.a,{exact:!0,path:"/detail/:id",children:Object(g.jsx)(r.Suspense,{fallback:Object(g.jsx)("div",{children:"\ub85c\ub529\uc911\uc774\uc5d0\uc694"}),children:Object(g.jsx)(C,{shoes:c,"\uc7ac\uace0":p,"\uc7ac\uace0\ubcc0\uacbd":v})})}),Object(g.jsx)(x.a,{path:"/cart",children:Object(g.jsx)(y,{})}),Object(g.jsx)(x.a,{path:"/jordan",children:Object(g.jsx)(k,{})})]}),Object(g.jsx)("button",{className:"btn btn-primary",onClick:function(){f.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),i([].concat(Object(n.a)(c),Object(n.a)(e.data)))})).catch((function(){}))},children:"\ub354\ubcf4\uae30"})]})},q=function(e){e&&e instanceof Function&&c.e(5).then(c.bind(null,112)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),i(e),a(e)}))},w=c(44);var A=[{id:0,name:"\uba4b\uc9c4\uc2e0\ubc1c",quan:2},{id:1,name:"\uba4b\uc9c4\uc2e0\ubc1c1",quan:3}];var J=Object(w.b)(Object(w.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var c=e.findIndex((function(e){return e.id===t.payload.id}));if(c>=0){var r=Object(n.a)(e);return r[c].quan++,r}var i=Object(n.a)(e);return i.push(t.payload),i}if("\uc218\ub7c9\uc99d\uac00"===t.type){var a=Object(n.a)(e);return a[t.payload].quan++,a}if("\uc218\ub7c9\uac10\uc18c"===t.type){var s=Object(n.a)(e);return s[t.payload].quan--,s}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"alert\ub2eb\uae30"===t.type?e=!1:e}}));s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(u.a,{children:Object(g.jsx)(m.a,{store:J,children:Object(g.jsx)(I,{})})})}),document.getElementById("root")),q()}},[[93,1,2]]]);
//# sourceMappingURL=main.64c6698d.chunk.js.map