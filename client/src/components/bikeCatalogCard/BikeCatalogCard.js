import styles from "./BikeCatalogCard.module.css";
import { Link } from "react-router-dom";
// import slugify from "slugify";


const Card = ({ product }) => {
    return (
        <div className={styles.card}>
            <div>
                <img src={`/images/${product.image}`} alt="" />
            </div>
            <div >
                <div>
                    <h3>{product.title}</h3>
                </div>
                <div >
                    <div >
                        {product.price.toFixed(2)} <small>$</small>
                    </div>
                    <div>
                        <button className={styles.btnView}>
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;