import { useState } from 'react';
import Image from 'next/image';

import styles from '../../styles/product.module.css';
import pizzaImg from "../../public/pizza.png";
import sizeImg from "../../public/size.png";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: pizzaImg,
    name: "diety",
    price: [19.99, 23.99, 27.99],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsam. Asperiores provident non consectetur reiciendis aut ipsum, perspiciatis, fuga odit repellendus commodi enim officia a adipisci"
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer} >
         <Image src={pizza.img} objectFit="contain" layout="fill" alt=""/>
        </div>
      </div>
      <div className={styles.right} >
        <h1 className={styles.title}>
          {pizza.name}
        </h1>
        <span className={styles.price}>
          ${pizza.price[size]}
        </span>
        <p className={styles.desc} >
          {pizza.desc}
        </p>
        <h3 className={styles.choose}>
          Choose the size
        </h3>
        <div className={styles.sizes} >
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src={sizeImg} layout="fill" alt=""/>
            <span className={styles.number} >
              Small
            </span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src={sizeImg} layout="fill" alt=""/>
            <span className={styles.number} >
              Medium
            </span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src={sizeImg} layout="fill" alt=""/>
            <span className={styles.number} >
              Large
            </span>
          </div>
        </div>
        <h3 className={styles.choose} >
          Choose additional ingredients
        </h3>
        <div className={styles.ingredients} >
          <div className={styles.option} >
            <input type="checkbox" 
              id="double" 
              name="double" 
              className={styles.checkbox}/>
            <label htmlFor="double">
              Double ingredients
            </label>
          </div>
          <div className={styles.option} >
            <input type="checkbox" 
              id="cheese" 
              name="cheese" 
              className={styles.checkbox}/>
            <label htmlFor="cheese">
              Extra cheese
            </label>
          </div>
          <div className={styles.option} >
            <input type="checkbox" 
              id="spicy" 
              name="spicy" 
              className={styles.checkbox}/>
            <label htmlFor="spicy">
              Spicy Sauce
            </label>
          </div>
          <div className={styles.option} >
            <input type="checkbox" 
              id="garlic" 
              name="garlic" 
              className={styles.checkbox}/>
            <label htmlFor="garlic">
              Garlic Sauce
            </label>
          </div>
        </div>
        <div className={styles.add} >
          <input type="number" defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product;