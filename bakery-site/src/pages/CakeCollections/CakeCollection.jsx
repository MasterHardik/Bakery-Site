import React from "react";
import "./CakeCollection.css";
import CakeCard from "../../components/Card/CakeCard";

const cakes = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFaZRK_5achqBqUlIzDsvfNSJWjZErg8vRCT1LCyGqEnPSsxB293Oq0M-WZCvXbZfX1IY&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY5Y6U8HrdFm775pKDJzxkRgTf1I0gqg_-emuruVRe5sR4KEoSAKk-CcKUW0ahjfuVb4&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5YrJ4uIZ7jJuHr5eXVViIhuN8NdxU9zFOmJF_j9WUaTs0DKpxCzDPx9D-P2K0V51NRi4&usqp=CAU",
  "https://i.pinimg.com/474x/0e/11/1d/0e111d11dd274641805cdb52381b4b78.jpg",
  "https://i.pinimg.com/736x/c0/da/83/c0da838d95203fffc764a3842d639128.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/delish-oreos-and-milk-cake-pinterest-still001-1580747266.jpg",
  "https://e1.pxfuel.com/desktop-wallpaper/429/792/desktop-wallpaper-happy-marriage-anniversary-cake-in-pinterest.jpg",
  "https://i.pinimg.com/736x/f5/22/62/f522620824d3f847e0fb28058242d5b9.jpg",
];

function CakesCollection({ Categories }) {
  return (
    <div>
      {Categories.map((type, typeIndex) => (
        <React.Fragment key={typeIndex}>
          <h2 className="collection_all" id={`c${typeIndex + 1}`}>{type}</h2>
          <section className="all_cakes">
            {cakes.map((cake, index) => (
              <CakeCard
                cake={{
                  imageUrl: cake,
                  name: "Cake " + (index + 1),
                  description: "Delicious cake",
                }}
                key={index}
              />
            ))}
          </section>
        </React.Fragment>
      ))}
    </div>
  );
}

export default CakesCollection;
