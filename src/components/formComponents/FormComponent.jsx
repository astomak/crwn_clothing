import React from "react";

const FormComponent = (props) => {
    return (
        <div className="relative mt-8">
            <input
                {...props}
                className="peer relative w-[16rem] md:w-[24rem] placeholder-transparent bg-transparent border-b-2 border-black focus:outline-none focus:border-b-[3px] z-10"
            ></input>
            <label
                for={props.id}
                className="absolute left-0 transition-all duration-300 ease-in-out -top-7 peer-placeholder-shown:top-0 peer-focus:-top-7"
            >
                {props.placeholder}
            </label>
        </div>
    );
};

export default FormComponent;
