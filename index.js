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
    },
  },
  computed: {
    computeTitle: function () {
      const amountOfChekedTasks = this.tasks.reduce((accum, currentValue) => {
        if (currentValue.checked) {
          return accum + 1;
        } else {
          return accum;
        }
      }, 0);

      if (amountOfChekedTasks === this.tasks.length) {
        return { greenTitle: true };
      } else if (amountOfChekedTasks >= this.tasks.length / 2) {
        return { orangeTitle: true };
      } else {
        return { redTitle: true };
      }
    },
  },
});
