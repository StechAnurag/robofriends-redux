(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(4),o=n.n(c),s=(n(14),n(3)),a=n(0),i=function(e){var t=e.name,n=e.email,r=e.id;return Object(a.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(a.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("p",{children:n})]})]})},h=function(e){var t=e.robots;return Object(a.jsx)("div",{children:t.map((function(e,n){return Object(a.jsx)(i,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},l=function(e){e.searchfield;var t=e.searchChange;return Object(a.jsx)("div",{className:"pa2",children:Object(a.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},b=function(e){return Object(a.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},j=n(5),u=n(6),d=n(9),O=n(8),f=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)("h1",{children:"Oops, Something got broken."}):this.props.children}}]),n}(r.Component);n(16);var m=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),j=i[0],u=i[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return c([])}))}),[]);var d=n.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}));return n.length?Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(a.jsx)(l,{searchChange:function(e){return u(e.target.value)}}),Object(a.jsx)(b,{children:Object(a.jsx)(f,{children:Object(a.jsx)(h,{robots:d})})})]}):Object(a.jsx)("h1",{children:"Loading.."})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);o.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9c0f2689.chunk.js.map