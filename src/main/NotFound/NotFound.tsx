import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>{t("pageNotFound404")}</title>
      </Helmet>
      <main className="py-32">
        <div className="container h-full flex justify-center items-center flex-col gap-10">
          <h1 className="text-headText2 text-center mobile:text-[26px] projectsOPT:text-[20px] text-main">
            {t("pageNotFound404")}
          </h1>
          <svg
            className="absolute w-full z-0"
            width="1075"
            height="458"
            viewBox="0 0 1075 458"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M955.5 189C1008.86 189 1054 149.911 1054 99.5C1054 49.0888 1008.86 10 955.5 10C902.136 10 857 49.0888 857 99.5C857 149.911 902.136 189 955.5 189Z"
              stroke="#53B0FA"
              stroke-width="20"
            />
            <path
              d="M966.5 204C1019.86 204 1065 164.911 1065 114.5C1065 64.0888 1019.86 25 966.5 25C913.136 25 868 64.0888 868 114.5C868 164.911 913.136 204 966.5 204Z"
              stroke="#53B0FA"
              stroke-opacity="0.3"
              stroke-width="20"
            />
            <path
              d="M118.5 430C171.864 430 217 390.911 217 340.5C217 290.089 171.864 251 118.5 251C65.1357 251 20 290.089 20 340.5C20 390.911 65.1357 430 118.5 430Z"
              stroke="#53B0FA"
              stroke-width="20"
            />
            <path
              d="M108.5 448C161.864 448 207 408.911 207 358.5C207 308.089 161.864 269 108.5 269C55.1357 269 10 308.089 10 358.5C10 408.911 55.1357 448 108.5 448Z"
              stroke="#53B0FA"
              stroke-opacity="0.3"
              stroke-width="20"
            />
          </svg>

          <svg
            className="relative z-[1] w-[500px] mediumS:w-[400px] mobile:w-[300px] projectsOPT:w-[210px]"
            viewBox="0 0 470 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M425 150C425 130.302 420.073 110.796 410.499 92.5975C400.926 74.3986 386.893 57.8628 369.204 43.934C351.514 30.0052 330.514 18.9563 307.401 11.4181C284.289 3.87986 259.517 -8.61039e-07 234.5 0C209.483 8.61039e-07 184.711 3.87987 161.599 11.4181C138.486 18.9563 117.486 30.0052 99.7961 43.934C82.1066 57.8628 68.0745 74.3987 58.5009 92.5975C48.9274 110.796 44 130.302 44 150L234.5 150H425Z"
              fill="#3BA1F1"
            />
            <path
              d="M128 60C135.333 50.8333 170 33 212 29"
              stroke="#67B6F5"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M341 124H394.5"
              stroke="#67B6F5"
              strokeWidth="15"
              strokeLinecap="round"
            />
            <rect y="141" width="470" height="40" rx="20" fill="#0D5D9C" />
            <path
              className="animate-pulse"
              d="M70 191V242.108"
              stroke="#3DA4F5"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse animate-delay-100"
              d="M109 332V389.081"
              stroke="#963DF5"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse animate-duration-75"
              d="M117 215V286.683"
              stroke="#3DA4F5"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse animate-duration-75"
              d="M208 332V406.338"
              stroke="#963DF5"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse"
              d="M164 276.557V331.647"
              stroke="#3D40F5"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse animate-duration-75"
              d="M235.641 234V289.754"
              stroke="#3D40F5"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse animate-duration-75"
              d="M277.439 201.814V270.179"
              stroke="#3DA4F5"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse animate-duration-75"
              d="M296 302V377.002"
              stroke="#963DF5"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse animate-duration-75"
              d="M382 300V380.312"
              stroke="#963DF5"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse"
              d="M341.175 252.585V316.303"
              stroke="#3D40F5"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse animate-duration-75"
              d="M406.204 206.461V273.498"
              stroke="#3DA4F5"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse animate-duration-75"
              d="M180.534 210.443V271.506"
              stroke="#3DA4F5"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M10 163.443C10.5 149.377 10.4998 149.377 51.5 150.377"
              stroke="#1E85D7"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M415 169H454"
              stroke="#1E85D7"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse"
              d="M149 377V441.398"
              stroke="#D71E93"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse animate-duration-75"
              d="M340.852 387.733V444.752"
              stroke="#D71E93"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="animate-pulse animate-duration-75"
              d="M251.634 407.187V475.609"
              stroke="#D71E93"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
          <Link to={"/"} className="rounded-icon">
            <button className="bg-main rounded-icon text-white text-wide px-6 py-2 transition-colors hover:bg-mainLight">
              {t("backToHomePage")}
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
