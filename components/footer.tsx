import Image from "next/image";

import styles from "../styles/footer.module.css";
import bg from "../public/bg.png";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src={bg} objectFit="cover" alt="" layout="fill"/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Oh yeah, we did the deity pizza well baked slice of pizza.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Find our restaurants
          </h1>
          <p className={styles.text}>
            1234 S. Won road #444.
            <br /> NewYork, 85022
            <br /> (602) 867-1910
          </p>
          <p className={styles.text}>
            1234 W. Eon road #444.
            <br /> NewYork, 85022
            <br /> (602) 967-1010
          </p>
          <p className={styles.text}>
            1234 N. don road #444.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Working hours
          </h1>
          <p className={styles.text}>
            Sat - Sun
            <br /> 9:00 - 9:00
          </p>
          <p className={styles.text}>
            Mon - Fri
            <br /> 8:00 - 10:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;