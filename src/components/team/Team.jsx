import React from "react";
import teamInfo from "../../Data/teamInfo";
import Styles from './Team.module.css';
import { getImageUrl } from "../../utils";

export const Team = () => {
    return (
      <div className={Styles.teamSection} id="team">
        <h1 className={Styles.title}>meet the team</h1>
        <div className={Styles.teamContainer}>
          {teamInfo.map((member, index) => (
            <div className={Styles.card} key={index}>
              <img src={getImageUrl(`team/ph_${member.id}.jpg`)} alt={member.name} className={Styles.image} />
              <div className={Styles.content}>
                <h2 className={Styles.name}>{member.name}</h2>
                <h3 className={Styles.role}>{member.role}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Team;
