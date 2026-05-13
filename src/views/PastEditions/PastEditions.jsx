import React from "react";
import Edition from "../../components/common/edition/Edition";
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
