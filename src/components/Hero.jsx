import React from "react";
import selfImage from "../assets/self.png";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                            Vikram Oberai
                        </h1>
                        <span className="bg-gradient-to-r from-cyan-300 via-slate-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Computer Science Enthusiast
                        </span>
                        <p className="my-3 py-6">
                            I am a rising high school senior who is passionate
                            about computer science with a primary focus on
                            Machine Learning, Artificial Intelligence, and Web
                            Development. I am constantly finding ways to enhance
                            my skills through personal projects, relevant
                            coursework, and internship opportunities. I have a
                            strong foundation in Python, R, and Web Design
                            technologies/tools. I am eager to take my skills to
                            the next level by completing real world software
                            engineering projects!
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-5.8">
                    <div className="hidden lg:flex justify-center lg:justify-end">
                        <img
                            src={selfImage}
                            alt="A picture of me"
                            height="475"
                            width="425"
                            className="ml-60"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
