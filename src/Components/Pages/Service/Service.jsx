import { useLoaderData } from "react-router-dom"; c;
import ServiceSingle from "./ServiceSingle";

const Service = () => {
      const cards = useLoaderData();
      return (
            <>
                  <div className="absolute">
                        <h1 className="text-7xl font-medium relative lg:bottom-44 lg:left-[180px] bottom-44 left-[115px] text-white
            ">S<span className="text-[#f15b43]">e</span>rvices</h1>

                  </div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 min-h-screen">
                        {

                              cards.map(cards => <ServiceSingle key={cards.id} cards={cards}></ServiceSingle>)
                        }

                  </div >
            </>
      );
};

export default Service;