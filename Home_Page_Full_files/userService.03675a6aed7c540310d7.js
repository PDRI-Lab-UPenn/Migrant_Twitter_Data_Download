(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{335:function(e,r,t){"use strict";t.r(r),t.d(r,"User",(function(){return P})),t.d(r,"UserImageInfo",(function(){return S})),t.d(r,"UserService",(function(){return O})),t.d(r,"UserServiceError",(function(){return E})),t.d(r,"UserServiceErrorType",(function(){return R}));t(30),t(29),t(35),t(51),t(25),t(79),t(61),t(8),t(20),t(32),t(36),t(33),t(9),t(52),t(11),t(12),t(18),t(19),t(23);var n=t(223);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,r,t,n,o,i,s){try{var u=e[i](s),c=u.value}catch(e){return void t(e)}u.done?r(c):Promise.resolve(c).then(n,o)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var s=e.apply(r,t);function u(e){i(s,n,o,u,c,"next",e)}function c(e){i(s,n,o,u,c,"throw",e)}u(void 0)}))}}function u(e,r){return!r||"object"!==o(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function c(e){var r="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return a(e,arguments,h(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),p(n,e)})(e)}function a(e,r,t){return(a=f()?Reflect.construct:function(e,r,t){var n=[null];n.push.apply(n,r);var o=new(Function.bind.apply(e,n));return t&&p(o,t.prototype),o}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function p(e,r){return(p=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function m(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,r,t){return r&&m(e.prototype,r),t&&m(e,t),e}function d(e){return"string"==typeof(e=JSON.stringify(e))&&!!/^\{[\s\S]*\}$/.test(e)}function y(e){return e instanceof Array}function g(e){return Array.prototype.slice.call(e)}function b(){if(!(this instanceof b))return new b}b.prototype={get:function(e){for(var r=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var o=t[n];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(r))return decodeURI(o.substring(r.length,o.length))}return!1},set:function(e,r,t){if(d(e))for(var n in e)this.set(n,e[n],r,t);else if("string"==typeof e){var o=d(t)?t:{expires:t},i=void 0!==o.expires?o.expires:"",s=void 0!==o.path?";path="+o.path:";path=/",u=o.domain?";domain="+o.domain:"",c=o.secure?";secure":"";"string"==typeof i&&""!==i?i=new Date(i):"number"==typeof i&&(i=new Date(+new Date+864e5*i)),""!==i&&"toGMTString"in i&&(i=";expires="+i.toGMTString()),document.cookie=e+"="+encodeURI(r)+i+s+u+c}},remove:function(e){for(var r=0,t=(e=y(e)?e:g(arguments)).length;r<t;r++)this.set(e[r],"",-1);return e},clear:function(e){return e?this.remove(e):this.remove(function(e){var r=[],t="";for(t in e)r.push(t);return r}(this.all()))},all:function(){if(""===document.cookie)return{};for(var e=document.cookie.split("; "),r={},t=0,n=e.length;t<n;t++){var o=e[t].split("=");r[decodeURI(o[0])]=decodeURI(o[1])}return r}};var w=null,k=function(e,r,t){var n=arguments;return w||(w=b()),0===n.length?w.all():1===n.length&&null===e?w.clear():2!==n.length||r?"string"!=typeof e||r?"string"==typeof e&&r||d(e)?w.set(e,r,t):void 0:w.get(e):w.clear(e)};for(var x in b.prototype)k[x]=b.prototype[x];var R,U,S=function(){function e(r){l(this,e),this.name=r.name,this.source=r.source,this.mtime=r.mtime,this.size=r.size,this.md5=r.md5,this.crc32=r.crc32,this.sha1=r.sha1,this.format=r.format,this.rotation=r.rotation}return v(e,null,[{key:"fromResponse",value:function(r){var t,o,i,s=n.d.shared,u=n.h.shared;return r.mtime&&(t=s.parseValue(r.mtime)),r.size&&(o=u.parseValue(r.size)),r.rotation&&(i=s.parseValue(r.rotation)),new e({name:r.name,source:r.source,mtime:t,size:o,md5:r.md5,crc32:r.crc32,sha1:r.sha1,format:r.format,rotation:i})}}]),e}(),P=function(){function e(r){l(this,e),this.username=r.username,this.itemname=r.itemname,this.screenname=r.screenname,this.privs=r.privs,this.image_info=r.image_info,this.isArchiveOrgUser=this.username.endsWith("@archive.org");var t=r.itemname;this.userid=t.startsWith("@")?t.substring(1):t}return v(e,null,[{key:"fromUserResponse",value:function(r){return new e({username:r.username,itemname:r.itemname,screenname:r.screenname,privs:r.privs,image_info:S.fromResponse(r.image_info)})}}]),e}();(U=R||(R={})).userNotLoggedIn="UserService.userNotLoggedIn",U.networkError="UserService.networkError",U.decodingError="UserService.decodingError";var E=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&p(e,r)}(o,e);var r,t,n=(r=o,t=f(),function(){var e,n=h(r);if(t){var o=h(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return u(this,e)});function o(e,r){var t;return l(this,o),(t=n.call(this,r)).name=e,t.type=e,t}return o}(c(Error)),O=function(){function e(r){var t,n;l(this,e),this.userServiceEndpoint=null!==(t=null==r?void 0:r.userServiceEndpoint)&&void 0!==t?t:"https://archive.org/services/user.php?op=whoami",this.cache=null==r?void 0:r.cache,this.cacheTTL=null==r?void 0:r.cacheTTL,this.userCacheKey=null!==(n=null==r?void 0:r.userCacheKey)&&void 0!==n?n:"loggedInUserInfo"}var r,t,n,o;return v(e,[{key:"getLoggedInUser",value:(o=s(regeneratorRuntime.mark((function e(){var r,t,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==(r=k.get("logged-in-user"))){e.next=4;break}return e.abrupt("return",{error:new E(R.userNotLoggedIn)});case 4:return e.next=6,this.getPersistedUser();case 6:if(!(t=e.sent)){e.next=12;break}if(n=P.fromUserResponse(t),r!==n.username){e.next=12;break}return e.abrupt("return",{success:n});case 12:if(!this.fetchPromise){e.next=15;break}return this.fetchPromise=this.fetchPromise.then((function(e){return e})),e.abrupt("return",this.fetchPromise);case 15:return this.fetchPromise=this.fetchUser(),e.next=18,this.fetchPromise;case 18:return o=e.sent,this.fetchPromise=void 0,e.abrupt("return",o);case 21:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"fetchUser",value:(n=s(regeneratorRuntime.mark((function e(){var r,t,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.userServiceEndpoint,{credentials:"include"});case 3:r=e.sent,e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:new E(R.networkError,e.t0.message)});case 9:return e.prev=9,e.next=12,r.json();case 12:t=e.sent,e.next=18;break;case 15:return e.prev=15,e.t1=e.catch(9),e.abrupt("return",{error:new E(R.decodingError,e.t1.message)});case 18:if(t.success&&t.value){e.next=20;break}return e.abrupt("return",{error:new E(R.userNotLoggedIn,t.error)});case 20:return n=t.value,o=P.fromUserResponse(n),e.next=24,this.persistUser(n);case 24:return e.abrupt("return",{success:o});case 25:case"end":return e.stop()}}),e,this,[[0,6],[9,15]])}))),function(){return n.apply(this,arguments)})},{key:"getPersistedUser",value:(t=s(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null===(r=this.cache)||void 0===r?void 0:r.get(this.userCacheKey));case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"persistUser",value:(r=s(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=this.cache)||void 0===t?void 0:t.set({key:this.userCacheKey,value:r,ttl:this.cacheTTL});case 2:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})}]),e}()}}]);
//# sourceMappingURL=userService.03675a6aed7c540310d7.js.map