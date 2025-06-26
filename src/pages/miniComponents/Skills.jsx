import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(
        "https://mern-stack-portfolio-backend-code.onrender.com/api/v1/skill/getall",
        { withCredentials: true }
      );
      setSkills(data.skills);
    };
    getMySkills();
  }, []);
  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <h1
        className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
      lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit"
      >
        SKILLS
      </h1>

      <div class="flex flex-col gap-[10PX]">
        <div class="gap-10">
          <div class="flex justify-between text-lg">
            <p class="text-xl text-[white] font-bold text-tubeLight-effect tracking-[1px] dancing_text ">
              HTML
            </p>
            <p class="text-white">95%</p>
          </div>
          <div class="bg-white mt-[3px] mb-3 w-full lg:w-[45vw] h-[2px]"> </div>
        </div>

        <div>
          <div class="flex justify-between text-lg ">
            <p class="text-white font-bold text-tubeLight-effect tracking-[1px] dancing_text ">CSS</p>
            <p class="text-white">75%</p>
          </div>
          <div class="bg-white mt-[3px] mb-3 w-full lg:w-[35vw] h-[2px]"> </div>
        </div>

        <div>
          <div class="flex justify-between text-lg">
            <p class="text-white font-bold text-tubeLight-effect tracking-[1px] dancing_text ">JAVASCRIPT</p>
            <p class="text-white">50%</p>
          </div>
          <div class="bg-white mt-[3px] mb-3 w-full lg:w-[25vw] h-[2px]"> </div>
        </div>

        <div>
          <div class="flex justify-between text-lg  ">
            <p class="text-white font-bold text-tubeLight-effect tracking-[1px] dancing_text ">UI Design</p>
            <p class="text-white">85%</p>
          </div>
          <div class="bg-white mt-[3px] mb-3 w-full lg:w-[40vw] h-[2px]"> </div>
        </div>

        <div>
          <div class="flex justify-between text-lg ">
            <p class="text-white font-bold text-tubeLight-effect tracking-[1px] dancing_text ">TAILWIND</p>
            <p class="text-white">90%</p>
          </div>
          <div class="bg-white mt-[3px] mb-3 w-full lg:w-[43vw] h-[2px]"> </div>
        </div>

        <div>
          <div class="flex justify-between text-lg ">
            <p class="text-white font-bold text-tubeLight-effect tracking-[1px] dancing_text ">REACT</p>
            <p class="text-white">55%</p>
          </div>
          <div class="bg-white mt-[3px] mb-3 w-full lg:w-[29vw] h-[2px]"> </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills &&
          skills.map((element) => {
            return (
              <Card className="h-fit p-7 flex flex-col justify-center items-center gap-3" key={element._id}>
                <img
                  src={element.svg && element.svg.url}
                  alt="skill"
                  className="h-12 sm:h-24 w-auto"
                />
                <p className="text-muted-foreground text-center">
                  {element.title}
                </p>
              </Card>
              
            );
          })}
      </div>
    </div> */}
    </div>
  );
};

