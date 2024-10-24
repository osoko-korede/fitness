import { FaBasketball } from "react-icons/fa6"



const ErrorPage = () => {
  return (
    <div>
          <div className='flex inset-0 justify-center items-center h-[80vh] px-10 md:px-0'>
            <div className='flex flex-col items-center gap-8  '>
                <div className='bg-orange-100 rounded-full'>
                    <FaBasketball className='text-9xl text-orange-600'/>
                </div>
                <h1 className='text-3xl md:text-5xl font-bold text-center'>404 Page cannot be found</h1>
                <p className='w-96 text-center'>While you are here, you can check out other projects in <a href="https://osoko-korede.vercel.app/" rel='noopener' target='_blank' className='underline'>my portfolio.</a></p>
                <div className=" justify-center space-x-12 items-center">
                    <a href="/" className="bg-orange-600 py-3 px-4 rounded-full text-white font-semibold">Go back Home</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage