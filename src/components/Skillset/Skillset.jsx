import React from "react";

import styles from "./Skillset.module.css";
import skills from "../../data/skills.json";

import { getImageUrl } from "../../utils";
//import Pdf from "../../../assets/history/VerizonCertificate.pdf";
//import Pdf from "../../../assets/history/JPMorganCertificate.pdf"
//import Pdf from "../../../assets/history/DatacomCertificate.pdf"




export const Skillset = () => {
  return (
    <section className={styles.container} id="skillset">
      <h2 className={styles.title}>Skillset</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};