type Props = {
  heading: string;
  subHeading: string;
};
export const SectionTitleCenter = ({ heading, subHeading }: Props) => {
  return (
    <div className="z-20 mx-auto flex lg:hidden">
      <p className="text-sm  text-bermuda-600 mx-auto bg-bermuda-200 px-4 py-2 rounded-md shadow-md w-24 mb-4 font-normal pb-2 text-center">
        {" "}
        {heading}{" "}
      </p>
      <h2 className="hidden text-left text-md md:text-lg mx-auto lg:text-xl font-light text-shark-900 dark:text-gray-200 ">
        {" "}
        {subHeading}{" "}
      </h2>
    </div>
  );
};

export default SectionTitleCenter;
