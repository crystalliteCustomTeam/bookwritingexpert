import style from "./cta.module.css"
const CTA = ({
  text,
  link = "javascript:;",
  classes = "fw500",
  bg = "bgGray",
  color = "text-white",
  border = "border-transparent",
  handle = "",
  btn = false
}) => {
  if (btn) {
    return (
      <div dangerouslySetInnerHTML={{ __html: `<button type="submit" class="${bg} ${color} ${style.cta} d-flex ${border} ${classes}" ${handle}>${text}</button>` }} />
    )
  } else {
    return (
      <div dangerouslySetInnerHTML={{ __html: `<a href="${link}" class="${bg} ${color} ${style.cta} d-flex ${border} ${classes}" ${handle}>${text}</a>` }} />
    )
  }
}

export default CTA