import Image from "next/image";
import type { StripImage } from "@/lib/posts";

/**
 * A slow horizontal drift of photos, framed like a strip of film.
 *
 * The track holds two copies of the same images and slides exactly half its
 * width, so the loop is seamless. Pausing and colourising on hover are pure
 * CSS, which keeps this a server component.
 */
export default function FilmStrip({ images }: { images: StripImage[] }) {
  if (images.length === 0) return null;

  const track = [...images, ...images];

  return (
    <div className="film-strip" aria-label="Photos from years of running">
      <div className="film-strip__track">
        {track.map((image, index) => (
          <div className="film-strip__frame" key={`${image.src}-${index}`}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={index < images.length ? image.alt : ""}
              aria-hidden={index >= images.length}
              sizes="480px"
              priority={index < 3}
              className="film-strip__img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
