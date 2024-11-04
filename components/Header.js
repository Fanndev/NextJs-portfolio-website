import Link from "next/link";

// Image
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6 py-8">
          {/* Logo */}
      <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={190}
            height={100}
            alt="logo"
            priority={true}
          />
      </Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
