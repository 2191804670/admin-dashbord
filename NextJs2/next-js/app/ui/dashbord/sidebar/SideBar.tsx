import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";
import MenueLink from "./menueLink/menueLink";
import styles from "../sidebar/sidebar.module.css";
import Image from "next/image";

const SideBar = () => {
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/noavatar.png"
          alt="no avatar"
          width={50}
          height={50}
          className={styles.avatar} // Apply the avatar class here
        />
        <div className={styles.userdetail}>
          <span className={styles.usename}>Anas almograbi</span>
          <span className={styles.usertitle}>Administrator</span>
        </div>
      </div>

      <ul className={styles.listStyle}>
        {menuItems.map((el) => (
          <li key={el.title}>
            <span className={styles.el}>{el.title}</span>

            {el.list.map((item) => (
              <MenueLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
