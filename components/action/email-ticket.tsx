import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface Props {}

const EmailTicket: React.FC<Props> = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
            })
            .catch((err) => {
                console.error('Failed to copy:', err);
            });
    };

    return (
        <div className="fixed top-[45%] -left-0 flex flex-col space-y-2">
            <div
                className='h-8 w-72 -translate-x-[15rem] hover:translate-x-0 duration-700 pl-2 pr-2 bg-primary rounded-r-full cursor-pointer flex items-center transition-all'
                onClick={() => handleCopy('losenskyondrej@gmail.com')}
            >
                <div className="pr-6">
                    <p className="font-semibold text-text-dark/60 pl-2">losenskyondrej@gmail.com</p>
                </div>
                <div className='group relative flex flex-row'>
                    <MdOutlineEmail className='text-white' />
                </div>
            </div>

            <div
                className='h-8 w-72 -translate-x-[15rem] flex-row justify-between hover:translate-x-0 duration-700 pl-2 pr-2 bg-primary rounded-r-full cursor-pointer flex items-center transition-all'
                onClick={() => handleCopy('+420 605 367 403')}
            >
                <div className="pr-6">
                    <p className="font-semibold text-text-dark/60 pl-2">+420 605 367 403</p>
                </div>
                <div className='group relative flex flex-row'>
                    <BsTelephoneFill className='text-white mr-2' />
                </div>
            </div>

            {copied && (
                <p className="absolute flex flex-row items-center bottom-0 left-1/2 transform -translate-x-1/2 bg-text-light dark:bg-main text-xs text-text-dark dark:text-text-light px-2 py-1 rounded-md">
                    <FaCheck className="mr-2"/> Zkopírováno
                </p>
            )}
        </div>
    );
};

export default EmailTicket;
