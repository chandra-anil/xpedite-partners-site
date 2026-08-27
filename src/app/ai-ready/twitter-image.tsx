/* Same card as opengraph-image.tsx. X/Twitter needs its own file for the
   summary_large_image tag; the artwork is shared so the two cannot drift. */
import { renderShareCard, SIZE, CONTENT_TYPE, ALT } from "./_og/card";

export const size = SIZE;
export const contentType = CONTENT_TYPE;
export const alt = ALT;

export default function TwitterImage() {
  return renderShareCard();
}
