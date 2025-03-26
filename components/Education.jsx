import React from 'react'

const educations = [
    {
        name: "S.S.C",
        ins: "X High School",
        res: "GPA 5.00",
        des: "labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "H.S.C",
        ins: "Notre Dame College",
        res: "GPA 5.00",
        des: "labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "B.Sc.",
        ins: "Chittagong University of Engineering & Technology",
        res: "CGPA ",
        des: "labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "M.Sc.",
        ins: "Bangladesh University of Engineering & TEchnology",
        res: "CGPA",
        des: "labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
]

export default function Education() {
    return (
        <div className='w-full flex flex-col sm:flex-row flex-wrap justify-evenly items-center over'>
            {educations.map((education, index) => (
                <div
                    key={index}
                    className='w-[80%] lg:w-[40%] h-[300px] py-4 rounded-2xl bg-bgNavLight dark:bg-bgNavDark shadow-lg my-4 transform transition-transform duration-1000 hover:scale-105'
                >
                    <div className='flex justify-center text-xl font-semibold mb-2'>
                        {education.name}
                    </div>
                    <div
                        className='h-[200px] p-4 flex flex-col'
                    >
                        <p><strong>Institution:</strong> {education.ins}</p>
                        <p><strong>Result:</strong> {education.res}</p>
                        <p><strong>Description:</strong> {education.des}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
