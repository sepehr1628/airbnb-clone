import Image from "next/image";

const Avatar: React.FC = function () {
  return (
    <Image
      alt="avatar"
      className="rounded-full"
      width="30"
      height="30"
      src="/images/placeholder.png"
    />
  );
};
export default Avatar;
