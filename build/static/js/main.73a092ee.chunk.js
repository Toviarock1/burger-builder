(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],{12:function(e,t,n){"use strict";var r=n(27),o=n.n(r).a.create({baseURL:"https://react-my-burger-238eb-default-rtdb.firebaseio.com/"});t.a=o},19:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Closed:"SideDrawer_Closed__wRM5T",Logo:"SideDrawer_Logo__3voUv"}},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"q",(function(){return o})),n.d(t,"s",(function(){return i})),n.d(t,"i",(function(){return a})),n.d(t,"n",(function(){return c})),n.d(t,"o",(function(){return u})),n.d(t,"m",(function(){return s})),n.d(t,"p",(function(){return d})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return b})),n.d(t,"j",(function(){return h})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return j})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return p})),n.d(t,"r",(function(){return O})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return v})),n.d(t,"f",(function(){return _}));var r="ADD_INGREDIENT",o="REMOVE_INGREDIENT",i="SET_INGREDIENTS",a="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",s="PURCHASE_BURGER_FAIL",d="PURCHASE_INIT",l="FETCH_ORDERS_START",b="FETCH_ORDERS_SUCCESS",h="FETCH_ORDERS_FAIL",f="AUTH_START",j="AUTH_SUCCESS",g="AUTH_FAIL",p="AUTH_LOGOUT",O="SET_AUTH_REDIRECT_PATH",m="DASHBOARD_GET_INFO_START",v="DASHBOARD_GET_INFO_SUCCESS",_="DASHBOARD_GET_INFO_FAIL"},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"j",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"g",(function(){return j})),n.d(t,"k",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return v}));var r=n(2),o=n(12),i=function(e){return{type:r.a,ingredientName:e}},a=function(e){return{type:r.q,ingredientName:e}},c=function(){return function(e){o.a.get("https://react-my-burger-238eb-default-rtdb.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.s,ingredients:n}))})).catch((function(t){e({type:r.i})}))}},u=n(17),s=function(e,t){return function(n){n({type:r.n}),o.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.o,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.m,error:e}}(e))}))}},d=function(){return{type:r.p}},l=function(e,t){return function(n){var i;n({type:r.k}),i="FTqOeABFGsN0X9nQ5l5tRyrvaou2"===t?"?auth="+e:"?auth="+e+'&orderBy="userId"&equalTo="'+t+'"',o.a.get("/orders.json"+i).then((function(e){console.log(e);var t,o=[];for(var i in e.data)o.push(Object(u.a)(Object(u.a)({},e.data[i]),{},{id:i}));n((t=o,{type:r.l,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.j,error:t}))}))}},b=n(27),h=n.n(b),f=function(e,t){return{type:r.e,idToken:e,userId:t}},j=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},g=function(e){return function(t){setTimeout((function(){t(j())}),1e3*e)}},p=function(e,t,n){return function(o){o({type:r.d});var i={email:e,password:t,returnSecureToken:!0},a="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzIhQgJcJR4AGZnnlbxleXFGDRUKuOn5k";n||(a="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzIhQgJcJR4AGZnnlbxleXFGDRUKuOn5k"),h.a.post(a,i).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),o(f(e.data.idToken,e.data.localId)),o(g(e.data.expiresIn))})).catch((function(e){var t=void 0===e.response?e:e.response.data.error;"EMAIL_EXISTS"===t.message?t.message="The email address is already in use by another account":"EMAIL_NOT_FOUND"===t.message?t.message="You do not have an accout please sign up":"INVALID_PASSWORD"===t.message&&(t.message=t.message="Wrong Password"),console.log(t),o(function(e){return{type:r.b,error:e}}(t))}))}},O=function(e){return{type:r.r,path:e}},m=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(j);else{var r=localStorage.getItem("userId");e(f(t,r)),e(g((n.getTime()-(new Date).getTime())/1e3))}}else e(j())}},v=function(e){return function(t){t({type:r.g});var n="?auth="+e;o.a.get("/orders.json"+n).then((function(e){var n;t((n=e.data,{type:r.h,info:n}))})).catch((function(e){var n;t((n=e,{type:r.f,error:n}))}))}}},25:function(e,t,n){"use strict";n(0);var r=n(49),o=n.n(r),i=n(1);t.a=function(){return Object(i.jsx)("div",{className:o.a.Loader,children:"Loading..."})}},28:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},30:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},32:function(e,t,n){"use strict";n(0);var r=n(48),o=n.n(r),i=n(1);t.a=function(e){return e.show?Object(i.jsx)("div",{className:o.a.Backdrop,onClick:e.clicked}):null}},4:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(17),o=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},i=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},43:function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},44:function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},46:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},47:function(e,t,n){e.exports={Drawertoggle:"Drawertoggle_Drawertoggle__gqWaR"}},48:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},49:function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load6:"Spinner_load6__1_74m",round:"Spinner_round__3G_CY"}},55:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(20),a=n(26),c=n.n(a),u=(n(55),n(13)),s=n(14),d=n(16),l=n(15),b=n(5),h=n(11),f=n(43),j=n.n(f),g=n.p+"static/media/28.1 burger-logo.png.ec69c7f6.png",p=n(44),O=n.n(p),m=n(1),v=function(e){return Object(m.jsx)("div",{className:O.a.Logo,style:{height:e.height},children:Object(m.jsx)("img",{src:g,alt:"MyBurger"})})},_=n(30),x=n.n(_),S=function(e){return Object(m.jsx)("li",{className:x.a.NavigationItem,children:Object(m.jsx)(i.b,{to:e.link,exact:e.exact,activeClassName:x.a.active,children:e.children})})},k=n(46),I=n.n(k),w=function(e){return Object(m.jsxs)("ul",{className:I.a.NavigationItems,children:[Object(m.jsx)(S,{link:"/",exact:!0,children:"Burger Builder"}),e.isAuthenticated?Object(m.jsx)(S,{link:"/orders",children:"Orders"}):null,e.isAuthenticated&&e.admin?Object(m.jsx)(S,{link:"/dashboard",children:"Dashboard"}):null,e.isAuthenticated?Object(m.jsx)(S,{link:"/logout",children:"Logout"}):Object(m.jsx)(S,{link:"/auth",children:"Login"})]})},y=n(47),A=n.n(y),D=function(e){return Object(m.jsxs)("div",{className:A.a.Drawertoggle,onClick:e.clicked,children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})},T=n(28),N=n.n(T),R=function(e){return Object(m.jsxs)("header",{className:N.a.Toolbar,children:[Object(m.jsx)(D,{clicked:e.DrawertoggleClicked}),Object(m.jsx)("div",{className:N.a.Logo,children:Object(m.jsx)(v,{})}),Object(m.jsx)("nav",{className:N.a.DesktopOnly,children:Object(m.jsx)(w,{isAuthenticated:e.isAuth,admin:e.isAdmin})})]})},E=n(19),C=n.n(E),L=n(32),U=function(e){var t=[C.a.SideDrawer,C.a.Closed];return e.open&&(t=[C.a.SideDrawer,C.a.Open]),Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsx)(L.a,{show:e.open,clicked:e.closed}),Object(m.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(m.jsx)("div",{className:C.a.Logo,children:Object(m.jsx)(v,{})}),Object(m.jsx)("nav",{children:Object(m.jsx)(w,{isAuthenticated:e.isAuth,admin:e.isAdmin})})]})]})},F=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawertoggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsx)(R,{isAuth:this.props.isAuthenticated,isAdmin:this.props.admin,DrawertoggleClicked:this.sideDrawertoggleHandler}),Object(m.jsx)(U,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,isAdmin:this.props.admin,closed:this.sideDrawerClosedHandler}),Object(m.jsx)("main",{className:j.a.Content,children:this.props.children})]})}}]),n}(r.Component),H=Object(h.b)((function(e){return{isAuthenticated:null!==e.auth.token,admin:e.auth.admin}}))(F),G=n(24),P=n(25),B=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetInfo(this.props.token)}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("h3",{children:"No of Orders"})}),Object(m.jsx)("div",{children:Object(m.jsx)("h3",{children:"No of Users"})})]})}}]),n}(r.Component),z=Object(h.b)((function(e){return{token:e.auth.token,info:e.dashboard.info}}),(function(e){return{onGetInfo:function(t){return e(G.d(t))}}}))(B),X=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(){return Object(u.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,101))})),t=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,103))})),o=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,104))})),i=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,105))})),a=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,102))})),c=Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)(P.a,{}),children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{path:"/auth",component:e}),Object(m.jsx)(b.b,{path:"/",exact:!0,component:t}),Object(m.jsx)(b.a,{to:"/"})]})});return this.props.isAuthenticated&&(c=Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)(P.a,{}),children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{path:"/checkout",component:o}),Object(m.jsx)(b.b,{path:"/orders",component:i}),Object(m.jsx)(b.b,{path:"/logout",component:a}),Object(m.jsx)(b.b,{path:"/",exact:!0,component:t}),Object(m.jsx)(b.a,{to:this.props.authRedirectPath})]})}),this.props.isAdmin&&(c=Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)(P.a,{}),children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{path:"/checkout",component:o}),Object(m.jsx)(b.b,{path:"/orders",component:i}),Object(m.jsx)(b.b,{path:"/logout",component:a}),Object(m.jsx)(b.b,{path:"/dashboard",component:z}),Object(m.jsx)(b.b,{path:"/",exact:!0,component:t}),Object(m.jsx)(b.a,{to:this.props.authRedirectPath})]})}))),Object(m.jsx)("div",{children:Object(m.jsx)(H,{children:c})})}}]),o}(r.Component),q=Object(b.g)(Object(h.b)((function(e){return{isAuthenticated:null!==e.auth.token,authRedirectPath:e.auth.authRedirectPath,isAdmin:e.auth.admin}}),(function(e){return{onTryAutoSignup:function(){return e(G.c())}}}))(X)),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var J=n(23),Q=n(21),K=n(2),$=n(4),V={ingredients:null,totalPrice:4,error:!1,building:!1},Y={salad:.5,cheese:.4,meat:1.3,bacon:.7},Z=function(e,t){var n=Object(Q.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object($.b)(e.ingredients,n),building:!0,totalPrice:e.totalPrice+Y[t.ingredientName]};return Object($.b)(e,r)},ee=function(e,t){var n=Object(Q.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object($.b)(e.ingredients,n),building:!0,totalPrice:e.totalPrice-Y[t.ingredientName]};return Object($.b)(e,r)},te=function(e,t){return Object($.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:4,building:!1})},ne=function(e,t){return Object($.b)(e,{error:!0})},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.a:return Z(e,t);case K.q:return ee(e,t);case K.s:return te(e,t);case K.i:return ne(e);default:return e}},oe={orders:[],loading:!1,purchased:!1},ie=function(e,t){return Object($.b)(e,{purchased:!1})},ae=function(e,t){return Object($.b)(e,{loading:!0})},ce=function(e,t){var n=Object($.b)(t.orderData,{id:t.orderId});return Object($.b)(e,{purchased:!0,loading:!1,orders:e.orders.concat(n)})},ue=function(e,t){return Object($.b)(e,{loading:!1})},se=function(e,t){return Object($.b)(e,{loading:!0})},de=function(e,t){return Object($.b)(e,{orders:t.orders,loading:!1})},le=function(e,t){return Object($.b)(e,{error:t.error,loading:!1})},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.p:return ie(e);case K.n:return ae(e);case K.o:return ce(e,t);case K.m:return ue(e);case K.k:return se(e);case K.l:return de(e,t);case K.j:return le(e,t);default:return e}},he={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/",admin:!1},fe=function(e,t){return Object($.b)(e,{error:null,loading:!0})},je=function(e,t){return Object($.b)(e,{loading:!1,token:t.idToken,userId:t.userId,error:null,admin:"FTqOeABFGsN0X9nQ5l5tRyrvaou2"===t.userId})},ge=function(e,t){return Object($.b)(e,{error:t.error,loading:!1})},pe=function(e,t){return Object($.b)(e,{token:null,userId:null,admin:"FTqOeABFGsN0X9nQ5l5tRyrvaou2"===t.userId})},Oe=function(e,t){return Object($.b)(e,{authRedirectPath:t.path})},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.d:return fe(e);case K.e:return je(e,t);case K.b:return ge(e,t);case K.c:return pe(e,t);case K.r:return Oe(e,t);default:return e}},ve={loading:!1,info:null,error:null},_e=function(e,t){return Object($.b)(e,{loading:!0})},xe=function(e,t){return Object($.b)(e,{loading:!1,error:t.error})},Se=function(e,t){return Object($.b)(e,{loading:!1,info:t.info})},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.g:return _e(e);case K.h:return Se(e,t);case K.f:return xe(e,t);default:return e}},Ie=n(50),we=J.c,ye=Object(J.b)({burgerBuilder:re,order:be,auth:me,dashboard:ke}),Ae=Object(J.d)(ye,we(Object(J.a)(Ie.a))),De=Object(m.jsx)(h.a,{store:Ae,children:Object(m.jsx)(i.a,{children:Object(m.jsx)(q,{})})});c.a.render(De,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");W?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):M(e)}))}}()}},[[84,1,2]]]);
//# sourceMappingURL=main.73a092ee.chunk.js.map