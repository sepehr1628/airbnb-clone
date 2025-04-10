interface MenuItemProps {
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = function ({ label }) {
  return (
    <li className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
      {label}
    </li>
  );
};

export default MenuItem;
