// Twitter reads its own tag before falling back to Open Graph, so emit the
// same card under both names rather than relying on the fallback.
export { default, size, contentType, alt, generateStaticParams } from "./opengraph-image";
