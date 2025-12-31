import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Copyright = () => {
  return (
    <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
      <p>
        © {new Date().getFullYear()} Little Roses Foundation. Được thiết kế với{" "}
        <FontAwesomeIcon
          icon={faHeart}
          className="text-accent mx-1 animate-pulse"
        />{" "}
        cho cộng đồng.
      </p>
    </div>
  );
};

export default Copyright;
