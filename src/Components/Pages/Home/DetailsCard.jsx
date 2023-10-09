import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsSingleCard from "./DetailsSingleCard";


const DetailsCard = () => {
      const [card, setCard] = useState();
      const { id } = useParams();
      console.log(id);

      const cards = useLoaderData();
      console.log(cards);

      useEffect(() => {

            const findCard = cards.find((card) => card.id === id);
            setCard(findCard);

      }, [id, cards]);


      return (
            <div>
                  <DetailsSingleCard card={card}></DetailsSingleCard>
            </div>
      );
};

export default DetailsCard;