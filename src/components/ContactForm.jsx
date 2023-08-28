import React from "react";
import { useState, useEffect } from "react";
import { Output } from "./Output";

export const ContactForm = () => {
    const [fName, setfName] = useState("");
    const [mName, setmName] = useState("");
    const [lName, setlName] = useState("");
    const [Email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const First = e.target.firstName.value;
        const Mid = e.target.middleName.value;
        const Last = e.target.lastName.value;
        const Email = e.target.email.value;

        localStorage.setItem("firstName", JSON.stringify(First));
        localStorage.setItem("midName", JSON.stringify(Mid));
        localStorage.setItem("lastName", JSON.stringify(Last));
        localStorage.setItem("email", JSON.stringify(Email));

        const F = JSON.parse(localStorage.getItem("firstName"));
        const M = JSON.parse(localStorage.getItem("midName"));
        const L = JSON.parse(localStorage.getItem("lastName"));
        const E = JSON.parse(localStorage.getItem("email"));

        if (F && M && L && E) {
            setfName(F);
            setmName(M);
            setlName(L);
            setEmail(E);
        }
    };


    useEffect(() => {
        const F = JSON.parse(localStorage.getItem("firstName"));
        const M = JSON.parse(localStorage.getItem("midName"));
        const L = JSON.parse(localStorage.getItem("lastName"));
        const E = JSON.parse(localStorage.getItem("email"));

        if (F && M && L && E) {
            setfName(F);
            setmName(M);
            setlName(L);
            setEmail(E);
        }
    }, []);

    return (
        <>
            {/* input form */}
            <form className="input-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    className="input-bar"
                    name="firstName"

                />

                <input
                    type="text"
                    placeholder="Middle Name"
                    className="input-bar"
                    name="middleName"
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    className="input-bar"
                    name="lastName"

                />

                <input
                    type="email"
                    placeholder="Email"
                    className="input-bar"
                    name="email"

                />

                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>

            {/*  output */}
            <Output fName={fName} mName={mName} lName={lName} Email={Email} />
        </>
    );
};
