import { useState } from "react";
import TaskHeader from "./../TaskHeader/TaskHeader";
import SearchTask from "./../SearchTask/SearchTask";
import TaskTable from "./../TaskTable/TaskTable";
import AddTaskModal from "./../AddTaskModal/AddTaskModal";
import NoTaskFound from "../NoTaskFound/NoTaskFound";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavourite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (newTask, editMode) => {
    if (editMode) {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
      setShowAddModal(false);
      setTaskToUpdate(null);
    } else {
      setTasks((prev) => [...prev, newTask]);
      setShowAddModal(false);
    }
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFavorite = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isFavourite: !task.isFavourite,
          };
        }
        return task;
      })
    );
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          taskToUpdate={taskToUpdate}
          onCancelClick={() => (setShowAddModal(false), setTaskToUpdate(null))}
          onSaveTask={handleSubmit}
        />
      )}
      <div className="container">
        <SearchTask onSearch={handleSearch} />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskHeader
            onDeleteTaskAll={handleDeleteAllTask}
            onAddClick={() => setShowAddModal(true)}
          />

          <div className="overflow-auto">
            {tasks.length === 0 ? (
              <NoTaskFound />
            ) : (
              <TaskTable
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onFavorite={handleFavorite}
                tasks={tasks}
                search={searchText}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
