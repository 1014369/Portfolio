import { useState, useEffect } from "react";

function ChangingWord() {
  const skills = ["AI Engineer", "Data Scientist", "ML Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2>
      <span>{skills[index]}</span>
    </h2>
  );
}

export default ChangingWord;