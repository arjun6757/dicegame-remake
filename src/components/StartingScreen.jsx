export default function StartingScreen(props) {
  return (
    <div className="border flex flex-col p-8 gap-5  rounded-xl bg-slate-50 parent-start">
      <h2 className="font-semibold text-xl text-gray-700 text-center">
        Please enter the names of the players
      </h2>
      <div className="flex gap-8 rounded-md bg-slate-50 input-container">
        <style>
          {`
              @media (max-width: 600px) {
                .parent-start {
                border-radius: 0px;
                padding: 30px 20px;
                  width: 100%;
                  border-radius: none;
                }
                .input-container {
                flex-direction: column;
                gap: 20px;
                }
              }
              `}
        </style>

        <input
          className="p-1 pl-2 rounded-md border border-customGray focus-visible:outline-indigo-500"
          onChange={props.change}
          name="p1"
          value={props.value.p1}
          type="text"
          placeholder="Enter player1 name"
        />
        <input
          className="p-1 pl-2 rounded-md border border-customGray focus-visible:outline-indigo-500"
          onChange={props.change}
          name="p2"
          value={props.value.p2}
          type="text"
          placeholder="Enter player2 name"
        />
      </div>

      <button
        onClick={props.start}
        className="block my-0 text-sm  font-semibold w-full py-1 px-4 bg-green-700 text-white rounded-md active:bg-green-800 "
      >
        Start
      </button>
    </div>
  );
}
