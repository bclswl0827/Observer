"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[846],{1385:(e,t,r)=>{r.d(t,{A:()=>n});r(9950);const n=r.p+"static/media/xmark-solid.33c889ee6afa3ed57684011608af6238.svg"},93202:(e,t,r)=>{r.d(t,{l:()=>o});r(9950);const n=r.p+"static/media/rss-solid.167813b1d681372ed1d98e45b6b6c0f7.svg";const l=r.p+"static/media/link-solid.49819f951200a220d9839699fbccd8de.svg";const a=r.p+"static/media/link-slash-solid.7893b9a51ad07ceedeb88c9649c58439.svg";var s=r(44414);const o=e=>{const{content:t,title:r,type:o,className:c}=e;let i="";switch(o){case"success":i="from-green-400 to-blue-500";break;case"warning":i="from-orange-400 to-orange-600";break;case"error":i="from-red-400 to-red-600"}return(0,s.jsx)("div",{className:"my-2 shadow-xl p-6 text-sm text-white rounded-lg bg-gradient-to-r ".concat(i," ").concat(null!==c&&void 0!==c?c:""),children:(0,s.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,s.jsxs)("div",{className:"flex gap-2 font-bold text-lg",children:[(0,s.jsx)("img",{className:"success"===o?"size-6":"hidden",src:n,alt:""}),(0,s.jsx)("img",{className:"warning"===o?"size-6":"hidden",src:l,alt:""}),(0,s.jsx)("img",{className:"error"===o?"size-6":"hidden",src:a,alt:""}),(0,s.jsx)("span",{children:r})]}),(0,s.jsx)("span",{className:"pl-3 text-md font-medium",children:t.split("\n").map((e=>(0,s.jsxs)("p",{children:[e,(0,s.jsx)("br",{})]},e)))})]})})}},25242:(e,t,r)=>{r.d(t,{$:()=>l});var n=r(44414);const l=e=>{const{className:t,label:r,onClick:l}=e;return(0,n.jsx)("button",{className:"w-full text-white font-medium text-sm shadow-lg rounded-lg py-2 ".concat(null!==t&&void 0!==t?t:""),onClick:l,children:r})}},40088:(e,t,r)=>{r.d(t,{t:()=>u});var n=r(9950),l=r(93461),a=r.n(l),s=r(11274),o=r(49027),c=r.n(o),i=r(67818),d=r(44414);const u=(0,n.forwardRef)(((e,t)=>{const r=.65*window.devicePixelRatio,{boost:l,title:o,series:u,height:h,legend:m,tooltip:f,zooming:b,animation:p,lineWidth:v,tickInterval:g,tickPrecision:x,lineColor:w,backgroundColor:y}=e,[S,A]=(0,n.useState)(!1);(0,n.useEffect)((()=>{A((()=>{if(window.WebGLRenderingContext){const e=document.createElement("canvas");return["webgl","experimental-webgl","webgl2","moz-webgl","webkit-3d"].some((t=>{try{return!!e.getContext(t)}catch(r){return!1}}))}return!1})())}),[]);const[C,E]=(0,n.useState)({chart:{zooming:b?{type:"x"}:{},marginTop:20,height:h,animation:p,backgroundColor:y},xAxis:{labels:{style:{color:"#fff"},format:"{value:%H:%M:%S}"},type:"datetime",tickColor:"#fff",lineColor:w},yAxis:{labels:{style:{color:"#fff"},format:x?"{value:".concat(x,"f}"):"{value:0.2f}"},title:{text:""},opposite:!0,lineColor:w,tickInterval:g},tooltip:{enabled:f,followPointer:!0,followTouchMove:!0,xDateFormat:"%Y-%m-%d %H:%M:%S",padding:12},legend:{enabled:m,itemStyle:{color:"#fff"}},plotOptions:{series:{lineWidth:v,turboThreshold:l?10:0,boostThreshold:l?1:0,states:{hover:{enabled:!1}}}},title:{text:o,style:{color:"#fff",fontSize:"10px",fontWeight:"normal"}},boost:{enabled:S,pixelRatio:r},accessibility:{enabled:!1},credits:{enabled:!1},time:{useUTC:!1},series:[u]}),{t:j}=(0,i.Bd)();return(0,n.useEffect)((()=>{c()(a())}),[]),(0,n.useEffect)((()=>{a().setOptions({lang:{resetZoom:j("components.chart.reset_zoom"),resetZoomTitle:j("components.chart.reset_zoom_title")}})}),[j]),(0,n.useEffect)((()=>{E((e=>({...e,chart:{...e.chart,height:h},title:{...e.title,text:o},boost:{...e.boost,enabled:S}})))}),[h,o,S]),(0,d.jsx)(s.HighchartsReact,{ref:t,options:C,highcharts:a()})}))},53768:(e,t,r)=>{r.d(t,{h:()=>c,R:()=>i});var n=r(9950);const l=r.p+"static/media/square-caret-up-solid.0573794ec033f5ce25c1076e3ac596e3.svg";const a=r.p+"static/media/ellipsis-solid.e3aced2a80c2b888104322b1ae60b47f.svg";var s=r(1385),o=r(44414);let c=function(e){return e[e.COLLAPSE_DISABLE=0]="COLLAPSE_DISABLE",e[e.COLLAPSE_SHOW=1]="COLLAPSE_SHOW",e[e.COLLAPSE_HIDE=2]="COLLAPSE_HIDE",e}({});const i=e=>{const{label:t,text:r,children:i,collapse:d,advanced:u}=e,[h,m]=(0,n.useState)(!1),[f,b]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=null!==d&&void 0!==d?d:c.COLLAPSE_DISABLE;m(e===c.COLLAPSE_HIDE)}),[d]);const p=(null!==d&&void 0!==d?d:c.COLLAPSE_DISABLE)!==c.COLLAPSE_DISABLE;return(0,o.jsxs)("div",{className:"mb-4 flex flex-col rounded-xl text-gray-700 shadow-lg",children:[(0,o.jsx)("div",{className:"mx-4 rounded-lg overflow-hidden shadow-lg",children:i}),(0,o.jsxs)("div",{className:"p-4",children:[(0,o.jsxs)("h6",{className:"text-md font-bold text-gray-800 flex ".concat(p?"cursor-pointer select-none":""),onClick:()=>{p&&m(!h)},children:[p&&(0,o.jsx)("img",{className:"mx-1 ".concat(h?"rotate-180":""),src:l,alt:""}),t]}),r&&!h&&(0,o.jsx)("div",{className:"text-md pt-2",children:r.split("\n").map((e=>(0,o.jsx)("div",{children:e},e)))}),u&&(0,o.jsxs)("div",{className:"mt-2 space-y-2 ".concat(h?"hidden":"block"),children:[(0,o.jsxs)("div",{className:"mx-1 cursor-pointer",onClick:()=>{b(!f)},children:[(0,o.jsx)("img",{className:"size-4 ".concat(f?"hidden":"block"),src:a,alt:""}),(0,o.jsx)("img",{className:"size-4 ".concat(f?"block":"hidden"),src:s.A,alt:""})]}),(0,o.jsx)("div",{className:f?"block":"hidden",children:u})]})]})]})}},67780:(e,t,r)=>{r.d(t,{p:()=>a});var n=r(29925),l=r(44414);const a=e=>{const{label:t,disabled:r,className:a,defaultValue:s,numberLimit:o,type:c,onValueChange:i}=e;return(0,l.jsx)(n.A,{size:"small",type:c,label:t,disabled:r,onChange:e=>{let{target:t}=e;if(!i)return;const{value:r}=t;if("number"===c){const e=Number(r);if(isNaN(e))return void i(s);if(o){const{max:t,min:r}=o;if(e>t||e<r)return void i(s)}i(e)}else i(r)},defaultValue:s,className:"w-full ".concat(null!==a&&void 0!==a?a:""),InputLabelProps:{shrink:!0}})}},60898:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(44414);const l=e=>{const{embedded:t,className:r,label:l,sublabel:a,children:s}=e;return(0,n.jsx)("div",{className:"w-full text-gray-800",children:(0,n.jsxs)("div",{className:"flex flex-col shadow-lg rounded-lg",children:[(0,n.jsxs)("div",{className:"px-4 py-3 font-bold",children:[a&&(0,n.jsx)("h6",{className:"text-gray-500 text-xs",children:a}),(0,n.jsx)("h2",{className:t?"text-md":"text-lg",children:l})]}),(0,n.jsx)("div",{className:"p-4 m-2 flex flex-col justify-center gap-4 ".concat(null!==r&&void 0!==r?r:""),children:s})]})})}},71359:(e,t,r)=>{r.d(t,{w:()=>l});var n=r(35887);const l=function(e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;arguments.length>1&&void 0!==arguments[1]&&arguments[1]?n.Ay.error(e,{duration:t}):n.Ay.success(e,{duration:t})}},28418:(e,t,r)=>{r.d(t,{U:()=>n});const n=(e,t)=>{const r=[];for(let n=0;n<e.length;n++)n?r.push((e[n]-e[n-1])/(t/1e3)):r.push(0);return r}},7678:(e,t,r)=>{r.d(t,{W:()=>a,z:()=>l});var n=r(96004);let l=function(e){return e[e.LOW_PASS=0]="LOW_PASS",e[e.HIGH_PASS=1]="HIGH_PASS",e[e.BAND_PASS=2]="BAND_PASS",e}({});const a=(e,t)=>{const{passbandType:r,poles:a,sampleRate:s,lowFreqCorner:o,highFreqCorner:c}=t;let i;i=r===l.LOW_PASS?n.com.oregondsp.signalProcessing.filter.iir.PassbandType.LOWPASS:r===l.HIGH_PASS?n.com.oregondsp.signalProcessing.filter.iir.PassbandType.HIGHPASS:n.com.oregondsp.signalProcessing.filter.iir.PassbandType.BANDPASS;const d=new n.com.oregondsp.signalProcessing.filter.iir.Butterworth(a,i,o,c,1/s),u=new Float32Array(e);return d.filterInPlace(u),Array.from(u)}},76969:(e,t,r)=>{r.d(t,{N:()=>n});const n=(e,t)=>{const r=[];for(let n of e)r.push(n/t);return r}},27156:(e,t,r)=>{r.d(t,{i:()=>n});const n=(e,t,r)=>{const n=2**(t-1),l=[];for(let a of e)l.push(r/n*a);return l}},42105:(e,t,r)=>{r.d(t,{D:()=>l});var n=r(43974);const l=e=>{const t=new Date(e);return(0,n.A)(t,"yyyy-MM-dd HH:mm:ss")}},21846:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var n=r(55297),l=r(53768),a=r(93202),s=r(9950),o=r(40088),c=r(67818),i=r(19325);var d=r(71359),u=r(42105),h=r(99145),m=r(64192);var f=r(27156),b=r(76969),p=r(28418),v=r(7678);var g=r(25242),x=r(34339);const w=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=(0,s.useRef)(e),n=(0,s.useRef)(null),l=(0,s.useRef)(null);(0,s.useEffect)((()=>{const e=()=>{r.current&&!n.current&&(n.current=(e=>{let{backend:t,endpoint:r,onOpen:n,onData:l,onClose:a,onError:s}=e;try{if("socket"!==r.type)throw new Error("non-websocket protocol is not supported");const e=(0,x.J)(!1),o="".concat(e,"//").concat(t).concat(r.path),c=new WebSocket(o);return c.onmessage=e=>{const t=JSON.parse(e.data);l({...e,data:t})},c.onopen=null!==n&&void 0!==n?n:null,c.onclose=null!==a&&void 0!==a?a:null,c.onerror=null!==s&&void 0!==s?s:null,c}catch{return null}})({...r.current,onClose:a=>{var s,o;null===(s=r.current)||void 0===s||null===(o=s.onClose)||void 0===o||o.call(s,a),t?(l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{n.current=null,e()}),1e3)):n.current=null},onError:a=>{var s,o;null===(s=r.current)||void 0===s||null===(o=s.onError)||void 0===o||o.call(s,a),t?(l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{n.current=null,e()}),1e3)):n.current=null}}))};return e(),()=>{var e;l.current&&clearTimeout(l.current),null===(e=n.current)||void 0===e||e.close(),r.current=null,n.current=null}}),[t])};var y=r(60898),S=r(67780);var A=r(44414);const C=()=>{const{t:e}=(0,c.Bd)(),[t,r]=(0,s.useState)({type:"warning",title:"views.realtime.banner.warning.label",content:"views.realtime.banner.warning.text"}),[x,C]=(0,s.useState)({ehz:{holder:{collapse:l.h.COLLAPSE_HIDE,label:"views.realtime.charts.ehz.label",text:"views.realtime.charts.ehz.text",values:{pga:"0.00000",pgv:"0.00000",intensity:"-"}},chart:{buffer:[],backgroundColor:"#d97706",filter:{enabled:!1},ref:(0,s.useRef)(null),series:{name:"EHZ",type:"line",color:"#f1f5f9"}}},ehe:{holder:{collapse:l.h.COLLAPSE_HIDE,label:"views.realtime.charts.ehe.label",text:"views.realtime.charts.ehe.text",values:{pga:"0.00000",pgv:"0.00000",intensity:"-"}},chart:{buffer:[],filter:{enabled:!1},backgroundColor:"#10b981",ref:(0,s.useRef)(null),series:{name:"EHE",type:"line",color:"#f1f5f9"}}},ehn:{holder:{collapse:l.h.COLLAPSE_HIDE,label:"views.realtime.charts.ehn.label",text:"views.realtime.charts.ehn.text",values:{pga:"0.00000",pgv:"0.00000",intensity:"-"}},chart:{buffer:[],backgroundColor:"#0ea5e9",filter:{enabled:!1},ref:(0,s.useRef)(null),series:{name:"EHE",type:"line",color:"#f1f5f9"}}}}),E=()=>{r({type:"error",title:"views.realtime.banner.error.label",content:"views.realtime.banner.error.text"})};w({backend:i.DR.backend,endpoint:i.DR.endpoints.socket,onData:e=>{let{data:t}=e;!async function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];r.forEach((t=>{t(e)}))}(t,(e=>{((e,t)=>{var r,n;if(!e.ts)return;const{scale:l}=m.A.getState().scale,a=null!==(r=null===(n=h.c.scales.find((e=>e.property().value===l)))||void 0===n?void 0:n.property().name)&&void 0!==r?r:"Unknown",s=(0,u.D)(e.ts),o=Object.values(e).filter((e=>Array.isArray(e))),c=(o.reduce(((e,t)=>e+t.length),0)/o.length).toFixed(0);t((e=>({...e,type:"success",title:"views.realtime.banner.success.label",content:"views.realtime.banner.success.text",values:{sampleRate:c,time:s,scale:a}})))})(e,r)}),(e=>{var t,r;r=C,(t=e).ts&&r((e=>{const{ts:r,...n}=t,{retention:l}=m.A.getState().retention;return Object.keys(e).forEach((a=>{var s;if(!(a in t))return;const o=n[a],{buffer:c}=e[a].chart;c.push({ts:r,data:o});const i=r-1e3*l;for(;c[0].ts<i;)c.shift();const{enabled:d,lowCorner:u,highCorner:g}=e[a].chart.filter,{lowFreqCorner:x,highFreqCorner:w}={lowFreqCorner:null!==u&&void 0!==u?u:.1,highFreqCorner:null!==g&&void 0!==g?g:10};e[a].chart={...e[a].chart,title:d?"Band pass [".concat(x.toFixed(1),"-").concat(w.toFixed(1)," Hz]"):""};const y=c.map((e=>{let{ts:t,data:r}=e;const n=d?(0,v.W)(r,{poles:4,lowFreqCorner:x,highFreqCorner:w,sampleRate:r.length,passbandType:v.z.BAND_PASS}):r,l=1e3/n.length;return n.map(((e,r)=>[t+l*r,e]))})).reduce(((e,t)=>e.concat(t)),[]),{current:S}=e[a].chart.ref;if(S){const{series:e}=S.chart;e[0].setData(y,!0,!1,!1)}const{adc:A}=m.A.getState().adc,C=(0,f.i)(o,A.resolution,A.fullscale),{geophone:E}=m.A.getState().geophone,j=E.sensitivity/100,N=(0,b.N)(C,j),k=1e3/o.length,L=(0,p.U)(N,k),{scale:P}=m.A.getState().scale,_=null!==(s=h.c.scales.find((e=>e.property().value===P)))&&void 0!==s?s:h.R,{holder:O}=e[a];O.values={pga:L.reduce(((e,t)=>Math.max(Math.abs(e),Math.abs(t))),0).toFixed(5),pgv:N.reduce(((e,t)=>Math.max(Math.abs(e),Math.abs(t))),0).toFixed(5),intensity:"".concat(P," ").concat(_.getIntensity({rawData:o,currentPGV:Math.max(...N),currentPGA:Math.max(...L)},{adc:A,geophone:E}))}})),e}))}))},onError:E,onClose:E,onOpen:()=>{(0,d.w)(e("views.realtime.toasts.websocket_connected"))}});const[j,N]=(0,s.useState)(150),k=(0,s.useCallback)((()=>{let e=Math.round(.6*window.innerHeight/Object.keys(x).length);e<150?e=150:e>500&&(e=500),N(e)}),[x]),L=((e,t)=>{let r=null;return function(){for(var n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];null===r&&(r=window.setTimeout((()=>{r=null,e(...l)}),t))}})((()=>{k()}),2e3);(0,s.useEffect)((()=>(k(),window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L)})),[k,L]);const P=(e,t,r)=>C((n=>({...n,[e]:{...n[e],chart:{...n[e].chart,filter:{...n[e].chart.filter,[t?"lowCorner":"highCorner"]:r}}}})));return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(a.l,{type:t.type,title:e(t.title,{...t.values}),content:e(t.content,{...t.values})}),(0,A.jsx)(n.m,{className:"pt-1",children:Object.keys(x).map((t=>{var r;return(0,s.createElement)(l.R,{...x[t].holder,key:x[t].holder.label,label:e(x[t].holder.label),text:e(null!==(r=x[t].holder.text)&&void 0!==r?r:"",{...x[t].holder.values}),advanced:(0,A.jsx)(n.m,{className:"max-w-96",children:(0,A.jsxs)(y.Z,{label:e("views.realtime.charts.".concat(t,".advanced.panels.butterworth_filter.title")),embedded:!0,children:[(0,A.jsxs)(n.m,{className:"flex flex-col md:flex-row gap-4",children:[(0,A.jsx)(S.p,{onValueChange:e=>P(t,!0,Number(e)),defaultValue:.1,type:"number",disabled:x[t].chart.filter.enabled,numberLimit:{max:100,min:.1},label:e("views.realtime.charts.".concat(t,".advanced.panels.butterworth_filter.low_corner_freq"))}),(0,A.jsx)(S.p,{onValueChange:e=>P(t,!1,Number(e)),defaultValue:10,type:"number",disabled:x[t].chart.filter.enabled,numberLimit:{max:100,min:.1},label:e("views.realtime.charts.".concat(t,".advanced.panels.butterworth_filter.high_corner_freq"))})]}),(0,A.jsx)(g.$,{label:e("views.realtime.charts.".concat(t,".advanced.panels.butterworth_filter.").concat(x[t].chart.filter.enabled?"disable_filter":"enable_filter")),className:"bg-indigo-600 hover:bg-indigo-700",onClick:()=>{return e=t,void C((t=>({...t,[e]:{...t[e],chart:{...t[e].chart,filter:{...t[e].chart.filter,enabled:!t[e].chart.filter.enabled}}}})));var e}})]})})},(0,A.jsx)(o.t,{...x[t].chart,boost:!0,lineWidth:1,tooltip:!0,zooming:!0,animation:!1,tickPrecision:1,tickInterval:100,height:j}))}))})]})}}}]);