(this.webpackJsonptensorflow=this.webpackJsonptensorflow||[]).push([[0],{260:function(e,t,n){},266:function(e,t){},267:function(e,t){},275:function(e,t){},278:function(e,t){},279:function(e,t){},280:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var r=n(55),c=n(77),i=n.n(c),a=n(234),u=n.n(a),o=(n(260),n(4)),s=n.n(o),f=n(11),l=(n(281),n(254)),d=n(193);n(280);var v=n(6);var h=function(e){var t=e.videoRef,n=Object(c.useState)([]),i=Object(v.a)(n,2),a=i[0],u=i[1],o=Object(c.useState)(""),s=Object(v.a)(o,2),f=s[0],l=s[1];return Object(c.useEffect)((function(){var e;navigator.mediaDevices.enumerateDevices().then((function(e){return e.filter((function(e){return"videoinput"===e.kind}))})).then((function(e){return u(e)})).catch((function(e){console.log(e)})),navigator.mediaDevices.getUserMedia((e=f,{audio:!1,video:!e||{deviceId:{exact:e}}})).then((function(e){var n=t.current;n.srcObject=e,n.play()}))}),[t,f]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("form",{children:a.length&&Object(r.jsx)("select",{onChange:function(e){l(e.target.value)},children:a.map((function(e){return Object(r.jsx)("option",{value:e.deviceId,children:e.label},e.deviceId)}))})}),Object(r.jsx)("video",{ref:t})]})},j={nose:"\ud83d\udc40",leftEye:"\ud83d\udca9",rightEye:"\ud83d\udca9"},b=function(e,t,n,r,c){var i,a,u=c.current.getContext("2d"),o=(i=e.keypoints,a=j,i.reduce((function(e,t){return Object.keys(a).includes(t.part)&&e.push(Object(d.a)(Object(d.a)({},t),{},{emoticon:a[t.part]})),e}),[]));c.current.width=n,c.current.height=r,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;n.font="16px Arial",n.textAlign="center";for(var c=0;c<e.length;c++){var i=e[c];if(!(i.score<t)){var a=i.position,u=a.y,o=a.x;n.beginPath(),n.arc(o*r,u*r,3,0,2*Math.PI),n.fillText(i.emoticon,o,u)}}}(o,.9,u,1)};var p=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=function(){var n=Object(f.a)(s.a.mark((function n(r){var c,i,a,u;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===e.current||4!==e.current.readyState){n.next=10;break}return c=e.current,i=e.current.videoWidth,a=e.current.videoHeight,e.current.width=i,e.current.height=a,n.next=8,r.estimateSinglePose(c);case 8:u=n.sent,b(u,0,i,a,t);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return function(){var e=Object(f.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a({inputResolution:{width:640,height:480},scale:.8});case 2:t=e.sent,setInterval((function(){n(t)}),5e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(h,{videoRef:e}),Object(r.jsx)("canvas",{ref:t})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,283)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};u.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),g()}},[[282,1,2]]]);
//# sourceMappingURL=main.d9cb231e.chunk.js.map