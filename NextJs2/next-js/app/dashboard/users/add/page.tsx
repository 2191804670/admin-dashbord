import styles from "../../../ui/dashbord/users/AddUser/AddUser.module.css";
export default function AddUser() {
  return (
    <div className={styles.container}>
      <div className={styles.formsize}>
        <form action="" className={styles.form}>
          <input type="text" name="title" id="title" placeholder="Title" />
          <select name="Catagory" id="cat">
            <option value="orgignalCat">Choose a Catagory</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
          </select>
          <input type="number" name="price" id="price" placeholder="Price" />
          <input type="text" name="stock" id="stock" placeholder="stock" />
          <input type="text" name="color" id="color" placeholder="color" />
          <input type="text" name="size" id="size" placeholder="size" />
          <textarea name="Description" id="desc"></textarea>
        </form>
      </div>
      <input type="button" value="submit" className={styles.btn} />
    </div>
  );
}
