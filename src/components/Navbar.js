import Link from "next/link";
const navItemsLink = [
    {
        path:"/",
        title:"Home",
    },
    {
        path:"/about",
        title:"About",
    },
    {
        path:"/contact",
        title:"Contact",
    },
    {
        path:"/services",
        title:"Services",
    },
    {
        path:"/blog",
        title:"Blog",
    },
]

const Navbar = () => {
    return (
        <nav className="flex justify-between container mx-auto">
            <h2 className="font-2xl" >Ranjit</h2>
            <ul>
                {navItemsLink.map(({path, title})=>(
                    <li key={path}><Link href={path} >{title}</Link> </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;