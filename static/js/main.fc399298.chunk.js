(this["webpackJsonpnasa-apod"]=this["webpackJsonpnasa-apod"]||[]).push([[0],{19:function(e,a,t){e.exports=t(32)},24:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(15),r=t.n(c),l=(t(24),t(7)),i=t(1);function s(){return o.a.createElement("div",{className:"home"},o.a.createElement(l.b,{className:"home-link animate__animated animate__rubberBand",to:"/nasaphoto"},"Nasa Astronomy Photo Of The Day"))}var m=t(12),u=t.n(m),p=t(17),d=t(18);function h(){return o.a.createElement("div",{className:"navbar"},o.a.createElement("ul",null,o.a.createElement(l.b,{className:"link",to:"/",exact:!0},"Houston get me home")))}var f="P0oVAMyeXsEo0ChZKKw5MYl66NKzkhcf7UKvEom6";function E(){var e=Object(n.useState)(null),a=Object(d.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(f));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),t?o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null),o.a.createElement("div",{className:"nasa-photo  "},"image"===t.media_type?o.a.createElement("img",{src:t.url,alt:t.title,className:"photo animate__animated animate__bounceInLeft"}):o.a.createElement("iframe",{title:"space-video",src:t.url,frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:"photo animate__animated animate__bounceInLeft"}),o.a.createElement("div",{className:"animate__animated animate__bounceInRight"},o.a.createElement("h1",null,t.title),o.a.createElement("p",{className:"date"},t.date),o.a.createElement("p",{className:"explanation"},t.explanation)))):o.a.createElement("div",null)}t(31);var v=function(){return o.a.createElement(l.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(i.a,{component:s,path:"/",exact:!0}),o.a.createElement(i.a,{component:E,path:"/nasaphoto"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.fc399298.chunk.js.map