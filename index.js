new Vue({
  el: "#vue-app",
  data: {
    tasks: [],
    taskInput: "",
  },
  methods: {
    addTask: function () {
      this.tasks.push({ text: this.taskInput, checked: false });
      this.taskInput = "";
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
    },
    toggleCheck: function (index) {
      this.tasks[index].checked = !this.tasks[index].checked;
      console.log(this.tasks[index]);
    },
  },
});
