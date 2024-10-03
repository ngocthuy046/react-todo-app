import React from "react";
const Header = () => {
    return (
        <header className="flex flex-col px-6 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
                <div className="flex gap-2 items-center self-stretch my-auto text-lg font-semibold text-gray-800">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6a2da0ed470c0d685115f59a09380b651780ed1c1e2895db906bf53a1d4f9e?apiKey=7a3c0c6db776404c888c5b6f6be62ebf&"
                        alt="User avatar"
                        className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-square w-[42px]"
                    />
                    <div className="self-stretch my-auto">John Holland</div>
                </div>
                <button
                    className="flex items-center justify-center self-stretch p-2 my-auto w-10 h-10 bg-gray-800 rounded-full"
                    aria-label="Notifications"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/afe2cbf71a0db6c57345383707991726983b9709c8f59f27ed25cee221643e12?apiKey=7a3c0c6db776404c888c5b6f6be62ebf&"
                        alt=""
                        className="object-contain w-6 aspect-square"
                    />
                </button>
            </div>
            <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                <h1 className="text-2xl font-extrabold text-gray-900 max-md:max-w-full">
                    Welcome,
                </h1>
                <p className="flex-1 mt-2 text-base font-semibold text-gray-800 max-md:max-w-full">
                    You've got 4 tasks to do.
                </p>
            </div>
        </header>
    );
}

const TaskInput = function () {
    return (
        <form className="flex flex-wrap gap-10 justify-between items-center px-6 w-full font-medium bg-white rounded-xl min-h-[72px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-4 items-center self-stretch my-auto text-base text-gray-400 min-w-[240px] w-[544px] max-md:max-w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4d8ca58f11bf83ffa11186ea8d88068e6dcef05d8a52727cd33c3c77177779e?apiKey=7a3c0c6db776404c888c5b6f6be62ebf&"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <label htmlFor="newTask" className="sr-only">
                    Add a new task
                </label>
                <input
                    type="text"
                    id="newTask"
                    placeholder="Add a new task..."
                    className="flex-grow bg-transparent border-none outline-none"
                    aria-label="Add a new task"
                />
            </div>
            <button
                type="submit"
                className="overflow-hidden gap-2 self-stretch px-3 py-2 text-sm text-white bg-blue-700 rounded-lg"
            >
                Add new
            </button>
        </form>
    );
}

function FilterOptions() {
    return (
      <div className="flex gap-5 items-center self-center mt-5">
        <span className="self-stretch my-auto text-base font-semibold text-gray-800">
          Filter:
        </span>
        <div className="flex gap-2 items-center self-stretch my-auto rounded-lg">
          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="radio"
              name="filter"
              value="all"
              className="sr-only"
              defaultChecked
            />
            <div className="flex self-stretch my-auto w-4 h-4 bg-gray-50 rounded-full border-4 border-blue-700 border-solid fill-gray-50 min-h-[16px] stroke-[3.5px] stroke-blue-700" />
            <span className="self-stretch my-auto text-base text-gray-900 whitespace-nowrap">
              All
            </span>
          </label>
        </div>
        <div className="flex gap-2 items-center self-stretch my-auto text-base text-gray-900 whitespace-nowrap rounded-lg">
          <label className="flex gap-2 items-center cursor-pointer">
            <input type="radio" name="filter" value="done" className="sr-only" />
            <div className="flex gap-2.5 self-stretch p-0 my-auto w-4 h-4 bg-gray-50 rounded-lg border-2 border-gray-300 border-solid min-h-[16px]" />
            <span>Done</span>
          </label>
        </div>
        <div className="flex gap-2 items-center self-stretch my-auto text-base text-gray-900 whitespace-nowrap rounded-lg">
          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="radio"
              name="filter"
              value="undone"
              className="sr-only"
            />
            <div className="flex gap-2.5 self-stretch p-0 my-auto w-4 h-4 bg-gray-50 rounded-lg border-2 border-gray-300 border-solid min-h-[16px]" />
            <span>Undone</span>
          </label>
        </div>
      </div>
    );
}

function TaskItem({ text }) {
    return (
      <li className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-6 py-5 mt-5 w-full bg-gray-50 rounded-xl min-h-[72px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-4 items-center self-stretch my-auto">
          <div className="flex flex-col self-stretch my-auto w-6">
            <input
              type="checkbox"
              className="flex shrink-0 h-6 rounded-lg border-2 border-gray-300 border-solid"
              aria-label={`Mark "${text}" as done`}
            />
          </div>
          <span className="self-stretch my-auto text-base font-medium text-gray-800">
            {text}
          </span>
        </div>
        <div className="flex gap-4 items-start self-stretch my-auto text-sm font-medium whitespace-nowrap">
          <button className="overflow-hidden gap-2 self-stretch px-3 py-2 text-blue-700 rounded-lg border border-blue-700 border-solid">
            Edit
          </button>
          <button className="gap-2 self-stretch px-3 py-2 text-red-700 rounded-lg border border-red-700 border-solid">
            Delete
          </button>
        </div>
      </li>
    );
  }

function TaskList({ tasks }) {
    return (
      <ul className="flex flex-col mt-5 w-full max-md:max-w-full">
        {tasks.map((task) => (
          <TaskItem key={task.id} text={task.text} />
        ))}
        <li className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-6 py-5 mt-5 w-full font-medium bg-gray-50 rounded-xl min-h-[72px] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-4 items-center self-stretch my-auto text-base text-gray-400">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94e058892c79f4658305ee60341ef535549e267a6773f7e297cbf6bbdf1fd4c?apiKey=7a3c0c6db776404c888c5b6f6be62ebf&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="self-stretch my-auto">Design use case page</span>
          </div>
          <div className="flex gap-4 items-start self-stretch my-auto text-sm text-gray-400 whitespace-nowrap">
            <button
              className="gap-2 self-stretch px-3 py-2 rounded-lg border border-solid"
              disabled
            >
              Edit
            </button>
            <button
              className="gap-2 self-stretch px-3 py-2 rounded-lg border border-solid"
              disabled
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    );
  }

function TaskManager() {
    const tasks = [
        { id: 1, text: "Design use case page" },
        { id: 2, text: "Design use case page" },
        { id: 3, text: "Design use case page" },
        { id: 4, text: "Design use case page" },
    ];

    return (
        <div className="flex flex-col px-16 py-10 w-full bg-white rounded-3xl shadow-[0px_0px_48px_rgba(189,189,189,0.25)] max-md:px-5 max-md:max-w-full">
            <TaskInput />
            <FilterOptions />
            <TaskList tasks={tasks} />
        </div>
    );
}


export default function AdminPanel() {
    return (
        <div>
            <header className="flex flex-col items-center justify-center w-full h-[80px] bg-blue-700">
                <Header />
            </header>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ba47040889b9ee176e2cafe948d02408396b681a83bfa739a693cd6698e90f5?apiKey=7a3c0c6db776404c888c5b6f6be62ebf&"
                alt=""
                className="object-contain mt-5 w-full aspect-[1000] max-md:max-w-full"
            />
            {/* <TaskManager /> */}
        </div>
    );
};