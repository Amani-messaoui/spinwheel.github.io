(this["webpackJsonpspinner-wheel-game"]=this["webpackJsonpspinner-wheel-game"]||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),o=n(12),c=n.n(o),a=(n(66),n(3)),l=(n(67),n(39),n(75)),r=n(7);var d=function(e){var t=e.setIsModalVisible,n=e.isModalVisible,i=e.itemobject,s=e.pauseAnimation;return Object(r.jsx)("div",{children:Object(r.jsx)(l.a,{title:Object(r.jsx)("div",{children:Object(r.jsxs)("h5",{className:"NameOfChoise",children:["Your choise was :",Object(r.jsxs)("span",{children:[" ",i[0].name]})]})}),width:800,centered:!0,visible:n,onOk:function(){t(!1)},onCancel:function(){t(!1),s()},footer:null,children:Object(r.jsx)("video",{width:"750px",height:"350px",controls:!0,autoPlay:!0,src:i[0].Video,type:"video/mp4"})})})},m=n(59),u=n.n(m),j={position:"fixed",pointerEvents:"none",width:"100%",height:"100%",top:0,left:0};function b(e,t){return{particleCount:3,angle:e,spread:55,origin:{x:t},colors:["#000","#fffff"]}}var h=function(e){var t=Object(i.useState)(null),n=Object(a.a)(t,2),s=n[0],o=n[1],c=Object(i.useState)(!1),l=Object(a.a)(c,2),m=l[0],h=l[1],f=Object(i.useRef)(null),p=Object(i.useState)(),v=Object(a.a)(p,2),V=v[0],O=v[1],x=Object(i.useCallback)((function(e){f.current=e}),[]),g=Object(i.useCallback)((function(){f.current&&(f.current(b(60,0)),f.current(b(120,1)))}),[]),w=Object(i.useCallback)((function(){V||O(setInterval(g,16))}),[g,V]),C=Object(i.useCallback)((function(){clearInterval(V),O(null)}),[V]);Object(i.useEffect)((function(){return function(){clearInterval(V)}}),[V]);var k={"--nb-item":e.items.length,"--selected-item":s-1},M=null!==s?"spinning":"",y=s&&e.items&&e.items.filter((function(e){return e.name===s}));return console.log("props.items",e.items),console.log("itemobject",y),Object(r.jsxs)("div",{className:"wheel-container",children:[Object(r.jsx)("div",{style:k,className:"wheel ".concat(M),onClick:function(){if(null===s){var t=Math.floor(Math.random()*e.items.length)+1;o(t)}else s&&(o(null),setTimeout(Math.floor(Math.random()*e.items.length)+1));setTimeout((function(){h(!0),w()}),9e3)},children:e.items.map((function(e,t){return Object(r.jsx)("div",{className:"wheel-item",style:{"--item-nb":t},children:e.name},t)}))}),y?Object(r.jsxs)("div",{children:[Object(r.jsx)(u.a,{refConfetti:x,style:j}),Object(r.jsx)(d,{pauseAnimation:C,setIsModalVisible:h,isModalVisible:m,itemobject:y})]}):null]})};var f=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Spin the wheel and try your luck"}),Object(r.jsx)(h,{items:[{name:1,Video:"./Videos/v1.mp4"},{name:2,Video:"./Videos/v2.mp4"},{name:3,Video:"./Videos/v3.mp4"},{name:4,Video:"./Videos/v4.mp4"},{name:5,Video:"./Videos/v5.mp4"},{name:6,Video:"./Videos/v5c1.mp4"},{name:7,Video:"./Videos/v6.mp4"},{name:8,Video:"./Videos/v6c1.mp4"},{name:9,Video:"./Videos/v7.mp4"},{name:10,Video:"./Videos/v8.mp4"},{name:11,Video:"./Videos/v9.mp4"},{name:12,Video:"./Videos/v10.mp4"},{name:13,Video:"./Videos/v11.mp4"},{name:14,Video:"./Videos/v12.mp4"}]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),o(e),c(e)}))};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),p()}},[[72,1,2]]]);
//# sourceMappingURL=main.5bcc3d82.chunk.js.map