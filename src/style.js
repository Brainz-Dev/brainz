const styles = {
  boxWidth: "max-w-[1280px] w-full",

  heading2:
    "font-poppins font-bold xs:text-[48px] text-[34px] text-white leading-[1.15] w-full",
  paragraph: "font-poppins font-normal text-slate-400 text-[17px] leading-[1.8]",

  flexCenter: "flex justify-center items-center",
  flexStart:  "flex justify-start items-start",

  paddingX: "px-6 sm:px-10",
  paddingY: "py-16 sm:py-24",
  padding:  "px-6 sm:px-10 py-12 sm:py-16",

  marginX: "mx-6 sm:mx-10",
  marginY: "my-12 sm:my-16",
};

export const layout = {
  section:         `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse:  `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionImg:      `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionInfo:     `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
