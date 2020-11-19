!function(e){var n={};function U(t){if(n[t])return n[t].exports;var Q=n[t]={i:t,l:!1,exports:{}};return e[t].call(Q.exports,Q,Q.exports,U),Q.l=!0,Q.exports}U.m=e,U.c=n,U.d=function(e,n,t){U.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},U.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},U.t=function(e,n){if(1&n&&(e=U(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(U.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var Q in e)U.d(t,Q,function(n){return e[n]}.bind(null,Q));return t},U.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return U.d(n,"a",n),n},U.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},U.p="public",U(U.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/forms.ts\nconst formData = (form) => {\n    const inputs = form.querySelectorAll('input');\n    let values = {};\n    inputs.forEach((input) => {\n        values[input.id] = input.value;\n    });\n    return values;\n};\n\n// CONCATENATED MODULE: ./src/index.ts\n\nconst src_form = document.querySelector('form');\nsrc_form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const data = formData(src_form);\n    console.log(data);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9ybXMudHM/NTBiNiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFxQixFQUFFLEVBQUU7SUFDaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztJQUM3QyxJQUFJLE1BQU0sR0FBK0IsRUFBRTtJQUUzQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSztJQUNoQyxDQUFDLENBQUM7SUFDRixPQUFPLE1BQU07QUFDZixDQUFDOzs7QUNSaUM7QUFFbEMsTUFBTSxRQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUU7QUFFNUMsUUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3BDLENBQUMsQ0FBQyxjQUFjLEVBQUU7SUFDbEIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQUksQ0FBQztJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUNuQixDQUFDLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmb3JtRGF0YSA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXG4gIGxldCB2YWx1ZXM6IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICB2YWx1ZXNbaW5wdXQuaWRdID0gaW5wdXQudmFsdWVcbiAgfSlcbiAgcmV0dXJuIHZhbHVlc1xufVxuIiwiaW1wb3J0IHsgZm9ybURhdGEgfSBmcm9tICcuL2Zvcm1zJ1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpIVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBkYXRhID0gZm9ybURhdGEoZm9ybSlcbiAgY29uc29sZS5sb2coZGF0YSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);