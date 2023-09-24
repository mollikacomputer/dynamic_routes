import NavLink from "@/components/NavLink";

const sidebarLink = [
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-products",
    title: "Manage Products",
  },
  {
    path: "/",
    title: "Home",
  },
];
const Sidebar = () => {
  return (
    <aside className="grid container mx-auto">
      <nav>
        <ul>
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            Dashboard
          </h2>
          {sidebarLink.map(({ path, title }) => (
            <li my-2 key={path}>
              <NavLink
                exact={path === "/"}
                activeClassName={"text-blue-500"}
                href={path}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
