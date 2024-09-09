"use client";

import { useSectionInView } from "@/lib/hooks";
import { useForm } from "@formspree/react";
import { useState, useEffect, ChangeEvent } from "react";

import {
  ToastProvider,
  Toast,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "@/components/ui/toast";

import { useTexts } from "@/context/texts-context";
import SectionTitle from "../layout/section-title";

export default function ContactSection() {
  const { texts } = useTexts();
  const { ref } = useSectionInView("Kontakt", 0.5);
  const [isSent, setIsSent] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xjvndwpq");

  useEffect(() => {
    if (state.succeeded) {
      setIsSent(true);
      setShowSuccessToast(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => {
        setShowSuccessToast(false);
      }, 4000);
    } else if (state.errors) {
      setShowErrorToast(true);
      setTimeout(() => {
        setShowErrorToast(false);
      }, 4000);
    }
  }, [state.succeeded, state.errors]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <ToastProvider>
      <div
        id="kontakt"
        ref={ref}
        className="relative w-full lg:w-full mx-auto py-32 my-20 z-10"
      >
        <div className="bg-[#8af8ebb8] absolute top-[2rem] -z-10 right-[0rem] lg:right-[-5rem] dark:bg-opacity-75 h-[0rem] md:h-[32rem] w-[0rem] md:w-[60rem] rounded-full blur-[15rem] ] dark:bg-[#56b595]"></div>
        <SectionTitle
          heading={texts["contact_small-title"]}
          subHeading=""
          className="flex items-center justify-center"
        />
        <h2 className="text-center text-xl md:text-3xl font-bold">
          {" "}
          {texts["contact_title"]}{" "}
        </h2>

        <span className="justify-center text-md text-center w-2/3 pt-4 mx-auto flex font-light text-shark-300">
          {" "}
          <span>
            {" "}
            {texts["contact-description"]}            
            <span className="font-semibold text-sky-300 underline underline-offset-1">
              {" "}
              {texts["contact_email"]}{" "}
            </span>{" "}
          </span>{" "}
        </span>

        {showSuccessToast && (
          <Toast className="border-0 border-transparent">
            <div className="flex items-center justify-between p-4 bg-text-light dark:bg-text-dark border border-text-dark/60 dark:border-text-light/60 rounded-md shadow-lg">
              <div>
                <ToastTitle className="text-green-500">
                  {texts["contactToastSuccess"]}
                </ToastTitle>
                <ToastDescription className="text-green-500">
                  {texts["contactToastSuccessDesc"]}
                </ToastDescription>
              </div>
              <ToastClose onClick={() => setShowSuccessToast(false)} />
            </div>
          </Toast>
        )}

        {showErrorToast && (
          <Toast className="border-0 border-transparent">
            <div className="flex items-center justify-between p-4 bg-text-light dark:bg-text-dark border border-text-dark/60 dark:border-text-light/60 rounded-md shadow-lg">
              <div>
                <ToastTitle className="text-red-500">
                  {texts["contactToastError"]}
                </ToastTitle>
                <ToastDescription className="text-red-500">
                  {texts["contactToastErrorDesc"]}
                </ToastDescription>
              </div>
              <ToastClose onClick={() => setShowErrorToast(false)} />
            </div>
          </Toast>
        )}

        <ToastViewport className="fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
      </div>

      <div className="text-sm text-center dark:text-gray-100/50 py-24 ">
        Portfolio je stále ve vývoji, protože pracuji na projektech, o které ho doplňuji
      </div>
    </ToastProvider>
  );
}
