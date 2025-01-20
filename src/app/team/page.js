"use client";
import { useEffect, useState } from "react";
import StarryBackground from "../../components/ui/StarBackground";
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { TeamData } from "../../json/team";
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
const Team = () => {
    const [teamData, setTeamData] = useState([]);
    const ref = useRef();
    useEffect(() => {
        setTeamData(TeamData)
    }, []);
    const style = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 'auto'
    };
    return (

        <div className="relative w-full ">
            <Navbar />
            <StarryBackground />
            <div className="backdrop-blur-md bg-white/30 container mx-auto my-28 relative z-10 py-16 px-4 text-black w-8/12 flex flex-col justify-center items-center border-black border-2 rounded-md ">
                <div className="w-auto">
                    <h1 className="team-head text-4xl font-extrabold mb-6">Meet Our Team</h1></div>
                <p className="text-lg mb-8 text-center">
                    Meet Our GDSC members who hold the expertise in their respective fields.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Meet our team members:</h2>
                <div className="team-members w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20 ">
                    {teamData.map((member) => (<Flippy
                        flipOnHover={false}
                        flipOnClick={true}
                        flipDirection="horizontal"
                        ref={ref}
                    ><FrontSide style={style}><div >
                        <div className="relative w-100 h-72 m-5 overflow-hidden rounded-3xl shadow-lg flex justify-center items-center group">
                            <div className="absolute inset-0">
                                <img
                                    src="https://64.media.tumblr.com/c52608d4313c3f351d158f6ae496fa21/tumblr_o604ztZgoC1twq7rlo1_500.jpg"
                                    alt="Profile Image"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-[-160px] w-full h-40 bg-white/60 backdrop-blur-lg shadow-md border border-white/20 flex flex-col justify-center items-center transition-all duration-500 group-hover:bottom-0">
                                <div className="text-center">
                                    <h3 className="text-white text-xs uppercase tracking-widest font-medium mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 group-hover:delay-100">
                                        Someone Famous
                                        <br />
                                        <span className="text-[10px] font-light">Creative Designer</span>
                                    </h3>
                                </div>
                                <ul className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 group-hover:delay-200">
                                    <li>
                                        <a href="#" className="text-white">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div></FrontSide>
                        <BackSide style={style}><div className="h-full text-white team-member text-center p-6 rounded-lg shadow-lg hover:scale-105 transition-transform backdrop-blur-md border border-black">{member.about}
                        </div>
                        </BackSide>
                    </Flippy>))}
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Team;
