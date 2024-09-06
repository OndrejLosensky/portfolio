type Props = {
  heading: string;
  subHeading: string;
  className: string;
};
export const SectionTitle = ({ heading, subHeading, className }: Props) => {
  return (
    <div className={`z-20 flex-col pb-2 ${className}`}>
      <p className="text-sm text-bermuda-600 bg-bermuda-200 px-4 py-2 rounded-md shadow-md mb-4 font-normal w-32 pb-2 text-center">
        {" "}
        {heading}{" "}
      </p>
      <h2 className="text-left text-md md:text-lg lg:text-xl font-light text-shark-900 dark:text-gray-200 ">
        {" "}
        {subHeading}{" "}
      </h2>
    </div>
  );
};

export default SectionTitle;
