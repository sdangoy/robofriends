(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),s=n.n(c),o=n(4),i=n.n(o),a=n(3),d=n(2),h=n(11),b=n(12),l=(n(27),function(e){e.searchField;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{type:"search",placeholder:"search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t})})}),u=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"600px"},children:e.children})},j=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(c,"?100x100"),alt:"robots"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},O=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=n(13),g=n(14),p=n(16),v=n(15),x=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(g.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Oooops. That is not good!"}):this.props.children}}]),n}(c.Component),m=(n(28),"CHANGE_SEARCH_FIELD"),y="REQUEST_ROBOTS_PENDING",E="REQUEST_ROBOTS_SUCCESS",C="REQUEST_ROBOTS_FAILED";var S=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.searchRobots})).searchField,n=Object(a.c)((function(e){return e.requestRobots})),s=n.robots,o=n.isPending,i=n.error;Object(c.useEffect)((function(){e((function(e){e({type:y}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:E,payload:t})})).catch((function(t){return e({type:C,payload:t})}))}))}),[e]);var d=s.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(r.jsx)("h1",{children:"Loading..."}):i?void 0:Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(l,{searchChange:function(t){var n;e((n=t.target.value,{type:m,payload:n}))}}),Object(r.jsx)(u,{children:Object(r.jsx)(x,{children:Object(r.jsx)(O,{robots:d})})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))},F={searchField:""},w={isPending:!1,robots:[],error:""},T=(n(29),Object(h.createLogger)()),L=Object(d.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object.assign({},e,{isPending:!0});case E:return Object.assign({},e,{robots:t.payload,isPending:!1});case C:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(d.d)(L,Object(d.a)(b.a,T));i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{store:N,children:Object(r.jsx)(S,{})})})}),document.getElementById("root")),R()}},[[30,1,2]]]);
//# sourceMappingURL=main.90f06691.chunk.js.map