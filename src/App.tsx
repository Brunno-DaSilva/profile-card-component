import React from "react";
import CardMain from "./components/CardMain";
import CARDS_DATA from "./assets/CARD_DATA.js";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      {CARDS_DATA.map((card) => {
        return (
          <CardMain
            key={card.id}
            id={card.id}
            name={card.name}
            profilePicture={card.profilePicture}
            age={card.age}
            city={card.city}
            followers={card.followers}
            likes={card.likes}
            uploadedPhotos={card.uploadedPhotos}
          />
        );
      })}
    </div>
  );
};

export default App;
