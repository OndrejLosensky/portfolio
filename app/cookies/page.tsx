import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

import { IoMdHome } from "react-icons/io";

export default function CookiesPage() {
  return (
    <div className='max-w-screen my-28 overflow-hidden w-1/2 mx-auto flex flex-col'>
      <h2 className='text-4xl text-primary font-bold text-center pb-2'>Cookies Policy</h2>
     <p> 
        Please read this cookie policy (“cookie policy”, "policy") carefully before using [website] website
        (“website”, "service") operated by [name] ("us", 'we", "our").
        What are cookies?
        Cookies are simple text files that are stored on your computer or mobile device by a websites
        server. Each cookie is unique to your web browser. It will contain some anonymous information
        such as a unique identifier, websites domain name, and some digits and numbers.
        What types of cookies do we use?
        Necessary cookies
        Necessary cookies allow us to offer you the best possible experience when accessing and
        navigating through our website and using its features. For example, these cookies let us
        recognize that you have created an account and have logged into that account.
        Functionality cookies
        Functionality cookies let us operate the site in accordance with the choices you make. For
        example, we will recognize your username and remember how you customized the site during
        future visits.
        Analytical cookies
        These cookies enable us and third-party services to collect aggregated data for statistical
        purposes on how our visitors use the website. These cookies do not contain personal
        information such as names and email addresses and are used to help us improve your user
        experience of the website.
        How to delete cookies?
        If you want to restrict or block the cookies that are set by our website, you can do so through
        your browser setting. Alternatively, you can visit www.internetcookies.com, which contains
        comprehensive information on how to do this on a wide variety of browsers and devices. You
        will find general information about cookies and details on how to delete cookies from your
        device.
        Contacting us
        If you have any questions about this policy or our use of cookies, please contact us.
      </p>

      <Link href="/">
        <Button className='mx-auto mt-12 flex flex-row gap-x-4'> 
            <IoMdHome className='w-6 h-auto'/> 
            <span> Zpět na domovskou stránku </span> 
        </Button>
      </Link>
    </div>
  );
}
