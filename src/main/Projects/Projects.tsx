import { useState } from "react";

export default function Projects() {
  return (
    <main className="min-h-screen">
      <div className="container mt-36">
        <div className="flex items-center justify-between  gap-5">
          <h1 className="text-[28px] text-[rgba(31,31,31,0.70)] tracking-wide">
            პროექტები
          </h1>
          <div className="h-[4px] w-full bg-main rounded-low"></div>
          <ProjectsFilter />
        </div>
      </div>
    </main>
  );
}

function ProjectsFilter() {
  const [websites, setWebsites] = useState(true);
  const [designs, setDesigns] = useState(true);
  const [ads, setAds] = useState(true);
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setWebsites((state: boolean) => !state)}
        className={`relative h-[40px] text-[14px] w-[160px] rounded-icon tracking-wider px-4 text-start ${
          websites
            ? "text-white bg-websites transition-colors hover:bg-websitesHover afterLines"
            : "text-websites bg-websitesClear transition-colors hover:bg-websitesClearHover websitesLines"
        } `}
      >
        ვებგვერდები
      </button>
      <button
        onClick={() => setDesigns((state: boolean) => !state)}
        className={`relative h-[40px] text-[14px] w-[160px] rounded-icon tracking-wider px-4 text-start ${
          designs
            ? "text-white bg-designs transition-colors hover:bg-designsHover afterLines"
            : "text-designs bg-designsClear transition-colors hover:bg-designsClearHover designsLines"
        } `}
      >
        დიზაინები
      </button>
      <button
        onClick={() => setAds((state: boolean) => !state)}
        className={`relative h-[40px] text-[14px] w-[160px] rounded-icon tracking-wider px-4 text-start ${
          ads
            ? "text-white bg-ads transition-colors hover:bg-adsHover afterLines"
            : "text-ads bg-adsClear transition-colors hover:bg-adsClearHover adsLines"
        } `}
      >
        სარეკლამო
      </button>
    </div>
  );
}
