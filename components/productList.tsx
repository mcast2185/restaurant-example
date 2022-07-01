import styles from "../styles/productList.module.css";
import FoodCart from "./foodCart";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        The Best Pizza in Town!
      </h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, officia similique consequuntur, voluptates 
        provident architecto, voluptatibus adipisci error sint dolor libero. Dicta obcaecati nihil aperiam quas, perferendis optio vero incidunt!
        Tempore quam doloremque velit voluptatum? Illum ratione neque et ipsa deleniti vitae. Sapiente blanditiis esse quos, 
        delectus illo omnis quibusdam autem iure similique! Nobis, dicta reiciendis. Minus perferendis possimus atque?
      </p>
      <div className={styles.wrapper}>
        <FoodCart/>
        <FoodCart/>
        <FoodCart/>
        <FoodCart/>
        <FoodCart/>
        <FoodCart/>
        <FoodCart/>
        <FoodCart/>
      </div>
    </div>
  )
}

export default ProductList;