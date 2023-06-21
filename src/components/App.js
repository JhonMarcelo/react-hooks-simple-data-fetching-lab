// create your App component here
import { useState, useEffect } from "react";

export default function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://randomfox.ca/floof/")
      .then((r) => r.json())
      .then((data) => setImage(data.image));
  }, []);
  if (!image) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={image} alt="A Random Dog" />
    </div>
  );
}
