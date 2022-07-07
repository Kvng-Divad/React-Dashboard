import {
    UilEstate,
    UilClipboard,
    UilUsersAlt,
    UilChart,
    UilUsdCircle,
    UilMoneyWithdrawal,
    UilClipboardAlt,
    UilPackage,
} from "@iconscout/react-unicons";

import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"


export const SidebarData = [
    {
        icon:UilEstate,
        heading: "Dashboard",
        link: "/"
    },
    {
        icon:UilClipboard,
        heading: "Orders",
        link: "/Orders"
    },
    {
        icon:UilUsersAlt,
        heading: "Customers",
        link: "/Customers"
    },
    {
        icon: UilPackage,
        heading: "Employees",
        link: "/Employees"
    },
    {
        icon:UilChart,
        heading: "Analytics",
        link: "/Analytics"
    }
]


export const CardsData =[
    {
        title: "Sales",
        color: {
           background: "var(--card-color1)",
            boxshadow: "var(--box-shadow)",
        },
        barValue: 80,
        value: "36,900",
        icon: UilUsdCircle,
        series: [
            {
                name: "sales",
                data: [10, 50 , 100, 60, 20, 40, 90, 100],
            },
        ],
    },

    {
        title: "Revenue",
        color: {
           background: "var(--card-color2)",
            boxshadow: "var(--box-shadow)",
        },
        barValue: 90,
        value: "16,900",
        icon: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [50, 30 , 76, 80, 88, 50, 25, 10],
            },
        ],
    },

    {
        title: "Expenses",
        color: {
           background: "var(--card-color3)",
            boxshadow: "var(--box-shadow)",
        },
        barValue: 60,
        value: "6,780",
        icon: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 70 , 30, 40, 67, 38, 85, 100],
            },
        ],
    },
    
]


export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];