// import Image from 'next/image';

// import pizzaImg from "../public/pizza.png";
// import styles from '../../styles/cart.module.css';

// const Cart = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.left} >
//         <table className={styles.table}>
//           <tr className={styles.tr}>
//             <th>Product</th>
//             <th>Name</th>
//             <th>Extras</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Total</th>
//           </tr>
//           <tr>
//             <td>
//               <div className={styles.imgContainer} >
//                 <Image src={pizzaImg} objectFit="cover" layout="fill" alt=""/>
//               </div>
//             </td>
//             <td>
//               <span className={styles.name} >
//                 Coralzo
//               </span>
//             </td>
//             <td>
//               <span className={styles.extras} >
//                 Double ingredients, spicy sauce
//               </span>
//             </td>
//             <td>
//               <span className={styles.price} >
//                 $19.99
//               </span>
//             </td>
//             <td>
//               <span className={styles.quantity} >
//                 2
//               </span>
//             </td>
//             <td>
//               <span className={styles.total} >
//                 $39.98
//               </span>
//             </td>
//           </tr>
//         </table>
//       </div>
//       <div className={styles.right} >
//         <div className={styles.wrapper} >
//           <h2 className={styles.title} >
//             Cart total
//           </h2>
//           <div className={styles.totalText} >
//             <b className={styles.totalTextTitle}>
//               Subtotal: <br /> $79.60
//             </b>
//           </div>
//           <div className={styles.totalText} >
//             <b className={styles.totalTextTitle}>
//               Discount: <br /> $0.00
//             </b>
//           </div>
//           <div className={styles.totalText} >
//             <b className={styles.totalTextTitle}>
//               Total: <br /> $79.60
//             </b>
//           </div>
//           <button className={styles.button}>Check out now</button>
//         </div> 
//       </div>
//     </div>
//   )
// }

// export default Cart;

import styles from "../styles/Cart.module.css";
import Image from "next/image";
import pizzaImg from "../public/pizza.png";


const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={pizzaImg}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$19.90</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$39.80</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={pizzaImg}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$19.90</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$39.80</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;