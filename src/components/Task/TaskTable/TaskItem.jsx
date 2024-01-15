import { FaStar } from "react-icons/fa";

export default function TaskItem({ task, onEdit, onDelete, onFavorite }) {
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <button className="cursor-pointer" onClick={() => onFavorite(task?.id)}>
          {task?.isFavourite ? (
            <FaStar color="yellow" />
          ) : (
            <FaStar color="gray" />
          )}
        </button>
      </td>
      <td>{task?.title}</td>
      <td>
        <div>{task?.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task?.tags?.map((tag, index) => (
            <li key={tag}>
              <span
                className={`inline-block h-5 whitespace-nowrap rounded-[45px] ${
                  index % 2 ? "bg-[#00D991A1]" : "bg-[#FE1A1AB5]"
                } px-2.5 text-sm capitalize text-[#F4F5F6]`}
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{task?.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button onClick={() => onDelete(task.id)} className="text-red-500">
            Delete
          </button>
          <button onClick={() => onEdit(task)} className="text-blue-500">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
