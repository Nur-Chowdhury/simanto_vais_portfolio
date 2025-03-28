"use client"
import React, { useState } from "react";
import Image from "next/image";
import Education from "@/components/Education";
export default function About() {

  const [type, setType] = useState(1);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full py-4">
        {/* header */}
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold uppercase">About me</h1>
        </div>

        {/* nav */}
        <div className="my-12 flex flex-row justify-between w-full">
          <h1
            className={`w-[45%] text-lg md:text-xl xl:text-2xl 
                        transition-all duration-500 cursor-pointer px-4
                        hover:text-cBlue flex justify-center items-center ${
                          type === 1
                            ? "border-b-4 border-fGreen"
                            : "border-b-4 border-transparent"
                        }`}
            onClick={() => setType(1)}
          >
            Introduction
          </h1>
          <h1
            className={`w-[45%] text-lg md:text-xl xl:text-2xl 
                        transition-all duration-500 cursor-pointer px-4
                        hover:text-cBlue flex justify-center items-center ${
                          type === 2
                            ? "border-b-4 border-fGreen"
                            : "border-b-4 border-transparent"
                        }`}
            onClick={() => setType(2)}
          >
            Education
          </h1>
        </div>

        {/* body */}
        <div>
            { type === 1 ? (
              <div className=" flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 transition-all duration-500">
                  <div className="w-full xl:w-[70%] text-center xl:text-left text-bgDark dark:text-bgLight order-2 xl:order-none">
                      <p className=" mb-9 text-bgDark/80 dark:text-bgLight/80"> 
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                      </p>
                  </div>
      
                  <div className=" order-1 xl:order-none mb-8 xl:mb-0">
                      <Image 
                        src={"/assets/photo.png"}
                        quality={100}
                        height={300}
                        width={400}
                        alt=""
                        className=""
                      />
                  </div>
              </div>
            ):(
              <div className=" transition-all duration-500">
                  <Education />
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
