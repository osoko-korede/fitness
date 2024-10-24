import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Image from "next/image"



const categories = [
    {
      name: 'Yoga',
      posts: [
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-1.png',
          role: 'Yoga Master',
        },
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-2.png',
          role: 'Yoga Master',
        },
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-3.png',
          role: 'Yoga Master',
        },
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-4.png',
          role: 'Yoga Master',
        },
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-5.png',
          role: 'Yoga Master',
        },
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-6.png',
          role: 'Yoga Master',
        },
      ],
    },   
    {
      name: 'Meditation',
      posts: [
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-1.png',
          role: 'Yoga Master',
        },
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-2.png',
          role: 'Yoga Master',
        },
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-4.png',
          role: 'Yoga Master',
        },
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-5.png',
          role: 'Yoga Master',
        },
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-6.png',
          role: 'Yoga Master',
        },
      ],
    },   
    {
      name: 'Kickboxing',
      posts: [
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-3.png',
          role: 'Yoga Master',
        },
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-4.png',
          role: 'Yoga Master',
        },
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-5.png',
          role: 'Yoga Master',
        },
        {
          id: 1,
          title: 'Bryan Tailor',
          img: '/images/avatar-6.png',
          role: 'Yoga Master',
        },
      ],
    },   
  ]

const Trainers = () => {
  return (
    <div className='flex flex-col max-container items-center gap-5'> 
      <h1 className="section-heading">Meet our Pro Trainers.</h1>
      <p className=" section-paragraph">From all over the world, we select and provide you a team of seasoned trainers. What's more, the 1-on-1 live practice mode helps you quickly get great results.</p>
      <div className="flex justify-center py-14">
      <div className="w-full">
        <TabGroup className="flex flex-col  items-center">
          <TabList className="flex gap-8">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-gray-700 focus:outline-none focus:text-white data-[selected]:bg-black  data-[hover]:bg-black data-[selected]:data-[hover]:bg-black data-[focus]:outline-1 data-[focus]:outline-white data-[selected]:text-white data-[hover]:text-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3 ">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="">
                <ul className='grid grid-cols-2  md:grid-cols-3 md:gap-40 gap-10 pt-20' >
                  {posts.map((post) => (
                    <li key={post.id} className="flex flex-col items-center">
                      <a href="#" className="">
                        <Image src={post.img} alt={post.role} width={150} height={150} className='bg-gray-300 border border-white hover:border-orange-500 rounded-xl' />
                        <h1 className='flex justify-center pt-5 font-semibold'>{post.title} </h1>
                        <p className='flex justify-center pt-2 text-gray-400'>{post.role}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
    </div>
    
  )
}

export default Trainers