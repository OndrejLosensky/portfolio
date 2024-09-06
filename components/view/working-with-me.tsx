export default function WorkWithMe() {
  const processSteps = [
    {
      title: "Zjištění požadavků",
      description:
        "V první fázi se vás zeptám jaké máte představy, co se vám líbí a vyžádám si od vás nějaké podklady",
    },
    {
      title: "Návrh řešení",
      description:
        "Vytvořím grafický návrh vašeho webu, který vám následně zašlu na schválení",
    },
    {
      title: "Vývoj webu",
      description:
        "Poté se domluvíme jakým způsobem chcete naprogramovat web (WordPress, vlastní CMS, statický) a já ho vytvořím",
    },
    {
      title: "Testování & SEO",
      description:
        "Web otestuji na vícero zařízeních a prohlížečích, udělám správné SEO a vše zkontroluji",
    },
    {
      title: "Spuštění webu",
      description: "Po vašem schválení web nahraji na doménu a spustím ho",
    },
    {
      title: "Podpora a údržba",
      description:
        "Pokud máte zájem nabízím i podporu a občasné vylepšení dle vašich podmínek",
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center mt-32">
        <p className="uppercase text-xs lg:text-md font-medium pb-4">Práce</p>
        <h2 className="text-2xl lg:text-5xl font-bold pb-2">
          Jak probíhá spolupráce se mnou?
        </h2>
        <p className="font-light text-black/70 dark:text-white/50">
          Zde je v jednoduchých bodech napsáno jak probíhá spolupráce se mnou
          při tvorbě webových stránek
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="group relative p-8 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 transition-colors duration-300"
          >
            <div className="flex flex-row items-center gap-x-2">
              <div className="text-5xl p-2 font-bold text-green-500 dark:text-green-300  flex items-center justify-center group-hover:text-black dark:group-hover:text-white  transition-all duration-300">
                {index + 1}
              </div>
              <h3 className="text-2xl md:text-xl lg:text-3xl font-semibold">
                {step.title}
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-sm text-black/70 dark:text-white/70">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
