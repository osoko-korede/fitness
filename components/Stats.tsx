import { Fa42Group, FaCheck, FaFacebook, FaFlag, FaPerson, FaPlug } from "react-icons/fa6"
import Image from "next/image"


const Stats = () => {
  return (
    <div className="flex flex-col items-center pt-24 gap-8">
        <div className=" pt-24 gap-8 ">
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-24 max-container py-10" >
                <div className="flex flex-col">
                    <FaPerson className="text-5xl text-green-500"/>
                    <h1 className="text-black pb-10 text-7xl pt-10">1m</h1>
                    <hr className="py-5" />
                    <h1 className="font-semibold text-lg">Happy Users</h1>
                    <p className="font-light">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                </div>
                <div className="flex flex-col">
                    <FaPlug className="text-5xl text-violet-500"/>
                    <h1 className="text-black pb-10 text-7xl pt-10">1.2m</h1>
                    <hr className="py-5" />
                    <h1 className="font-semibold text-lg">Downloads</h1>
                    <p className="font-light">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                </div>
                <div className="flex flex-col">
                    <FaFlag className="text-5xl text-red-500"/>
                    <h1 className="text-black pb-10 text-7xl pt-10">50+</h1>
                    <hr className="py-5" />
                    <h1 className="font-semibold text-lg">Countries</h1>
                    <p className="font-light">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                </div>
                <div className="flex flex-col">
                    <FaFacebook className="text-5xl text-blue-600"/>
                    <h1 className="text-black pb-10 text-7xl pt-10">900k+</h1>
                    <hr className="py-5" />
                    <h1 className="font-semibold text-lg">Likes on Facebook</h1>
                    <p className="font-light">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                </div>
            </div>
        </div>
        
        <div className=" bg-gray-200 w-full">
            <div className="flex flex-col items-center gap-8  py-20 max-container">

                <h1 className="section-heading text-center">For any space, at any pace</h1>
                <p className=" text-lg font-light md:w-1/2 text-center">From the comfort of your living room to a hotel room across the globe, we put the best classes at your fingertips. No WiFi? Download videos offline for a practice that moves with you.</p>
                <div className="hidden sm:flex gap-10 max-container pt-10 justify-between " >
                    <div className="flex flex-col items-center w-1/4">
                        <Image src="/images/Hand Grip Circle.png" alt="Hand Grip" width={200} height={200}/>
                        <h1 className="font-semibold text-2xl text-center pt-7">Intuitive and clean design</h1>
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <Image src="/images/Gloves Circle.png" alt="Gloves" width={190} height={200}/>
                        <h1 className="font-semibold text-2xl text-center pt-7">Track your progress easily</h1>
                    </div>
                    <div className="flex flex-col items-center w-1/4" >
                        <Image src="/images/Circle Bottle.png" alt="Bottle" width={185} height={200}/>
                        <h1 className="font-semibold text-2xl text-center pt-7">Syncs with Apple Health</h1>
                    </div>
                </div>
            </div>

            

            <div className="carousel carousel-center max-w-2xl space-x-4 pl-10 p-4 sm:hidden ">
                <div className="carousel-item">
                    <div className="flex flex-col items-center w-2/3">
                        <Image src="/images/Hand Grip Circle.png" alt="Hand Grip" width={200} height={200}/>
                        <h1 className="font-semibold text-2xl text-center pt-7">Intuitive and clean design</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex flex-col items-center w-2/3">
                        <Image src="/images/Gloves Circle.png" alt="Gloves" width={190} height={200}/>
                        <h1 className="font-semibold text-2xl text-center pt-7">Track your progress easily</h1>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="flex flex-col items-center w-2/3" >
                        <Image src="/images/Circle Bottle.png" alt="Bottle" width={185} height={200}/>
                        <h1 className="font-semibold text-2xl text-center pt-7">Syncs with Apple Health</h1>
                    </div>
                </div>
            </div>
        </div>


        
        <div>
            <div className="flex flex-col-reverse sm:flex-row max-container items-center m-auto pt-48">
                <div className=" flex flex-col md:w-1/2  gap-4">
                    <h1 className="section-heading mb-7 md:pr-10">All your workouts,
                    in your pocket</h1>
                    <p className="text-gray-400 text-2xl font-normal tracking-tight">Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking!</p>
                    <div className="flex flex-col text-lg text-gray-600 gap-2">
                        <p className="flex gap-4 items-center"><FaCheck className="text-green-500"/> Fitness Pro Cloud </p>
                        <p className="flex gap-4 items-center"><FaCheck className="text-green-500"/> Syncs with Google Fit </p>
                        <p className="flex gap-4 items-center"><FaCheck className="text-green-500"/> Syncs with Apple Health </p>
                        <p className="flex gap-4 items-center"><FaCheck className="text-green-500"/> Track your progress easily </p>
                        <p className="flex gap-4 items-center"><FaCheck className="text-green-500"/> Intuitive and clean design </p>
                    </div>
                    
                    <div className="pt-5 gap-4 flex md:flex-row">
                        <button className="btn_primary">Choose Plan</button>
                        <button className="btn_outline">Request Demo</button>
                    </div>
                </div>
                <div className="relative">
                    <Image 
                    src="/images/Phones.png"
                    alt="camp"
                    width={500}
                    height={500}
                    className="m-auto"
                    />
                </div>
                        
            </div>
        </div>
    </div>
    
  )
}

export default Stats