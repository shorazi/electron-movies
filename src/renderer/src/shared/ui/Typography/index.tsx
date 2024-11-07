const UIBody = (props: { children: string }) => (
  <h1 className="text-3xl font-bold">{props.children}</h1>
)

const UIBodyTitle = (props: { children: string }) => (
  <h1 className="text-5xl leading-4 text-primary font-bold">{props.children}</h1>
)

const UIBody2 = (props: { children: string }) => (
  <h1 className="text-5xl leading-4 text-primary font-[500]">{props.children}</h1>
)

const UIBodySpan = (props: { children: string }) => (
  <h1 className="text-5xl leading-4 text-primary font-[500]">{props.children}</h1>
)

export { UIBody, UIBody2, UIBodySpan, UIBodyTitle }
