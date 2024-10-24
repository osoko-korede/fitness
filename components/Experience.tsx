import { Fa42Group } from "react-icons/fa6"

const Experience = () => {
  return (
    <div className="hidden md:flex flex-col items-center pt-24 gap-8 ">
        <h1 className="font-semibold tracking-tight text-black text-6xl">How it works</h1>
        <p className=" text-lg font-light w-1/4 text-center">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
        <div className="flex gap-5 max-container pt-10" >
            <div className="flex flex-col items-center w-1/4">
                <div className="bg-blue-600 p-6 rounded-3xl mb-20">
                 <Fa42Group className="text-4xl text-white "/>
                </div>
                <p className="text-gray-500 pb-10">step 1</p>
                <h1 className="font-semibold text-lg">Download</h1>
                <p className="font-light text-center">Fitness Pro tracks your workouts, get <br /> better results, and be the best <br /> version of you.</p>
            </div>
            <div className="flex flex-col items-center w-1/4">
                <div className="bg-violet-600 p-6 rounded-3xl mb-20">
                 <Fa42Group className="text-4xl text-white "/>
                </div>
                <p className="text-gray-500 pb-10">step 2</p>
                <h1 className="font-semibold text-lg">Choose your trainer</h1>
                <p className="font-light text-center">Fitness Pro tracks your workouts, get <br /> better results, and be the best <br /> version of you.</p>
            </div>
            <div className="flex flex-col items-center w-1/4">
                <div className="bg-orange-600 p-6 rounded-3xl mb-20">
                 <Fa42Group className="text-4xl text-white "/>
                </div>
                <p className="text-gray-500 pb-10">step 3</p>
                <h1 className="font-semibold text-lg">Set the goals</h1>
                <p className="font-light text-center">Fitness Pro tracks your workouts, get <br /> better results, and be the best <br /> version of you.</p>
            </div>
            <div className="flex flex-col items-center w-1/4">
                <div className="bg-green-600 p-6 rounded-3xl mb-20">
                 <Fa42Group className="text-4xl text-white "/>
                </div>
                <p className="text-gray-500 pb-10">step 4</p>
                <h1 className="font-semibold text-lg">Workout time</h1>
                <p className="font-light text-center">Fitness Pro tracks your workouts, get <br /> better results, and be the best <br /> version of you.</p>
            </div>
        </div>
    </div>
  )
}

export default Experience