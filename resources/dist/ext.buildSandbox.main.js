(function($2) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : {default: e};
  }
  var $__default = /* @__PURE__ */ _interopDefaultLegacy($2);
  function helloFromA() {
    return "A";
  }
  function helloFromB() {
    return "B";
  }
  var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("p", [_vm._v("\n	This page contains data from " + _vm._s(_vm.helloA) + " and " + _vm._s(_vm.helloB) + "\n")]);
  };
  var staticRenderFns = [];
  function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles2, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render2) {
      options.render = render2;
      options.staticRenderFns = staticRenderFns2;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles2) {
          injectStyles2.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles2) {
      hook = shadowMode ? function() {
        injectStyles2.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
      } : injectStyles2;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const script = {
    data() {
      return {
        helloA: helloFromA(),
        helloB: helloFromB()
      };
    }
  };
  const __cssModules = {};
  var component = normalizeComponent(script, render, staticRenderFns, false, injectStyles, null, null, null);
  function injectStyles(context) {
    for (let o in __cssModules) {
      this[o] = __cssModules[o];
    }
  }
  component.options.__file = "resources/src/App.vue";
  var App = component.exports;
  const {default: Vue} = (() => {
    const mod = require("vue");
    return mod && mod.__esModule ? mod : Object.assign(Object.create(null), mod, {default: mod, [Symbol.toStringTag]: "Module"});
  })();
  $__default["default"]("#sandbox").html(`
	<div id="vueComponent"></div>

	<p>Running Vue version ${Vue.version}</p>
`);
  const appComponent = new Vue(App);
  appComponent.$mount("#vueComponent");
})($);
