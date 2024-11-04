// image
import Image from "next/image";

const Circles = () => {
  return <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-lighten animate-pulse duration-75 z-10">
    <Image
    src={'/circles.png'}
    width={400}
    height={400}
    alt={'circles'}
    className="h-full w-full"
    />
  </div>;
};

export default Circles;
