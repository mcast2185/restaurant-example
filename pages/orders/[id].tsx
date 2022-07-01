import Image from "next/image";
import styles from "../../styles/order.module.css";

import paid from "../../public/paid.png";
import checked from "../../public/checked.png";
import bake from "../../public/bake.png";
import bike from "../../public/bike.png";
import delivered from "../../public/delivered.png";

const Order = () => {
  const status = 0;
  const statusClass = (index: any) => {
    if ( index - status < 1 ) return styles.done
    if ( index - status === 1 ) return styles.inProgress
    if ( index - status > 1 ) return styles.undone
  }
  return (
    <div className={styles.container} >
      <div className={styles.left} >
       <div className={styles.row} >
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <span className={styles.id}>1234123</span>
            </td>
            <td>
              <span className={styles.name}>
                Rick Sanchez
              </span>
            </td>
            <td>
              <span className={styles.address}>CitadelofRicks st. 123 San Diego CA, 93214</span>
            </td>
            <td>
              <span className={styles.total}>$39.80</span>
            </td>
          </tr>
        </table>
       </div>
        <div className={styles.row} >
          <div className={statusClass(0)} >
            <Image src={paid} width={30} height={30} alt=""/>
            <span className={""} >
              Payment
            </span>
            <div className={styles.checkedIcon} >
              <Image src={checked} width={20} height={20} alt=""/>
            </div>
          </div>
          <div className={statusClass(1)} >
            <Image src={bake} width={30} height={30} alt=""/>
            <span className={""} >
              Preparing
            </span>
            <div className={styles.checkedIcon} >
              <Image src={checked} width={20} height={20} alt=""/>
            </div>
          </div>
          <div className={statusClass(2)} >
            <Image src={bike} width={30} height={30} alt=""/>
            <span className={""} >
              On the Way!
            </span>
            <div className={styles.checkedIcon} >
              <Image src={checked} width={20} height={20} alt=""/>
            </div>
          </div>
          <div className={statusClass(3)} >
            <Image src={delivered} width={30} height={30} alt=""/>
            <span className={""} >
              Delivered
            </span>
            <div className={styles.checkedIcon} >
              <Image src={checked} width={20} height={20} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right} >
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
          <button disabled className={styles.button}>Paid!</button>
        </div>
      </div>
    </div>
  )
}

export default Order;