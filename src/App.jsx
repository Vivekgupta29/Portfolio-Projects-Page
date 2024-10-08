import React, { useState } from 'react';
import Cards from './components/Cards';

function App() {

  const [hoveredId, setHoveredId] = useState(-1);

  const columnsCount = 3;
  const columns = Array.from({ length: columnsCount }, () => []);

  const projects = [
    {
      id: 1,
      projectname: "Background Changer",
      year: 2022,
      tag: ["Website", "Design"],
      link: "xyz",
      previewlink: "https://sumatran.cat/google-io-countdown.5f03776a.mp4",
      height: "18vw",
    },
    {
      id: 2,
      projectname: "TripYatri",
      year: 2023,
      tag: ["Website", "Travel"],
      link: "",
      previewlink: "https://sumatran.cat/google-io-countdown.5f03776a.mp4",
      height: "30vw",
    },
    {
      id: 3,
      projectname: "Ochi",
      year: 2024,
      tag: ["Website", "Design"],
      link: "",
      previewlink: "https://sumatran.cat/google-io-countdown.5f03776a.mp4",
      height: "22vw",
    },

  ];

  projects.forEach((project, index) => {
    columns[index % columnsCount].push(project);
  });

  const handleMouseEnter = (projectId) => {
    setHoveredId(projectId);
    console.log("Hovered ID: ", projectId);
  };

  const handleMouseLeave = () => {
    setHoveredId(-1);
    console.log("Mouse Left, Reset Hovered ID: -1");
  };

  return (
    <div className='min-h-screen max-w-screen p-10 bg-[#FFDDE6] flex gap-4'>
      {columns.map((column, colIndex) => (
        <div key={colIndex} className='flex flex-col w-1/3 gap-4'>
          {column.map((project) => (
            <Cards
              key={project.id}
              data={project}
              hoveredId={hoveredId}
              isHovered={hoveredId === project.id}
              onMouseEnterFunction={() => handleMouseEnter(project.id)}
              onMouseLeaveFunction={handleMouseLeave}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;