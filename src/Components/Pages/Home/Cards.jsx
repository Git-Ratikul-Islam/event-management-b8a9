import SingleCard from "./SingleCard";


const Cards = ({ cards }) => {
      console.log(cards);
      return (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 min-h-screen">
                  {

                        cards.map(cards => <SingleCard key={cards.id} cards={cards}></SingleCard>)
                  }

            </div>
      );
};

export default Cards;