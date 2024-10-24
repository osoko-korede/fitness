import Image from "next/image"
import { Fa42Group, FaBaseball, FaBolt, FaMedal, FaWatchmanMonitoring } from "react-icons/fa6"

const Book = () => {
  return (
    <div className="py-48">
        <div className="bg-gray-200 py-16 ">
            <div className="flex flex-col lg:flex-row max-container items-center lg:m-auto  ">
                <div className="lg:w-1/2 relative">
                    <Image 
                    src="/Book Pic.png"
                    alt="camp"
                    width={1000}
                    height={1000}
                    className="m-auto"
                    />
                    <Image 
                    src="/Dumbbells.png"
                    alt="camp"
                    width={150}
                    height={150}
                    className="absolute bottom-20 -right-10"
                    />
                    <Image 
                    src="/Ball.png"
                    alt="camp"
                    width={250}
                    height={250}
                    className="absolute -top-28 right-0 -z-10"
                    />
                    <Image 
                    src="/Green Ball.png"
                    alt="camp"
                    width={250}
                    height={250}
                    className="absolute -top-28 right-0 -z-10"
                    />
                </div>
                <div className=" flex flex-col lg:w-1/2 bg-white p-10 lg:p-20 rounded-xl gap-4">
                    <h1 className="font-semibold tracking-tight text-black text-5xl pr-10">Book a class</h1>
                    <p className="text-gray-400">Track your workouts, get better results, and be the best version of you. Less thinking, more lifting.</p>
                    <div className="flex gap-8 p-4 border border-white hover:border-gray-300 hover:rounded-lg ">
                        <div className="bg-green-600 p-4 rounded-full mb-auto">
                        <Fa42Group className="text-2xl text-white "/>
                        </div>
                        <div>
                            <h1 className="font-semibold text-lg">For the beginners</h1>
                            <p className="font-light">You never workout before, it’s now a good start</p>
                        </div>
                    </div>
                    <div className="flex gap-8 p-4 border border-white hover:border-gray-300 hover:rounded-lg ">
                        <div className="bg-violet-600 p-4 rounded-full mb-auto">
                        <FaMedal className="text-2xl text-white "/>
                        </div>
                        <div>
                            <h1 className="font-semibold text-lg">Advanced classes</h1>
                            <p className="font-light">You never workout before, it’s now a good start</p>
                        </div>
                    </div>
                    <div className="flex gap-8 p-4 border border-white hover:border-gray-300 hover:rounded-lg ">
                        <div className="bg-blue-600 p-4 rounded-full mb-auto">
                        <FaBolt className="text-2xl text-white "/>
                        </div>
                        <div>
                            <h1 className="font-semibold text-lg">Premium (limited)</h1>
                            <p className="font-light">You never workout before, it’s now a good start</p>
                        </div>
                    </div>
                    <p className="text-sm"> <span className="text-green-600">10% Discount </span> if you’re already using the <span className="font-semibold">Fitness Pro </span> on App Store</p>
                    <div className="flex justify-end pt-5">
                        <button className="btn_primary">Download App</button>
                    </div>
                </div>    
            </div>
        </div>
        
        

        <div className=" max-container flex flex-col gap-2 items-center m-auto py-16">
            <p className="uppercase font-semibold text-gray-600">New workouts added every week</p>
            <h1 className="section-heading w-2/3 text-center">A new fitness experience for everyone</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-24 max-container pt-10 m-auto" >
            <div className="flex flex-col gap-8">
                <FaWatchmanMonitoring className="text-4xl text-black "/>
                <h1 className="font-semibold text-lg">Keep track of calories and macros</h1>
                <p className="font-normal text-gray-500">Fitness Pro tracks your workouts,  get better results, and be the best  version of you.</p>
            </div>
            <div className="flex flex-col gap-8 border border-y-gray-300 py-10 md:py-0 border-gray-100  md:border md:border-gray-100 md:border-x-gray-300 md:px-10">
                <FaBaseball className="text-4xl text-black "/>
                <h1 className="font-semibold text-lg">Access all premium class of Fitness Pro</h1>
                <p className="font-normal text-gray-500">Fitness Pro tracks your workouts,  <br />get better results, and be the best version of you.</p>
            </div>
            <div className="flex flex-col gap-8 ">
                <FaMedal className="text-4xl text-black "/>
                <h1 className="font-semibold text-lg">Keep track of calories and macros</h1>
                <p className="font-normal text-gray-500">Fitness Pro tracks your workouts, get better results, and be the best version of you.</p>
            </div>

        </div>
    </div>
    
    
  )
}

export default Book