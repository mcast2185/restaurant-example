import Image from "next/image";
import styles from "../styles/foodCart.module.css";
import pizza from "../public/pizza.png";

const FoodCart = () => {
  return (
    <div className={styles.container}>
      <Image src={pizza} alt="" width={400} height={400} />
      <h1 className={styles.title}>
        Fiori di zucca
      </h1>
      <span className={styles.price}>$19.99</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facere quae, eligendi earum eius atque magnam officia fugiat debitis cumque. Explicabo laboriosam at ullam culpa laudantium fugiat cumque in dolorem.
      </p>
    </div>
  )
}

export default FoodCart;