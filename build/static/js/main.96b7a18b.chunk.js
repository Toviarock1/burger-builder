(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],{18:function(e,t,n){"use strict";var r=n(32),c=n.n(r).a.create({baseURL:"https://react-my-burger-238eb-default-rtdb.firebaseio.com/"});t.a=c},22:function(e,t,n){"use strict";n(0);var r=n(58),c=n.n(r),a=n(2);t.a=function(){return Object(a.jsx)("div",{className:c.a.Loader,children:"Loading..."})}},25:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Closed:"SideDrawer_Closed__wRM5T",Logo:"SideDrawer_Logo__3voUv"}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"y",(function(){return c})),n.d(t,"A",(function(){return a})),n.d(t,"n",(function(){return o})),n.d(t,"s",(function(){return i})),n.d(t,"v",(function(){return u})),n.d(t,"w",(function(){return s})),n.d(t,"u",(function(){return d})),n.d(t,"x",(function(){return l})),n.d(t,"t",(function(){return f})),n.d(t,"o",(function(){return b})),n.d(t,"q",(function(){return j})),n.d(t,"r",(function(){return h})),n.d(t,"p",(function(){return p})),n.d(t,"b",(function(){return O})),n.d(t,"i",(function(){return g})),n.d(t,"g",(function(){return x})),n.d(t,"h",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return _})),n.d(t,"e",(function(){return k})),n.d(t,"f",(function(){return w})),n.d(t,"z",(function(){return I})),n.d(t,"j",(function(){return A})),n.d(t,"l",(function(){return S})),n.d(t,"m",(function(){return T})),n.d(t,"k",(function(){return y}));var r="ADD_INGREDIENT",c="REMOVE_INGREDIENT",a="SET_INGREDIENTS",o="FETCH_INGREDIENTS_FAILED",i="INIT_INGREDIENTS",u="PURCHASE_BURGER_START",s="PURCHASE_BURGER_SUCCESS",d="PURCHASE_BURGER_FAIL",l="PURCHASE_INIT",f="PURCAHSE_BURGER",b="FETCH_ORDERS",j="FETCH_ORDERS_START",h="FETCH_ORDERS_SUCCESS",p="FETCH_ORDERS_FAIL",O="AUTH_CHECK_STATE",g="AUTH_USER",x="AUTH_START",m="AUTH_SUCCESS",v="AUTH_FAIL",_="AUTH_CHECK_TIMEOUT",k="AUTH_INITIATE_LOGOUT",w="AUTH_LOGOUT",I="SET_AUTH_REDIRECT_PATH",A="DASHBOARD_GET_INFO",S="DASHBOARD_GET_INFO_START",T="DASHBOARD_GET_INFO_SUCCESS",y="DASHBOARD_GET_INFO_FAIL"},31:function(e,t,n){"use strict";n(0);var r=n(57),c=n.n(r),a=n(2);t.a=function(e){return e.show?Object(a.jsx)("div",{className:c.a.Backdrop,onClick:e.clicked}):null}},33:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},36:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},38:function(e,t,n){"use strict";var r=n(19),c=n(23),a=n(0),o=n(50),i=n(2);t.a=function(e,t){return function(n){var u=function(e){var t=Object(a.useState)(null),n=Object(c.a)(t,2),r=n[0],o=n[1],i=e.interceptors.request.use((function(e){return o(null),e})),u=e.interceptors.response.use((function(e){return e}),(function(e){o(e)}));return Object(a.useEffect)((function(){return function(){e.interceptors.request.eject(i),e.interceptors.response.eject(u)}}),[i,u]),[r,function(){o(null)}]}(t),s=Object(c.a)(u,2),d=s[0],l=s[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a,{show:d,modalClosed:l,children:d?d.message:null}),Object(i.jsx)(e,Object(r.a)({},n))]})}}},49:function(e,t,n){"use strict";n(0);var r=n(59),c=n.n(r),a=n(2);t.a=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map((function(e){return Object(a.jsxs)("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},children:[e.name," (",e.amount,")"]},e.name)}));return Object(a.jsxs)("div",{className:c.a.Order,children:[Object(a.jsxs)("p",{children:["Ingredients: ",r]}),Object(a.jsxs)("p",{children:["Price: ",Object(a.jsx)("strong",{children:"".concat(e.price.toFixed(2)," USD")})]}),Object(a.jsx)("button",{onClick:e.click,children:"recieved burger"})]})}},50:function(e,t,n){"use strict";var r=n(0),c=n.n(r),a=n(31),o=n(60),i=n.n(o),u=n(2),s=function(e){return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(a.a,{show:e.show,clicked:e.modalClosed}),Object(u.jsx)("div",{className:i.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})};t.a=c.a.memo(s,(function(e,t){return t.show===e.show&&t.children===e.children}))},52:function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},53:function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},55:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},56:function(e,t,n){e.exports={Drawertoggle:"Drawertoggle_Drawertoggle__gqWaR"}},57:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},58:function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load6:"Spinner_load6__1_74m",round:"Spinner_round__3G_CY"}},59:function(e,t,n){e.exports={Order:"Order_Order__3kYZJ"}},60:function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},67:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"y",(function(){return a})),n.d(t,"q",(function(){return u})),n.d(t,"A",(function(){return o})),n.d(t,"l",(function(){return i})),n.d(t,"t",(function(){return f})),n.d(t,"x",(function(){return b})),n.d(t,"m",(function(){return O})),n.d(t,"u",(function(){return d})),n.d(t,"w",(function(){return s})),n.d(t,"v",(function(){return l})),n.d(t,"o",(function(){return p})),n.d(t,"p",(function(){return j})),n.d(t,"n",(function(){return h})),n.d(t,"b",(function(){return w})),n.d(t,"r",(function(){return v})),n.d(t,"z",(function(){return I})),n.d(t,"c",(function(){return A})),n.d(t,"s",(function(){return _})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return x})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return k})),n.d(t,"h",(function(){return N})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return S})),n.d(t,"k",(function(){return T}));var r=n(3),c=function(e){return{type:r.a,ingredientName:e}},a=function(e){return{type:r.y,ingredientName:e}},o=function(e){return{type:r.A,ingredients:e}},i=function(){return{type:r.n}},u=function(){return{type:r.s}},s=function(e,t){return{type:r.w,orderId:e,orderData:t}},d=function(e){return{type:r.u,error:e}},l=function(){return{type:r.v}},f=function(e,t,n){return{type:r.t,orderData:e,userId:t,token:n}},b=function(){return{type:r.x}},j=function(e){return{type:r.r,orders:e}},h=function(e){return{type:r.p,error:e}},p=function(){return{type:r.q}},O=function(e,t){return{type:r.o,token:e,userId:t}},g=function(){return{type:r.g}},x=function(e,t){return{type:r.h,idToken:e,userId:t}},m=function(e){return{type:r.d,error:e}},v=function(){return{type:r.e}},_=function(){return{type:r.f}},k=function(e){return{type:r.c,expirationTime:e}},w=function(e,t,n){return{type:r.i,email:e,password:t,isSignup:n}},I=function(e){return{type:r.z,path:e}},A=function(){return{type:r.b}},S=function(){return{type:r.l}},T=function(e){return{type:r.m,info:e}},y=function(e){return{type:r.k,error:e}},N=function(e){return{type:r.j,token:e}}},9:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=n(19),c=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},a=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},97:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(26),o=n(29),i=n.n(o),u=(n(67),n(10)),s=n(20),d=n(23),l=n(52),f=n.n(l),b=n.p+"static/media/28.1 burger-logo.png.ec69c7f6.png",j=n(53),h=n.n(j),p=n(2),O=function(e){return Object(p.jsx)("div",{className:h.a.Logo,style:{height:e.height},children:Object(p.jsx)("img",{src:b,alt:"MyBurger"})})},g=n(36),x=n.n(g),m=function(e){return Object(p.jsx)("li",{className:x.a.NavigationItem,children:Object(p.jsx)(a.b,{to:e.link,exact:e.exact,activeClassName:x.a.active,children:e.children})})},v=n(55),_=n.n(v),k=function(e){return Object(p.jsxs)("ul",{className:_.a.NavigationItems,children:[Object(p.jsx)(m,{link:"/",exact:!0,children:"Burger Builder"}),e.isAuthenticated?Object(p.jsx)(m,{link:"/orders",children:"Orders"}):null,e.isAuthenticated&&e.admin?Object(p.jsx)(m,{link:"/dashboard",children:"Dashboard"}):null,e.isAuthenticated?Object(p.jsx)(m,{link:"/logout",children:"Logout"}):Object(p.jsx)(m,{link:"/auth",children:"Login"})]})},w=n(56),I=n.n(w),A=function(e){return Object(p.jsxs)("div",{className:I.a.Drawertoggle,onClick:e.clicked,children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})},S=n(33),T=n.n(S),y=function(e){return Object(p.jsxs)("header",{className:T.a.Toolbar,children:[Object(p.jsx)(A,{clicked:e.DrawertoggleClicked}),Object(p.jsx)("div",{className:T.a.Logo,children:Object(p.jsx)(O,{})}),Object(p.jsx)("nav",{className:T.a.DesktopOnly,children:Object(p.jsx)(k,{isAuthenticated:e.isAuth,admin:e.isAdmin})})]})},N=n(25),E=n.n(N),D=n(31),R=function(e){var t=[E.a.SideDrawer,E.a.Closed];return e.open&&(t=[E.a.SideDrawer,E.a.Open]),Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(D.a,{show:e.open,clicked:e.closed}),Object(p.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(p.jsx)("div",{className:E.a.Logo,children:Object(p.jsx)(O,{})}),Object(p.jsx)("nav",{children:Object(p.jsx)(k,{isAuthenticated:e.isAuth,admin:e.isAdmin})})]})]})},C=Object(s.b)((function(e){return{isAuthenticated:null!==e.auth.token,admin:e.auth.admin}}))((function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),a=n[0],o=n[1];return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(y,{isAuth:e.isAuthenticated,isAdmin:e.admin,DrawertoggleClicked:function(){o(!a)}}),Object(p.jsx)(R,{isAuth:e.isAuthenticated,open:a,isAdmin:e.admin,closed:function(){o(!1)}}),Object(p.jsx)("main",{className:f.a.Content,children:e.children})]})})),L=n(7),U=n(22),F=n(18),H=n(49),G=n(38),P=Object(s.b)((function(e){return{token:e.auth.token,userId:e.auth.userId,info:e.dashboard.info,orders:e.order.orders,loading:e.dashboard.loading,error:e.dashboard.error}}),(function(e){return{onGetInfo:function(t){return e(L.h(t))},onGetORders:function(t,n){return e(L.m(t,n))}}}))(Object(G.a)((function(e){var t=Object(p.jsx)(U.a,{}),n=Object(p.jsx)(U.a,{}),c=Object(p.jsx)(U.a,{}),a=e.onGetInfo,o=e.onGetORders,i=e.token,u=e.userId;Object(r.useEffect)((function(){a(i),o(i,u)}),[a,o,i,u]);return e.loading||(t=Object(p.jsx)("p",{children:function(e){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(e.info)}),n=Object(p.jsx)("p",{children:e.orders.length}),c=e.orders.map((function(t){return Object(p.jsx)(H.a,{ingredients:t.ingredients,price:+t.price,click:function(){return function(e,t,n,r){F.a.delete("users/".concat(e,"/orders/").concat(n,".json?auth=").concat(r),t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}(t.userId,t,t.id,e.token)}},t.id)}))),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"No of Orders"}),n]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"No of Users"}),t]}),c]})}),F.a)),z=Object(u.g)(Object(s.b)((function(e){return{isAuthenticated:null!==e.auth.token,authRedirectPath:e.auth.authRedirectPath,isAdmin:e.auth.admin}}),(function(e){return{onTryAutoSignup:function(){return e(L.c())}}}))((function(e){var t=e.onTryAutoSignup,c=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,110))})),a=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,113))})),o=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,114))})),i=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,111))})),s=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,112))}));Object(r.useEffect)((function(){t()}),[t]);var d=Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/auth",component:c}),Object(p.jsx)(u.b,{path:"/",exact:!0,component:a}),Object(p.jsx)(u.a,{to:"/"})]});return e.isAuthenticated&&(d=Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/checkout",component:o}),Object(p.jsx)(u.b,{path:"/orders",component:i}),Object(p.jsx)(u.b,{path:"/logout",component:s}),Object(p.jsx)(u.b,{path:"/",exact:!0,component:a}),Object(p.jsx)(u.a,{to:e.authRedirectPath})]}),e.isAdmin&&(d=Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/checkout",component:o}),Object(p.jsx)(u.b,{path:"/orders",component:i}),Object(p.jsx)(u.b,{path:"/logout",component:s}),Object(p.jsx)(u.b,{path:"/dashboard",component:P}),Object(p.jsx)(u.b,{path:"/",exact:!0,component:a}),Object(p.jsx)(u.a,{to:e.authRedirectPath})]}))),Object(p.jsx)("div",{children:Object(p.jsx)(C,{children:Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)(U.a,{}),children:d})})})}))),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=n(21),X=n(27),W=n(3),J=n(9),K={ingredients:null,totalPrice:4,error:!1,building:!1},Q={salad:.5,cheese:.4,meat:1.3,bacon:.7},Y=function(e,t){var n=Object(X.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(J.b)(e.ingredients,n),building:!0,totalPrice:e.totalPrice+Q[t.ingredientName]};return Object(J.b)(e,r)},$=function(e,t){var n=Object(X.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(J.b)(e.ingredients,n),building:!0,totalPrice:e.totalPrice-Q[t.ingredientName]};return Object(J.b)(e,r)},V=function(e,t){return Object(J.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:4,building:!1})},Z=function(e,t){return Object(J.b)(e,{error:!0})},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.a:return Y(e,t);case W.y:return $(e,t);case W.A:return V(e,t);case W.n:return Z(e);default:return e}},te={orders:[],loading:!1,purchased:!1},ne=function(e,t){return Object(J.b)(e,{purchased:!1})},re=function(e,t){return Object(J.b)(e,{loading:!0})},ce=function(e,t){var n=Object(J.b)(t.orderData,{id:t.orderId});return Object(J.b)(e,{purchased:!0,loading:!1,orders:e.orders.concat(n)})},ae=function(e,t){return Object(J.b)(e,{loading:!1})},oe=function(e,t){return Object(J.b)(e,{loading:!0})},ie=function(e,t){return Object(J.b)(e,{orders:t.orders,loading:!1})},ue=function(e,t){return Object(J.b)(e,{error:t.error,loading:!1})},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.x:return ne(e);case W.v:return re(e);case W.w:return ce(e,t);case W.u:return ae(e);case W.q:return oe(e);case W.r:return ie(e,t);case W.p:return ue(e,t);default:return e}},de={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/",admin:!1},le=function(e,t){return Object(J.b)(e,{error:null,loading:!0})},fe=function(e,t){return Object(J.b)(e,{loading:!1,token:t.idToken,userId:t.userId,error:null,admin:"FTqOeABFGsN0X9nQ5l5tRyrvaou2"===t.userId})},be=function(e,t){return Object(J.b)(e,{error:t.error,loading:!1})},je=function(e,t){return Object(J.b)(e,{token:null,userId:null,admin:"FTqOeABFGsN0X9nQ5l5tRyrvaou2"===t.userId})},he=function(e,t){return Object(J.b)(e,{authRedirectPath:t.path})},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.g:return le(e);case W.h:return fe(e,t);case W.d:return be(e,t);case W.f:return je(e,t);case W.z:return he(e,t);default:return e}},Oe={loading:!1,info:null,error:null},ge=function(e,t){return Object(J.b)(e,{loading:!0})},xe=function(e,t){return Object(J.b)(e,{loading:!1,error:t.error})},me=function(e,t){return Object(J.b)(e,{loading:!1,info:t.info})},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.l:return ge(e);case W.m:return me(e,t);case W.k:return xe(e,t);default:return e}},_e=n(8),ke=n.n(_e),we=n(11),Ie=n(12),Ae=n(32),Se=n.n(Ae),Te=ke.a.mark(De),ye=ke.a.mark(Re),Ne=ke.a.mark(Ce),Ee=ke.a.mark(Le);function De(e){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("token");case 2:return e.next=4,localStorage.removeItem("expirationDate");case 4:return e.next=6,localStorage.removeItem("userId");case 6:return e.next=8,Object(we.b)(L.s());case 8:case"end":return e.stop()}}),Te)}function Re(e){return ke.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ie.b)(1e3*e.expirationTime);case 2:return t.next=4,Object(we.b)(L.r());case 4:case"end":return t.stop()}}),ye)}function Ce(e){var t,n,r,c,a;return ke.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(we.b)(L.e());case 2:return t={email:e.email,password:e.password,returnSecureToken:!0},n="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzIhQgJcJR4AGZnnlbxleXFGDRUKuOn5k",e.isSignup||(n="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzIhQgJcJR4AGZnnlbxleXFGDRUKuOn5k"),o.prev=5,o.next=8,Se.a.post(n,t);case 8:return r=o.sent,o.next=11,new Date((new Date).getTime()+1e3*r.data.expiresIn);case 11:return c=o.sent,o.next=14,localStorage.setItem("token",r.data.idToken);case 14:return o.next=16,localStorage.setItem("expirationDate",c);case 16:return o.next=18,localStorage.setItem("userId",r.data.localId);case 18:return o.next=20,Object(we.b)(L.f(r.data.idToken,r.data.localId));case 20:return o.next=22,Object(we.b)(L.g(r.data.expiresIn));case 22:o.next=30;break;case 24:return o.prev=24,o.t0=o.catch(5),"EMAIL_EXISTS"===(a=void 0===o.t0.response?o.t0:o.t0.response.data.error).message?a.message="The email address is already in use by another account":"EMAIL_NOT_FOUND"===a.message?a.message="You do not have an accout please sign up":"INVALID_PASSWORD"===a.message&&(a.message=a.message="Wrong Password"),o.next=30,Object(we.b)(L.d(a));case 30:case"end":return o.stop()}}),Ne,null,[[5,24]])}function Le(e){var t,n,r;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("token");case 2:if(t=e.sent){e.next=8;break}return e.next=6,Object(we.b)(L.r());case 6:e.next=27;break;case 8:return e.t0=Date,e.next=11,localStorage.getItem("expirationDate");case 11:return e.t1=e.sent,e.next=14,new e.t0(e.t1);case 14:if(!((n=e.sent)<=new Date)){e.next=20;break}return e.next=18,Object(we.b)(L.r());case 18:e.next=27;break;case 20:return e.next=22,localStorage.getItem("userId");case 22:return r=e.sent,e.next=25,Object(we.b)(L.f(t,r));case 25:return e.next=27,Object(we.b)(L.g((n.getTime()-(new Date).getTime())/1e3));case 27:case"end":return e.stop()}}),Ee)}var Ue=ke.a.mark(Fe);function Fe(e){var t;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("https://react-my-burger-238eb-default-rtdb.firebaseio.com/ingredients.json");case 3:return t=e.sent,e.next=6,Object(Ie.c)(L.A(t.data));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(Ie.c)(L.l());case 12:case"end":return e.stop()}}),Ue,null,[[0,8]])}var He=ke.a.mark(Ge);function Ge(e){var t,n;return ke.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Ie.c)(L.j());case 2:return t="?auth="+e.token,r.prev=3,r.next=6,F.a.get("/users.json"+t);case 6:return n=r.sent,r.next=9,Object(Ie.c)(L.k(n.data));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(3),r.next=15,Object(Ie.c)(L.i(r.t0));case 15:case"end":return r.stop()}}),He,null,[[3,11]])}var Pe=n(19),ze=ke.a.mark(qe),Be=ke.a.mark(Me);function qe(e){var t;return ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Ie.c)(L.v());case 2:return n.prev=2,n.next=5,F.a.post("/users/".concat(e.userId,"/orders.json?auth=").concat(e.token),e.orderData);case 5:return t=n.sent,n.next=8,Object(Ie.c)(L.w(t.data.name,e.orderData));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(2),n.next=14,Object(Ie.c)(L.u(n.t0));case 14:case"end":return n.stop()}}),ze,null,[[2,10]])}function Me(e){var t,n,r,c,a,o,i,u;return ke.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(Ie.c)(L.o());case 2:if("FTqOeABFGsN0X9nQ5l5tRyrvaou2"!==e.userId){s.next=21;break}return s.prev=3,s.next=6,F.a.get("/users.json?auth=".concat(e.token));case 6:for(c in t=s.sent,n=[],r=[],t.data)for(a in t.data[c])n.push(Object(Pe.a)({},t.data[c][a]));return n.map((function(e){for(var t in e)r.push(Object(Pe.a)(Object(Pe.a)({},e[t]),{},{id:t}))})),s.next=13,Object(Ie.c)(L.p(r));case 13:s.next=19;break;case 15:return s.prev=15,s.t0=s.catch(3),s.next=19,Object(Ie.c)(L.n(s.t0));case 19:s.next=35;break;case 21:return s.prev=21,s.next=24,F.a.get("/users/".concat(e.userId,"/orders.json?auth=").concat(e.token));case 24:for(u in o=s.sent,i=[],o.data)i.push(Object(Pe.a)(Object(Pe.a)({},o.data[u]),{},{id:u}));return s.next=29,Object(Ie.c)(L.p(i));case 29:s.next=35;break;case 31:return s.prev=31,s.t1=s.catch(21),s.next=35,Object(Ie.c)(L.n(s.t1));case 35:case"end":return s.stop()}}),Be,null,[[3,15],[21,31]])}var Xe=ke.a.mark(Qe),We=ke.a.mark(Ye),Je=ke.a.mark($e),Ke=ke.a.mark(Ve);function Qe(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.a)([Object(we.c)(W.e,De),Object(we.c)(W.c,Re),Object(we.c)(W.i,Ce),Object(we.c)(W.b,Le)]);case 2:case"end":return e.stop()}}),Xe)}function Ye(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.c)(W.s,Fe);case 2:case"end":return e.stop()}}),We)}function $e(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.d)(W.t,qe);case 2:return e.next=4,Object(we.c)(W.o,Me);case 4:case"end":return e.stop()}}),Je)}function Ve(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.c)(W.j,Ge);case 2:case"end":return e.stop()}}),Ke)}var Ze=n(61),et=n(62),tt=M.c,nt=Object(M.b)({burgerBuilder:ee,order:se,auth:pe,dashboard:ve}),rt=Object(et.a)(),ct=Object(M.d)(nt,tt(Object(M.a)(Ze.a,rt)));rt.run(Qe),rt.run(Ye),rt.run($e),rt.run(Ve);var at=Object(p.jsx)(s.a,{store:ct,children:Object(p.jsx)(a.a,{children:Object(p.jsx)(z,{})})});i.a.render(at,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");B?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):q(e)}))}}()}},[[97,1,2]]]);
//# sourceMappingURL=main.96b7a18b.chunk.js.map