import React, { useEffect, useState } from 'react';

interface RubiksCubeProps {
  size?: number;
}

const userSkills = [
  "JS", "HTML", "CSS", "Python", "C++", "Next.js", "Django", "Git", "GitHub", "Web",
  "Blender", "Render", "Textures", "Physics", "UI", "UX", "Figma", "Graphic", "Unity",
  "Data", "Algos", "SQL", "Postgres", "Network", "Security", "Math", "Solve",
  "CAD", "KiCad", "Circuits", "Logisim", "Hardware", "Systems", "Design"
];

const faceColors = [
  "bg-blue-600",
  "bg-emerald-500",
  "bg-rose-500",
  "bg-amber-500",
  "bg-slate-100", // white-ish
  "bg-yellow-400"
];

export default function RubiksCube({ size = 120 }: RubiksCubeProps) {
  const halfSize = size / 2;

  // We assign a skill and color to each of the 54 stickers.
  const [faces, setFaces] = useState<{skill: string, color: string}[][]>([]);

  useEffect(() => {
    const generateState = (solved: boolean) => {
      return Array.from({ length: 6 }).map((_, faceIndex) => {
        return Array.from({ length: 9 }).map((_, stickerIndex) => {
          const colorIndex = solved ? faceIndex : Math.floor(Math.random() * 6);
          const skillIndex = (faceIndex * 9 + stickerIndex) % userSkills.length;
          const finalSkillIndex = solved ? skillIndex : Math.floor(Math.random() * userSkills.length);
          return { skill: userSkills[finalSkillIndex], color: faceColors[colorIndex] };
        });
      });
    };

    // Initialize with a scrambled state
    setFaces(generateState(false));

    // Then toggle between solved and scrambled
    const intervalId = setInterval(() => {
      setFaces(prevFaces => {
        // We'll check if the first sticker of the first face matches the face color to determine if solved
        const isCurrentlySolved = prevFaces[0][0].color === faceColors[0];
        return generateState(!isCurrentlySolved);
      });
    }, 5000); // Twist every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const renderFace = (faceIndex: number) => {
    if (faces.length === 0) return null;
    return faces[faceIndex].map((data, i) => {
      // White and Yellow faces should have darker text for contrast, others white
      const isLightBg = data.color === "bg-slate-100" || data.color === "bg-yellow-400";
      const textColor = isLightBg ? "text-slate-800" : "text-white";
      
      return (
        <div key={i} className="flex items-center justify-center p-0.5 overflow-hidden">
          <div className={`w-full h-full rounded-[2px] flex items-center justify-center border border-black/20 shadow-inner group transition-colors duration-1000 ${data.color}`}>
            <span className={`text-[9px] md:text-[10px] font-black tracking-tighter select-none overflow-hidden text-center truncate w-full px-0.5 ${textColor}`}>
              {data.skill}
            </span>
          </div>
        </div>
      );
    });
  };

  return (
    <div 
      className="cube-container relative" 
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div className="cube shadow-2xl">
        <div 
          className="cube-face face-front bg-black"
          style={{ transform: `rotateY(0deg) translateZ(${halfSize}px)` }}
        >{renderFace(0)}</div>
        <div 
          className="cube-face face-back bg-black"
          style={{ transform: `rotateY(180deg) translateZ(${halfSize}px)` }}
        >{renderFace(1)}</div>
        <div 
          className="cube-face face-right bg-black"
          style={{ transform: `rotateY(90deg) translateZ(${halfSize}px)` }}
        >{renderFace(2)}</div>
        <div 
          className="cube-face face-left bg-black"
          style={{ transform: `rotateY(-90deg) translateZ(${halfSize}px)` }}
        >{renderFace(3)}</div>
        <div 
          className="cube-face face-top bg-black"
          style={{ transform: `rotateX(90deg) translateZ(${halfSize}px)` }}
        >{renderFace(4)}</div>
        <div 
          className="cube-face face-bottom bg-black"
          style={{ transform: `rotateX(-90deg) translateZ(${halfSize}px)` }}
        >{renderFace(5)}</div>
      </div>
    </div>
  );
}

