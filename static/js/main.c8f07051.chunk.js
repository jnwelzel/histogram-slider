(this["webpackJsonphistogram-slider"]=this["webpackJsonphistogram-slider"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);n(60);var a=n(0),r=n.n(a),c=n(57),o=n.n(c),i=(n(113),n(12)),u=function(e){var t=e.currentMinValue,n=e.currentMaxValue,a=e.range,c=e.maxCount,o=e.height,i=void 0===o?64:o,u=100/a.length;return r.a.createElement("svg",{style:{maxHeight:i,backgroundColor:"#f4f3f3",width:"100%",display:"block"}},a.map((function(e,a){var o=100*e.count/c||0,l=o/100*i,s=e.price>t&&e.price<n?"#732DD9":"#b5bec5";return r.a.createElement("rect",{key:e.price,title:e.price,fill:s,width:"".concat(u,"%"),height:"".concat(o,"%"),y:i-l,x:"".concat(u*a,"%")})})))},l=(n(114),n(58)),s=n.n(l),m=n(9),p=n(17),h=function(e){var t=e.style,n=e.handleRef,a=Object(p.a)(e,["style","handleRef"]);return r.a.createElement("div",Object.assign({ref:n},a,{style:Object(m.a)({},t,{backgroundColor:"#ffffff",border:"1.5px solid #B5BEC5",borderRadius:"100%",cursor:"pointer",marginLeft:-13,height:20,width:20,zIndex:3,top:-8})}))},g=function(e){var t=e.style;return r.a.createElement("div",{style:Object(m.a)({},t,{backgroundColor:"#B5BEC5",height:2})})},d=function(e){var t=e.style,n=e.handleRef,a=Object(p.a)(e,["style","handleRef"]);return r.a.createElement("div",Object.assign({ref:n},a,{style:Object(m.a)({},t,{backgroundColor:"#732DD9",height:2,position:"absolute",top:0})}))},f=function(e){var t=e.showHistogram,n=e.onChange,a=e.histogramRange,c=e.currentMinValue,o=e.currentMaxValue,i=e.maxCount,l=e.minValue,m=e.maxValue,p=e.values;return r.a.createElement("div",null,t&&r.a.createElement(u,{range:a,currentMinValue:c,currentMaxValue:o,maxCount:i}),r.a.createElement(s.a,{values:p,min:l,max:m,handle:h,background:g,progressBar:d,onValuesUpdated:n}))},b=function(e){var t=e.minValue,n=e.maxValue,c=e.maxCount,o=e.showHistogram,u=e.histogramRange,l=Object(a.useState)(t),s=Object(i.a)(l,2),m=s[0],p=s[1],h=Object(a.useState)(n),g=Object(i.a)(h,2),d=g[0],b=g[1];return r.a.createElement("div",null,r.a.createElement(f,{maxCount:c,minValue:t,maxValue:n,values:[m,d],showHistogram:o,onChange:function(e){var t=e.values;p(t[0]),b(t[1])},histogramRange:u,currentMinValue:m,currentMaxValue:d}),r.a.createElement("div",{style:{marginTop:30}},r.a.createElement("input",{type:"number",name:"min",onChange:function(e){return p(Number(e.target.value))},value:m}),"-",r.a.createElement("input",{type:"number",name:"max",onChange:function(e){return b(Number(e.target.value))},value:d})))},v=(n(146),{priceHistogram:[{price:888,count:2},{price:898,count:3},{price:908,count:4},{price:918,count:2},{price:932,count:8},{price:964,count:4},{price:988,count:5},{price:998,count:15},{price:1098,count:35},{price:1198,count:25},{price:1200,count:42},{price:1300,count:22},{price:1350,count:18},{price:1420,count:15},{price:1480,count:11},{price:1530,count:12},{price:1690,count:19},{price:1710,count:11},{price:2210,count:9},{price:2499,count:6},{price:2888,count:1}],priceMin:888,priceMax:2888,countMax:42}),x=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Rheostat"),r.a.createElement("p",{style:{marginBottom:30}},r.a.createElement("a",{href:"https://github.com/airbnb/rheostat",target:"_blank",rel:"noreferrer noopener"},"Github")),r.a.createElement(b,{minValue:v.priceMin,maxValue:v.priceMax,maxCount:v.countMax,values:[v.priceMin,v.priceMax],showHistogram:n,histogramRange:v.priceHistogram}),r.a.createElement("div",{style:{borderTop:"1px solid #ddd",marginTop:"30px"}},r.a.createElement("p",null,r.a.createElement("input",{onChange:function(){c(!n)},checked:n,id:"showHistogram",name:"showHistogram",type:"checkbox"}),r.a.createElement("label",{htmlFor:"showHistogram"},"Show histogram"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,n){e.exports=n(147)},71:function(e,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.c8f07051.chunk.js.map