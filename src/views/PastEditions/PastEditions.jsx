import React from "react";
import Edition from "../../components/pasteditions/Edition/Edition";
import editionsContent from "../../data/editionsContent";

const PastEditions = () => {
  return (
    <>
      {editionsContent.map((item, i) => (
        <Edition item={item} />
      ))}
    </>
  );
};

export default PastEditions;
