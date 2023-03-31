import React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  PlusCircleIcon,
  EllipsisHorizontalIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const BoardColumn = ({
  column,
  getTasks,
  deleteTask,
  addOrUpdateTask,
  deleteColumn,
}) => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [showTaskContextMenu, setShowTaskContextMenu] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(column.id).then((ts) => setTasks(ts));
  }, [column, getTasks]);

  const onTextAreaKeyPress = (e) => {
    if (e.keyCode === 13) {
      //Enter
      const val = e.target.value;
      createTask(val);
      e.target.value = "";
    }
  };

  const createTask = (taskName) => {
    if (taskName.length === 0) {
      setShowAddTaskForm(false);
    } else {
      addOrUpdateTask({ name: taskName, boardColumnId: column.id, done: false });

      setShowAddTaskForm(false);
    }
  };

  return (
    <Droppable droppableId={column.name}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex flex-col w-80 bg-transparent rounded-md"
        >
          <div className="flex justify-between">
            <h3 className="px-3  py-1 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
              {column.name}
            </h3>
            <div className="relative">
              <button
                className="mr-3 my-1 hover:bg-gray-100 rounder-md"
                onClick={() => setShowTaskContextMenu((p) => !p)}
              >
                <EllipsisHorizontalIcon className="w-5 h-5 "></EllipsisHorizontalIcon>
              </button>
              {showTaskContextMenu && (
                <button
                  id="test123"
                  className="absolute right-2 top-6 w-40 rounded-md bg-white shadow-lg border-2"
                  autoFocus={true}
                  onBlur={(e) => {
                    {
                      setShowTaskContextMenu(false);
                    }
                  }}
                >
                  <div className="flex justify-start items-center px-2 py-1 hover:bg-gray-200">
                    <TrashIcon className="w-4 h-4 mr-2"></TrashIcon>
                    <div
                      className="block"
                      onClick={() => {
                        console.log("deleting column", column);
                        deleteColumn(column);
                      }}
                    >
                      Delete column
                    </div>
                  </div>
                  <div className="flex justify-start items-center px-2 py-1 hover:bg-gray-200">
                    <TrashIcon className="w-4 h-4 mr-2"></TrashIcon>
                    <div className="block ">Edit column</div>
                  </div>
                </button>
              )}
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto">
            <ul className="pt-1 pb-3 px-3">
              {tasks.map((t, taskIndex) => {
                return (
                  <Task
                    task={t}
                    taskIndex={taskIndex}
                    deleteTask={deleteTask}
                    updateTask={addOrUpdateTask}
                    key={t.name}
                  ></Task>
                );
              })}
            </ul>
          </div>
          {showAddTaskForm ? (
            <div className="p-3">
              <textarea
                className="border-gray-300 rounded focus:ring-purple-400 w-full p-2"
                rows={3}
                placeholder="New Task"
                data-id={column}
                autoFocus={true}
                onKeyDown={(e) => onTextAreaKeyPress(e)}
                onBlur={(e) => createTask(e.target.value)}
              />
            </div>
          ) : (
            <button
              className="flex justify-center items-center my-3 space-x-2 text-lg"
              onClick={() => {
                setShowAddTaskForm(true);
              }}
            >
              <span>Add task</span>
              <PlusCircleIcon className="w-5 h-5 text-gray-500" />
            </button>
          )}
        </div>
      )}
    </Droppable>
  );
};

export default BoardColumn;
