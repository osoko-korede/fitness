import Image from "next/image"

const Train = () => {
  return (
        <div className="">
            <div className="flex flex-col-reverse md:flex-row max-container items-center m-auto pt-48 justify-center">
                <div className="md:w-1/3 flex flex-col gap-4">
                    <h1 className="section-heading pr-10">Train smarter. get stronger</h1>
                    <p className="text-gray-400 text-lg">Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking, more lifting 🔥🏀</p>
                    <div className="flex gap-8 pt-10">
                        <button className="btn_primary">Start free trial</button>
                    </div>
                </div>
                <div className="md:pl-32 relative">
                    <Image 
                    src="/Bottle 1.png"
                    alt="camp"
                    width={200}
                    height={200}
                    className="absolute -top-32 right-0"
                    />
                    <Image 
                    src="/Bag.png"
                    alt="camp"
                    width={500}
                    height={500}
                    className="m-auto relative"
                    />
                    <Image 
                    src="/Gloves.png"
                    alt="camp"
                    width={150}
                    height={150}
                    className="absolute top-1 left-20 md:w[100%] w-[30%]"
                    />

                </div>
            </div>
        </div>
  )
}

export default Train