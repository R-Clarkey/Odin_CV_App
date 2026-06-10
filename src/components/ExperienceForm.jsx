import React, { useState, useEffect } from "react";

export default function ExperienceForm({formData, visibilityToggleFunction, visibilityBoolean}){

    const [form, setForm] = useState([]);

    const onChange = (e) => setForm((f) => ({...f,[e.target.name]: e.target.value}))

    const onSubmit = (e) => {e.preventDefault(); visibilityToggle(form)}

    function toggleSectionVisibility(){
        visibilityToggleFunction(form)
    }

    useEffect(() => {
        setForm(formData);
    }, [formData]);

    console.log(formData, visibilityToggleFunction, visibilityBoolean)

    if(!visibilityBoolean){
        return(
            <>
            <button className="education-toggle-section" onClick={toggleSectionVisibility}>
                <h1>Work Information</h1>
                <i className="fa-solid fa-chevron-down"></i>
            </button>
            </>
        )
    }
    return(
        <>
        <button className="education-toggle-section" onClick={toggleSectionVisibility}>
            <h1>Work Information</h1>
            <i className="fa-solid fa-chevron-up"></i>
        </button>
        <h1>This has been opened!</h1>
        </>
    )
}