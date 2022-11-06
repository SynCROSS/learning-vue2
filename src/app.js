window.onload = function onload() {
  if (typeof Vue === 'undefined') {
    return;
  }
  Vue.component('child-component', {
    template: '<button v-on:click="$emit(\'log-text\')">Log Text</button>',
  });
  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    methods: {
      logText: function logText() {
        console.log('Received An Event');
      }
    }
  });
};
