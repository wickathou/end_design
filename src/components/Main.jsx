import React, { useEffect, useRef, useState } from 'react';
import GreetingDisplay from './GreetingDisplay';
import { gsap } from "gsap";
import Piece from './Piece';

const Element = (twColor) => (<div className='h-52 w-52 bg-slate-200'></div>)

function Main() {

  // const [move, setMove] = useState(false)
  
  // const onEnter = ({ currentTarget }) => {
  //   gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  // };
  
  // const onLeave = ({ currentTarget }) => {
  //   gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  // };

  // const operationOne = ({currentTarget}) => {
  //   gsap.to(currentTarget, { duration: 2, x: 104 });
  //   gsap.to(currentTarget, { duration: 2, scale: 2 });
  //   setMove(true)
  // }

  // const operationTwo = ({currentTarget}) => {
  //   gsap.to(currentTarget, { duration: 2, scale: 1 });
  //   gsap.to(currentTarget, { duration: 2, x: -104 });
  //   setMove(false)
  // }

  // const combine = ({currentTarget}) => {
  //   if (move) {
  //     operationTwo({currentTarget})
  //   } else {
  //     operationOne({currentTarget})
  //   }
  // }
    
  // const observer = new IntersectionObserver((entries) => {
  //   console.log(entries)
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       gsap.to(entry.target, { duration: 2, x: 104 });
  //     } else {
  //       gsap.to(entry.target, { duration: 2, x: -104 });
  //     }
  //   })
  // })

  // const observedElement = useRef(null)

  // useEffect(() => {
  //   observer.observe(observedElement.current)
  // },[])

  const array = [1,2,3,4,5,6,7,8,9,10]

  return (
    <main className="md:container bg-slate-100 rounded-3xl p-12 flex flex-col gap-8 justify-center items-center">
      {array.map((a) => {
        return <Piece />
      })}
      {/* <Piece /> */}
    </main>
  );
}

export default Main;
