(this.webpackJsonptensorflow=this.webpackJsonptensorflow||[]).push([[0],{260:function(e,t,n){},266:function(e,t){},267:function(e,t){},275:function(e,t){},278:function(e,t){},279:function(e,t){},280:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var r=n(67),c=n(57),i=n.n(c),a=n(234),u=n.n(a),o=(n(260),n(4)),s=n.n(o),f=n(11),l=n(6),d=(n(281),n(254)),v=n(193);function b(e,t,n,r,c){e.beginPath(),e.arc(t*r,n*r,3,0,2*Math.PI),e.fillText(c,t,n)}function j(e,t,n,r,c,i){var a=c.current.getContext("2d"),u=h(e.keypoints,i);c.current.width=n,c.current.height=r,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;n.font="16px Arial",n.textAlign="center";for(var c=0;c<e.length;c++){var i=e[c];if(!(i.score<t)){var a=i.position,u=a.y;b(n,a.x,u,r,i.emoticon)}}}(u,.9,a,1)}var h=function(e,t){return e.reduce((function(e,n){return Object.keys(t).includes(n.part)&&e.push(Object(v.a)(Object(v.a)({},n),{},{emoticon:t[n.part]})),e}),[])};n(280);function p(e){var t=e.videoRef,n=function(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)(),u=Object(l.a)(a,2),o=u[0],s=u[1],f=Object(c.useState)("pending"),d=Object(l.a)(f,2),v=d[0],b=d[1];return Object(c.useEffect)((function(){var t=!1;return b("pending"),navigator.mediaDevices.getUserMedia(e).then((function(e){t||(b("resolved"),i(e))}),(function(e){t||(b("error"),s(e))})),function(){t=!0}}),[e]),{error:o,status:v,stream:r}}(e.constraints),i=n.error,a=n.status,u=n.stream;return Object(c.useEffect)((function(){if("resolved"===a&&u){var e=t.current;e.srcObject=u,e.setAttribute("playsinline",!0),e.setAttribute("autoplay",!0),e.play()}}),[u]),"pending"===a?Object(r.jsx)("p",{children:"Loading..."}):"error"===a?Object(r.jsx)("p",{children:i.message}):Object(r.jsx)("video",{ref:t})}p.defaultProps={constraints:null};var g=p,O={width:640,height:480},x={nose:"\u274c",leftEye:"\ud83c\udf00",rightEye:"\ud83c\udf00",leftEar:"\u26a0\ufe0f",rightEar:"\u26a0\ufe0f"};var m=function(){var e=Object(c.useState)("user"),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(c.useRef)(null),u=Object(c.useRef)(null),o=Object(c.useCallback)((function(){var e;(e=u.current).getContext("2d").clearRect(0,0,e.width,e.height),i("environment"===n?"user":"environment")}),[n]),v=function(){var e=Object(f.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===a.current||4!==a.current.readyState){e.next=10;break}return n=a.current,r=a.current.videoWidth,c=a.current.videoHeight,a.current.width=r,a.current.height=c,e.next=8,t.estimateSinglePose(n);case 8:j(e.sent,0,r,c,u,x);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return function(){var e=Object(f.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a({inputResolution:O,scale:1});case 2:t=e.sent,setInterval((function(){v(t)}),100);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(g,{videoRef:a,constraints:{video:{facingMode:n}}}),Object(r.jsx)("canvas",{ref:u}),Object(r.jsx)("button",{onClick:o,children:"Flip cameras"})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,283)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};u.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),w()}},[[282,1,2]]]);
//# sourceMappingURL=main.ca4af295.chunk.js.map