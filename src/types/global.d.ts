// This is a workaround for TypeScript not recognizing Splide.
// Taken from https://github.com/Splidejs/splide/issues/1179#issuecomment-1923290604
declare module "@splidejs/react-splide" {
  export { Options } from "@splidejs/splide"
  export { Splide, SplideSlide } from "@splidejs/react-splide"
}
