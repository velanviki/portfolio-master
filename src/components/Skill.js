import React, { useState } from 'react';
import "../styles/Skill.css";
import { SKILLS } from '../Utils/data';
import SkillCard from './SkillCard';
import SkillInfoCard from './SkillInfoCard';


const Skill = () => {

    const [selectedSkill,setSelectedSkill] = useState(SKILLS[0])

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    }

  return (
    <section id="skill"className='skills-container'> 
            <h1 class="section-heading-title">SKILLS </h1>

    <h5>Technical Proficiency</h5>

    <div className='skills-content'>
        <div className='skills'>
            {SKILLS.map((item) => (
                <SkillCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={()=> {
                    handleSelectSkill(item)
                }}
                />
            ))}
        </div>

        <div className='skills-info'>
            <SkillInfoCard 
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
            />
        </div>
    </div>

    </section>
  )
}

export default Skill