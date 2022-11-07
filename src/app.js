window.onload = function onload() {
  if (typeof Vue === "undefined") {
    return;
  }
  // TODO Practice #1 Add sibling-component with template and options
  Vue.component('sibling-component', {
    template: '<p>anotherMessage: {{anotherMessage}}</p>',
    props: {
      anotherMessage: {
        type: String,
        required: true,
      }
    }
  })
  Vue.component("child-component", {
    template: '<p>message: {{message}}</p>',
    props: {
      message: {
        type: String,
        required: true,
      }
    }
  });
  new Vue({
    el: "#app",
    data: function data() {
      return {
        message: '"Hello Vue!" From Parent component',
        // TODO Practice #2 Add 'anotherMessage' in data
        anotherMessage: '"Hello Vue!" From Parent component'.split('').reverse().join('')
      }
    },
  });
};