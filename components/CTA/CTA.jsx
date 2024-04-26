import style from "./cta.module.css"
const CTA = ({
  text,
  link = "javascript:;",
  classes = "",
  bg = "bgGray",
  color = "text-white",
  border = "border-transparent",
  handle = ""
}) => {
  return (
      <div dangerouslySetInnerHTML={{ __html: `<a href="${link}" class="${bg} ${color} ${style.cta} d-flex ${border} ${classes}" ${handle}>${text}</a>` }} />
  )
}

export default CTA