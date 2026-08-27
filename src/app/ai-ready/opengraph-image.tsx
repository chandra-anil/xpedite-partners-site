import { renderShareCard, SIZE, CONTENT_TYPE, ALT } from "./_og/card";

export const size = SIZE;
export const contentType = CONTENT_TYPE;
export const alt = ALT;

export default function OpengraphImage() {
  return renderShareCard();
}
