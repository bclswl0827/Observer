"use strict";(self.webpackChunkg_observer=self.webpackChunkg_observer||[]).push([[92],{426:function(e,t){t.Z=function(e,t){for(var r=[],n=0;n<e.length;n++)n?r.push((e[n]-e[n-1])/t):r.push(0);return r}},6586:function(e,t){t.Z=function(e){var t=new Date(e),r=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),a=t.getDate().toString().padStart(2,"0"),s=t.getHours().toString().padStart(2,"0"),o=t.getMinutes().toString().padStart(2,"0"),c=t.getSeconds().toString().padStart(2,"0");return"".concat(r,"-").concat(n,"-").concat(a," ").concat(s,":").concat(o,":").concat(c)}},9603:function(e,t,r){var n=r(7762);t.Z=function(e,t){var r,a=[],s=(0,n.Z)(e);try{for(s.s();!(r=s.n()).done;){var o=r.value;a.push(o/t)}}catch(c){s.e(c)}finally{s.f()}return a}},5693:function(e,t,r){var n=r(7762);t.Z=function(e,t,r){var a,s=Math.pow(2,t-1),o=[],c=(0,n.Z)(e);try{for(c.s();!(a=c.n()).done;){var i=a.value;o.push(r/s*i)}}catch(u){c.e(u)}finally{c.f()}return o}},2092:function(e,t,r){r.r(t),r.d(t,{default:function(){return te}});var n=r(4165),a=r(5861),s=r(1413),o=r(5671),c=r(3144),i=r(136),u=r(7277),l=r(7313),h=r(4791),d=r(4066),f=r(5097),p=r(501),Z=r(4656),m=r(284),v=r(771),x=r(3208),y=r(3213),g=r(7114),b=r(8791),j=r(3605),k=r(6417),S=function(e){(0,i.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.label,r=e.onChange,n=e.value,a=e.defaultValue,s=Intl.DateTimeFormat().resolvedOptions().timeZone;return(0,k.jsx)(x._,{dateAdapter:b.H,adapterLocale:j.Z,children:(0,k.jsx)(y.x,{className:"w-full",timezone:"system",views:["year","month","day","hours","minutes","seconds"],viewRenderers:{hours:g.M6,minutes:g.M6,seconds:g.M6},onChange:function(e){var t=null===e||void 0===e?void 0:e.valueOf();r(t)},label:"".concat(t,"\uff08\u65f6\u533a ").concat(s,"\uff09"),defaultValue:a,value:n,ampm:!1})})}}]),r}(l.Component),w=function(e){(0,i.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.label,n=e.sublabel,a=e.children,s=Array.isArray(a)?a:[a];return(0,k.jsx)("div",{className:"w-full h-full text-gray-800",children:(0,k.jsxs)("div",{className:"flex flex-col shadow-lg rounded-lg",children:[(0,k.jsxs)("div",{className:"px-4 py-3 font-bold",children:[(0,k.jsx)("h6",{className:"text-gray-500 text-xs",children:n}),(0,k.jsx)("h2",{className:"text-xl",children:r})]}),(0,k.jsx)("div",{className:"p-4 m-2 flex flex-col justify-center gap-4 ".concat(t),children:s.map((function(e,t){return(0,k.jsx)("div",{children:e},t)}))})]})})}}]),r}(l.Component),C=function(e){(0,i.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).state={isBusy:!1},n}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.label,n=e.onClick;return(0,k.jsx)("button",{className:"w-full text-white font-medium text-sm shadow-lg rounded-lg py-2 ".concat(t),onClick:n,children:r})}}]),r}(l.Component),E=r(1109),N=r(3676),H=r(7596),P=r(6059),Q=r(7762),D=r(426),M=function(e,t,r){if(!e.length)return[];for(var n,a,s=e.length,o=0;o<s-1;o++)for(var c=0;c<s-o-1;c++)if(n=e[c],a=e[c+1],("desc"===r?a[t]-n[t]:n[t]-a[t])>0){var i=e[c];e[c]=e[c+1],e[c+1]=i}return e},z=r(9603),F=r(5693),T=r(1880),A=function(e,t,r,n){var a,s=["ehz","ehe","ehn"],o=r.fullscale,c=r.resolution,i=M(t,"ts","asc"),u=[],l=[],h=[],d=0,f=(0,Q.Z)(i);try{for(f.s();!(a=f.n()).done;){var p,Z=a.value,m=(0,Q.Z)(s);try{for(m.s();!(p=m.n()).done;){var v=p.value,x=Z[v].length,y=0;y=0!==d?1e3*x/(d-Z.ts):Z[v].length;for(var g=0!==d?d-Z.ts:1e3,b=g/y,j=(0,F.Z)(Z[v],c,o),k=(0,z.Z)(j,n[v]),S=(0,D.Z)(k,b/g),w=0;w<S.length;w++)switch(v){case"ehz":u.push([Z.ts+w*b,S[w]]);break;case"ehe":l.push([Z.ts+w*b,S[w]]);break;case"ehn":h.push([Z.ts+w*b,S[w]])}}}catch(C){m.e(C)}finally{m.f()}d=Z.ts}}catch(C){f.e(C)}finally{f.f()}return(0,T.Z)(e,"series>[name:EHZ]>data",u),(0,T.Z)(e,"series>[name:EHE]>data",l),(0,T.Z)(e,"series>[name:EHN]>data",h),e},W=r(4469),_=r(3604),I=r(7216),O=r(9840),V=r(3007),B=function(e){(0,i.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.open,n=e.values,a=e.onClose,s=e.onSelect;return(0,k.jsxs)(W.Z,{onClose:a,open:r,children:[(0,k.jsx)(_.Z,{children:t}),n.map((function(e,t){return(0,k.jsx)(I.ZP,{disableGutters:!0,children:(0,k.jsx)(O.Z,{onClick:function(){return s&&s(e[1])},children:(0,k.jsx)(V.Z,{primary:e[0],secondary:e[3]?e[3]:e[1]})})},t)}))]})}}]),r}(l.Component),G=function(e){var t=e.data.geophone;return{ehz:t.ehz,ehe:t.ehe,ehn:t.ehn}},L=function(e){var t=e.data.adc;return{resolution:t.resolution,fullscale:t.fullscale}},R=r(5908),X=r(9289),Y=r(1113),q=r(9099),J=r(8310),K=r(9536),U=function(e){(0,i.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.open,n=e.values,a=e.onClose,s=e.onSelect;return(0,k.jsxs)(W.Z,{fullWidth:!0,open:r,children:[(0,k.jsx)(R.Z,{className:"bg-purple-500",sx:{position:"relative"},children:(0,k.jsxs)(X.Z,{children:[(0,k.jsx)(Y.Z,{sx:{ml:2,flex:1},variant:"h6",children:t}),(0,k.jsx)(q.Z,{autoFocus:!0,color:"inherit",onClick:a,children:"X"})]})}),(0,k.jsx)(J.Z,{children:n.map((function(e,t){return(0,k.jsxs)("div",{children:[(0,k.jsx)(I.ZP,{children:(0,k.jsx)(O.Z,{onClick:function(){return s&&s(e[1])},children:(0,k.jsx)(V.Z,{primary:e[0],secondary:e[2]?e[2]:e[1]})})}),(0,k.jsx)(K.Z,{})]},t)}))})]})}}]),r}(l.Component),$=r(6586),ee=1e5,te=function(e){(0,i.Z)(r,e);var t=(0,u.Z)(r);function r(e){var c;return(0,o.Z)(this,r),(c=t.call(this,e)).promisedSetState=function(e){return new Promise((function(t){return c.setState(e,t)}))},c.handleTimeChange=function(e,t){switch(e){case"start":c.setState((function(e){return{history:(0,s.Z)((0,s.Z)({},e.history),{},{start:t})}}));break;case"end":c.setState((function(e){return{history:(0,s.Z)((0,s.Z)({},e.history),{},{end:t})}}))}},c.handleQueryHistory=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a,s,o,i,u,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.state.history,r=t.start,!((a=t.end)-r<=0)&&r&&a){e.next=6;break}return s="\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u65f6\u95f4\u8303\u56f4",P.ZP.error(s),e.abrupt("return",Promise.reject(s));case 6:return e.next=8,(0,H.Z)({body:t,tag:"history",timeout:ee,blob:"sac"===t.format,filename:"".concat(t.channel,"-").concat(t.start,"-").concat(t.end,".").concat(t.format)});case 8:if(o=e.sent,i=o.error,u=o.data,!i){e.next=15;break}return l="\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u8f93\u5165\u540e\u91cd\u8bd5",P.ZP.error(l),e.abrupt("return",Promise.reject(l));case 15:return e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)}))),c.handleQueryEvents=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a,o,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.state.trace,e.next=3,(0,H.Z)({body:t,tag:"trace",timeout:ee});case 3:if(r=e.sent,a=r.error,o=r.data,!a){e.next=10;break}return i="\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u8f93\u5165\u540e\u91cd\u8bd5",P.ZP.error(i),e.abrupt("return",Promise.reject(i));case 10:c.setState((function(e){return{modal:(0,s.Z)((0,s.Z)({},e.modal),{},{open:!0,values:o.map((function(e){var t=e.magnitude,r=e.region,n=e.event,a=e.timestamp,s=e.depth;return[n,a,"[M ".concat(t.toFixed(1),"] ").concat(r," / \u65f6\u523b ").concat((0,$.Z)(a)," / \u6df1\u5ea6 ").concat(s," km")]}))})}}));case 11:case"end":return e.stop()}}),e)}))),c.handleChooseEvent=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=3e5,a=new Date(t).getTime()-r,o=new Date(t).getTime()+r,e.next=5,c.promisedSetState({history:{start:a,end:o,format:"json"},modal:(0,s.Z)((0,s.Z)({},c.state.modal),{},{open:!1})});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.handleSelect=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={from:"history",dialog:(0,s.Z)((0,s.Z)({},c.state.select.dialog),{},{open:!1})},e.t0=t,e.next="history"===e.t0?4:"trace"===e.t0?9:14;break;case 4:return e.next=6,c.promisedSetState({select:a,history:(0,s.Z)((0,s.Z)({},c.state.history),{},{channel:r,format:"sac"})});case 6:return e.next=8,P.ZP.promise(c.handleQueryHistory(),{loading:"\u6b63\u5728\u67e5\u8be2...",success:"\u5386\u53f2\u6ce2\u5f62\u6570\u636e\u5bfc\u51fa\u6210\u529f",error:"\u5386\u53f2\u6ce2\u5f62\u6570\u636e\u5bfc\u51fa\u5931\u8d25"});case 8:case 13:return e.abrupt("break",14);case 9:return e.next=11,c.promisedSetState({select:a,trace:(0,s.Z)((0,s.Z)({},c.state.trace),{},{source:r})});case 11:return e.next=13,P.ZP.promise(c.handleQueryEvents(),{loading:"\u6b63\u5728\u67e5\u8be2...",success:"\u5730\u9707\u4e8b\u4ef6\u67e5\u8be2\u6210\u529f",error:"\u5730\u9707\u4e8b\u4ef6\u67e5\u8be2\u5931\u8d25"});case 14:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),c.handleQueryWaveform=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.promisedSetState({history:(0,s.Z)((0,s.Z)({},c.state.history),{},{format:"json"})});case 2:return e.next=4,P.ZP.promise(c.handleQueryHistory(),{loading:"\u6b63\u5728\u67e5\u8be2...",success:"\u5386\u53f2\u6ce2\u5f62\u6570\u636e\u67e5\u8be2\u6210\u529f",error:"\u5386\u53f2\u6ce2\u5f62\u6570\u636e\u67e5\u8be2\u5931\u8d25"});case 4:(t=e.sent)&&(r=A(c.state.chart,t,c.state.adc,c.state.geophone),c.setState({chart:r}));case 6:case"end":return e.stop()}}),e)}))),c.handleQuerySACFile=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.setState((function(e){return{select:{from:"history",dialog:(0,s.Z)((0,s.Z)({},e.select),{},{title:"\u9009\u62e9\u8981\u5bfc\u51fa\u7684\u901a\u9053",values:[["\u5782\u76f4\u901a\u9053","EHZ"],["\u6c34\u5e73\u4e1c\u897f","EHE"],["\u6c34\u5e73\u5357\u5317","EHN"]],open:!0})}}}));case 1:case"end":return e.stop()}}),e)}))),c.handleQuerySource=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={source:"show"},e.next=3,P.ZP.promise((0,H.Z)({body:t,tag:"trace"}),{loading:"\u6b63\u5728\u83b7\u53d6\u6570\u636e\u6e90...",success:"\u6210\u529f\u53d6\u5f97\u6570\u636e\u6e90",error:"\u6570\u636e\u6e90\u83b7\u53d6\u5931\u8d25"});case 3:if(r=e.sent,a=r.data,!r.error&&a){e.next=10;break}return o="\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u8f93\u5165\u540e\u91cd\u8bd5",P.ZP.error(o),e.abrupt("return",Promise.reject(o));case 10:c.setState((function(e){return{select:{from:"trace",dialog:(0,s.Z)((0,s.Z)({},e.select.dialog),{},{open:!0,title:"\u9009\u62e9\u8981\u5730\u9707\u6570\u636e\u6765\u6e90",values:a.map((function(e){return[e.name,e.value]}))})}}}));case 11:case"end":return e.stop()}}),e)}))),c.state={trace:{source:"show"},history:{start:Date.now()-6e4,end:Date.now(),format:"json",channel:"EHZ"},chart:{backgroundColor:"transparent",tickInterval:.1,tickPrecision:.2,lineWidth:1,height:400,tooltip:!0,legend:!0,zooming:!0,series:[{type:"line",name:"EHZ",color:"#5a3eba",data:[]},{type:"line",name:"EHE",color:"#128672",data:[]},{type:"line",name:"EHN",color:"#c3268a",data:[]}]},select:{from:"history",dialog:{open:!1,title:"\u9009\u62e9\u8981\u5bfc\u51fa\u7684\u901a\u9053",values:[["\u5782\u76f4\u901a\u9053","EHZ"],["\u6c34\u5e73\u4e1c\u897f","EHE"],["\u6c34\u5e73\u5357\u5317","EHN"]]}},modal:{open:!1,values:[],title:"\u9009\u62e9\u4e00\u4e2a\u4e8b\u4ef6"},geophone:{ehz:.288,ehe:.288,ehn:.288},adc:{fullscale:5,resolution:24}},c}return(0,c.Z)(r,[{key:"componentDidMount",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,H.Z)({tag:"station"});case 2:if(!(t=e.sent).data){e.next=9;break}r=L(t),a=G(t),this.setState({adc:r,geophone:a}),e.next=10;break;case 9:return e.abrupt("return");case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.chart,n=t.select,a=t.modal,o=t.history,c=n.from,i=n.dialog,u=o.start,l=o.end;return(0,k.jsxs)(Z.Z,{children:[(0,k.jsx)(h.Z,{}),(0,k.jsx)(d.Z,{}),(0,k.jsxs)(p.Z,{children:[(0,k.jsx)(f.Z,{}),(0,k.jsxs)(E.Z,{layout:"grid",children:[(0,k.jsxs)(w,{className:"h-[430px]",label:"\u5386\u53f2\u67e5\u8be2",children:[(0,k.jsx)(S,{value:u,label:"\u9009\u62e9\u8d77\u59cb\u65f6\u95f4",onChange:function(t){return e.handleTimeChange("start",t)}}),(0,k.jsx)(S,{value:l,label:"\u9009\u62e9\u7ed3\u675f\u65f6\u95f4",onChange:function(t){return e.handleTimeChange("end",t)}}),(0,k.jsx)(C,{className:"mt-6 bg-indigo-700 hover:bg-indigo-800",onClick:this.handleQueryWaveform,label:"\u8c03\u9605\u6ce2\u5f62"}),(0,k.jsx)(C,{className:"bg-green-700 hover:bg-green-800",onClick:this.handleQuerySACFile,label:"\u6570\u636e\u4e0b\u8f7d"}),(0,k.jsx)(C,{className:"bg-yellow-700 hover:bg-yellow-800",onClick:this.handleQuerySource,label:"\u4e8b\u4ef6\u53cd\u67e5"})]}),(0,k.jsx)(w,{className:"h-[430px] rounded-lg bg-pink-300",label:"\u52a0\u901f\u5ea6\u6ce2\u5f62\u56fe",children:(0,k.jsx)(N.Z,(0,s.Z)({},r))})]})]}),(0,k.jsx)(m.Z,{}),(0,k.jsx)(v.Z,{}),(0,k.jsx)(B,(0,s.Z)((0,s.Z)({},i),{},{onSelect:function(t){return e.handleSelect(c,t)}})),(0,k.jsx)(U,(0,s.Z)((0,s.Z)({},a),{},{onSelect:this.handleChooseEvent,onClose:function(){return e.setState({modal:(0,s.Z)((0,s.Z)({},a),{},{open:!1})})}})),(0,k.jsx)(P.x7,{position:"top-center"})]})}}]),r}(l.Component)}}]);