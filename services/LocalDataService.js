import { generateId } from "./IdGenerator";

export class LocalDataService {
  async getProjects() {
    const projects = localStorage.getItem("projects");
    if (projects) {
      return JSON.parse(projects);
    }
    return [];
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

  async getOrCreateProjectByName(projectName) {
    const projects = await this.getProjects();
    for (const p of projects) {
      if (p.id == id) {
        return p;
      }
    }
  }

  async addTask(name, projectId, columnId) {
    const projects = await this.getProjects();

    const newTask = {
      id: generateId(10000000),
      name: name,
    };
    for (const p of projects) {
      if (p.id == projectId) {
        for (const c of p.columns) {
          if (c.id == columnId) {
            c.tasks.push(newTask);
          }
        }
      }
    }
    localStorage.setItem("projects", JSON.stringify(projects));
    return newTask;
  }

  async addColumn(name, projectId) {
    const projects = await this.getProjects();

    const newColumn = {
      id: generateId(10000000),
      name: name,
      tasks: [],
    };
    for (const p of projects) {
      if (p.id == projectId) {
        p.columns.push(newColumn);
      }
    }
    localStorage.setItem("projects", JSON.stringify(projects));
    return newColumn;
  }

  async deleteTask(task) {
    console.log("delete task", task);
    const projects = await this.getProjects();
    for (const p of projects) {
      for (const c of p.columns) {
        let indexOfTask = -1;

        for (let i = 0; i < c.tasks.length; i++) {
          const t = c.tasks[i];
          console.log("comparing task", t);
          if (t.id == task.id) {
            indexOfTask = i;
          }
        }
        if (indexOfTask > -1) {
          c.tasks.splice(indexOfTask, 1);
        }
      }
    }
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  async deleteColumn(column) {
    const projects = await this.getProjects();
    for (const p of projects) {
      let indexOfColumn = -1;

      for (let i = 0; i < p.columns.length; i++) {
        const c = p.columns[i];
        if (c.id == column.id) {
          indexOfColumn = i;
        }
      }
      if (indexOfColumn > -1) {
        p.columns.splice(indexOfColumn, 1);
      }
    }
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}
