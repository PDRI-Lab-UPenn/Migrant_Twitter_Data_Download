(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{340:function(e,r,t){"use strict";t.r(r),t.d(r,"ArchiveItSearchHandler",(function(){return i}));t(24);function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var i=function(){function e(r){var t=r.baseCollectionUrl,n=r.basePartnerUrl,i=r.archiveItId,c=void 0===i?"":i,o=r.searchType,s=void 0===o?"collection":o;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"baseCollectionUrl",void 0),a(this,"basePartnerUrl",void 0),a(this,"archiveItId",void 0),a(this,"searchType",void 0),this.baseCollectionUrl=t,this.basePartnerUrl=n,this.archiveItId=c,this.searchType=s}var r,t,i;return r=e,(t=[{key:"baseUrl",get:function(){return"partner"===this.searchType?this.basePartnerUrl:this.baseCollectionUrl}},{key:"setArchiveItId",value:function(e){this.archiveItId=e}},{key:"setSearchType",value:function(e){this.searchType=e}},{key:"getSearchUrl",value:function(e){return"".concat(this.baseUrl).concat(this.archiveItId).concat(e?"?q=".concat(e):"")}},{key:"performSearch",value:function(e){var r=this.getSearchUrl(e);window.location.href=r}}])&&n(r.prototype,t),i&&n(r,i),e}()}}]);
//# sourceMappingURL=archiveItSearchHandler.2147a3e34bec984ff8ea.js.map