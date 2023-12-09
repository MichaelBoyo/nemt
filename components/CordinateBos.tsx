import Image from "next/image";
type Props = {
  image?: string;
  header?: string;
  content?: string;
  fontFamily?: string;
  color?: string;
  headerColor?: string;
};

const CoordinatesBox = ({
  image,
  header,
  content,
  fontFamily,
  color,
  headerColor,
}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex pt-4 border-l-4 border-primary px-4">
        <Image
          src={image || ""}
          className="w-[30px] h-[30px]"
          width="10"
          height="10"
          alt=""
        />
      </div>
      <p className="px-4 text-neutral-800 text-xl font-medium ">{header}</p>
      <p className=" px-4 w-[300px] text-neutral-500 text-base font-normal font-['Trip Sans']">
        {content}
      </p>
    </div>
  );
};

export default CoordinatesBox;
