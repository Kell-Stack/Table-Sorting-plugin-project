!function(n){var e={};function t(l){if(e[l])return e[l].exports;var u=e[l]={i:l,l:!1,exports:{}};return n[l].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=n,t.c=e,t.d=function(n,e,l){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var u in n)t.d(l,u,function(e){return n[e]}.bind(null,u));return l},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=145)}({145:
/*!***************************!*\
  !*** ./src/js/desktop.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(module,exports){eval("jQuery.noConflict();\n\n(function($, PLUGIN_ID) {\n  'use strict';\n\n  kintone.events.on('app.record.index.show', function() {\n    var config = kintone.plugin.app.getConfig(PLUGIN_ID);\n\n    var spaceElement = kintone.app.getHeaderSpaceElement();\n    var fragment = document.createDocumentFragment();\n    var headingEl = document.createElement('h3');\n    var messageEl = document.createElement('p');\n\n    messageEl.classList.add('plugin-space-message');\n    messageEl.textContent = config.message;\n    headingEl.classList.add('plugin-space-heading');\n    headingEl.textContent = 'Hello kintone plugin!';\n\n    fragment.appendChild(headingEl);\n    fragment.appendChild(messageEl);\n    spaceElement.appendChild(fragment);\n  });\n\n})(jQuery, kintone.$PLUGIN_ID);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZGVza3RvcC5qcz9jNjFjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILENBQUMiLCJmaWxlIjoiMTQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5Lm5vQ29uZmxpY3QoKTtcblxuKGZ1bmN0aW9uKCQsIFBMVUdJTl9JRCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAga2ludG9uZS5ldmVudHMub24oJ2FwcC5yZWNvcmQuaW5kZXguc2hvdycsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb25maWcgPSBraW50b25lLnBsdWdpbi5hcHAuZ2V0Q29uZmlnKFBMVUdJTl9JRCk7XG5cbiAgICB2YXIgc3BhY2VFbGVtZW50ID0ga2ludG9uZS5hcHAuZ2V0SGVhZGVyU3BhY2VFbGVtZW50KCk7XG4gICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIHZhciBoZWFkaW5nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHZhciBtZXNzYWdlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBtZXNzYWdlRWwuY2xhc3NMaXN0LmFkZCgncGx1Z2luLXNwYWNlLW1lc3NhZ2UnKTtcbiAgICBtZXNzYWdlRWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZTtcbiAgICBoZWFkaW5nRWwuY2xhc3NMaXN0LmFkZCgncGx1Z2luLXNwYWNlLWhlYWRpbmcnKTtcbiAgICBoZWFkaW5nRWwudGV4dENvbnRlbnQgPSAnSGVsbG8ga2ludG9uZSBwbHVnaW4hJztcblxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGhlYWRpbmdFbCk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVsKTtcbiAgICBzcGFjZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICB9KTtcblxufSkoalF1ZXJ5LCBraW50b25lLiRQTFVHSU5fSUQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///145\n")}});