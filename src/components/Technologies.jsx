import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiRstudio } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <div className="flex justify-center">
                <h1 className="text-4xl my-20">Tech Stack</h1>
            </div>
            <div className="flex justify-center gap-5 flex-wrap">
                <div className="rounded-2xl border-4 border-neutral-950 p-4">
                    <FaHtml5 className="text-cyan-400 text-8xl" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-950 p-4">
                    <FaCss3 className="text-cyan-400 text-8xl" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-950 p-4">
                    <FaReact className="text-cyan-400 text-8xl" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-950 p-4">
                    <FaPython className="text-cyan-400 text-8xl" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-950 p-4">
                    <SiRstudio className="text-cyan-400 text-8xl" />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
