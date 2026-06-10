import React, { useState, useEffect } from "react";

export default function EducationForm({formData, visibilityToggleFunction, visibilityBoolean}){

    const [forms, setForms] = useState([]);

    const onChange = (index, e) => {
        const {name, value} = e.target
        setForms(prev => {
            const copy = [...prev]
            copy[index] = {...copy[index], [name]: value}
            return copy
        })
    }

    const addItem = () => {
        setForms(prev => [...prev, {school: "", qualification: "", start: "", end: ""}])
    }

    const removeItem = (index) => {
    setForms(prev => {
        const next = prev.filter((_, i) => i !== index);
        visibilityToggleFunction(next);
        return next;
    });
    };

    const onSubmit = (e) => {e.preventDefault(); visibilityToggleFunction(forms)}

    function toggleSectionVisibility(){
        visibilityToggleFunction(forms)
    }

    useEffect(() => { setForms(Array.isArray(formData) ? formData : []); }, [formData]);


    if(!visibilityBoolean){
        return(
            <>
            <button className="education-toggle-section" onClick={toggleSectionVisibility}>
                <h1>Education Information</h1>
                <i className="fa-solid fa-chevron-down"></i>
            </button>
            </>
        )
    }
    return(
        <>
        <button className="education-toggle-section" onClick={toggleSectionVisibility}>
            <h1>Education Information</h1>
            <i className="fa-solid fa-chevron-up"></i>
        </button>
        <h2>Edit Education Details</h2>
        <form onSubmit={onSubmit}>
        <div id="education-buttons-container">
            <button type="button" id="education-add-button" onClick={addItem}>Add</button>
            <button type="submit" id="education-save-button">Save</button>
        </div>
        {forms.map((item, i) => (
            <div key={i} className="education-item">
                <input name="school" placeholder="School" value={item.school} onChange={(e) => onChange(i, e)} />
                <input name="qualification" placeholder="Qualification" value={item.qualification} onChange={(e) => onChange(i, e)}/>
                <input name="start" placeholder="Start Date" value={item.start} onChange={(e) => onChange(i, e)}/>
                <input name="end" placeholder="End Date" value={item.end} onChange={(e) => onChange(i, e)}/>
                <button type="button" onClick={() => removeItem(i)}>Remove</button>
            </div>
            
        ))}
        </form>
        </>
    )
}