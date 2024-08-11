import { useLanguage } from '@/context/language-context';

export default function TestHero() {
  const { data } = useLanguage();

  return (
    <div>
      <h1> {data.hello} {data.myNameIs} </h1>
      <p> {data.name}</p>
      <p> {data.heroDescription} </p>
      <button> {data.continueBtn} </button>
    </div>
  );
}
