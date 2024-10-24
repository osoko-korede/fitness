import { Fa42Group } from "react-icons/fa6"

const Feature = () => {
  return (
    <div>
      <div className="max-container flex flex-col md:flex-row gap-8 md:justify-between ">
        <h1 className="section-subtitle sm:w-1/2">fitness pro</h1>
        <div className=" sm:w-2/3 md:w-1/2">
          <h1 className="section-heading pb-5">Simple, powerful, <br /> easy-to-use</h1>
          <p className=" font-normal md:w-2/3 text-gray-600">Track your workouts, get better results, and be the best version of you. Less thinking, more lifting.</p>
        </div>
        
      </div>
        <div className="max-container flex flex-col-reverse md:flex-row items-center p-24 gap-12" >
          <div className=" flex gap-12 flex-col md:w-[70%] lg:w-[25%] lg:mr-48">
            <div className="flex flex-col gap-4">
                <p className="py-[0.5px] px-2 rounded-full bg-violet-600 mr-auto text-white">01</p>
                <h1 className="font-semibold text-lg" >Intuitive and clean design</h1>
                <p className="text-gray-500">Track your workouts, get better results, and be the best version of you.</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="py-[0.5px] px-2 rounded-full bg-red-600 mr-auto text-white">02</p>
                <h1 className="font-semibold text-lg" >Intuitive and clean design</h1>
                <p className="text-gray-500">Track your workouts, get better results, and be the best version of you.</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="py-[0.5px] px-2 rounded-full bg-green-600 mr-auto text-white">03</p>
                <h1 className="font-semibold text-lg" >Intuitive and clean design</h1>
                <p className="text-gray-500">Track your workouts, get better results, and be the best version of you.</p>
            </div>
          </div>
          <div className="w-[100%] md:w-[100%] lg:w-[50%] bg-gray-300 rounded-3xl relative ml-auto">
              <img src="/About Pic.png" alt="About pic" className="w-full"/>
              <img src="/Plate.png" alt="About pic" className="absolute top-10 lg:-left-40 w-64 lg:w-80"/>
          </div>
        </div>
    </div>
  )
}

export default Feature