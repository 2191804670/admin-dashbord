import styles from "../../../ui/dashbord/users/AddUser/AddUser.module.css";
import { addUser } from "@/app/lib/actions";

export default function AddUser() {
  return (
    <div className={styles.container}>
      <div className={styles.formsize}>
        <form action={addUser} className={styles.form}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
          />
          <input type="text" name="phone" id="phone" placeholder="phone" />

          <select name="isAdmin" id="isAdmin" defaultValue="false">
            <option value="false" selected>
              IsAdmin?
            </option>
            <option value={false as any}>No</option>
            <option value={true as any}>Yes</option>
          </select>

          <select name="isActive" id="isActive" defaultValue="false">
            <option value="false" selected>
              Is Active?
            </option>
            <option value={false as any}>No</option>
            <option value={true as any}>Yes</option>
          </select>

          <textarea name="address" id="desc" placeholder="address"></textarea>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
