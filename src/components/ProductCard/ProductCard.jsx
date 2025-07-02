import React from "react";
import styles from "./ProductCard.module.css";
import basket from "../../assets/images/Basket.svg";
const ProductCard = ({ product }) => {
  return (
    <article className={styles.productCard}>
      <div className={styles.productImg}>
        <img src={product.image} alt="" />
      </div>
      <div className={styles.productContent}>
        <div className={styles.productInfo}>
          <h3>{product.title}</h3>
          <span>{product.price}</span>
        </div>
        <p className={styles.productDesc}>{product.description}</p>
        <div className={styles.productBtns}>
          <button>
            <img
              src={basket}
              alt=""
              width={17}
              height={16}
              style={{ objectFit: "cover" }}
            />
            <span>Add to cart</span>
          </button>
          <button>Buy now</button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
