import styles from "../styles/header.module.css";

import Image from "next/image";
import phone from "../public/telephone.png"
import logo from "../public/logo.png"
import cart from "../public/cart.png"


const Header = () => {
  return (
    // styles.container
    // <div className="h-24 py-0
    //   px-12 bg-orange-600
    //   flex items-center justify-between 
    //   sticky top-0 z-50">
    <div className={styles.container}>
        {/* styles.item child 1*/}
      <div className={styles.item}>
      {/* <div className="w-1/4 flex
        items-center"> */}
          {/* styles.callbutton */}
        <div className={styles.callButton}>
        {/* <div className="bg-white rounded-full
          p-2.5 w-12 h-12"> */}
          <Image src={phone} width={32} height={32} alt=""/>
        </div>
        {/* styles.texts */}
        {/* <div className="ml-5 text-white"> */}
        <div className={styles.texts}>
          {/* styles.text child 1 */}
          <div className={styles.text}>
          {/* <div className="text-xs
            font-medium"> */}
            Order Now!
          </div>
          {/* styles.text child 2 */}
          <div className={styles.text}>
          {/* <div className="text-xl
            font-black"> */}
            012-345-6789
          </div>
        </div>
      </div>
      {/* styles.item child 2 */}
      <div className={styles.item}> 
      {/* <div className="w-3/4 flex
        items-center">  */}
        {/* styles.list */}
        <ul className={styles.list}>
        {/* <ul className="p-0 flex
          items-center list-none
          text-white"> */}
          {/* styles.listitem */}
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src={logo} alt="" 
            width={130} height={110}/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      {/* styles.item child 3 */}
      <div className={styles.item}>
      {/* <div className="w-1/4 flex
        items-center justify-end"> */}
          {/* styles.cart */}
        <div className="relative">
          <Image src={cart} alt="" 
            width={40} height={40}/>
          {/* styles.counter   */}
          <div className={styles.counter}>
            2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;