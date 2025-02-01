import { RandomFoxImage } from "@/Components/RandoxFox";
import { MouseEvent, MouseEventHandler, useState } from "react";

const randomFoxImage = () => Math.floor(Math.random() * 123) + 1;
type ImageItem = { id: string; url: string };
const generateUuid = () => Math.random().toString(36).substring(10);

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: ImageItem = {
      id: generateUuid(),
      url: `https://randomfox.ca/images/${randomFoxImage()}.jpg`,
    };

    setImages([...images, newImageItem]);
  };

  return (
    <div>
      <button onClick={addNewFox} type="submit">
        Add new Fox
      </button>

      {images.map((ImageItem) => (
        <div key={ImageItem.id} className="p-4">
          <RandomFoxImage image={ImageItem.url} />
        </div>
      ))}
    </div>
  );
}
