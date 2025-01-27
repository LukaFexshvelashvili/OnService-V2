import { memo, useState } from "react";
import { TprojectItem } from "../../../storage/projectsList";

function ProjectCard({ data }: { data: TprojectItem }) {
  const [loader, setLoader] = useState(true);

  return (
    <div className="relative flex justify-center items-start rounded-projects bg-transparent h-[195px] w-[350px] overflow-hidden shadow-offerCard">
      {loader && (
        <div className="loader absolute h-full w-full flex justify-center items-center z-20 gap-1 top-0 left-0 bg-white">
          <div className="rounded-[50%] animate-[pulse_2.1s_0s_infinite]  bg-main h-[12px] aspect-square"></div>
          <div className="rounded-[50%] animate-[pulse_2.1s_0.7s_infinite]  bg-main h-[12px] aspect-square"></div>
          <div className="rounded-[50%] animate-[pulse_2.1s_1.4s_infinite]  bg-main h-[12px] aspect-square"></div>
        </div>
      )}
      <div
        className={`absolute top-0 left-0 z-10 w-[140px] h-[30px] ${
          data.type == 0
            ? "bg-websites"
            : data.type == 1
            ? "bg-designs"
            : data.type == 2
            ? "bg-ads"
            : "bg-red"
        } rounded-br-low text-white text-[14px] flex justify-center items-center tracking-wider`}
      >
        {data.type == 0
          ? "ვებგვერდი"
          : data.type == 1
          ? "დიზაინი"
          : data.type == 2
          ? "რეკლამა"
          : "NULL"}
      </div>
      <img
        src={data.image}
        alt={data.name}
        onLoad={() => setLoader(false)}
        loading="lazy"
        className="absolute rounded-[18px] top-0 left-0 w-full object-fit"
      />
    </div>
  );
}

export default memo(ProjectCard);
