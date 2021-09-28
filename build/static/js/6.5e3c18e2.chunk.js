(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[6],{100:function(e,r,t){e.exports={Order:"Order_Order__3kYZJ"}},105:function(e,r,t){"use strict";t.r(r);var n=t(13),s=t(14),o=t(16),i=t(15),c=t(0),a=t(11),u=t(12),p=t(100),d=t.n(p),l=t(1),h=function(e){var r=[];for(var t in e.ingredients)r.push({name:t,amount:e.ingredients[t]});var n=r.map((function(e){return Object(l.jsxs)("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},children:[e.name," (",e.amount,")"]},e.name)}));return Object(l.jsxs)("div",{className:d.a.Order,children:[Object(l.jsxs)("p",{children:["Ingredients: ",n]}),Object(l.jsxs)("p",{children:["Price: ",Object(l.jsx)("strong",{children:"".concat(e.price.toFixed(2)," USD")})]})]})},j=t(89),b=t(24),f=t(25),O=function(e){Object(o.a)(t,e);var r=Object(i.a)(t);function t(){return Object(n.a)(this,t),r.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=Object(l.jsx)(f.a,{});return this.props.loading||(e=this.props.orders.map((function(e){return Object(l.jsx)(h,{ingredients:e.ingredients,price:+e.price},e.id)}))),Object(l.jsx)("div",{children:e})}}]),t}(c.Component);r.default=Object(a.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(r,t){return e(b.e(r,t))}}}))(Object(j.a)(O,u.a))},86:function(e,r,t){"use strict";var n=t(13),s=t(14),o=t(16),i=t(15),c=t(0),a=t.n(c),u=t(32),p=t(88),d=t.n(p),l=t(1),h=function(e){Object(o.a)(t,e);var r=Object(i.a)(t);function t(){return Object(n.a)(this,t),r.apply(this,arguments)}return Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,r){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)(u.a,{show:this.props.show,clicked:this.props.modalClosed}),Object(l.jsx)("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),t}(c.Component);r.a=h},88:function(e,r,t){e.exports={Modal:"Modal_Modal__1-5dN"}},89:function(e,r,t){"use strict";var n=t(17),s=t(13),o=t(14),i=t(16),c=t(15),a=t(0),u=t(86),p=t(1);r.a=function(e,r){return function(t){Object(i.a)(d,t);var a=Object(c.a)(d);function d(){var e;Object(s.a)(this,d);for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return(e=a.call.apply(a,[this].concat(t))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(o.a)(d,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=r.interceptors.request.use((function(r){return e.setState({error:null}),r})),this.resInterceptor=r.interceptors.response.use((function(e){return e}),(function(r){e.setState({error:r})}))}},{key:"componentWillUnmount",value:function(){r.interceptors.request.eject(this.reqInterceptor),r.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(p.jsx)(e,Object(n.a)({},this.props))]})}}]),d}(a.Component)}}}]);
//# sourceMappingURL=6.5e3c18e2.chunk.js.map