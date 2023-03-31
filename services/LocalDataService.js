import { generateId } from "./IdGenerator";

export class LocalDataService {
  // Projects
  async getProjects() {
    const projects = localStorage.getItem("projects");
    if (projects) {
      return JSON.parse(projects);
    }
    return [];
  }

  saveProjects(projects) {
    localStorage.setItem("projects", projects);
  }

  async getProject(id) {
    const projects = await this.getProjects();
    for (const p of projects) {
      if (p.id == id) {
        return p;
      }
    }
    return { id: id, name: "def", columns: [] };
  }

  // Columns

  async getBoardColumns() {
    const columns = localStorage.getItem("boardColumns");
    if (columns) {
      return JSON.parse(columns);
    }
    return [];
  }

  saveBoardColumns(columns) {
    localStorage.setItem("boardColumns", JSON.stringify(columns));
  }

  async getBoardColumns(projectId) {
    let columns = localStorage.getItem("boardColumns");
    if (!columns) {
      return [];
    }
    columns = JSON.parse(columns);
    columns = columns.filter((c) => c.projectId == projectId);
    return columns;
  }

  async addColumn(name, projectId) {
    const columns = await this.getBoardColumns();

    const newColumn = {
      id: generateId(10000000),
      name: name,
      projectId: projectId,
      tasks: [],
    };
    columns.push(newColumn);

    this.saveBoardColumns(columns);
    return newColumn;
  }

  async deleteColumn(column) {
    // delete dependent tasks
    const tasks = await this.getTasksByColumnId(column.id);
    for (const task of tasks) {
      await this.deleteTask(task);
    }

    let columns = await this.getBoardColumns();

    let indexOfColumn = -1;

    for (let i = 0; i < columns.length; i++) {
      const c = columns[i];
      if (c.id == column.id) {
        indexOfColumn = i;
      }
    }
    console.log("deleting column indexOfColumn", indexOfColumn);
    if (indexOfColumn > -1) {
      columns.splice(indexOfColumn, 1);
    }

    this.saveBoardColumns(columns);
  }

  // Tasks

  async getTasks() {
    console.log("old Tasks");
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      return JSON.parse(tasks);
    }
    return [];
  }

  async getTasksByColumnId(columnId) {
    let tasks = localStorage.getItem("tasks");
    console.log("getting tasks", columnId);
    console.log("getting tasks", tasks);
    if (!tasks) {
      return [];
    }
    tasks = JSON.parse(tasks);
    tasks = tasks.filter((t) => t.boardColumnId == columnId);
    console.log("getting tasks final", tasks);
    return tasks;
  }

  saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  async addOrUpdateTask(task) {
    console.log("calling getTasks");
    const tasks = await this.getTasks();
    let existingTask = tasks.find((t) => t.id == task.id);
    if (!existingTask) {
      task.id = generateId(10000000);
      tasks.push(task);
    } else {
      existingTask.boardColumnId = task.boardColumnId;
      existingTask.done = task.done;
      existingTask.name = task.name;      
    }
    this.saveTasks(tasks);
    return task;
  }

  async deleteTask(task) {
    const tasks = await this.getTasks();

    let indexOfTask = -1;
    for (let i = 0; i < tasks.length; i++) {
      const t = tasks[i];
      if (t.id == task.id) {
        indexOfTask = i;
      }
    }
    if (indexOfTask > -1) {
      tasks.splice(indexOfTask, 1);
    }

    this.saveTasks(tasks);
  }
}
