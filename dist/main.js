(()=>{"use strict";var e={800:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Anton&family=Crete+Round&family=Dosis:wght@300;400&family=Inter:wght@600&family=Lato:wght@700&family=Merriweather:ital@1&family=Montserrat:wght@700&family=Poppins:wght@200;400;600&family=Quicksand:wght@700&family=Roboto:wght@700&family=Space+Mono:ital@1&display=swap);"]),o.push([e.id,"*{font-family:Merriweather,Arial,Helvetica,sans-serif;text-decoration:none;list-style:none}body{margin:0;padding:0}ul{margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:0}header{display:grid;grid-template-columns:auto auto auto;padding:.8rem}header ul{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:0}header ul a{color:#000}.logo{font-size:1.4rem;font-weight:900}h1{color:#f44}.card-grid,.dynamic-grid{display:grid;grid-template-columns:auto auto auto;gap:.4rem}.card-container{display:flex;margin-bottom:1.4rem;flex-direction:column;justify-content:space-between;align-items:center;padding:.2rem}.card-pic{text-align:center}.card-pic img{width:90%;padding:.1rem;border-radius:5px}.card-meta{padding:.2rem;align-items:center}.card-meta p{text-align:end}.card-info{display:flex;flex-direction:row;justify-content:space-between}.card-info .card-title{width:80%;font-style:italic}.card-info .like-btn{padding:0;height:1.3rem;cursor:pointer}.like-counter{text-align:end}.comment-btn,.reserve-btn{font-size:.8rem;text-align:center;font-weight:bold;border:solid .2rem #000;width:auto;background-color:#fff;box-shadow:2px 3px 1px rgba(0,0,0,.9);margin:.6rem;padding:.2rem .4rem;cursor:pointer;user-select:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none}.comment-btn:hover,.reserve-btn:hover{color:#fff;background-color:#000}footer{margin:0;text-align:center;padding:.8rem 0}footer .copyrights{padding:1.4rem 1rem;margin:0;text-align:left}footer hr{margin:0;border:solid 1px #000}",""]);const c=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,m="".concat(d," ").concat(l);i[d]=l+1;var p=n(m),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var f=a(u,r);r.byIndex=c,t.splice(c,0,{identifier:m,updater:f,references:1})}o.push(m)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=n(i[o]);t[c].references--}for(var s=r(e,a),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=()=>"addLike",t=()=>"getLikes",r=()=>"addComment",a=()=>"getComments",i=()=>"getMeal",o=()=>"getMeal2";var c=n(379),s=n.n(c),d=n(795),l=n.n(d),m=n(569),p=n.n(m),u=n(565),f=n.n(u),g=n(216),h=n.n(g),v=n(589),y=n.n(v),b=n(800),x={};x.styleTagTransform=y(),x.setAttributes=f(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=h(),s()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals,(new class{dynamicGrid=document.getElementById("dynamicGrid");AddLike=e;GetLikes=t;AddComment=r;GetComments=a;GetMeal=i;Getmeal2=o;genCard=(e,t)=>{const n=document.createElement("div");n.classList.add("card-container");const r=document.createElement("div");r.classList.add("card-pic");const a=document.createElement("img");a.src=`${t}`,r.appendChild(a),n.appendChild(r);const i=document.createElement("div");i.classList.add("card-meta");const o=document.createElement("div");o.classList.add("card-info");const c=document.createElement("div");c.classList.add("card-title"),c.innerHTML=`\n    Cumê:${e+1}\n    `;const s=document.createElement("img");s.classList.add("like-btn"),s.src="../src/icons/like.png",s.alt="Like button";const d=document.createElement("div");d.classList.add("like-counter"),d.innerHTML="\n    7 likes\n    ";const l=document.createElement("div");l.classList.add("comment-btn"),l.id=`${e}`,l.innerHTML=`\n    Comments:${e+1}\n    `;const m=document.createElement("div");m.classList.add("reserve-btn"),m.innerHTML="\n    Reservations7\n    ",o.appendChild(c),o.appendChild(s),i.appendChild(o),i.appendChild(d),i.appendChild(l),i.appendChild(m),n.appendChild(i),this.dynamicGrid.appendChild(n)};showPage=()=>{document.getElementById("cardGrid").innerHTML="",this.dynamicGrid.innerHTML="\n    <h1>Não seja um galado</h1>\n    ",this.dynamicGrid.innerHTML="";for(let e=0;e<6;e+=1){let t=`../src/images/pic${e+1}.jpg`;this.genCard(e,t)}}}).showPage()})()})();