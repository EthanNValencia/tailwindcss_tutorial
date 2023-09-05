import React, { useState } from "react";
import CustomModal from "./components/CustomModal";
// import "./App.css";
// https://www.youtube.com/watch?v=ft30zcMlFao 2:09
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
      <h1 className="bg-[#b1d146]">Specifying background color.</h1>
      <h1 className="break-all mb-3">
        The large fake word will break
        laskskdkakkasdkaskdkaskdkasdkakskdkaskdkasdkk all.
      </h1>

      <div className="bg-red-300 text-white font-bold p-4">Hello</div>

      <p className="bg-npt_colors-10">npt_colors-10</p>
      <p className="bg-npt_colors-20">npt_colors-20</p>
      <p className="bg-npt_colors-30">npt_colors-30</p>
      <p className="bg-npt_colors-300">npt_colors-300</p>
      <p className="bg-npt_colors-350">npt_colors-350</p>
      <p className="bg-npt_colors-1">npt_colors-300</p>
      <p className="bg-npt_colors-2">npt_colors-350</p>

      <div className="grid grid-cols-6 gap-1 text-center">
        <div className="col-start-2 col-span-4 bg-red-400">01</div>
        <div className="col-start-1 col-end-3 bg-red-400">02</div>
        <div className="col-end-7 col-span-2 bg-red-400">03</div>
        <div className="col-start-1 col-end-7 bg-red-400">04</div>
      </div>

      {/* gap is really awesome, it puts space between the contained elements */}
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 bg-blue-300 gap-4 p-4">
        <div className="bg-sky-400 p-6 rounded-lg">First Element</div>
        <div className="bg-green-400 p-6 rounded-lg">Second Element</div>
        <div className="bg-green-700 p-6 rounded-lg">Third Element</div>
        <div className="bg-slate-500 p-6 rounded-lg">Fourth Element</div>
        <div className="bg-slate-300 p-6 rounded-lg col-span-2">Fifth Element</div>
        <div className="bg-green-500 p-6 rounded-lg">Sixth Element</div>
      </div>

      <div className="grid grid-cols-6 gap-4 bg-slate-200 p-4 text-center">
        <div className="bg-blue-400 col-span-4 col-start-2 rounded-lg p-6">01</div>
        <div className="bg-blue-400 col-span-2 col-start-1 rounded-lg p-6">02</div>
        <div className="bg-blue-400 col-span-2 col-start-5 rounded-lg p-6">03</div>
        <div className="bg-blue-400 col-span-6 col-start-1 rounded-lg p-6">04</div>
      </div>

      <div className="grid grid-flow-col auto-cols-max gap-4 bg-slate-200 p-4 text-center">
        <div className="bg-blue-400 rounded-lg p-6">01</div>
        <div className="bg-blue-400 rounded-lg p-6">02</div>
        <div className="bg-blue-400 rounded-lg p-6">03</div>
        <div className="bg-blue-400 rounded-lg p-6">04</div>
        <div className="bg-blue-400 rounded-lg p-6">05</div>
        <div className="bg-blue-400 rounded-lg p-6">06</div>
        <div className="bg-blue-400 rounded-lg p-6">07</div>
        <div className="bg-blue-400 rounded-lg p-6">08</div>
      </div>
      <h1>grid-rows deals with the number of elements within a column.</h1>
      <div className="grid grid-flow-col grid-rows-3 gap-4 bg-slate-200 p-4 text-center">
        <div className="bg-blue-400 rounded-lg p-6">01</div>
        <div className="bg-blue-400 rounded-lg p-6">02</div>
        <div className="bg-blue-400 rounded-lg p-6">03</div>
        <div className="bg-blue-400 rounded-lg p-6">04</div>
        <div className="bg-blue-400 rounded-lg p-6">05</div>
        <div className="bg-blue-400 rounded-lg p-6">06</div>
        <div className="bg-blue-400 rounded-lg p-6">07</div>
        <div className="bg-blue-400 rounded-lg p-6">08</div>
        <div className="bg-blue-400 rounded-lg p-6">09</div>
      </div>
      <div className="grid grid-flow-col grid-rows-4 gap-4 bg-slate-200 p-4 text-center">
        <div className="row-span-2 col-span-2 bg-blue-400 rounded-lg p-6">01</div>
        <div className="col-span-2 bg-blue-400 rounded-lg p-6">02</div>
        <div className="bg-blue-400 rounded-lg p-6">03</div>
        <div className="col-span-2 bg-blue-400 rounded-lg p-6">04</div>
        <div className="row-span-2 bg-blue-400 rounded-lg p-6">05</div>
        <div className="col-span-2 bg-blue-400 rounded-lg p-6">06</div>
        <div className="bg-blue-400 rounded-lg p-6">07</div>
        <div className="bg-blue-400 rounded-lg p-6">08</div>
        <div className="bg-blue-400 rounded-lg p-6">09</div>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-3 gap-4 bg-slate-200 p-4 text-center">
        <div className="col-span-2 bg-blue-400 rounded-lg p-6">01</div>
        <div className="col-span-2 bg-blue-400 rounded-lg p-6">Tailwind fills the space, pretty neat!</div>
        <div className="bg-blue-400 rounded-lg p-6">03</div>
        <div className=" bg-blue-400 rounded-lg p-6">04</div>
        <div className=" bg-blue-400 rounded-lg p-6">05</div>
        <div className=" bg-blue-400 rounded-lg p-6">06</div>
        <div className="bg-blue-400 rounded-lg p-6">07</div>
        <div className="bg-blue-400 rounded-lg p-6">08</div>
        <div className="bg-blue-400 rounded-lg p-6">09</div>
      </div>

      <button className="bg-npt_colors-350 hover:bg-npt_colors-300 text-white font-bold py-2 px-4 rounded-full">
        Save Btn
      </button>
      <button class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center">
        Learn More
      </button>
      <h1 className="h-16 bg-blue-500 text-2xl font-bold">This is my h1</h1>
      <p className="bg-red-300 -mt-8 ml-8 mr-8">This is a paragraph.</p>

      <div className="p-4">
        <h1>React Modal Example</h1>
        <button onClick={openModal}>Open Modal</button>
        <CustomModal isOpen={modalIsOpen} closeModal={closeModal} />
      </div>

      <div>
        <div>Header</div>
        <div className="flex flex-row">
          <div>Main Content</div>
          <div className="flex flex-col">
            <div>Sidebar</div>
            <div>Menu</div>
          </div>
        </div>
        <div>Footer</div>
      </div>

      <div>
        <div>Header</div>
        <div className="flex justify-between">
          <div>Main Content</div>
          <div className="bg-sky-300">Sidebar</div>
          <div>Menu</div>
        </div>
        <div className="flex justify-evenly">
          <div>Main Content</div>
          <div className="bg-sky-300">Sidebar</div>
          <div>Menu</div>
        </div>
        <div className="flex justify-center">
          <div>Main Content</div>
          <div className="bg-sky-300">Sidebar</div>
          <div>Menu</div>
        </div>
        <div>Footer</div>
      </div>

      {/* This is really good for handling mobile */}
      <div className="">
        <div>Header</div>
        <div className="flex flex-col sm:flex-row">
          <div className="basis-4/12 bg-red-300">Main Content</div>
          <div className="basis-6/12 bg-red-400">Sidebar</div>
          <div className="basis-2/12 bg-red-500">Menu</div>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-32 grow">01</div>
          <div className="w-32 grow">02</div>
          <div className="w-32 grow">03</div>
          <div className="w-32 grow">04</div>
          <div className="w-32 grow">05</div>
        </div>
        <div>Footer</div>
      </div>

      <div>
        <div className="w-16 h-16 bg-red-500"></div>
        <div className="w-16 h-16 bg-green-500"></div>
      </div>
      <div className="flex">
        <div className="w-1/2 h-16 bg-red-500"></div>
        <div className="w-1/2 h-16 bg-green-500"></div>
      </div>
      <div className="flex">
        <div className="w-2/5 h-16 bg-red-500"></div>
        <div className="w-3/5 h-16 bg-green-500"></div>
      </div>
      <div className="flex">
        <div className="w-1/4 h-16 bg-red-500"></div>
        <div className="w-3/4 h-16 bg-green-500"></div>
      </div>
      <div className="flex">
        <div className="w-1/4 h-16 bg-red-500"></div>
        <div className="w-1/4 h-16 bg-green-500"></div>
      </div>
    </>
  );
}

export default App;
