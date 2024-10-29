import styles from "./login.module.css";
export default function login() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1 className="font-black  text-3xl	 ">Login</h1>

        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
}
