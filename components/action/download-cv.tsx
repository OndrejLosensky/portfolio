import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { MdArrowRightAlt } from "react-icons/md";
import { Button } from "../ui/button";
import Image from "next/image";

const downloadFile = (lang: string) => {
    const link = document.createElement('a');
    link.href = `/api/download?lang=${lang}`;
    link.setAttribute('download', `cv_${lang}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const DownloadCV = () => {
    return (
        <Dialog>
            <DialogTrigger className="flex flex-row items-center group">
                <span>Stáhnout CV</span>
                <MdArrowRightAlt className='ml-2 w-6 h-7 text-shark-600 dark:text-shark-100 transform group-hover:translate-x-1 transition-transform duration-200' />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="font-bold text-2xl">Vyberte jazyk v jakém chcete stáhnout CV</DialogTitle>
                    <DialogDescription className="pt-4">
                        Po kliknutí na tlačítko stáhnout se soubor automaticky začne stahovat. Pokud se tak nestane zkuste prosím obnovit prohlížeč
                        <div className="flex flex-row mx-auto items-center justify-center mt-4 gap-x-4">
                            <Button onClick={() => downloadFile('cz')}>
                                <Image src="/additional-icons/cz.svg" width={20} height={20} alt="Czech icon" className="mr-2" /> Česky
                            </Button>
                            <Button onClick={() => downloadFile('en')} disabled>
                                <Image src="/additional-icons/en.svg" width={20} height={20} alt="Britain icon" className="mr-2" /> English
                            </Button>
                            <Button onClick={() => downloadFile('de')} disabled>
                                <Image src="/additional-icons/de.svg" width={20} height={20} alt="Germany icon" className="mr-2" /> German
                            </Button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
