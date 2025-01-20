'use client';
const Footer=()=>{
    return(
    <div className="bg-white flex flex-col lg:flex-row h-auto w-full justify-between z-50">
        <div className="w-1/5 p-8 mt-10 flex flex-col justify-center items-center lg:ml-6">
            <img src='https://tse2.mm.bing.net/th?id=OIP.MQGnFjXyCTS9e1bmvVZIygAAAA&pid=Api&P=0&h=180'/>
            <h1 className="text-3xl font-bold mt-8">GDSC IIT Indore</h1>
        </div>
        <div className=" w-1/5 mx-auto contact flex flex-col items-left">
            <h1 className="font-semibold text-2xl mt-10">Contact Us</h1>
            <div>Email:gdsc@iiti.ac.in</div>
            <div>Location:IIT Indore,Simrol,Khandva Road,Indore,Madhya Pradesh,India</div>
        </div>
        <div className="socials w-1/5">

        </div>
    </div>)
}

export default Footer;