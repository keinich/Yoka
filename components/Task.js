import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, taskIndex, updateTask, deleteTask }) => {
  return (
    <Draggable index={taskIndex} draggableId={task.id.toString()}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="mt-1"
        >
          <a href="#" className="block p-5 rounded-md bg-white shadow">
            <div>
              <div className="flex items-center justify-between">
                <div className="px-1  py-1">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onClick={(e) =>
                      updateTask({ ...task, done: e.target.checked })
                    }
                    className="mr-2"
                  ></input>
                  <span className="text-sm font-medium text-blue-500 leading-light">
                    {task.name}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <button
                    className="w-5 h-5 rounded-md hover:text-red-400 "
                    onClick={() => deleteTask(task)}
                  >
                    <TrashIcon></TrashIcon>
                  </button>
                </div>
              </div>
              <div>b</div>
              <div>c</div>
            </div>
          </a>
        </li>
      )}
    </Draggable>
  );
};

export default Task;
