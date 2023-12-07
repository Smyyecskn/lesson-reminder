import LessonCard from "./LessonCard";
import { data } from "../data";
import { useState } from "react";

const Lesson = () => {
  const [toogle, setToogle] = useState(true);
  const [yazi, setYazi] = useState("6 Lessons Today");

  return (
    <div className="bg-light m-4 p-4 rounded-5 text-center">
      {!yazi && <h1 className="m-4 mb-4">0 Lessons Today</h1>}

      {toogle && (
        <div className="d-flex flex-wrap justify-content-center align-items-center bg-light ">
          {data.map((item) => (
            <LessonCard key={item.id} {...item} />
          ))}
        </div>
      )}
      <div>
        <button
          onKeyDown={() => setYazi(!yazi)}
          onClick={() => setToogle(!toogle)}
          className="btn btn-primary mb-3"
        >
          CLEAR ALL
        </button>
      </div>
    </div>
  );
};

export default Lesson;
