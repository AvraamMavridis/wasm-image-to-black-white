(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./docs/wasm_image_to_black_white.js":
/*!*******************************************!*\
  !*** ./docs/wasm_image_to_black_white.js ***!
  \*******************************************/
/*! exports provided: __wbg_log_b411061812fb13b5, grayscale_with_average, grayscale_with_luminocity, grayscale_with_BT601, grayscale_with_desaturation, __widl_instanceof_CanvasRenderingContext2D, __widl_f_draw_image_with_html_image_element_CanvasRenderingContext2D, __widl_f_get_image_data_CanvasRenderingContext2D, __widl_f_put_image_data_CanvasRenderingContext2D, __widl_f_create_element_Document, __widl_instanceof_HTMLCanvasElement, __widl_f_get_context_HTMLCanvasElement, __widl_f_to_data_url_with_type_HTMLCanvasElement, __widl_f_set_width_HTMLCanvasElement, __widl_f_set_height_HTMLCanvasElement, __widl_f_width_HTMLImageElement, __widl_f_height_HTMLImageElement, __widl_f_new_with_u8_clamped_array_and_sh_ImageData, __widl_f_data_ImageData, __widl_instanceof_Window, __widl_f_document_Window, __wbg_newnoargs_6a80f84471205fc8, __wbg_call_582b20dfcad7fee4, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_number_get, __wbindgen_is_null, __wbindgen_is_undefined, __wbindgen_boolean_get, __wbindgen_is_symbol, __wbindgen_string_get, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_b411061812fb13b5\", function() { return __wbg_log_b411061812fb13b5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"grayscale_with_average\", function() { return grayscale_with_average; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"grayscale_with_luminocity\", function() { return grayscale_with_luminocity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"grayscale_with_BT601\", function() { return grayscale_with_BT601; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"grayscale_with_desaturation\", function() { return grayscale_with_desaturation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_CanvasRenderingContext2D\", function() { return __widl_instanceof_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_draw_image_with_html_image_element_CanvasRenderingContext2D\", function() { return __widl_f_draw_image_with_html_image_element_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_image_data_CanvasRenderingContext2D\", function() { return __widl_f_get_image_data_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_put_image_data_CanvasRenderingContext2D\", function() { return __widl_f_put_image_data_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_element_Document\", function() { return __widl_f_create_element_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLCanvasElement\", function() { return __widl_instanceof_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_context_HTMLCanvasElement\", function() { return __widl_f_get_context_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_to_data_url_with_type_HTMLCanvasElement\", function() { return __widl_f_to_data_url_with_type_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_width_HTMLCanvasElement\", function() { return __widl_f_set_width_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_height_HTMLCanvasElement\", function() { return __widl_f_set_height_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_width_HTMLImageElement\", function() { return __widl_f_width_HTMLImageElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_height_HTMLImageElement\", function() { return __widl_f_height_HTMLImageElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_new_with_u8_clamped_array_and_sh_ImageData\", function() { return __widl_f_new_with_u8_clamped_array_and_sh_ImageData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_data_ImageData\", function() { return __widl_f_data_ImageData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_6a80f84471205fc8\", function() { return __wbg_newnoargs_6a80f84471205fc8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_582b20dfcad7fee4\", function() { return __wbg_call_582b20dfcad7fee4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_get\", function() { return __wbindgen_number_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_null\", function() { return __wbindgen_is_null; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_symbol\", function() { return __wbindgen_is_symbol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_image_to_black_white_bg */ \"./docs/wasm_image_to_black_white_bg.wasm\");\n/* tslint:disable */\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_log_b411061812fb13b5(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    console.log(varg0);\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet stack_pointer = 32;\n\nfunction addBorrowedObject(obj) {\n    if (stack_pointer == 1) throw new Error('out of js stack');\n    heap[--stack_pointer] = obj;\n    return stack_pointer;\n}\n\nlet cachedGlobalArgumentPtr = null;\nfunction globalArgumentPtr() {\n    if (cachedGlobalArgumentPtr === null) {\n        cachedGlobalArgumentPtr = _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n    }\n    return cachedGlobalArgumentPtr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n/**\n* @param {any} arg0\n* @returns {string}\n*/\nfunction grayscale_with_average(arg0) {\n    const retptr = globalArgumentPtr();\n    try {\n        _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"grayscale_with_average\"](retptr, addBorrowedObject(arg0));\n        const mem = getUint32Memory();\n        const rustptr = mem[retptr / 4];\n        const rustlen = mem[retptr / 4 + 1];\n\n        const realRet = getStringFromWasm(rustptr, rustlen).slice();\n        _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n        return realRet;\n\n\n    } finally {\n        heap[stack_pointer++] = undefined;\n\n    }\n\n}\n\n/**\n* @param {any} arg0\n* @returns {string}\n*/\nfunction grayscale_with_luminocity(arg0) {\n    const retptr = globalArgumentPtr();\n    try {\n        _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"grayscale_with_luminocity\"](retptr, addBorrowedObject(arg0));\n        const mem = getUint32Memory();\n        const rustptr = mem[retptr / 4];\n        const rustlen = mem[retptr / 4 + 1];\n\n        const realRet = getStringFromWasm(rustptr, rustlen).slice();\n        _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n        return realRet;\n\n\n    } finally {\n        heap[stack_pointer++] = undefined;\n\n    }\n\n}\n\n/**\n* @param {any} arg0\n* @returns {string}\n*/\nfunction grayscale_with_BT601(arg0) {\n    const retptr = globalArgumentPtr();\n    try {\n        _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"grayscale_with_BT601\"](retptr, addBorrowedObject(arg0));\n        const mem = getUint32Memory();\n        const rustptr = mem[retptr / 4];\n        const rustlen = mem[retptr / 4 + 1];\n\n        const realRet = getStringFromWasm(rustptr, rustlen).slice();\n        _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n        return realRet;\n\n\n    } finally {\n        heap[stack_pointer++] = undefined;\n\n    }\n\n}\n\n/**\n* @param {any} arg0\n* @returns {string}\n*/\nfunction grayscale_with_desaturation(arg0) {\n    const retptr = globalArgumentPtr();\n    try {\n        _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"grayscale_with_desaturation\"](retptr, addBorrowedObject(arg0));\n        const mem = getUint32Memory();\n        const rustptr = mem[retptr / 4];\n        const rustlen = mem[retptr / 4 + 1];\n\n        const realRet = getStringFromWasm(rustptr, rustlen).slice();\n        _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n        return realRet;\n\n\n    } finally {\n        heap[stack_pointer++] = undefined;\n\n    }\n\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction __widl_instanceof_CanvasRenderingContext2D(idx) {\n    return getObject(idx) instanceof CanvasRenderingContext2D ? 1 : 0;\n}\n\nconst __widl_f_draw_image_with_html_image_element_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.drawImage || function() {\n    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.drawImage does not exist`);\n};\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction __widl_f_draw_image_with_html_image_element_CanvasRenderingContext2D(arg0, arg1, arg2, arg3, exnptr) {\n    try {\n        __widl_f_draw_image_with_html_image_element_CanvasRenderingContext2D_target.call(getObject(arg0), getObject(arg1), arg2, arg3);\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nconst __widl_f_get_image_data_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.getImageData || function() {\n    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.getImageData does not exist`);\n};\n\nfunction __widl_f_get_image_data_CanvasRenderingContext2D(arg0, arg1, arg2, arg3, arg4, exnptr) {\n    try {\n        return addHeapObject(__widl_f_get_image_data_CanvasRenderingContext2D_target.call(getObject(arg0), arg1, arg2, arg3, arg4));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nconst __widl_f_put_image_data_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.putImageData || function() {\n    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.putImageData does not exist`);\n};\n\nfunction __widl_f_put_image_data_CanvasRenderingContext2D(arg0, arg1, arg2, arg3, exnptr) {\n    try {\n        __widl_f_put_image_data_CanvasRenderingContext2D_target.call(getObject(arg0), getObject(arg1), arg2, arg3);\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nconst __widl_f_create_element_Document_target = typeof Document === 'undefined' ? null : Document.prototype.createElement || function() {\n    throw new Error(`wasm-bindgen: Document.createElement does not exist`);\n};\n\nfunction __widl_f_create_element_Document(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        return addHeapObject(__widl_f_create_element_Document_target.call(getObject(arg0), varg1));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_HTMLCanvasElement(idx) {\n    return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nconst __widl_f_get_context_HTMLCanvasElement_target = typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype.getContext || function() {\n    throw new Error(`wasm-bindgen: HTMLCanvasElement.getContext does not exist`);\n};\n\nfunction __widl_f_get_context_HTMLCanvasElement(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n\n        const val = __widl_f_get_context_HTMLCanvasElement_target.call(getObject(arg0), varg1);\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n}\n\nconst __widl_f_to_data_url_with_type_HTMLCanvasElement_target = typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype.toDataURL || function() {\n    throw new Error(`wasm-bindgen: HTMLCanvasElement.toDataURL does not exist`);\n};\n\nfunction __widl_f_to_data_url_with_type_HTMLCanvasElement(ret, arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n\n        const retptr = passStringToWasm(__widl_f_to_data_url_with_type_HTMLCanvasElement_target.call(getObject(arg0), varg1));\n        const retlen = WASM_VECTOR_LEN;\n        const mem = getUint32Memory();\n        mem[ret / 4] = retptr;\n        mem[ret / 4 + 1] = retlen;\n\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction GetOwnOrInheritedPropertyDescriptor(obj, id) {\n    while (obj) {\n        let desc = Object.getOwnPropertyDescriptor(obj, id);\n        if (desc) return desc;\n        obj = Object.getPrototypeOf(obj);\n    }\nreturn {}\n}\n\nconst __widl_f_set_width_HTMLCanvasElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype, 'width').set || function() {\n    throw new Error(`wasm-bindgen: HTMLCanvasElement.width does not exist`);\n};\n\nfunction __widl_f_set_width_HTMLCanvasElement(arg0, arg1) {\n    __widl_f_set_width_HTMLCanvasElement_target.call(getObject(arg0), arg1);\n}\n\nconst __widl_f_set_height_HTMLCanvasElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype, 'height').set || function() {\n    throw new Error(`wasm-bindgen: HTMLCanvasElement.height does not exist`);\n};\n\nfunction __widl_f_set_height_HTMLCanvasElement(arg0, arg1) {\n    __widl_f_set_height_HTMLCanvasElement_target.call(getObject(arg0), arg1);\n}\n\nconst __widl_f_width_HTMLImageElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLImageElement === 'undefined' ? null : HTMLImageElement.prototype, 'width').get || function() {\n    throw new Error(`wasm-bindgen: HTMLImageElement.width does not exist`);\n};\n\nfunction __widl_f_width_HTMLImageElement(arg0) {\n    return __widl_f_width_HTMLImageElement_target.call(getObject(arg0));\n}\n\nconst __widl_f_height_HTMLImageElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLImageElement === 'undefined' ? null : HTMLImageElement.prototype, 'height').get || function() {\n    throw new Error(`wasm-bindgen: HTMLImageElement.height does not exist`);\n};\n\nfunction __widl_f_height_HTMLImageElement(arg0) {\n    return __widl_f_height_HTMLImageElement_target.call(getObject(arg0));\n}\n\nlet cachegetUint8ClampedMemory = null;\nfunction getUint8ClampedMemory() {\n    if (cachegetUint8ClampedMemory === null || cachegetUint8ClampedMemory.buffer !== _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8ClampedMemory = new Uint8ClampedArray(_wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8ClampedMemory;\n}\n\nfunction getClampedArrayU8FromWasm(ptr, len) {\n    return getUint8ClampedMemory().subarray(ptr / 1, ptr / 1 + len);\n}\n\nfunction __widl_f_new_with_u8_clamped_array_and_sh_ImageData(arg0, arg1, arg2, arg3, exnptr) {\n    let varg0 = getClampedArrayU8FromWasm(arg0, arg1);\n    try {\n        return addHeapObject(new ImageData(varg0, arg2, arg3));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction passArray8ToWasm(arg) {\n    const ptr = _wasm_image_to_black_white_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](arg.length * 1);\n    getUint8Memory().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nconst __widl_f_data_ImageData_target = GetOwnOrInheritedPropertyDescriptor(typeof ImageData === 'undefined' ? null : ImageData.prototype, 'data').get || function() {\n    throw new Error(`wasm-bindgen: ImageData.data does not exist`);\n};\n\nfunction __widl_f_data_ImageData(ret, arg0) {\n\n    const retptr = passArray8ToWasm(__widl_f_data_ImageData_target.call(getObject(arg0)));\n    const retlen = WASM_VECTOR_LEN;\n    const mem = getUint32Memory();\n    mem[ret / 4] = retptr;\n    mem[ret / 4 + 1] = retlen;\n\n}\n\nfunction __widl_instanceof_Window(idx) {\n    return getObject(idx) instanceof Window ? 1 : 0;\n}\n\nfunction __widl_f_document_Window(arg0) {\n\n    const val = getObject(arg0).document;\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __wbg_newnoargs_6a80f84471205fc8(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(new Function(varg0));\n}\n\nfunction __wbg_call_582b20dfcad7fee4(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).call(getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    return addHeapObject(getObject(idx));\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\nfunction __wbindgen_number_get(n, invalid) {\n    let obj = getObject(n);\n    if (typeof(obj) === 'number') return obj;\n    getUint8Memory()[invalid] = 1;\n    return 0;\n}\n\nfunction __wbindgen_is_null(idx) {\n    return getObject(idx) === null ? 1 : 0;\n}\n\nfunction __wbindgen_is_undefined(idx) {\n    return getObject(idx) === undefined ? 1 : 0;\n}\n\nfunction __wbindgen_boolean_get(i) {\n    let v = getObject(i);\n    if (typeof(v) === 'boolean') {\n        return v ? 1 : 0;\n    } else {\n        return 2;\n    }\n}\n\nfunction __wbindgen_is_symbol(i) {\n    return typeof(getObject(i)) === 'symbol' ? 1 : 0;\n}\n\nfunction __wbindgen_string_get(i, len_ptr) {\n    let obj = getObject(i);\n    if (typeof(obj) !== 'string') return 0;\n    const ptr = passStringToWasm(obj);\n    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;\n    return ptr;\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///./docs/wasm_image_to_black_white.js?");

/***/ }),

/***/ "./docs/wasm_image_to_black_white_bg.wasm":
/*!************************************************!*\
  !*** ./docs/wasm_image_to_black_white_bg.wasm ***!
  \************************************************/
/*! exports provided: memory, grayscale_with_average, grayscale_with_luminocity, grayscale_with_BT601, grayscale_with_desaturation, __wbindgen_global_argument_ptr, __wbindgen_malloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_image_to_black_white */ \"./docs/wasm_image_to_black_white.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./docs/wasm_image_to_black_white_bg.wasm?");

/***/ })

}]);