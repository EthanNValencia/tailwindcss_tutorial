// import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="bg-green-400 text-white">Green!</h1>
      <h1 className="text-vuejs-932">VueJS color?!</h1>
      <h1 className="border-4 border-green-400">Border show!</h1>
      <h1 className="text-xs md:text-lg md:text-vuejs-100 lg:text-3xl lg:text-red-400">
        This is really awesome! No more media queries?
      </h1>
      <h1 className="mb-1">Margin bottom of 1</h1>
      <h1 className="bg-[#b1d146] mb-3">Specifying background color.</h1>

      <p className="bg-npt_colors-10">npt_colors-10</p>
      <p className="bg-npt_colors-20">npt_colors-20</p>
      <p className="bg-npt_colors-30">npt_colors-30</p>
      <p className="bg-npt_colors-300">npt_colors-300</p>
      <p className="bg-npt_colors-350">npt_colors-350</p>
      <p className="bg-npt_colors-1">npt_colors-300</p>
      <p className="bg-npt_colors-2">npt_colors-350</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Save Btn
      </button>
    </>
  );
}

export default App;
