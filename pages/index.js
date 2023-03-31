import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import BoardColumn from "@/components/BoardColumn";
import {
  PlusCircleIcon,
  EllipsisHorizontalIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { LocalDataService } from "@/services/LocalDataService";
import { data } from "autoprefixer";
import { DragDropContext } from "react-beautiful-dnd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dataService = useMemo(() => new LocalDataService(), []);

  const [isOpen, toggleSidebar] = useState(false);
  const [showAddColumnForm, setShowAddColumnForm] = useState(false);
  const [projectId, setProjectId] = useState(null);
  // const [project, setProject] = useState({ name: "My Tasks", columns: [] });
  const [boardColumns, setBoardColumns] = useState([]);

  useEffect(() => {
    dataService.getBoardColumns(projectId).then((bc) => {
      setBoardColumns(bc);
    });
  }, [dataService, projectId]);

  const onNewColumnFormKeyPress = (e) => {
    if (e.keyCode === 13) {
      //Enter
      const val = e.target.value;
      finishNewColumn(val);
      e.target.value = "";
    }
  };

  const reloadColumns = () => {
    dataService.getBoardColumns(projectId).then((bc) => {
      setBoardColumns(bc);
    });
  }

  function finishNewColumn(val) {
    if (val.length === 0) {
      setShowAddColumnForm(false);
    } else {
      dataService.addColumn(val, projectId).then((t) => {
        reloadColumns();
      });

      setShowAddColumnForm(false);
    }
  }

  const getTasks = (columnId) => {
    return dataService.getTasksByColumnId(columnId);
  }

  const deleteTask = (t) => {
    dataService.deleteTask(t).then(() => {
      reloadColumns();
    });
  };

  const addOrUpdateTask = (task) => {
    dataService.addOrUpdateTask(task).then((t) => {
      reloadColumns();
    });
  };
  const deleteColumn = (c) => {
    dataService.deleteColumn(c).then(() => {
      reloadColumns();
    });
  };

  const onDragEnd = (re) => {}; 

  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}></Sidebar>

      <div className="w-screen flex flex-col min-w-0 bg-white text-gray-800 dark:bg-gray-800 dark:text-white overflow-hidden">
        <Topbar toggleSidebar={toggleSidebar}></Topbar>
        {/* Main Content */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex-1 bg-gray-50 overflow-auto">
            <main className="p-3  h-full inline-flex space-x-2 overflow-hidden ">
              {boardColumns.map((c, index) => {
                return (
                  <BoardColumn
                    key={c.name}
                    column={c}
                    getTasks={getTasks}
                    deleteTask={deleteTask}
                    dataService={dataService}
                    addOrUpdateTask={addOrUpdateTask}
                    deleteColumn={deleteColumn}
                  ></BoardColumn>
                );
              })}

              {/* New Column */}
              <div className="flex-col items-center w-80 bg-transparent rounded-md ">
                {!showAddColumnForm ? (
                  <button
                    className="pl-2 pr-4 py-1 rounded-md  text-sm font-medium  hover:bg-gray-200"
                    onClick={(e) => setShowAddColumnForm(true)}
                  >
                    + New Column
                  </button>
                ) : (
                  <div className="bg-gray-100 h-screen">
                    <input
                      autoFocus={true}
                      className="w-80 py-1 px-2 rounded-md border-2 border-blue-400"
                      placeholder="New Column"
                      onKeyDown={(e) => onNewColumnFormKeyPress(e)}
                      onBlur={(e) => finishNewColumn(e.target.value)}
                    ></input>
                  </div>
                )}
              </div>
            </main>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
