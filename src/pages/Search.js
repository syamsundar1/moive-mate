import { MoiveCard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
export const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: moives } = useFetch(apiPath,queryTerm);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-start flex-wrap">
          {moives.map((moive) => (
            <MoiveCard key={moive.id} moive={moive} />
          ))}
        </div>
      </section>
    </main>
  );
}


