import React, {useState} from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


const Css = () => {

    let [categories] = useState({
        'Module for beginners': [
          {
            id: 1,
            title: 'IDE',
            date: 'Ang mga software na iyong kailangan',
          },
          {
            id: 2,
            title: "Basic Structure",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
          {
            id: 3,
            title: "Headings & Paragraphs",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
          {
            id: 4,
            title: "Comments",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
          {
            id: 5,
            title: "Br and Hr tag",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
        ],
        'Module for intermediate': [
          {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            date: 'Jan 7',
            commentCount: 29,
            shareCount: 16,
          },
          {
            id: 2,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
          },
        ],
        'Module for advance': [
          {
            id: 1,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            date: '2d ago',
            commentCount: 9,
            shareCount: 5,
          },
          {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: '4d ago',
            commentCount: 1,
            shareCount: 2,
          },
        ],
      })

    return (
        <>
                        <div className='bg-gray-100 h-screen grid grid-cols-1 p-4 motion-safe:animate-fadeIn'>

<div className='xl:flex lg:flex justify-between items-center'>
    <div className='xl:text-left lg:text-left md:text-center sm:text-center text-center'>
        <h1 className='headerUno'><span className='text-blue-500'>C</span>ascading <span className='text-blue-500'>S</span>yle <span className='text-blue-500'>S</span>heets</h1>
        <p className='parag pb-4'>Ang balat ng website</p>
    </div>
    <div>
    <Tab.Group>
<Tab.List className="flex p-5 space-x-1 bg-blue-900/20 rounded-xl bg-white">
{Object.keys(categories).map((category) => (
<Tab
  key={category}
  className={({ selected }) =>
    classNames(
      'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
      'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
      selected
        ? 'bg-white shadow'
        : 'text-blue-100 hover:bg-white/[0.12] hover:text-blue-400'
    )
  }
>
  {category}
</Tab>
))}
</Tab.List>
<Tab.Panels className="mt-2">
{Object.values(categories).map((posts, idx) => (
<Tab.Panel
  key={idx}
  className={classNames(
    'bg-white rounded-xl p-3 overflow-auto h-56',
    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
  )}
>
  <ul>
    {posts.map((post) => (
      <li
        key={post.id}
        className="relative p-3 rounded-md hover:bg-coolGray-100"
      >
        <h3 className="text-sm font-medium leading-5">
          {post.title}
        </h3>

        <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
          <li>{post.date}</li>
        </ul>

        <a
          href="#"
          className={classNames(
            'absolute inset-0 rounded-md',
            'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
          )}
        />
      </li>
    ))}
  </ul>
</Tab.Panel>
))}
</Tab.Panels>
</Tab.Group>
    </div>
</div>

</div>
        </>
    )
}

export default Css
