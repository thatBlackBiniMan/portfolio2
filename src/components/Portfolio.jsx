import React from 'react'
import p2 from '../assets/portfolio/p2.png';
import p3 from '../assets/portfolio/p3.jpg';
import p4 from '../assets/portfolio/p4.jpg';
import p5 from '../assets/portfolio/p5.png';
import p6 from '../assets/portfolio/p6.jpeg';



const Portfolio = () => {

  const portfolios = [
    {
     id: 1,
     src: p2
    },{
      id: 2,
      src: p3
     },{
      id: 4,
      src: p4
     },{
      id: 5,
      src: p5
     },{
      id: 6,
      src: p6
     },
]  
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {
            portfolios.map(({id, src}) => (              
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                </div>
              </div>   
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio