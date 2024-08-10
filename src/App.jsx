import React from 'react'
import Cards from './components/Cards'
import { useState, useEffect } from "react";

function App() {
  const projects = [
    {
      projectname: "Background Changer",
      year: 2022,
      tag: ["Website", "Design"],
      link: "",
      previewlink: "https://sumatran.cat/google-io-countdown.5f03776a.mp4"
    },
    {
      projectname: "TripYatri",
      year: 2023,
      tag: ["Website", "Travel"],
      link: "",
      previewlink: "https://sumatran.cat/google-io-countdown.5f03776a.mp4"
    },
    {
      projectname: "Ochi",
      year: 2024,
      tag: ["Website", "Design"],
      link: "",
      previewlink: "https://sumatran.cat/google-io-countdown.5f03776a.mp4"
    },
    {
      projectname: "Ochi",
      year: 2024,
      tag: ["Website", "Design"],
      link: "",
      previewlink: "https://sumatran.cat/google-io-countdown.5f03776a.mp4"
    }
  ]

  useEffect(() => {
    const cardsToShow = projects.length
    // console.log(cardsToShow)
  }, []);

  return (
    <div className='min-h-screen max-w-screen p-10 bg-[#FFDDE6] flex gap-4'>
      <div className={`col1 flex flex-col w-1/3 gap-4`}>

        <Cards height="18vw" />
        <Cards height="30vw" />

      </div>
      <div className={`col2 flex flex-col w-1/3 gap-4`}>

        <Cards height="30vw" />
        <Cards height="20vw" />

      </div>
      <div className={`col3  flex flex-col w-1/3 gap-4`}>

        <Cards height="22vw" />
        <Cards height="28vw" />

      </div>
    </div >
  )
}

export default App