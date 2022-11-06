window.onload = function onload() {
  if (typeof Vue === 'undefined') {
    return;
  }

  var myComponent1 = {
    template: '<p>1st Local Component: {{data1}}</p>',
    data: function data() {
      return {
        data1: 100,
      };
    },
  };

  var myComponent2 = {
    template: '<p>2nd Local Component: {{data2}}</p>',
    data: function data() {
      return {
        data2: myComponent1.data().data1, // ? Why data2 is 100?
      };
    },
  };

  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    components: {
      'my-component1': myComponent1,
      'my-component2': myComponent2,
    },
  });
};
