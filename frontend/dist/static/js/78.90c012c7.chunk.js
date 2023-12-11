"use strict";(self.webpackChunkobserver=self.webpackChunkobserver||[]).push([[78],{5664:function(e,t){t.Z=function(e,t){for(var n=[],a=0;a<e.length;a++)a?n.push((e[a]-e[a-1])/t):n.push(0);return n}},3148:function(e,t,n){var a=n(7762);t.Z=function(e,t){var n,r=[],o=(0,a.Z)(e);try{for(o.s();!(n=o.n()).done;){var s=n.value;r.push(s/t)}}catch(i){o.e(i)}finally{o.f()}return r}},8715:function(e,t,n){var a=n(7762);t.Z=function(e,t,n){var r,o=Math.pow(2,t-1),s=[],i=(0,a.Z)(e);try{for(i.s();!(r=i.n()).done;){var c=r.value;s.push(n/o*c)}}catch(l){i.e(l)}finally{i.f()}return s}},9350:function(e,t){t.Z=function(e){var t=new Date(e),n=t.getFullYear(),a=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getDate().toString().padStart(2,"0"),o=t.getHours().toString().padStart(2,"0"),s=t.getMinutes().toString().padStart(2,"0"),i=t.getSeconds().toString().padStart(2,"0");return"".concat(n,"-").concat(a,"-").concat(r," ").concat(o,":").concat(s,":").concat(i)}},1078:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var a=n(1413),r=n(4165),o=n(5861),s=n(5671),i=n(3144),c=n(136),l=n(9388),u=n(7313),h=n(3670),p=n(8669),d=n(501),v=n(5097),f=n(4656),g=n(284),b=n(318),Z=n(19),w=n(5608),k=n(1109),m=n(3676),x=n(2468),y=function(e){var t=e.data.adc;return{resolution:t.resolution,fullscale:t.fullscale}},S=function(e){var t=e.data.geophone;return{ehz:t.ehz,ehe:t.ehe,ehn:t.ehn}},W=n(1677),C=n(281),j=n(1061),z=function(e){var t=e.tag,n=e.onOpen,a=e.onData,r=e.onClose,o=e.onError;try{var s;if("ws"!==(null===(s=W.Z.find((function(e){return e.tag===t})))||void 0===s?void 0:s.type))throw new Error("non-websocket protocol is not supported");var i=(0,C.Z)(t),c="https:"===window.location.protocol?"wss:":"ws:",l=new WebSocket("".concat(c).concat((0,j.Z)()).concat(i));return l.onmessage=a,l.onopen=n||function(){},l.onclose=r||function(){},l.onerror=o||function(){},l}catch(u){return void(o&&o(new Event("error occurred")))}},D=n(6059),M=n(9350),E=function(e,t,n){var a=e||{ts:-1,ehz:0,ehe:0,ehn:0},r=a.ts,o=a.ehz,s=a.ehe,i=a.ehn,c=(1e3*((o.length+s.length+i.length)/3)/(r-(t||0))).toFixed(2);return-1===r&&o*i*s===0?{type:"error",label:{id:"views.realtime.banner.error.label"},text:{id:"views.realtime.banner.error.text"}}:{type:"success",label:{id:"views.realtime.banner.success.label",format:{sampleRate:c}},text:{id:"views.realtime.banner.success.text",format:{time:(0,M.Z)(r),scale:"".concat(null===n||void 0===n?void 0:n.value," - ").concat(null===n||void 0===n?void 0:n.name)||"Unknown"}}}},O=n(7762),T=n(3148),_=n(3651),F=n(8715),H=n(7912),P=n(5664),A=n(5827),G=function(e,t,n,a,r,o,s){var i,c=t.ts,l=(0,O.Z)(e);try{var u=function(){for(var l,u,h=i.value,p=t.ehz,d=t.ehe,v=t.ehn,f=(p.length+d.length+v.length)/3,g=0!==n?c-n:1e3,b=g/f,Z=t[h.tag],w=(0,F.Z)(Z,r.resolution,r.fullscale),k=(0,T.Z)(w,o[h.tag]),m=(0,P.Z)(k,b/g),x=null===(l=e.find((function(e){return e.tag===h.tag})))||void 0===l||null===(u=l.chart.series)||void 0===u?void 0:u.data,y=[],S=0;S<Z.length;S++)y.push([c-(f-S)*b,Z[S]]);var W=(0,_.Z)(x,y,a*f);(0,H.Z)(e,"[tag:".concat(h.tag,"]>chart>series>data"),W);var C=k.reduce((function(e,t){var n=Math.abs(e),a=Math.abs(t);return Math.max(n,a)}),0),j=m.reduce((function(e,t){var n=Math.abs(e),a=Math.abs(t);return Math.max(n,a)}),0),z=A.Z.app_settings.scales.find((function(e){return e.property().value===s.value})),D=null===z||void 0===z?void 0:z.intensity(C,j);(0,H.Z)(e,"[tag:".concat(h.tag,"]>area>text"),{id:"views.realtime.areas.".concat(h.tag,".text"),format:{pga:j.toFixed(5),pgv:C.toFixed(5),intensity:"".concat(s.value," ").concat(D)}})};for(l.s();!(i=l.n()).done;)u()}catch(h){l.e(h)}finally{l.f()}return e},N=n(6135),U=n(7703),V=n(8146),I=n(8780),J=n(5590),R=n(6417),Y=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(e){var a;return(0,s.Z)(this,n),(a=t.call(this,e)).prevTs=void 0,a.websocket=void 0,a.handleWebsocketOpen=function(){setTimeout((function(){var e=a.props.t;D.ZP.success(e("views.realtime.toasts.websocket_connected"))}),500)},a.handleWebsocketClose=function(){if(a.websocket&&a.websocket instanceof WebSocket){var e=E();a.setState({banner:e}),a.websocket=z({tag:"socket",onData:a.handleWebsocketData,onOpen:a.handleWebsocketOpen,onClose:a.handleWebsocketClose})}},a.handleWebsocketData=function(e){var t=JSON.parse(e.data),n=a.state,r=n.adc,o=n.geophone,s=n.scale,i=E(t,a.prevTs,s),c=a.props.retention.retention,l=G(a.state.areas,t,a.prevTs,c,r,o,s);a.prevTs=t.ts,a.setState({banner:i,areas:l})},a.state={banner:{type:"warning",label:{id:"views.realtime.banner.warning.label"},text:{id:"views.realtime.banner.warning.text"}},areas:[{tag:"ehz",area:{label:{id:"views.realtime.areas.ehz.label"},text:{id:"views.realtime.areas.ehz.text",format:{pga:"0.00000",pgv:"0.00000",intensity:"-"}}},chart:{backgroundColor:"#d97706",lineWidth:1,height:300,series:{name:"EHZ",type:"line",color:"#f1f5f9",data:[]}}},{tag:"ehe",area:{label:{id:"views.realtime.areas.ehe.label"},text:{id:"views.realtime.areas.ehe.text",format:{pga:"0.00000",pgv:"0.00000",intensity:"-"}}},chart:{backgroundColor:"#10b981",lineWidth:1,height:300,series:{name:"EHE",type:"line",color:"#f1f5f9",data:[]}}},{tag:"ehn",area:{label:{id:"views.realtime.areas.ehn.label"},text:{id:"views.realtime.areas.ehn.text",format:{pga:"0.00000",pgv:"0.00000",intensity:"-"}}},chart:{backgroundColor:"#0ea5e9",lineWidth:1,height:300,series:{name:"EHN",type:"line",color:"#f1f5f9",data:[]}}}],geophone:{ehz:1,ehe:1,ehn:1},adc:{fullscale:1,resolution:1},scale:A.m.property()},a.websocket=null,a.prevTs=0,a}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,n,a,o,s,i,c,l,u,h,p,d,v,f,g,b;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props.adc.adc,a=n.resolution,o=this.props.geophone.geophone,i=(s=o).ehz,c=s.ehe,l=s.ehn,u=this.props.scale.scale,-1!==a&&i*c*l!==0){e.next=20;break}return e.next=8,(0,x.Z)({tag:"station"});case 8:if(!(h=e.sent).data){e.next=17;break}o=S(h),n=y(h),p=this.props,d=p.updateADC,(v=p.updateGeophone)&&v(o),d&&d(n),e.next=20;break;case 17:return f=this.props.t,D.ZP.error(f("views.realtime.toasts.fetch_metadata_error")),e.abrupt("return");case 20:g=A.Z.app_settings.scales,b=(null===(t=g.find((function(e){return e.property().value===u})))||void 0===t?void 0:t.property())||A.m.property(),this.setState({adc:n,geophone:o,scale:b}),this.websocket=z({tag:"socket",onData:this.handleWebsocketData,onOpen:this.handleWebsocketOpen,onClose:this.handleWebsocketClose});case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e;this.websocket instanceof WebSocket&&(null===(e=this.websocket)||void 0===e||e.close(),this.websocket={})}},{key:"render",value:function(){var e=this.state,t=e.areas,n=e.banner;return(0,R.jsxs)(f.Z,{children:[(0,R.jsx)(h.Z,{}),(0,R.jsx)(p.Z,{}),(0,R.jsxs)(d.Z,{children:[(0,R.jsx)(v.Z,{}),(0,R.jsx)(b.Z,(0,a.Z)({},n)),(0,R.jsx)(k.Z,{layout:"none",children:t.map((function(e,t){var n=e.area,r=e.chart;return(0,R.jsx)(w.Z,(0,a.Z)((0,a.Z)({},n),{},{children:(0,R.jsx)(m.Z,(0,a.Z)((0,a.Z)({},r),{},{tooltip:!0,zooming:!0,animation:!1,tickPrecision:1,tickInterval:10}))}),t)}))})]}),(0,R.jsx)(g.Z,{}),(0,R.jsx)(Z.Z,{}),(0,R.jsx)(D.x7,{position:"top-center"})]})}}]),n}(u.Component),$=(0,N.$j)(I.Z,{updateGeophone:V.V,updateADC:U.V})((0,J.Zh)()(Y))}}]);