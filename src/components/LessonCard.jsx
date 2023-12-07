import { useState } from "react";
import Styled from "../scss/lessonCard.module.scss";

const LessonCard = ({ image, name, hour }) => {
  
  console.log(image);

  return (
    <div>
      <div className="d-flex gap-3 justify-content-center align-items-center ">
        <div>
          <img src={image} alt="" width="150px" />
        </div>
        <div>
          <p> {name} </p>
          <p> {hour} </p>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
