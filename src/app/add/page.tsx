"use client";
import { arrayToMap, mapToArray } from "@/util/todoDataHelper";
import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

export default function Add() {
  const [todoValue, setTodoValue] = useState("");
  const router = useRouter();

  function pushToDoToLocalStorage(todoValue: string) {
    const todoListMap = arrayToMap(
      JSON.parse(localStorage.getItem("todoList") || "[]")
    );
    todoListMap.set(todoValue, false);
    localStorage.setItem("todoList", JSON.stringify(mapToArray(todoListMap)));
    router.push("/");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    pushToDoToLocalStorage(todoValue);
  }

  function handleParamChange(
    setTodoValue: Dispatch<SetStateAction<string>>
  ): ChangeEventHandler<HTMLInputElement> | undefined {
    return (e) => {
      setTodoValue(e.target.value);
    };
  }

  return (
    <main className="flex flex-wrap items-center justify-center p-2">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Do Laundry"
            aria-label="Full name"
            onChange={handleParamChange(setTodoValue)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </main>
  );
}
