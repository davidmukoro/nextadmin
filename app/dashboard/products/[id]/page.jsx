import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product._id} />
          <label>Title</label>
          <input type="text" placeholder={product.title} name="title" />
          <label>Price</label>
          <input type="number" placeholder={product.price} name="price" />
          <label>Stock</label>
          <input type="number" placeholder={product.stock} name="stock" />
          <label>Color</label>
          <input type="text" placeholder={product.color} name="color" />
          <label>Size</label>
          <input type="number" placeholder={product.size} name="size" />

          <label>Category</label>
          <select name="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" cols="30" rows="10">
            {product.desc}
          </textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
