import React from "react";

const Contact = () => {
    return (
        <div className="flex justify-center items-cente">
            <div className="flex flex-col my-20 border-black border-4 p-4 bg-black">
                <h2 className="text-4xl mb-5 text-center">Contact Me</h2>
                <h5 className="mb-5 text-center">Vikram Oberai</h5>
                <p className="text-center">Voberai10@gmail.com</p>
                <div className="border-white border-2 my-5"></div>
                <div className="flex flex-col">
                    <label for="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        style={{ width: "24vw" }}
                        className="mb-3 text-black"
                    />
                    <label for="emailInfo">Email</label>
                    <input
                        type="email"
                        id="emailInfo"
                        style={{ width: "24vw" }}
                        className="mb-3 text-black"
                    />
                    <label for="desc">Description</label>
                    <input
                        type="text"
                        id="desc"
                        style={{ width: "24vw" }}
                        className="mb-3 text-black"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
