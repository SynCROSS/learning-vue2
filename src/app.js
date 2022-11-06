window.onload = function onload() {
    Vue.component("todo-footer", {
        template: "<p>This is global child component</p>"
    });
    new Vue({
        el: "#app",
        data: function data() {
            return {
                message: "This is a parent component"
            };
        },
        components: {
            "todo-list": {
                template: "<p>This is another local child component</p>"
            }
        }
    });
};
