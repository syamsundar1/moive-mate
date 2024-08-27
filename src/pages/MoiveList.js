import { MoiveCard } from "../components";
import { useFetch } from "../hooks/useFetch";
export const MoiveList = ({ apiPath }) => {
  const { data: moives } = useFetch(apiPath);

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
};
