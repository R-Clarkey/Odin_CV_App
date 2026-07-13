import React from "react";

export default function CVDisplay({general = {}, education = [], experience=[]}){


    return(
        <div id="display-cv-container">
            <div id="display-general-container">
                <div id="display-general-name">
                    {general.name || "John Smith"}
                </div>
                    <div id="display-general-email">
                        {general.email || "john@smith.com"}
                    </div>
                    <div id="display-general-phone">
                        {general.phone || "+44 7XXX XXXXXX"}
                    </div>
            </div>

            <div id="display-education-container">
                <div id="display-education-title">Education</div>
                <div className="display-section-content">
                    {education.length === 0 ? <p className="display-empty-form-message">No Education Information Added</p> : 
                    education.map((edu, i) => (
                        <section key={i} className="display-list-item">
                            <h3 className="display-item-qualification">{edu.qualification || "Qualification"}</h3>
                            <p className="display-item-date">{edu.start || "Start"} - {edu.end || "End"}</p>
                            <p className="display-item-school">{edu.school || "School"}</p>
                        </section>
                    ))}
                </div>
            </div>

            <div id="display-experience-container">
                <div id="display-experience-title">Work Experience</div>
                <div className="display-section-content">
                    {experience.length === 0 ? <p className="display-empty-form-message">No Work Information Added</p> : 
                    experience.map((exp, i) => (
                        <section key={i} className="display-list-item">
                            <h3 className="display-item-workplace">{exp.workplace || "Workplace"}</h3>
                            <p className="display-item-date">{exp.start || "Start"} - {exp.end || "End"}</p>
                            <p className="display-item-role-description">{exp.description || "Description Text"}</p>
                        </section>
                ))}
                </div>
            </div>


        </div>
    )
}