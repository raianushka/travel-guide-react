import React, { useState } from "react";



function Card({id,image,info,name,price,removeTour}){

    const [readmore,setReadmore]=useState(false)
    const description =readmore ? info :`${info.substring(0,150)}....`
    function readmoreHandler(){
        setReadmore(!readmore)
    }



    return(
        <div className=" flex w-[400px] h-max m-4 p-4 flex-col rounded-lg items-center justify-center  shadow-black shadow-sm">

            <img src={image} className="w-full object-cover aspect-square" alt=""></img>

            <div className="flex flex-col items-start justify-start w-full my-1 mx-5" >
                <h4 className="text-[#1faa59] font-bold text-[1.3rem]">
                    ₹{price}
                    </h4>
                <h4 className="text-[1.5rem] font-bold">{name}</h4>
            </div>

            <div className="text-left">
                {description}
                <span className="text-[#12b0e8] cursor-pointer" onClick={readmoreHandler}>
                    {readmore ? `Show Less` : `Read More`}
                </span>
            </div>

            <button className="bg-[#b4161b21] border-2 border-[#b4161b] border-solid px-5 py-2 mt-5 text-lg cursor-pointer font-bold rounded-lg hover:bg-red-600 hover:text-white hover:transition-[0.25s]" onClick={() => removeTour(id)}>
                Not interested
            </button>

        </div>
    );
}
export default Card;