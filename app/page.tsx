import Book from '@/components/Book'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Stats from '@/components/Stats'
import Train from '@/components/Train'
import Trainers from '@/components/Trainers'


const page = () => {
  return (
    <div>
      <Hero/>
      <Process/>
      <Train/>
      <Book />
      <Feature/>
      <Trainers />
      <Stats/>
    </div>
  )
}

export default page