"use strict";(self.webpackChunkg_observer=self.webpackChunkg_observer||[]).push([[870],{5608:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(5671),o=n(3144),i=n(136),a=n(7277),s=n(7313),c=n(6417),l=function(t){(0,i.Z)(n,t);var e=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.label,r=t.text;return(0,c.jsxs)("div",{className:"mb-4 bg-white flex flex-col rounded-xl text-gray-700 shadow-lg",children:[(0,c.jsx)("div",{className:"mx-4 rounded-lg overflow-hidden shadow-lg",children:e}),(0,c.jsxs)("div",{className:"p-4",children:[(0,c.jsx)("h6",{className:"text-md font-bold text-gray-800",children:n}),(0,c.jsx)("span",{className:"text-md",children:r.split("\n").map((function(t,e){return(0,c.jsx)("p",{children:t},e)}))})]})]})}}]),n}(s.Component)},318:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(5671),o=n(3144),i=n(136),a=n(7277),s=n(7313);var c=n.p+"static/media/rss-solid.167813b1d681372ed1d98e45b6b6c0f7.svg";var l=n.p+"static/media/link-solid.49819f951200a220d9839699fbccd8de.svg";var u=n.p+"static/media/link-slash-solid.7893b9a51ad07ceedeb88c9649c58439.svg",d=n(6417),f=function(t){(0,i.Z)(n,t);var e=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){var t=this.props,e=t.type,n=t.label,r=t.text,o=u,i="";switch(e){case"success":o=c,i="from-green-400 to-blue-500";break;case"warning":o=l,i="from-orange-400 to-orange-600";break;case"error":o=u,i="from-red-400 to-red-600"}return(0,d.jsx)("div",{className:"my-2 shadow-xl p-6 text-sm text-white rounded-lg bg-gradient-to-r ".concat(i),children:(0,d.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,d.jsxs)("div",{className:"flex gap-2 font-bold text-lg",children:[(0,d.jsx)("img",{className:"w-6 h-6",src:o,alt:""}),(0,d.jsx)("span",{children:n})]}),(0,d.jsx)("span",{className:"pl-3 text-md font-medium",children:r.split("\n").map((function(t,e){return(0,d.jsx)("p",{children:t},e)}))})]})})}}]),n}(s.Component)},3676:function(t,e,n){n.d(e,{Z:function(){return v}});var r=n(1413),o=n(7762),i=n(5671),a=n(3144),s=n(136),c=n(7277),l=n(7313),u=n(5845),d=n(7548),f=n(1259),p=n.n(f),h=n(6417);p()(u);var v=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(t){var r;(0,i.Z)(this,n);var o=(r=e.call(this,t)).props,a=o.height,s=o.legend,c=o.tooltip,l=o.zooming,u=o.animation,d=o.lineWidth,f=o.tickInterval,p=o.tickPrecision,h=o.lineColor,v=o.backgroundColor;return r.state={accessibility:{enabled:!1},boost:{enabled:!0,seriesThreshold:5},chart:{zooming:l?{type:"x"}:{},marginTop:20,height:a,animation:u,backgroundColor:v},legend:{enabled:s,itemStyle:{color:"#fff"}},plotOptions:{series:{states:{hover:{enabled:!1}},lineWidth:d}},xAxis:{labels:{style:{color:"#fff"},format:"{value:%H:%M:%S}"},type:"datetime",tickColor:"#fff",lineColor:h},yAxis:{labels:{style:{color:"#fff"},format:p?"{value:".concat(p,"f}"):"{value:0.2f}"},title:{text:""},opposite:!0,lineColor:h,tickInterval:f},tooltip:{enabled:c,format:"<div>{series.name}: {point.y}</div>"},credits:{enabled:!1},time:{useUTC:!1},title:{text:""}},r}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){u.setOptions({lang:{resetZoom:"\u590d\u4f4d\u89c6\u56fe",resetZoomTitle:"\u590d\u4f4d\u89c6\u56fe\u4e3a 1:1"}})}},{key:"render",value:function(){var t=this.props.series,e=this.state;if(t.data)t.data.sort((function(t,e){return t[0]-e[0]}));else if(t.length){var n,i=(0,o.Z)(t);try{for(i.s();!(n=i.n()).done;){n.value.data.sort((function(t,e){return t[0]-e[0]}))}}catch(a){i.e(a)}finally{i.f()}}return(0,h.jsx)(d.HighchartsReact,{options:(0,r.Z)((0,r.Z)({},e),{},{series:t}),highcharts:u})}}]),n}(l.Component)},1677:function(t,e){e.Z=[{tag:"station",type:"http",method:"get",uri:"/station"},{tag:"history",type:"http",method:"post",uri:"/history"},{tag:"trace",type:"http",method:"post",uri:"/trace"},{tag:"socket",type:"ws",uri:"/socket"}]},8687:function(t,e,n){var r=n(1677),o=n(8191);e.Z=function(t){var e,n=o.Z.api_settings,i=n.version,a=n.prefix,s=null===(e=r.Z.find((function(e){return e.tag===t})))||void 0===e?void 0:e.uri;return"".concat(a,"/").concat(i).concat(s)}},6694:function(t,e,n){var r=n(3433);e.Z=function(t,e,n){if(e.some((function(t){return t instanceof Array})))for(var o=0;o<e.length;o++)t.push(e[o]);else t.push(e);return t.length>n&&t.splice(0,t.length-n),(0,r.Z)(t)}},7596:function(t,e,n){var r=n(4165),o=n(5861),i=n(6573),a=n(1677),s=n(1647),c=n(8687),l=n(8585),u=n.n(l),d=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){var n,o,l,d,f,p,h,v,m,g,b,x,Z,y,k,w,j,C,N,S,T,A,I,O;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.tag,l=e.header,d=e.body,f=e.blob,p=e.filename,h=e.timeout,v=void 0===h?1e4:h,(m=i.Z.create({timeout:v})).interceptors.request.use((function(t){return f||(t.headers.Accept="application/json"),t})),m.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),g=(0,c.Z)(o),b=null===(n=a.Z.find((function(t){return t.tag===o})))||void 0===n?void 0:n.method,t.prev=6,"ws"!==(null===(x=a.Z.find((function(t){return t.tag===o})))||void 0===x?void 0:x.type)){t.next=10;break}throw new Error("websocket protocol is not supported");case 10:return Z="".concat(window.location.protocol).concat((0,s.Z)()),t.next=13,m.request({responseType:f?"blob":"json",url:"".concat(Z).concat(g),headers:l,method:b,data:d});case 13:if(y=t.sent,k=y.data,w=y.headers,!f){t.next=21;break}return(j=w["content-disposition"])?(N=null===(C=j.split(";").find((function(t){return t.includes("filename=")})))||void 0===C?void 0:C.split("=")[1])?u()(k,N):u()(k,"stream"):p?u()(k,p):u()(k,"stream"),S=(new Date).toISOString(),t.abrupt("return",{time:S,path:g,data:null,error:!1,status:200,message:"Returned data is a blob"});case 21:return t.abrupt("return",k);case 24:return t.prev=24,t.t0=t.catch(6),T=(new Date).toISOString(),A=t.t0,I=A.message,O=A.status,t.abrupt("return",{path:g,time:T,data:null,error:!0,status:O||500,message:I});case 29:case"end":return t.stop()}}),t,null,[[6,24]])})));return function(e){return t.apply(this,arguments)}}();e.Z=d},1880:function(t,e,n){var r=n(9439);e.Z=function(t,e,n){for(var o=t,i=e.split(">"),a=function(){var e=i[s];try{if(e.includes("[")||e.includes("]")){var n,a,c=(null===(n=e.match(/^(.*?)\[/))||void 0===n?void 0:n[1])||"",l=(null===(a=e.match(/\[(.*?)\]/))||void 0===a?void 0:a[1])||":";if(!l.length)throw new Error("invalid path given");var u=l.split(":"),d=(0,r.Z)(u,2),f=d[0],p=d[1];o=c.length?o[c].find((function(t){return t[f]===p})):o.find((function(t){return t[f]===p}))}else o=o[e]}catch(h){return{v:t}}},s=0;s<i.length-1;s++){var c=a();if("object"===typeof c)return c.v}var l=i[i.length-1];return o[l]=n,t}}}]);