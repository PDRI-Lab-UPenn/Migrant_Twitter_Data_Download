(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{326:function(e,t,n){"use strict";n.r(t),n.d(t,"PageMetadataService",(function(){return o}));n(43),n(25),n(24);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"container",void 0),a(this,"ownerName","pageMetadataService"),this.container=t}var t,n,o;return t=e,o=[{key:"default",get:function(){return new e(document.head)}}],(n=[{key:"setTitle",value:function(e){document.title=e}},{key:"clearMetaTags",value:function(){var e,t=null==(e=this.container)?void 0:e.querySelectorAll("meta[data-owner=".concat(this.ownerName,"]"));null==t||t.forEach((function(e){return e.remove()}))}},{key:"setMetaTag",value:function(e){var t,n,r="";e.property&&(r+="[property='".concat(e.property,"']")),e.name&&(r+="[name='".concat(e.name,"']"));var a=null==(t=this.container)?void 0:t.querySelector("meta".concat(r,"[data-owner=").concat(this.ownerName,"]"));a||(a=document.createElement("meta"),e.property&&a.setAttribute("property",e.property),e.name&&a.setAttribute("name",e.name),a.dataset.owner=this.ownerName,null==(n=this.container)||n.appendChild(a)),a.setAttribute("content",e.content)}},{key:"addLink",value:function(e){var t,n=document.createElement("link");e.rel&&n.setAttribute("rel",e.rel),e.type&&n.setAttribute("type",e.type),e.href&&n.setAttribute("href",e.href),e.title&&n.setAttribute("title",e.title),n.dataset.owner=this.ownerName,null==(t=this.container)||t.appendChild(n)}},{key:"clearLinkTags",value:function(){var e,t=null==(e=this.container)?void 0:e.querySelectorAll("link[data-owner=".concat(this.ownerName,"]"));null==t||t.forEach((function(e){e.remove()}))}}])&&r(t.prototype,n),o&&r(t,o),e}()}}]);
//# sourceMappingURL=pageMetadataService.de6411cb0ee13d451dd1.js.map