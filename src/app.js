import Vue from 'vue';

// TODO Practice #1 - Add Global Component 'todo-footer'
Vue.component('todo-footer', {
  template: '<p>This is global child component</p>',
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  data() {
    return {
      message: 'This is a parent component',
    };
  },
  // TODO Practice #2 - Add Local Component 'todo-list'
  components: {
    'todo-list': {
      template: '<p>This is another local child component</p>',
    },
  },
});
