import { useState } from "react";
import Image from "next/image";

import arrowR from "../public/arrowr.png";
import arrowL from "../public/arrowl.png";
import featured from "../public/featured.png";
import featuredOne from "../public/featured1.png";
import styles from "../styles/featured.module.css"



const Featured = () => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction: string) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2)
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0)
    }
  };

  const images = [
    featured,
    featuredOne
  ];
  
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src={arrowL} alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image key={i} 
              src={img} 
              alt="" 
              width={300} 
              height={300} 
              objectFit="contain"
              layout="fill"/>
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
      <Image src={arrowR} alt="" layout="fill" objectFit="contain"/>
      </div>
    </div>
  )
}

export default Featured;

// import { useState } from "react";
// import Image from "next/image";

// import arrowR from "../public/arrowr.png";
// import arrowL from "../public/arrowl.png";
// import featured from "../public/featured.png";
// import featuredOne from "../public/featured1.png";



// const Featured = () => {
//   const [index, setIndex] = useState(0);
//   const handleArrow = (direction: string) => {
//     if (direction === "l") {
//       setIndex(index !== 0 ? index - 1 : 2)
//     }
//     if (direction === "r") {
//       setIndex(index !== 2 ? index + 1 : 0)
//     }
//   }

//   console.log(index);
  
//   const images = [
//     featured,
//     featuredOne
//   ]
//   return (
//     // styles.container
//     <div className=" bg-orange-600 overflow-hidden" 
//       style={{height: "calc(100vh - 100px)"}}>
//       {/* styles.arrowcontainer */}
//       <div className=" relative w-20
//         h-20 top-0 bottom-0
//         m-auto cursor-pointer"
//         style={{zIndex: "2", left: 0}} 
//         onClick={() => handleArrow("l")}>
//         <Image src={arrowL} alt="" layout="fill" objectFit="contain"/>
//       </div>
//       {/* styles.wrapper */}
//       <div className="" 
//       style={{width: "300vw", 
//         height: "100%", 
//         transform: `translateX(${-100*index}vw)`, 
//         transition: " all 1.5s ease-in-out"}}>
//         {/* styles.imgcontainer */}
//         <div className="w-screen relative
//           h-full">
//           {images.map((img, i ) => (
//             <Image key={i} src={img} 
//               alt="" 
//               width={400} 
//               height={300} 
//               objectFit="contain"
//               layout="fill"/> 
//           ))}
//         </div>
//       </div>
//       {/* styles.arrowcontainer */}
//       <div className="relative w-20
//         h-20 top-0 bottom-0
//         m-auto cursor-pointer"
//         style={{zIndex: "2", right: 0}} 
//         onClick={() => handleArrow("1")}>
//         <Image src={arrowR} alt="" layout="fill" objectFit="contain"/>
//       </div>
//     </div>
//   )
// }

// export default Featured;