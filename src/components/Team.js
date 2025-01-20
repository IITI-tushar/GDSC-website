"use client";
import { useEffect, useState } from "react";
import StarryBackground from "@/components/ui/StarBackground";
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { TeamData } from "@/json/teamData";
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
const Team = () => {
    const [teamData, setTeamData] = useState([]);
    const ref = useRef();
    useEffect(()=>{
        setTeamData(TeamData)
    },[]);
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
                    {teamData.map((member)=>(<Flippy
                        flipOnHover={false} 
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        ref={ref}
                    ><FrontSide style={style} className=" text-white team-member text-center p-6 rounded-lg shadow-lg hover:scale-105 transition-transform backdrop-blur-md border border-black bg-opacity-15"><div >
                            <img
                                src={member.image}
                                alt="Team Member 1"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-300 h">{member.position}</p>
                        </div></FrontSide>
                        <BackSide style={style}><div className="h-full text-white team-member text-center p-6 rounded-lg shadow-lg hover:scale-105 transition-transform backdrop-blur-md border border-black">{member.about}
                        </div>
                        </BackSide>
                        </Flippy>))}
                </div>
                
            </div>
            <Footer/>
        </div>
    );
};

export default Team;
