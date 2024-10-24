import Image from "next/image"

const Hero = () => {
  return (
    <div className="">
        <div className="flex flex-col md:flex-row max-container md:items-center md:m-auto pt-20">
            <div className="flex flex-col gap-2">
                <p className="uppercase font-semibold text-sm text-gray-600">Train smarter. get stronger</p>
                <h1 className="font-semibold tracking-tight text-black text-5xl leading-[60px]">Simple fitness experience for everyone.</h1>
                <p className="text-gray-400 text-base">Track your workouts, get better results, and be the best version of you. Less thinking, more lifting.</p>
                <div className="flex flex-col md:flex-row gap-4 pt-10">
                    <button className="btn_primary">Download App</button>
                    <button className="btn_outline">Book a class</button>
                </div>
            </div>
            <div className=" md:pl-32 relative pt-40 items-center">
                <Image 
                src="/Fitness Bottle.png"
                alt="camp"
                width={250}
                height={250}
                className="absolute top-10 right-0  sm:right-20 sm:w-[250px] w-[170px] md:w-[170px]"
                />
                <Image 
                src="/Fitness Watch.png"
                alt="camp"
                width={500}
                height={500}
                className="m-auto relative md:w-[1000px] lg:w-[700px]"
                />
                <Image 
                src="/Ball.png"
                alt="camp"
                width={250}
                height={250}
                className="absolute bottom-10 right-1 w-[170px] md:w-[130px]"
                />
                <Image 
                src="/Black Ball.png"
                alt="camp"
                width={70}
                height={70}
                className="absolute bottom-10 right-64 sm:left-20 sm:w-[70px] md:left-40"
                />
            </div>
        </div>
        <div className="flex justify-center pt-20">
            <p className="font-semibold">Trusted by more than 2M users worldwide</p>
            <div></div>
        </div>
    </div>
    
    
  )
}

export default Hero