import React from "react";
import Task from "./components/Task";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 0, title: "Create todo-react app", done: false },
        { id: 1, title: "Make a video about it", done: true },
        { id: 2, title: "Create simple todo app", done: false },
      ],
    };
  }

  doneTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = state;
      
    });
  };

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);

    return (
      <>
        <div className="App">
          <h1 className="top">Active tasks: {activeTasks.length}</h1>
          {[...activeTasks, ...doneTasks].map((task) => (
            <Task
              doneTask={() => this.doneTask(task.id)}
              deleteTask={() => this.deleteTask(task.id)}
              task={task}
              key={task.id}
            ></Task>
          ))}
        </div>
      </>
    );
  }
}

export default App;
