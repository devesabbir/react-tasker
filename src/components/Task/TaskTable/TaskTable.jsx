import TaskItem from "./TaskItem";

export default function TaskTable({
  tasks,
  onEdit,
  onDelete,
  onFavorite,
  search,
}) {
  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <thead>
        <tr>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]" />
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
            {" "}
            Title{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
            {" "}
            Description{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
            {" "}
            Tags{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
            {" "}
            Priority{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
            {" "}
            Options{" "}
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks
          ?.filter((task) =>
            task.title.toLowerCase().includes(search.toLowerCase())
          )
          ?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onFavorite={onFavorite}
            />
          ))}
      </tbody>
    </table>
  );
}
