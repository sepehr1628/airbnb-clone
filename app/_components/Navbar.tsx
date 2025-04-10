import Container from "./Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar: React.FC = function () {
  return (
    <header className="fixed w-full bg-white shadow-sm">
      <div className="py-4 border-b[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
