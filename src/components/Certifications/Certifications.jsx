import React from "react";

import styles from "./Certifications.module.css";
import certification from "../../data/certifications.json";
import { getImageUrl } from "../../utils";


export const Certifications = () => {
    return (
      <section className={styles.container} id="certifications">
        <h2 className={styles.title}>Certifications</h2>
        <div className={styles.content}>
        <ul className={styles.certifications}>
          {certification.map((certificationItem, id) => {
            return (
              <li key={id} className={styles.certificationItem}>

                <img
                  src={getImageUrl(certificationItem.imageSrc)}
                  alt={`${certificationItem.organisation} Logo`}
                /> 
                
                <div className={styles.certificationItemDetails}>
                  <h3>{`${certificationItem.role}, ${certificationItem.organisation}`}</h3>
                  <p>{`${certificationItem.startDate}`}</p>
                  
                <ul>
                    {certificationItem.description.map((description, id) => {
                      return <li key={id}>{description}</li>;
                    })}
                    <div> 
                    <a href= {`${certificationItem.certificate}`} target="_blank" rel="noopener noreferrer">
                    View Certification </a>
                    </div> 
                </ul>
                </div>
              </li>
            );
          })}
        </ul>
        </div>
    </section>
    )
}