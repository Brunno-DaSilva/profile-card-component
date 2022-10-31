import React from "react";
import { ReactComponent as ReactLogo } from "../../assets/images/bg-pattern-card.svg";
import "./useCardMainStyles.scss";

type CardDataProps = {
  id: string;
  name: string;
  profilePicture: string;
  age: string;
  city: string;
  followers: number;
  likes: number;
  uploadedPhotos: number;
};
const CardMain: React.FC<CardDataProps> = ({
  id,
  name,
  profilePicture,
  age,
  city,
  followers,
  likes,
  uploadedPhotos,
}) => {
  return (
    <div className="CardMain">
      <div className="CardMain__top_bg">
        <ReactLogo
          style={{
            borderTopRightRadius: "0.9rem",
            borderTopLeftRadius: "0.9rem",
          }}
        />
      </div>
      <div className="CardMain__bottom">
        <div className="CardMain__bottom-profile">
          <div className="bottom-profile__img">
            <img
              src={require("../../assets/images/image-victor.jpg")}
              alt={name}
            />
          </div>
          <div className="bottom-profile__info">
            <h4>
              {name} <span>{age}</span>
            </h4>
            <p>{city}</p>
          </div>
        </div>
        <div className="divider" />
        <div className="CardMain__bottom-sm_info">
          <div className="sm_info__container">
            <div className="sm_info__container-number">
              <h4>{followers}</h4>
            </div>
            <div className="sm_info__container-title">
              <span>Followers</span>
            </div>
          </div>
          <div className="sm_info__container">
            <div className="sm_info__container-number">
              <h4>{likes}</h4>
            </div>
            <div className="sm_info__container-title">
              <span>Likes</span>
            </div>
          </div>
          <div className="sm_info__container">
            <div className="sm_info__container-number">
              <h4>{uploadedPhotos}</h4>
            </div>
            <div className="sm_info__container-title">
              <span>Photos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMain;
