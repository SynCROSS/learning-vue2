window.onload = function onload() {
  if (typeof Vue === "undefined") {
    return;
  }
  var eventBus = new Vue;
  Vue.component("child-component", {
    template: '<button v-on:click="logText">Log Text</button>',
    methods: {
      logText: function logText() {
        eventBus.$emit("log-by-event-bus", 100);
      }
    }
  });
  new Vue({
    el: "#app",
    created: function created() {
      eventBus.$on("log-by-event-bus", function (value) {
        console.log("received an event by event bus.\nReceived Value:", value);
      });
    }
  });
};