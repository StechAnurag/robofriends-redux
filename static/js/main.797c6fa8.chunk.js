(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(4),c=t.n(o),i=(t(14),t(3)),a=t(0),s=function(e){var n=e.name,t=e.email,r=e.id;return Object(a.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(a.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)("p",{children:t})]})]})},l=function(e){var n=e.robots;return Object(a.jsx)("div",{children:n.map((function(e,t){return Object(a.jsx)(s,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},h=function(e){e.searchfield;var n=e.searchChange;return Object(a.jsx)("div",{className:"pa2",children:Object(a.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},u=function(e){return Object(a.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},d=t(5),f=t(6),b=t(9),j=t(8),g=function(e){Object(b.a)(t,e);var n=Object(j.a)(t);function t(e){var r;return Object(d.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(f.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)("h1",{children:"Oops, Something got broken."}):this.props.children}}]),t}(r.Component);t(16);var v=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),s=Object(i.a)(c,2),d=s[0],f=s[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return o([])}))}),[]);var b=t.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));return t.length?Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(a.jsx)(h,{searchChange:function(e){return f(e.target.value)}}),Object(a.jsx)(u,{children:Object(a.jsx)(g,{children:Object(a.jsx)(l,{robots:b})})})]}):Object(a.jsx)("h1",{children:"Loading.."})},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(17);c.a.render(Object(a.jsx)(v,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends-redux",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends-redux","/service-worker.js");p?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):O(e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.797c6fa8.chunk.js.map