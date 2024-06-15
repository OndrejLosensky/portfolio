type Props = {
    heading: string;
    subHeading: string;
}
export const SectionTitle = ({heading, subHeading}: Props) => {
  return (
    <div className="z-20">
        <p className="text-sm text-bermuda-600 bg-bermuda-200 px-4 py-2 rounded-md shadow-md w-24 mb-4 font-normal pb-2 text-center"> {heading} </p>
        <h2 className="text-left text-xl font-light text-shark-900 dark:text-gray-200 "> {subHeading} </h2>
    </div>
  )
}

export default SectionTitle;