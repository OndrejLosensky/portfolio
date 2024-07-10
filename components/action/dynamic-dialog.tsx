import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { FaArrowRight } from "react-icons/fa";
  
  interface Option {
    title: string;
    description: string;
    features: string[];
    pricing: string;
  }
  
  interface DynamicDialogProps {
    option: Option;
  }
  
  export const DynamicDialog: React.FC<DynamicDialogProps> = ({ option }) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="group p-4 border-[0.5px] border-text-dark dark:border-text-light/25 rounded-lg flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
            <div className="w-3/4">
              <h2 className="font-semibold text-2xl">{option.title}</h2>
              <p className="w-full font-light text-sm pt-2">{option.description}</p>
            </div>
            <FaArrowRight className="w-6 h-auto transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
          </div>
        </DialogTrigger>
        <DialogContent className="w-[20rem] lg:w-[60rem]">
          <DialogHeader>
            <DialogTitle className="font-bold text-2xl pt-10">{option.title}</DialogTitle>
            <DialogDescription className="pt-4">{option.description}</DialogDescription>
          </DialogHeader>
          <div className="pt-4">
            <h3 className="font-semibold text-xl pt-4">Vlastnosti</h3>
            <ul className="list-disc list-inside pt-2">
              {option.features.map((feature, index) => (
                <li key={index} className="font-light text-sm">{feature}</li>
              ))}
            </ul>
            <p className="font-semibold text-lg pt-4">{option.pricing}</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  