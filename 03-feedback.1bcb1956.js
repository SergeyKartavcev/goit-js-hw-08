!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,f=setTimeout(E,t),d?y(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function E(){var e=g();if(T(e))return j(e);f=setTimeout(E,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function j(e){return f=void 0,v&&r?y(e):(r=i=void 0,u)}function h(){var e=g(),n=T(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(E,t),y(l)}return void 0===f&&(f=setTimeout(E,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},h.flush=function(){return void 0===f?u:j(g())},h}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var O=JSON.parse(localStorage.getItem("STOREG_KEY"))||{},T={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")};T.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===T.textarea.value||""===T.input.value)return alert("Please fill in all the fields!");e.currentTarget.reset(),localStorage.removeItem("STOREG_KEY")})),T.form.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem("STOREG_KEY",JSON.stringify(O))})),500),function(){var e=JSON.parse(localStorage.getItem("STOREG_KEY"));e&&(console.log(e),e.message&&(T.textarea.value=e.message),e.email&&(T.input.value=e.email));console.log(e)}()}();
//# sourceMappingURL=03-feedback.1bcb1956.js.map
