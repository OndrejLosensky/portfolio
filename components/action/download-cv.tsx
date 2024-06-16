import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { MdArrowRightAlt } from "react-icons/md";
import { Button } from "../ui/button";

export const DownloadCV = () => {
    return (
        <Dialog>
            <DialogTrigger className="flex flex-row items-center group">
                <span>Stáhnout CV</span>
                <MdArrowRightAlt className='ml-2 w-6 h-7 text-shark-600 dark:text-shark-100 transform group-hover:translate-x-1 transition-transform duration-200' />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="font-bold text-2xl">Please select the language of the CV</DialogTitle>
                    <DialogDescription className="pt-4">
                        After clicking on download it will automatically start downloading chosen version. If the download doesnt start, please try again
                        <div className="flex flex-row mx-auto items-center justify-center mt-4 gap-x-4">
                            <Button> 🇨🇿 Česky</Button>
                            <Button> 🇬🇧 English </Button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}