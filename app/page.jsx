import Header from "@/components/Header";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

export default function Home() {

    return (
        <section className=" h-full">
            <Header />
            <div className=" container mx-auto h-full">
                <div className=" flex flex-col xl:flex-row items-center justify-between
                    xl:pt-8 xl:pb-24
                ">
                    <div className=" text-center xl:text-left text-bgDark dark:text-bgLight order-2 xl:order-none">
                        <span>Mechanical Engineer</span>
                        <h1 className="h1 mb-6">
                            Hello I'm <br /> <span className=" text-fGreen/85">Simanto Das</span>
                        </h1>
                        <p className=" max-w-[500px] mb-9 text-bgDark/80 dark:text-bgLight/80"> 
                            I excel at Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                             labore et dolore magna aliqua.
                        </p>
                        <div className=" flex flex-col xl:flex-row items-center gap-8">
                            <Button variant="outline" size="lg"
                                className=" uppercase flex items-center gap-2 text-fGreen border-fGreen bg-transparent dark:bg-transparent dark:hover:bg-fGreen hover:bg-fGreen rounded-full hover:text-white"
                            >
                                <span>DownLoad CV</span>
                                <FiDownload className=" text-xl" />
                            </Button>
                            <div className=" mb-8 xl:mb-0">
                                <Social
                                  containerStyles={"flex gap-6"}
                                  iconStyles=" w-9 h-9 border border-fGreen rounded-full flex justify-center items-center 
                                  text-fGreen text-base hover:bg-fGreen hover:text-white hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className=" order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div> 
                </div>
            </div>

            <Stats /> 
        </section>
    );
}
