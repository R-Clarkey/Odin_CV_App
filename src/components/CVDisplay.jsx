import React from "react";

export default function CVDisplay({general = {}, education = [], experience=[]}){

    console.log("education prop is", education, Array.isArray(education), education.length);

    return(
        <>
        <div id="display-general-container">
            <div id="display-general-name">
                {general.name}
            </div>
            <div id="display-general-details-container">
                <div id="display-general-email">
                    {general.email}
                </div>
                <div id="display-general-phone">
                    {general.phone}
                </div>
            </div>
        </div>

        <div id="display-education-container">
            <div id="display-education-title">Education</div>
            <div className="display-section-content">
                {education.length === 0 ? <p>No Education Information Added</p> : 
                education.map((edu, i) => (
                    <section key={i} className="display-list-item">
                        <div className="display-item-information">
                            <h3 className="display-item-qualification">{edu.qualification || "Qualification"}</h3>
                            <p className="display-item-date">{edu.start || "Start"} - {edu.end || "End"}</p>
                        </div>
                        <p className="display-item-school">{edu.school || "School"}</p>
                    </section>
                ))}
            </div>
        </div>

        <div id="display-experience-container">
            <div id="display-experience-title">Work Experience</div>
            <div className="display-section-content">
                {experience.length === 0 ? <p>No Work Information Added</p> : 
                experience.map((exp, i) => (
                    <section key={i} className="display-list-item">
                        <div className="display-item-information">
                            <h3 className="display-item-workplace">{exp.workplace}</h3>
                            <p className="display-item-date">{exp.start} - {exp.end}</p>
                        </div>
                        <p className="display-item-role-description">{exp.description}</p>
                    </section>
            ))}
            </div>
        </div>


        </>
    )
}