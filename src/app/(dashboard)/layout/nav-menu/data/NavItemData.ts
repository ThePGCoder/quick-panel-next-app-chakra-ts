export const navItemData: NavItemProps[] = [
    {
        title: "Home",
        icon: "ri:home-line",
        link: "/home",
    },
    {
        title: "About",
        icon: "ri:information-line",
        link: "/about",
    },
    
    {
        title: "Charts",
        icon: "ri:folder-chart-line",
        
        dropdown: true,
        subMenu: [{title: "Income", icon: "ri:exchange-dollar-fill", link: "/income"},
        {title: "Frameworks", icon: "ri:code-s-slash-line", link: "/frameworks"}
        ] 
    },
    {
        title: "Profile",
        icon: "ri:account-circle-line",
        link: "/profile",
    },
    {
        title: "Logout",
        icon: "ri:logout-box-r-line",
        link: "/login",
    },
    
    
]