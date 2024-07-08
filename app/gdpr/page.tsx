"use client"

import HeaderCopy from '@/components/nav/header-copy';
import Footer from '@/components/nav/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

import { IoMdHome } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import CookiesForm from '../cookies/CookiesForm';

export default function GDPRPage() {

  const handleDownloadPDF = () => {
    window.open('/download/GDPR.pdf', '_blank');
  };

  return (
    <div className='max-w-screen w-3/4 justify-between min-h-screen flex flex-col items-center mx-auto'>
      <HeaderCopy/>
      <div className='w-full lg:w-2/3 mx-auto mt-32'>
          <h2 className='text-2xl lg:text-4xl text-primary font-bold text-center pb-2'>Zásady ochrany osobních údajů</h2>
          <div className='p-4 rounded-lg'>
              <p className='text-base w-full'>
              <strong>I. Základní ustanovení</strong><br />
              1. Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (dále jen: „GDPR“) je Ondřej Losenský se sídlem v Rudné u Prahy (dále jen: „správce“).<br /><br />
              2. Kontaktní údaje správce jsou:<br />
              Adresa: J.V.Živcových 38/30, Rudná u Prahy, 252 19<br />
              Email: losenskyondrej@gmail.com<br />
              Telefon: +420 605 367 403<br /><br />
              3. Osobními údaji se rozumí veškeré informace o identifikované nebo identifikovatelné fyzické osobě; identifikovatelnou fyzickou osobou je fyzická osoba, kterou lze přímo či nepřímo identifikovat, zejména odkazem na určitý identifikátor, například jméno, identifikační číslo, lokační údaje, síťový identifikátor nebo jeden či více zvláštních prvků fyzické, fyziologické, genetické, psychické, ekonomické, kulturní nebo sociální identity této fyzické osoby.<br /><br />
              4. Správce nejmenoval pověřence pro ochranu osobních údajů.<br /><br />
              <strong>II. Zdroje a kategorie zpracovávaných osobních údajů</strong><br />
              1. Správce zpracovává osobní údaje, které jste mu poskytl/a nebo osobní údaje, které správce získal na základě plnění Vaší objednávky.<br />
              2. Správce zpracovává Vaše identifikační a kontaktní údaje a údaje nezbytné pro plnění smlouvy.<br /><br />
              <strong>III. Zákonný důvod a účel zpracování osobních údajů</strong><br />
              Zákonným důvodem zpracování osobních údajů je plnění smlouvy mezi Vámi a správcem podle čl. 6 odst. 1 písm. b) GDPR, oprávněný zájem správce na poskytování přímého marketingu (zejména pro zasílání obchodních sdělení a newsletterů) podle čl. 6 odst. 1 písm. f) GDPR, Váš souhlas se zpracováním pro účely poskytování přímého marketingu (zejména pro zasílání obchodních sdělení a newsletterů) podle čl. 6 odst. 1 písm. a) GDPR ve spojení s § 7 odst. 2 zákona č. 480/2004 Sb., o některých službách informační společnosti v případě, že nedošlo k objednávce zboží nebo služby. Účelem zpracování osobních údajů je vyřízení Vaší objednávky a výkon práv a povinností vyplývajících ze smluvního vztahu mezi Vámi a správcem; při objednávce jsou vyžadovány osobní údaje, které jsou nutné pro úspěšné vyřízení objednávky (jméno a adresa, kontakt), poskytnutí osobních údajů je nutným požadavkem pro uzavření a plnění smlouvy, bez poskytnutí osobních údajů není možné smlouvu uzavřít či jí ze strany správce plnit, zasílání obchodních sdělení a činění dalších marketingových aktivit. Ze strany správce nechodí k automatizovanému individuálnímu rozhodování ve smyslu čl. 22 GDPR. S takovým zpracováním jste poskytl/a svůj výslovný souhlas.<br /><br />
              <strong>IV. Doba uchovávání údajů</strong><br />
              1. Správce uchovává osobní údaje po dobu nezbytnou k výkonu práv a povinností vyplývajících ze smluvního vztahu mezi Vámi a správcem a uplatňování nároků z těchto smluvních vztahů (po dobu 15 let od ukončení smluvního vztahu), po dobu, než je odvolán souhlas se zpracováním osobních údajů pro účely marketingu, nejdéle 5 let, jsou-li osobní údaje zpracovávány na základě souhlasu. Po uplynutí doby uchovávání osobních údajů správce osobní údaje vymaže.<br /><br />
              <strong>V. Příjemci osobních údajů (subdodavatelé správce)</strong><br />
              Příjemci osobních údajů jsou osoby podílející se na dodání zboží / služeb / realizaci plateb na základě smlouvy, podílející se na zajištění provozu služeb, zajišťující marketingové služby. Správce nemá v úmyslu předat osobní údaje do třetí země (do země mimo EU) nebo mezinárodní organizaci. Příjemci osobních údajů ve třetích zemích jsou poskytovatelé mailingových služeb / cloudových služeb.<br /><br />
              <strong>VI. Vaše práva</strong><br />
              Za podmínek stanovených v GDPR máte právo na přístup ke svým osobním údajům dle čl. 15 GDPR, právo na opravu osobních údajů dle čl. 16 GDPR, popřípadě omezení zpracování dle čl. 18 GDPR, právo na výmaz osobních údajů dle čl. 17 GDPR, právo vznést námitku proti zpracování dle čl. 21 GDPR a právo na přenositelnost údajů dle čl. 20 GDPR, právo odvolat souhlas se zpracováním písemně nebo elektronicky na adresu nebo email správce uvedený v čl. III těchto podmínek. Dále máte právo podat stížnost u Úřadu pro ochranu osobních údajů v případě, že se domníváte, že bylo porušeno Vaše právo na ochranu osobních údajů.<br /><br />
              <strong>VII. Podmínky zabezpečení osobních údajů</strong><br />
              1. Správce prohlašuje, že přijal veškerá vhodná technická a organizační opatření k zabezpečení osobních údajů.<br />
              2. Správce prohlašuje, že k osobním údajům mají přístup pouze jím pověřené osoby.<br /><br />
              <strong>VIII. Závěrečná ustanovení</strong><br />
              1. Odesláním objednávky z internetového objednávkového formuláře potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte.<br />
              2. S těmito podmínkami souhlasíte zaškrtnutím souhlasu prostřednictvím internetového formuláře. Zaškrtnutím souhlasu potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte.<br />
              3. Správce je oprávněn tyto podmínky změnit. Novou verzi podmínek ochrany osobních údajů zveřejní na svých internetových stránkách, případně Vám zašle novou verzi těchto podmínek na e-mailovou adresu, kterou jste správci poskytl/a. <br />
              <br />
              <span className='italic'> Tyto podmínky nabývají účinnosti dnem 1.7.2024.</span><br />
              </p>
          </div>

          <div className="flex ml-4 mt-2">
              <Button className='flex flex-row gap-x-2 ' onClick={handleDownloadPDF}> <MdFileDownload/> <span>Stáhnout G.D.P.R. (PDF)</span></Button>
          </div>

          <Link href="/">
              <Button className='mx-auto my-20 flex flex-row gap-x-4 group bg-primary dark:bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover duration-200 active:bg-primary-active dark:active:bg-primary-active'> 
                  <IoMdHome className='w-6 h-auto'/> 
                  <span> Zpět na domovskou stránku </span> 
              </Button>
          </Link>
      </div>

      <CookiesForm/>
      <Footer/>
    </div>
  );
}
