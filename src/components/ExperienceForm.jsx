import React, { useState, useEffect } from "react";

export default function ExperienceForm({formData, visibilityToggleFunction, visibilityBoolean}){

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
        setForms(prev => [...prev, {workplace: "", description: "", start: "", end: ""}])
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
            <button className="experience-toggle-section" onClick={toggleSectionVisibility}>
                <h1>Work Information</h1>
                <i className="fa-solid fa-chevron-down"></i>
            </button>
            </>
        )
    }
    return(
        <>
        <button className="experience-toggle-section" onClick={toggleSectionVisibility}>
            <h1>Work Information</h1>
            <i className="fa-solid fa-chevron-up"></i>
        </button>
        <h2>Edit Work Details</h2>
        <form onSubmit={onSubmit}>
        <div id="experience-buttons-container">
            <button type="button" id="experience-add-button" onClick={addItem}>Add</button>
            <button type="submit" id="experience-save-button">Save</button>
        </div>
        {forms.map((item, i) => (
            <div key={i} className="experience-item">
                <input name="workplace" placeholder="Workplace" value={item.workplace} onChange={(e) => onChange(i, e)} />
                <textarea  name="description" placeholder="Description" value={item.description} onChange={(e) => onChange(i, e)}/>
                <input name="start" placeholder="Start Date" value={item.start} onChange={(e) => onChange(i, e)}/>
                <input name="end" placeholder="End Date" value={item.end} onChange={(e) => onChange(i, e)}/>
                <button type="button" onClick={() => removeItem(i)}>Remove</button>
            </div>
            
        ))}
        </form>
        </>
    )
}