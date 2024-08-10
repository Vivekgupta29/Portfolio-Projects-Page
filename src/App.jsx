import React from 'react'
import Cards from './components/Cards'
import { useState, useEffect } from "react";

function App() {
  const projects = [
    {
      projectname: "Background Changer",
      year: 2022,
      tag: ["Website", "Design"],
      link: "xyz",
      previewlink: "https://sumatran.cat/google-io-countdown.5f03776a.mp4",
      height: "18vw",
    },
    {
      projectname: "TripYatri",
      year: 2023,
      tag: ["Website", "Travel"],
      link: "",
      previewlink: "https://sumatran.cat/google-io-countdown.5f03776a.mp4",
      height: "30vw",
    },
    {
      projectname: "Ochi",
      year: 2024,
      tag: ["Website", "Design"],
      link: "",
      previewlink: "https://sumatran.cat/google-io-countdown.5f03776a.mp4",
      height: "22vw",
    },
    {
      projectname: "Ochi",
      year: 2024,
      tag: ["Website", "Design"],
      link: "",
      previewlink: "https://sumatran.cat/google-io-countdown.5f03776a.mp4",
      height: "30vw",
    },

  ]

  const columnsCount = 3;
  const columns = Array.from({ length: columnsCount }, () => []); // Create empty arrays for each column

  // Distribute projects across columns
  projects.forEach((project, index) => {
    columns[index % columnsCount].push(project);
  });

  return (
    <div className='min-h-screen max-w-screen p-10 bg-[#FFDDE6] flex gap-4'>
      {columns.map((column, colIndex) => (
        <div key={colIndex} className={`flex flex-col w-1/3 gap-4`}>
          {column.map((project, projIndex) => (
            <Cards key={projIndex} height={project.height} data={project} />
          ))}
        </div>
      ))}
    </div>

  )
}

export default App