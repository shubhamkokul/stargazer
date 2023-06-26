"use client";
import { Todo } from "@/models/Todo";
import { arrayToMap, mapToArray } from "@/util/todoDataHelper";
import { useRouter } from "next/navigation";

export default function Home() {
  const todoList = JSON.parse(window.localStorage.getItem("todoList") || "[]");
  const router = useRouter();

  function updateTodoInLocalStorage(todoValue: string) {
    const todoListMap = arrayToMap(
      JSON.parse(localStorage.getItem("todoList") || "[]")
    );
    todoListMap.set(todoValue, !todoListMap.get(todoValue));
    localStorage.setItem("todoList", JSON.stringify(mapToArray(todoListMap)));
  }

  function routeToAdd() {
    router.push("/add");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-3 flex flex-col gap-2">
        {todoList.map((data: Todo) => (
          <label key={data.name}>
            <input
              type="checkbox"
              className="peer"
              defaultChecked={data.done}
              onClick={(e) => updateTodoInLocalStorage(data.name)}
            />
            <span
              key={data.name}
              className="ml-1 peer-checked:line-through peer-checked:text-gray-400 transition-all"
            >
              {data.name}
            </span>
          </label>
        ))}
      </div>
      <div className="flex min-h-screen flex-col items-center justify-right p-24">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => routeToAdd()}
        >
          Add Todo
        </button>
      </div>
    </main>
  );
}
