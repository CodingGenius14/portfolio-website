import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const handleLinkedin = () => {
    window.open(
        "https://www.linkedin.com/in/vikram-oberai-874573259/",
        "_blank"
    );
};

const handleGithub = () => {
    window.open("https://github.com/CodingGenius14", "_blank");
};

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <span className="text-blue-300 font-bold text-4xl">VO</span>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin onClick={handleLinkedin} />
                <FaGithub onClick={handleGithub} />
            </div>
        </nav>
    );
};

export default Navbar;
