import { useEffect, useMemo, useState } from "react";
import { projectsList, TprojectItem } from "../../storage/projectsList";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  const [filters, setFilters] = useState({
    websites: true,
    designs: true,
    ads: true,
  });
  const filteredList = useMemo(() => {
    return projectsList.filter((project) => {
      if (filters.websites && project.type === 0) return true;
      if (filters.designs && project.type === 1) return true;
      if (filters.ads && project.type === 2) return true;
      return false;
    });
  }, [filters]);

  return (
    <main className="min-h-screen">
      <div className="container mt-36">
        <div className="flex items-center justify-between  gap-5">
          <h1 className="text-[28px] text-[rgba(31,31,31,0.70)] tracking-wide">
            პროექტები
          </h1>
          <div className="h-[4px] w-full bg-main rounded-low"></div>
          <ProjectsFilter setFilters={setFilters} />
        </div>
        <div className="flex gap-8 justify-center flex-wrap my-10">
          {filteredList.map((project: TprojectItem) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </main>
  );
}

function ProjectsFilter(props: { setFilters: Function }) {
  const [filters, setFilters] = useState({
    websites: true,
    designs: true,
    ads: true,
  });
  useEffect(() => {
    props.setFilters(filters);
  }, [filters]);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() =>
          setFilters((state) => ({ ...state, websites: !state.websites }))
        }
        className={`relative h-[40px] text-[14px] w-[160px] rounded-icon tracking-wider px-4 text-start ${
          filters.websites
            ? "text-white bg-websites transition-colors hover:bg-websitesHover afterLines"
            : "text-websites bg-websitesClear transition-colors hover:bg-websitesClearHover websitesLines"
        } `}
      >
        ვებგვერდები
      </button>
      <button
        onClick={() =>
          setFilters((state) => ({ ...state, designs: !state.designs }))
        }
        className={`relative h-[40px] text-[14px] w-[160px] rounded-icon tracking-wider px-4 text-start ${
          filters.designs
            ? "text-white bg-designs transition-colors hover:bg-designsHover afterLines"
            : "text-designs bg-designsClear transition-colors hover:bg-designsClearHover designsLines"
        } `}
      >
        დიზაინები
      </button>
      <button
        onClick={() => setFilters((state) => ({ ...state, ads: !state.ads }))}
        className={`relative h-[40px] text-[14px] w-[160px] rounded-icon tracking-wider px-4 text-start ${
          filters.ads
            ? "text-white bg-ads transition-colors hover:bg-adsHover afterLines"
            : "text-ads bg-adsClear transition-colors hover:bg-adsClearHover adsLines"
        } `}
      >
        სარეკლამო
      </button>
    </div>
  );
}
