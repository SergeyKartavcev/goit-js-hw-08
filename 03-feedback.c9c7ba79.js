!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,y=Math.max,m=Math.min,b=function(){return v.Date.now()};function p(e,t,n){var r,o,u,a,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),d?p(e):a}function w(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=u}function O(){var e=b();if(w(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-l);return v?m(n,u-(e-c)):n}(e))}function S(e){return f=void 0,s&&r?p(e):(r=o=void 0,a)}function T(){var e=b(),n=w(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(v)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=h(t)||0,g(n)&&(d=!!n.leading,u=(v="maxWait"in n)?y(h(n.maxWait)||0,t):u,s="trailing"in n?!!n.trailing:s),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?a:S(b())},T}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var j="feedback-form-state",w=JSON.parse(localStorage.getItem(j)),O=w||{},S={form:document.querySelector(".feedback-form")};S.form.addEventListener("submit",(function(e){e.preventDefault();var t=!0,n=!1,r=void 0;try{for(var i,o=e.currentTarget.elements[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var u=i.value;if("submit"!==u.type&&""==u.value)return alert("Please fill in all the fields!")}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}console.log(O),e.currentTarget.reset(),localStorage.removeItem(j)})),S.form.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(O))})),500),function(e){if(w){var t=!0,n=!1,r=void 0;try{for(var i,o=Object.keys(w)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var u=i.value;w[u]&&(S.form.elements[u].value=w[u])}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}}()}();
//# sourceMappingURL=03-feedback.c9c7ba79.js.map