import React, { useState, useEffect } from "react";

export default function GeneralInfoForm({formData, visibilityToggleFunction, visibilityBoolean}){

    const [form, setForm] = useState({ name: "", email: "", phone: "" });

    const onChange = (e) => setForm((f) => ({...f,[e.target.name]: e.target.value}))

    const onSubmit = (e) => {e.preventDefault(); visibilityToggleFunction(form)}

    function toggleSectionVisibility(){
        visibilityToggleFunction(form)
    }

    useEffect(() => {
        setForm(formData);
    }, [formData]);

    if(!visibilityBoolean){
        return(
            <>
            <button className="education-toggle-section" onClick={toggleSectionVisibility}>
                <h1>General Information</h1>
                <i className="fa-solid fa-chevron-down"></i>
            </button>
            </>
        )
    }
    return(
        <>
        <button className="education-toggle-section" onClick={toggleSectionVisibility}>
            <h1>General Information</h1>
            <i className="fa-solid fa-chevron-up"></i>
        </button>
        <form className="form-section" onSubmit={onSubmit}>
            <h2>Edit General Information</h2>
            <div className="form-input-section">
                <label>Name:</label>
                <input name="name" value={form.name} onChange={onChange}/>
            </div>

            <div className="form-input-section">
                <label>Email:</label>
                <input name="email" value={form.email} onChange={onChange}/>
            </div>

            <div className="form-input-section">
                <label>Phone:</label>
                <input name="phone" value={form.phone} onChange={onChange}/>
            </div>
            <button type="submit">Save</button>
        </form>
        </>
    )
}