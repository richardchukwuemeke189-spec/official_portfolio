import React from "react";
import '../styles/skills.css';
import { skills_data } from "../data/skillsData";

function Skills(){

    return(
        <>
            <div style={{marginTop:'120px'}}>
                <div className="skills-header">
                    <h2>SKILLS</h2>
                    <span>Tools I Work With Daily</span>
                </div>
                <div className="skills-container row mt-3">
                    {skills_data.map((category) => (
                        <div key={category.id} className="skill-category-card col-12 col-sm-6 col-lg-4">
                            <h4 className="skill-title">{category.title}</h4>

                            <ul>
                                {category.description.map((skill, index) => (
                                    <li className="skills-list mt-4" key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills;