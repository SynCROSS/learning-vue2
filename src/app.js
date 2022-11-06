window.onload = function onload() {
  if (typeof Vue === 'undefined') {
    return;
  }
  Vue.component('child-component', {
    props: {
      message: {
        type: [String, Number],
        required: true,
      }
    },
    template: '<p>{{message}}</p>',
  });
  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    data: function data() {
      return {
        message: '"Hello Vue!" From Parent component'
      }
    }
  });
};
