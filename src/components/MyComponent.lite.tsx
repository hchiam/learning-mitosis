import { useStore } from "@builder.io/mitosis";

type Props = {
  message: string;
};

export default function MyBasicComponent(props: Props) {
  const state = useStore({
    name: "Foo",
  });

  return (
    <div>
      {props.message || "Hello"} {state.name}! I can run in React, Vue, Solid or
      Svelte!
    </div>
  );
}
