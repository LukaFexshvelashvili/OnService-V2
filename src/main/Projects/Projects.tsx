import { useEffect, useMemo, useState } from "react";
import { projectsList, TprojectItem } from "../../storage/projectsList";
import ProjectCard from "./components/ProjectCard";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
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
      <div className="container mt-36 mobile:mt-24">
        <div className="flex items-center justify-between  gap-5 mediumS:gap-8 mediumS:flex-col">
          <div className="flex items-center justify-center text-center w-full gap-5 ">
            <div className="hidden mediumS:block h-[4px] w-full bg-main rounded-low flex-1"></div>
            <h1 className="text-[28px]  mediumS:text-[24px] small:text-[22px] text-[rgba(31,31,31,0.70)] tracking-wide ">
              {t("projects")}
            </h1>
            <div className="h-[4px] w-full bg-main rounded-low flex-1"></div>
          </div>
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
  const { t } = useTranslation();

  const [filters, setFilters] = useState({
    websites: true,
    designs: true,
    ads: true,
  });
  useEffect(() => {
    props.setFilters(filters);
  }, [filters]);

  return (
    <div className="flex items-center gap-3 mediumS:flex-1 mediumS:w-full mediumS:justify-center small:flex-wrap ">
      <button
        onClick={() =>
          setFilters((state) => ({ ...state, websites: !state.websites }))
        }
        className={`relative h-[40px] text-[14px] w-[160px] mobileS:w-full rounded-icon tracking-wider px-4 text-start ${
          filters.websites
            ? "text-white bg-websites transition-colors hover:bg-websitesHover afterLines"
            : "text-websites bg-websitesClear transition-colors hover:bg-websitesClearHover websitesLines"
        } `}
      >
        {t("websites")}
      </button>
      <button
        onClick={() =>
          setFilters((state) => ({ ...state, designs: !state.designs }))
        }
        className={`relative h-[40px] text-[14px] w-[160px] mobileS:w-full rounded-icon tracking-wider px-4 text-start ${
          filters.designs
            ? "text-white bg-designs transition-colors hover:bg-designsHover afterLines"
            : "text-designs bg-designsClear transition-colors hover:bg-designsClearHover designsLines"
        } `}
      >
        {t("designs")}
      </button>
      <button
        onClick={() => setFilters((state) => ({ ...state, ads: !state.ads }))}
        className={`relative h-[40px] text-[14px] w-[160px] mobileS:w-full rounded-icon tracking-wider px-4 text-start ${
          filters.ads
            ? "text-white bg-ads transition-colors hover:bg-adsHover afterLines"
            : "text-ads bg-adsClear transition-colors hover:bg-adsClearHover adsLines"
        } `}
      >
        {t("ads")}
      </button>
    </div>
  );
}
