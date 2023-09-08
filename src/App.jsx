import React, { useState } from "react";
import CustomModal from "./components/CustomModal";
import Calendar from "react-calendar";
import "./Calendar.css"; // If you are porting the Calendar, do not forget the css.
import NtButton from "./components/NtButton";

// import "./App.css";
// https://www.youtube.com/watch?v=ft30zcMlFao 2:09
function App() {
  // dotenv.config()
  console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const calendarOnChange = (date) => {
    setDate(date);
    console.log(date);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <NtButton inactiveButtonLabel="Begin" />
      <div>
        <Calendar
          onChange={calendarOnChange}
          value={date}
          defaultValue={new Date()}
        />
      </div>

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
        <div className="bg-slate-300 p-6 rounded-lg col-span-2">
          Fifth Element
        </div>
        <div className="bg-green-500 p-6 rounded-lg">Sixth Element</div>
      </div>

      <div className="grid grid-cols-6 gap-4 bg-slate-200 p-4 text-center">
        <div className="bg-blue-400 col-span-4 col-start-2 rounded-lg p-6">
          01
        </div>
        <div className="bg-blue-400 col-span-2 col-start-1 rounded-lg p-6">
          02
        </div>
        <div className="bg-blue-400 col-span-2 col-start-5 rounded-lg p-6">
          03
        </div>
        <div className="bg-blue-400 col-span-6 col-start-1 rounded-lg p-6">
          04
        </div>
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
        <div className="row-span-2 col-span-2 bg-blue-400 rounded-lg p-6">
          01
        </div>
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
        <div className="col-span-2 bg-blue-400 rounded-lg p-6">
          02 Tailwind fills the space, pretty neat!
        </div>
        <div className="bg-blue-400 rounded-lg p-6">03</div>
        <div className=" bg-blue-400 rounded-lg p-6">04</div>
        <div className=" bg-blue-400 rounded-lg p-6">05</div>
        <div className=" bg-blue-400 rounded-lg p-6">06</div>
        <div className="bg-blue-400 rounded-lg p-6">07</div>
        <div className="bg-blue-400 rounded-lg p-6">08</div>
        <div className="bg-blue-400 rounded-lg p-6">09</div>
        <div className="col-span-2 bg-blue-400 rounded-lg p-6">10</div>
      </div>

      <div className="h-auto text-white bg-slate-900">
        <div className="container mx-auto px-2 columns-lg">
          <img
            className="w-64 float-right"
            src="https://images.pexels.com/photos/1003914/pexels-photo-1003914.jpeg?cs=srgb&dl=pexels-samer-daboul-1003914.jpg&fm=jpg"
            alt="Image not found"
          ></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            tempus iaculis urna id volutpat lacus laoreet. Hac habitasse platea
            dictumst quisque sagittis purus sit amet volutpat. Pharetra magna ac
            placerat vestibulum. Nunc pulvinar sapien et ligula ullamcorper
            malesuada. Quam id leo in vitae turpis. Ipsum dolor sit amet
            consectetur. Nunc vel risus commodo viverra maecenas accumsan. Nisl
            suscipit adipiscing bibendum est ultricies integer quis auctor. Odio
            euismod lacinia at quis risus. Enim diam vulputate ut pharetra sit.
            Diam ut venenatis tellus in metus vulputate eu scelerisque felis.
            Viverra orci sagittis eu volutpat odio facilisis mauris sit.
          </p>
          <p>
            Sit amet tellus cras adipiscing enim eu turpis egestas. Nulla
            aliquet porttitor lacus luctus accumsan tortor. Sit amet tellus cras
            adipiscing. Mattis pellentesque id nibh tortor id aliquet lectus
            proin. Sit amet nisl suscipit adipiscing bibendum est ultricies.
            Tortor at risus viverra adipiscing. Pharetra magna ac placerat
            vestibulum. Sed egestas egestas fringilla phasellus faucibus
            scelerisque eleifend donec. Morbi tempus iaculis urna id volutpat
            lacus laoreet non. Faucibus et molestie ac feugiat sed lectus.
            Lectus nulla at volutpat diam ut venenatis. Iaculis urna id volutpat
            lacus laoreet. Urna cursus eget nunc scelerisque viverra mauris in
            aliquam sem. Nunc pulvinar sapien et ligula ullamcorper malesuada
            proin libero. Sapien et ligula ullamcorper malesuada proin libero
            nunc consequat. Quis varius quam quisque id diam vel quam elementum
            pulvinar. Sed augue lacus viverra vitae congue eu consequat.
            Fringilla phasellus faucibus scelerisque eleifend donec.
          </p>
          <img
            className="w-32 float-left"
            src="https://images.pexels.com/photos/1003914/pexels-photo-1003914.jpeg?cs=srgb&dl=pexels-samer-daboul-1003914.jpg&fm=jpg"
            alt="Image not found"
          ></img>
          <p>
            Purus ut faucibus pulvinar elementum integer enim neque volutpat. In
            iaculis nunc sed augue lacus viverra vitae congue. Posuere urna nec
            tincidunt praesent. A scelerisque purus semper eget duis at tellus
            at urna. Sed risus pretium quam vulputate. Sit amet aliquam id diam.
            Posuere lorem ipsum dolor sit. Proin sagittis nisl rhoncus mattis
            rhoncus urna neque. Ante metus dictum at tempor commodo ullamcorper
            a. Sed id semper risus in hendrerit gravida rutrum. Orci sagittis eu
            volutpat odio facilisis.
          </p>
        </div>
        <div className="container mx-auto px-2 columns-lg">
          <img
            className="w-32 float-left"
            src="https://images.pexels.com/photos/1003914/pexels-photo-1003914.jpeg?cs=srgb&dl=pexels-samer-daboul-1003914.jpg&fm=jpg"
            alt="Image not found"
          ></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            tempus iaculis urna id volutpat lacus laoreet. Hac habitasse platea
            dictumst quisque sagittis purus sit amet volutpat. Pharetra magna ac
            placerat vestibulum. Nunc pulvinar sapien et ligula ullamcorper
            malesuada. Quam id leo in vitae turpis. Ipsum dolor sit amet
            consectetur. Nunc vel risus commodo viverra maecenas accumsan. Nisl
            suscipit adipiscing bibendum est ultricies integer quis auctor. Odio
            euismod lacinia at quis risus. Enim diam vulputate ut pharetra sit.
            Diam ut venenatis tellus in metus vulputate eu scelerisque felis.
            Viverra orci sagittis eu volutpat odio facilisis mauris sit.
          </p>
          <p>
            Sit amet tellus cras adipiscing enim eu turpis egestas. Nulla
            aliquet porttitor lacus luctus accumsan tortor. Sit amet tellus cras
            adipiscing. Mattis pellentesque id nibh tortor id aliquet lectus
            proin. Sit amet nisl suscipit adipiscing bibendum est ultricies.
            Tortor at risus viverra adipiscing. Pharetra magna ac placerat
            vestibulum. Sed egestas egestas fringilla phasellus faucibus
            scelerisque eleifend donec. Morbi tempus iaculis urna id volutpat
            lacus laoreet non. Faucibus et molestie ac feugiat sed lectus.
            Lectus nulla at volutpat diam ut venenatis. Iaculis urna id volutpat
            lacus laoreet. Urna cursus eget nunc scelerisque viverra mauris in
            aliquam sem. Nunc pulvinar sapien et ligula ullamcorper malesuada
            proin libero. Sapien et ligula ullamcorper malesuada proin libero
            nunc consequat. Quis varius quam quisque id diam vel quam elementum
            pulvinar. Sed augue lacus viverra vitae congue eu consequat.
            Fringilla phasellus faucibus scelerisque eleifend donec.
          </p>
          <p>
            Purus ut faucibus pulvinar elementum integer enim neque volutpat. In
            iaculis nunc sed augue lacus viverra vitae congue. Posuere urna nec
            tincidunt praesent. A scelerisque purus semper eget duis at tellus
            at urna. Sed risus pretium quam vulputate. Sit amet aliquam id diam.
            Posuere lorem ipsum dolor sit. Proin sagittis nisl rhoncus mattis
            rhoncus urna neque. Ante metus dictum at tempor commodo ullamcorper
            a. Sed id semper risus in hendrerit gravida rutrum. Orci sagittis eu
            volutpat odio facilisis.
          </p>
        </div>
      </div>

      <div className="h-auto text-white bg-slate-700">
        <div className="container mx-auto px-2 columns-lg">
          <div className="relative p-8 bg-red-400 rounded-lg">
            <div className="absolute top-40 inset-20 rounded-lg bg-green-400">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi tempus iaculis urna id volutpat lacus laoreet. Hac
                habitasse platea dictumst quisque sagittis purus sit amet
                volutpat. Pharetra magna ac placerat vestibulum. Nunc pulvinar
                sapien et ligula ullamcorper malesuada. Quam id leo in vitae
                turpis. Ipsum dolor sit amet consectetur. Nunc vel risus commodo
                viverra maecenas accumsan. Nisl suscipit adipiscing bibendum est
                ultricies integer quis auctor. Odio euismod lacinia at quis
                risus. Enim diam vulputate ut pharetra sit. Diam ut venenatis
                tellus in metus vulputate eu scelerisque felis. Viverra orci
                sagittis eu volutpat odio facilisis mauris sit.
              </p>
            </div>
            <p>
              Sit amet tellus cras adipiscing enim eu turpis egestas. Nulla
              aliquet porttitor lacus luctus accumsan tortor. Sit amet tellus
              cras adipiscing. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sit amet nisl suscipit adipiscing bibendum est
              ultricies. Tortor at risus viverra adipiscing. Pharetra magna ac
              placerat vestibulum. Sed egestas egestas fringilla phasellus
              faucibus scelerisque eleifend donec. Morbi tempus iaculis urna id
              volutpat lacus laoreet non. Faucibus et molestie ac feugiat sed
              lectus. Lectus nulla at volutpat diam ut venenatis. Iaculis urna
              id volutpat lacus laoreet. Urna cursus eget nunc scelerisque
              viverra mauris in aliquam sem. Nunc pulvinar sapien et ligula
              ullamcorper malesuada proin libero. Sapien et ligula ullamcorper
              malesuada proin libero nunc consequat. Quis varius quam quisque id
              diam vel quam elementum pulvinar. Sed augue lacus viverra vitae
              congue eu consequat. Fringilla phasellus faucibus scelerisque
              eleifend donec.
            </p>
            <p>
              Purus ut faucibus pulvinar elementum integer enim neque volutpat.
              In iaculis nunc sed augue lacus viverra vitae congue. Posuere urna
              nec tincidunt praesent. A scelerisque purus semper eget duis at
              tellus at urna. Sed risus pretium quam vulputate. Sit amet aliquam
              id diam. Posuere lorem ipsum dolor sit. Proin sagittis nisl
              rhoncus mattis rhoncus urna neque. Ante metus dictum at tempor
              commodo ullamcorper a. Sed id semper risus in hendrerit gravida
              rutrum. Orci sagittis eu volutpat odio facilisis.
            </p>
          </div>
        </div>
      </div>

      <div className="h-auto p-4 gap-2 grid grid-flow-row grid-cols-5">
        <div className="p-4 text-black bg-white border rounded-lg shadow-md">
          <img
            className="w-32 mb-2 blur-sm hover:blur-none"
            src="https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
          <h1 className="text-2xl">Hello</h1>
          <p className="mb-4 text-xs w-24">This hover over tbe image</p>
          <button className="text-xs px-3 py-2 rounded-lg cursor-pointer text-white bg-cyan-500 shadow-md shadow-cyan-600/50">
            Say Hello
          </button>
        </div>

        <div className="p-4 text-black bg-white border rounded-lg shadow-md brightness-50 hover:brightness-100">
          <img
            className="w-32 mb-2 brightness-200"
            src="https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
          <h1 className="text-2xl">Hello</h1>
          <p className="mb-4 text-xs w-24">This is bright!</p>
          <button className="text-xs px-3 py-2 rounded-lg cursor-pointer text-white bg-cyan-500 shadow-md shadow-cyan-600/50">
            Say Hello
          </button>
        </div>

        <div className="p-4 text-black bg-white border rounded-lg shadow-md grayscale hover:grayscale-0">
          <img
            className="w-32 mb-2"
            src="https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
          <h1 className="text-2xl">Hello</h1>
          <p className="mb-4 text-xs w-24">This has grayscale!</p>
          <button className="text-xs px-3 py-2 rounded-lg cursor-pointer text-white bg-cyan-500 shadow-md shadow-cyan-600/50">
            Say Hello
          </button>
        </div>

        <div className="p-4 text-black bg-white border rounded-lg shadow-md hue-rotate-180">
          <img
            className="w-32 mb-2"
            src="https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
          <h1 className="text-2xl">Hello</h1>
          <p className="mb-4 text-xs w-24">This has hue!</p>
          <button className="text-xs px-3 py-2 rounded-lg cursor-pointer text-white bg-cyan-500 shadow-md shadow-cyan-600/50">
            Say Hello
          </button>
        </div>

        <div className="p-4 text-black bg-white border rounded-lg shadow-md invert">
          <img
            className="w-32 mb-2"
            src="https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
          <h1 className="text-2xl">Hello</h1>
          <p className="mb-4 text-xs w-24">This has invert!</p>
          <button className="text-xs px-3 py-2 rounded-lg cursor-pointer text-white bg-cyan-500 shadow-md shadow-cyan-600/50">
            Say Hello
          </button>
        </div>

        <div className="p-4 text-black bg-white border rounded-lg shadow-md">
          <img
            className="w-32 mb-2 saturate-150"
            src="https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
          <h1 className="text-2xl">Hello</h1>
          <p className="mb-4 text-xs w-24">The img has saturate!</p>
          <button className="text-xs px-3 py-2 rounded-lg cursor-pointer text-white bg-cyan-500 shadow-md shadow-cyan-600/50">
            Say Hello
          </button>
        </div>
      </div>

      <div className="mt-4 -mb-3">
        <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25"></div>
          <div className="relative rounded-xl overflow-auto p-8 grid grid-flow-row-dense md:grid-cols-3 sm:grid-cols-1 gap-4">
            <div className="overflow-visible relative pr-6 max-w-sm mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center">
              <img
                className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              />
              <div className="flex flex-col py-5 pl-24">
                <strong className="text-slate-900 text-sm font-medium">
                  Andrew Alfred
                </strong>
                <span className="text-slate-500 text-sm font-medium ">
                  Technical advisor
                </span>
              </div>
            </div>

            <div className="overflow-visible relative pr-6 max-w-sm mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center">
              <div className="flex flex-col py-5 pl-4 pr-10">
                <strong className="text-slate-900 text-sm font-medium">
                  Andrew Alfred
                </strong>
                <span className="text-slate-500 text-sm font-medium ">
                  Technical advisor
                </span>
              </div>
              <img
                className="absolute -right-10 w-24 h-24 rounded-full shadow-lg"
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              />
            </div>

            <div className="overflow-hidden relative pr-6 max-w-sm mx-auto bg-white shadow-lg ring-1 ring-black rounded-xl flex items-center">
              <img
                className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              />
              <div className="flex flex-col py-5 pl-24">
                <strong className="text-slate-900 text-sm font-medium ">
                  Andrew Alfred
                </strong>
                <span className="text-slate-500 text-sm font-medium">
                  Technical advisor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative rounded-xl overflow-auto p-8">
        <div className="overflow-auto h-72 relative max-w-sm mx-auto bg-white dark:bg-slate-800 dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">
          <div className="flex items-center gap-4 p-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Andrew Alfred
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Technical advisor
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Debra Houston
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Analyst
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Jane White
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Director, Marketing
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Ray Flint
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Technical Advisor
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-7">
        <div className="m-4">
          <button className="pl-4 pr-4 pt-2 pb-2 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            Hover Save Changes
          </button>
        </div>

        <div className="m-4">
          <button className="pl-4 pr-4 pt-2 pb-2 rounded-md transition ease-in-out delay-150 bg-blue-500 active:-translate-y-1 active:scale-110 active:bg-indigo-500 duration-300">
            OnClick Save Changes
          </button>
        </div>

        <div>
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
            disabled=""
          >
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </button>
        </div>

        <div>
          <span class="relative inline-flex">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-not-allowed ring-1 ring-slate-900/10 dark:ring-slate-200/20"
              disabled=""
            >
              Transactions
            </button>
            <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </span>
        </div>

        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg
            class="w-6 h-6 text-violet-500"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <input
        type="text"
        placeholder="Default focus styles"
        className="font-sans text-sm w-60 py-2 px-3 ring-1 ring-slate-900/10 text-slate-500 rounded-lg shadow-sm dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-400"
      ></input>

      <button className="bg-npt_colors-350 hover:bg-npt_colors-300 text-white font-bold py-2 px-4 rounded-full">
        Save Btn
      </button>
      <button className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center">
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
