import React, {useState} from "react";
import FormComponent from "../formComponents/FormComponent";
import {signWithGoogle} from "../firebase/firebase.utils";

const SignUpLogIn = () => {
    const [formState, setFormState] = useState({email: "", password: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState({email: "", password: ""});
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState({...formState, [name]: value});
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-bold">I already have an account!</p>
            <p>Sign me in with Email and Password</p>
            <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
                <FormComponent
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                <FormComponent
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                />
                <div className="flex justify-center space-x-2">
                    <button
                        type="submit"
                        className="p-2 text-gray-100 transition-all duration-200 ease-in-out bg-black border-2 border-black rounded shadow-lg cursor-pointer hover:bg-transparent hover:text-black active:scale-95 active:shadow-none"
                        // style={{boxShadow: "5px 5px 10px 2px"}}
                    >
                        Log In
                    </button>
                    <button
                        onClick={signWithGoogle}
                        className="p-2 text-gray-100 transition-all duration-200 ease-in-out bg-blue-500 rounded cursor-pointer active:scale-95 active:shadow-none hover:bg-blue-600 focus:outline-none"
                    >
                        Connect with Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUpLogIn;
