// CSS
import styles from "./styles/cta.module.css"

export default function CTA({
  link = "javascript:;",
  text = "Get Started",
  css = "",
  handle = () => {},
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<a href="${link}" class="${styles.cta} ${css}" onClick="${handle}"}>${text}</a>`,
      }}
    />
  )
}
