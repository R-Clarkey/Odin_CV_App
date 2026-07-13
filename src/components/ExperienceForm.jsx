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
            <button className="toggle-section" onClick={toggleSectionVisibility}>
                <div className="toggle-section-text">Work Information</div>
                <i className="fa-solid fa-chevron-down"></i>
            </button>
            </>
        )
    }
    return(
        <>
        <button className="toggle-section" onClick={toggleSectionVisibility}>
            <div className="toggle-section-text">Work Information</div>
            <i className="fa-solid fa-chevron-up"></i>
        </button>
        <form className="form-section" onSubmit={onSubmit}>
        <h2>Edit Work Details</h2>
        <div className="buttons-container">
            <button className="form-button" type="button" id="experience-add-button" onClick={addItem}>Add</button>
            <button className="form-button" type="submit" id="experience-save-button">Save</button>
        </div>
        {forms.map((item, i) => (
            <div key={i} className="experience-item">

                <div className="form-input-section">
                    <label htmlFor="workplace">Workplace:</label> 
                    <input name="workplace" placeholder="Workplace" value={item.workplace} onChange={(e) => onChange(i, e)} />
                </div>
                
                <div className="form-input-section">
                    <label htmlFor="description">Description:</label> 
                    <textarea  name="description" placeholder="Description" value={item.description} onChange={(e) => onChange(i, e)}/>
                </div>

                <div className="form-input-section">
                    <label htmlFor="start">Start Date:</label> 
                    <input name="start" placeholder="Start Date" value={item.start} onChange={(e) => onChange(i, e)}/>
                </div>

                <div className="form-input-section"> 
                    <label htmlFor="end">End Date:</label>
                    <input name="end" placeholder="End Date" value={item.end} onChange={(e) => onChange(i, e)}/>
                </div>
                    <button className="form-button form-button-remove" type="button" onClick={() => removeItem(i)}>Remove</button>
            </div>
            
        ))}
        </form>
        </>
    )
}