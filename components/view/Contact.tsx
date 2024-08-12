"use client";

import SectionTitle from "../layout/section-title";
import { useSectionInView } from "@/lib/hooks";
import { useForm, ValidationError } from '@formspree/react';
import { IoIosSend } from "react-icons/io";
import { useState, useEffect, ChangeEvent } from "react";
import {
  ToastProvider,
  Toast,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from '@/components/ui/toast';

import { useLanguage } from '@/context/language-context';


export default function ContactSection() {
  const { data } = useLanguage();
  const { ref } = useSectionInView("Kontakt", 0.5);
  const [isSent, setIsSent] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [state, handleSubmit] = useForm("xjvndwpq");

  useEffect(() => {
    if (state.succeeded) {
      setIsSent(true);
      setShowSuccessToast(true);
      setFormData({
        name: '',
        email: '',
        message: ''
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <ToastProvider>
      <div id="kontakt" ref={ref} className="relative min-h-screen max-h-screen w-full lg:w-2/3 mx-auto z-10">
        <SectionTitle heading={data.contactTitle} className="" subHeading={data.contactDescription} />
        <span className="text-sm font-light text-shark-300"> {data.contactSmallText1} <br />{data.contactSmallText2} </span>        
        <div className="bg-[#8af8eb] absolute top-[2rem] -z-10 right-[0rem] lg:right-[-5rem] dark:bg-opacity-75 h-[31.25rem] w-[31.25rem] md:w-[60rem] rounded-full blur-[15rem] ] dark:bg-[#56b595]"></div>
        
        <div>
          <form onSubmit={handleSubmit} className="relative bg-text-light/70 mt-8 z-20 px-4 sm:px-8 py-6 dark:hover:border-shark-300 hover:border-shark-900 border border-shark-400 duration-300 dark:bg-main/60 rounded-md mx-auto w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-shark-100">
                {data.contactFormName}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={data.contactFormNamePlaceholder}
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block px-2 w-full dark:bg-shark-700 py-2 border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-bermuda-500 focus:border-bermuda-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-shark-100">
                E-mail*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={data.contactFormEmailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                className="mt-1 px-2 block w-full dark:bg-shark-700 py-2 border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-bermuda-500 focus:border-bermuda-500 sm:text-sm"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-shark-100">
                {data.contactFormMessage}*
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder={data.contactFormMessage}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 px-2 block w-full max-h-[200px] dark:bg-shark-700 py-2 border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-bermuda-500 focus:border-bermuda-500 sm:text-sm"
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                disabled={state.submitting}
                className="items-center gap-x-2 inline-flex justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-bermuda-500 hover:bg-bermuda-600 active:bg-primary-active active:scale-90 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bermuda-500"
              >
                <span>{data.contactFormSendBtn}</span>
                <IoIosSend />
              </button>
            </div>
          </form>
        </div>

        {showSuccessToast && (
          <Toast className="border-0 border-transparent">
            <div className="flex items-center justify-between p-4 bg-text-light dark:bg-text-dark border border-text-dark/60 dark:border-text-light/60 rounded-md shadow-lg">
              <div>
                <ToastTitle className="text-green-500">{data.contactToastSuccess}</ToastTitle>
                <ToastDescription className="text-green-500">{data.contactToastSuccessDesc}</ToastDescription>
              </div>
              <ToastClose onClick={() => setShowSuccessToast(false)} />
            </div>
          </Toast>
        )}

        {showErrorToast && (
          <Toast className="border-0 border-transparent">
            <div className="flex items-center justify-between p-4 bg-text-light dark:bg-text-dark border border-text-dark/60 dark:border-text-light/60 rounded-md shadow-lg">
              <div>
                <ToastTitle className="text-red-500">{data.contactToastError}</ToastTitle>
                <ToastDescription className="text-red-500">{data.contactToastErrorDesc}</ToastDescription>
              </div>
              <ToastClose onClick={() => setShowErrorToast(false)} />
            </div>
          </Toast>
        )}

        <ToastViewport className="fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
      </div>
    </ToastProvider>
  );
}
