/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#40AAFD",
        mainClear: "rgba(64, 171, 253, 0.1)",
        mainClearHover: "rgba(64, 171, 253, 0.15)",
        mainLight: "#55B5FF",
        mainLightHover: "#5bb8ff",
        bg: "#FBFBFB",
        whiteIconBg: "rgba(255, 255, 255, 0.15)",
        whiteIconBgHover: "rgba(255, 255, 255, 0.20)",
        whiteCardBg: "rgba(255, 255, 255, 0.10)",
        infoCardBg: "rgba(73, 207, 255, 0.1)",
        decorBg: "rgba(255, 255, 255, 0.15)",
        white: "#FFFFFF",
        whiteClear: "rgba(255, 255, 255, 0.05)",
        inputBg: "rgba(255, 255, 255, 0.1)",
        inputHover: "rgba(255, 255, 255, 0.15)",
        inputPlaceHolder: "rgba(255, 255, 255, 0.5)",
        whiteHover: "#f6f6f6",
        cyan: "#3BE1D9",
        red: "#F72585",
        purple: "#C71FFF",
        yellow: "#FFCE1F",
        whatsapp: "#27db69",
        facebook: "#407bfb",
        instagram: "#f63576",
        whatsappHover: "#29e26d",
        facebookHover: "#4983ff",
        instagramHover: "#ff397b",
        footerTop: "#6CBEFF",
        call: "#8356F3",
        callHover: "#895bff",
        descWhite: "rgba(255, 255, 255, 0.8)",
        descCard: "rgba(0, 0, 0, 0.4)",
        headCard: "rgba(0, 0, 0, 0.75)",
        head: "rgba(95, 95, 95, 0.8)",
        text: "rgba(114, 114, 114, 0.9)",
        secondIcon: "rgba(109, 109, 109, 0.8)",
        websites: "#00C396",
        websitesHover: "#00d1a0",
        websitesClear: "rgba(32, 212, 44, 0.1)",
        websitesClearHover: "rgba(32, 212, 44, 0.15)",
        designs: "#9C4AFF",
        designsHover: "#a357ff",
        designsClear: "rgba(155, 74, 255, 0.1)",
        designsClearHover: "rgba(155, 74, 255, 0.15)",
        ads: "#FF961F",
        adsHover: "#ff9c2b",
        adsClear: "rgba(255, 151, 31, 0.1)",
        adsClearHover: "rgba(255, 151, 31, 0.15)",
      },
      fontSize: {
        headText: "var(--headText)",
        headText2: "var(--headText2)",
        headDescText: "var(--headDescText)",
        buttonText: "var(--buttonText)",
        addonText: "var(--addonText)",
        logoText: "var(--logoText)",
        smallText: "var(--smallText)",
      },
      backdropBlur: {
        whiteCard: "12px",
        whiteIcon: "20px",
        infoCard: "45px",
      },
      borderRadius: {
        low: "8px",
        icon: "12px",
        projects: "15px",
        infoCard: "15px",
      },
      fontFamily: {
        onRegular: "onRegular",
        onMedium: "onMedium",
        onSemiBold: "onSemiBold",
        onBold: "onBold",
      },
      boxShadow: {
        normal: "0px 4px 20px rgba(188, 188, 188, 0.15)",
        nav: "0px 4px 20px rgba(182, 182, 182, 0.1)",
        offerCard: "0px 4px 20px rgba(225, 225, 225, 0.15)",
        mobileNav: "0px 4px 10px rgba(182, 182, 182, 0.2)",
        mainShadow: "0px 8px 30px rgba(91, 184, 255, 0.5)",
      },
      screens: {
        medium: { max: "1330px" },
        mediumS: { max: "1024px" },
        small: { max: "768px" },
        mobile: { max: "640px" },
        projectsOPT: { max: "480px" },
        mobileS: { max: "395px" },
        mobileSS: { max: "370px" },
      },
    },
  },
  plugins: [],
};
