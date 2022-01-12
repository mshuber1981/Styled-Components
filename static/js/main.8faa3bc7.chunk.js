(this["webpackJsonpstyled-comps"]=this["webpackJsonpstyled-comps"]||[]).push([[0],{22:function(e,r,t){"use strict";t.r(r);var n,o,i,c,a,d=t(1),s=t.n(d),l=t(8),m=t.n(l),b=t(12),p=t(2),h=p.d.h1.withConfig({displayName:"BasicTitle",componentId:"sc-1o31pgc-0"})(["text-align:center;text-transform:capitalize;color:",";"],(function(e){return e.special?"red":"var(--primary-color)"})),u=t(3),f=p.d.button(n||(n=Object(u.a)(["\n  background: var(--primary-color);\n  color: #fff;\n  border: none;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  text-transform: capitalize;\n  display: block;\n  width: 12rem;\n  margin: 1rem 0;\n  /* https://styled-components.com/docs/api#css */\n  ","\n"])),(function(e){return e.large?Object(p.c)(o||(o=Object(u.a)(["\n          padding: 1rem;\n          font-size: 1.5rem;\n          font-weight: 700;\n        "]))):Object(p.c)(i||(i=Object(u.a)(["\n          padding: 0.5rem;\n          font-size: 1rem;\n        "])))})),j=Object(p.d)(f)(c||(c=Object(u.a)(["\n  width: 15rem;\n  background: transparent;\n  color: var(--primary-color);\n  border: 1px solid var(--primary-color);\n"]))),g=t(0),x=p.d.div(a||(a=Object(u.a)(["\n  h1 {\n    text-transform: capitalize;\n    text-align: center;\n  }\n\n  .underline {\n    width: 5rem;\n    height: 0.25rem;\n    background: var(--primary-color);\n    margin: 0.5rem auto;\n  }\n"])));function O(e){var r=e.title;return Object(g.jsxs)(x,{children:[Object(g.jsx)("h1",{children:r}),Object(g.jsx)("div",{className:"underline"})]})}var y,v,w=t.p+"static/media/card.d18c21af.jpeg",k=p.d.article.withConfig({displayName:"Card__StyledCard",componentId:"sc-1gbpgfm-0"})(['width:90vw;max-width:300px;background:var(--white);border-radius:0.25rem;margin:1rem auto;img{width:100%;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;}footer{background:grey;display:flex;justify-content:space-between;align-items:center;padding:0 2rem;height:4rem;h4{text-transform:capitalize;&::before{content:"Name : ";color:var(--primary-color);}}p{color:var(--primary-color);font-weight:700;}&:hover{background:red;}}transition:all 0.5s ease-in-out;&:hover{box-shadow:0 3px 3px #222;cursor:pointer;}@media (min-width:768px){max-width:600px;}']);function C(){return Object(g.jsxs)(k,{children:[Object(g.jsx)("img",{src:w,alt:"Card"}),Object(g.jsxs)("footer",{children:[Object(g.jsx)("h4",{children:"Product Name"}),Object(g.jsx)("p",{children:"$15"})]})]})}var S,_=Object(p.e)(y||(y=Object(u.a)(["\n    to {\n        transform: rotate(360deg)\n    }\n"]))),I=p.d.div(v||(v=Object(u.a)(["\n  width: 6rem;\n  height: 6rem;\n  border: 5px solid #ccc;\n  border-radius: 50%;\n  border-top-color: var(--primary-color);\n  margin: 1rem 0;\n  animation: "," 0.6s linear infinite;\n"])),_),N=p.d.div.withConfig({displayName:"Form__StyledDiv",componentId:"sc-oxvn60-0"})(["min-width:30vw;background:",";color:",";padding:2rem;margin:1rem 0;h2{margin:0.5rem 0;}input{width:75%;margin-right:0.5rem;}"],(function(e){return"light"===e.theme.name?"#222":"#fff"}),(function(e){return"light"===e.theme.name?"#fff":"#222"})),z=p.d.button.attrs((function(e){return{type:e.type||"button"}})).withConfig({displayName:"Form__Button",componentId:"sc-oxvn60-1"})(["background:var(--primary-color);border:none;color:white;padding:0.25rem;margin:0.5rem 0;cursor:pointer;",""],(function(e){return"submit"===e.type&&Object(p.c)(S||(S=Object(u.a)(["\n        display: block;\n        width: 100%;\n        margin-top: 1rem;\n        border-radius: 0.25rem;\n      "])))})),B=p.d.input.attrs((function(e){return{type:e.type||"text",placeholder:e.placeholder||"Please enter value"}})).withConfig({displayName:"Form__StyledInput",componentId:"sc-oxvn60-2"})(["box-sizing:border-box;padding:0.5rem;border:2px solid #f2f4f8;border-radius:0.25rem;width:100%;margin-top:1rem;"]);function F(){return Object(g.jsxs)(N,{children:[Object(g.jsx)(z,{onClick:function(){return alert('type="button"')},children:"Regular Button"}),Object(g.jsxs)("form",{children:[Object(g.jsx)("h2",{children:"Form"}),Object(g.jsx)(B,{}),Object(g.jsx)(B,{type:"email",placeholder:"Enter email"}),Object(g.jsx)(z,{type:"submit",children:"Submit Button"})]})]})}var D=Object(p.b)([':root{--primary-color:#645cff;--white:#fff;}*,::after,::before{margin:0;padding:0;box-sizing:border-box;}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:#f2f4f8;}img{width:100%;display:block;}']),T=window.matchMedia("(prefers-color-scheme: dark)").matches,E={name:"light",color:"#222",background:"#fff"},H={name:"dark",color:"#fff",background:"#222"},M=p.d.div.withConfig({displayName:"App__Container",componentId:"sc-1495bfa-0"})(["color:",";background:",";min-height:100vh;padding:2rem 1rem;display:flex;flex-direction:column;align-items:center;"],(function(e){return e.theme.color}),(function(e){return e.theme.background}));function A(){var e=Object(d.useState)(E),r=Object(b.a)(e,2),t=r[0],n=r[1];return Object(d.useEffect)((function(){n(T?H:E)}),[]),Object(g.jsx)("div",{children:Object(g.jsxs)(p.a,{theme:t,children:[Object(g.jsx)(D,{}),Object(g.jsxs)(M,{children:[Object(g.jsx)(h,{children:"Styled Components"}),Object(g.jsx)(h,{special:!0,children:"Special Styled Component"}),Object(g.jsx)(f,{as:"a",href:"https://github.com/mshuber1981",children:"GitHub/mshuber1981"}),Object(g.jsxs)(j,{onClick:function(){n(t===E?H:E)},children:["Toggle Theme (",t===E?"Light":"Dark",")"]}),Object(g.jsx)(f,{large:!0,onClick:function(){return alert("I am a huge button!")},children:"I am a large button"}),Object(g.jsx)(O,{title:"Complex Title"}),Object(g.jsx)(C,{}),Object(g.jsx)(I,{}),Object(g.jsx)(J,{children:Object(g.jsx)("h2",{children:"Hello World"})}),Object(g.jsx)(F,{})]})]})})}var J=Object(p.d)("div").withConfig({displayName:"App___StyledDiv",componentId:"sc-1495bfa-1"})(["color:green;margin:1rem 0;"]);m.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8faa3bc7.chunk.js.map