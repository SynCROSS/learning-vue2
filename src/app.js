var loadScript = function loadScript(src) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = function () {
      return resolve(script);
    };
    script.onerror = function () {
      return reject(new Error('Script load error for '.concat(src)));
    };
    document.body.append(script);
  });
};
var _arrayLikeToArray = function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) {
    len = arr.length;
  }
  var arr2 = new Array(len);
  for (var i = 0; i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
};
var _arrayWithoutHoles = function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    return _arrayLikeToArray(arr);
  }
};
var _iterableToArray = function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  ) {
    return Array.from(iter);
  }
};
var _nonIterableSpread = function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
};
var _toConsumableArray = function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
};
var _unsupportedIterableToArray = function _unsupportedIterableToArray(
  o,
  minLen,
) {
  if (!o) {
    return;
  }
  if (typeof o === 'string') {
    return _arrayLikeToArray(o, minLen);
  }
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) {
    n = o.constructor.name;
  }
  if (n === 'Map' || n === 'Set') {
    return Array.from(n);
  }
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
    return _arrayLikeToArray(o, minLen);
  }
};
window.onload = function onload() {
  loadScript('https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js')
    .then(function () {
      return loadScript(
        'https://unpkg.com/vue-router@3.0.1/dist/vue-router.js',
      );
    })
    .then(function () {
      if (typeof Vue === 'undefined' || typeof VueRouter === 'undefined') {
        return;
      }
      var Main = {
        template: '<b>main</b>',
      };
      var Login = {
        template: '<b>login</b>',
      };
      var routes = new Map([
        [
          'main',
          {
            path: '/main',
            component: Main,
          },
        ],
        [
          'login',
          {
            path: '/login',
            component: Login,
          },
        ],
      ]);
      var router = new VueRouter({
        mode: 'history', // * History Mode Removes Hash 
        routes: _toConsumableArray(routes.values()),
      });
      new Vue({
        router: router,
      }).$mount('#app');
    })
    .catch(console.error);
};
