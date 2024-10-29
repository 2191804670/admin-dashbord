import styles from "../.././../ui/dashbord/products/productsid/productsid.module.css";
import Image from "next/image";

const SingleproductsPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="Product Image" fill />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value="" />
          <label>Title</label>
          <input type="text" name="title" placeholder="Enter title" />
          <label>Price</label>
          <input type="number" name="price" placeholder="Enter price" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="Enter stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Enter color" />
          <label>Size</label>
          {/* Remove the 'type' attribute from textarea */}
          <textarea name="size" placeholder="Enter size"></textarea>
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          {/* Ensure rows is a number */}
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder="Enter description"
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleproductsPage;
