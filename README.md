# Learning [Mitosis](https://github.com/BuilderIO/mitosis)

Just one of the things I'm learning. https://github.com/hchiam/learning

Write components in an intermediate representation that can be compiled to many frameworks (e.g. angular, qwik, react, solid, svelte, vue2, vue3).

[WebComponents can be used in every framework, but aren't native to any framework. Mitosis is like a restricted (more static/declarative) React from which you can generate a intermediate JSON representation that can be compiled to other frameworks or even for low-code editors.](https://www.youtube.com/watch?v=XQIuv34-K_8)

https://github.com/BuilderIO/mitosis

```sh
npm install @builder.io/mitosis-cli @builder.io/mitosis
```

then set up mitosis.config.js to specify the target output frameworks:

```js
module.exports = {
  files: "src/**",
  targets: ["vue3", "solid", "svelte", "react"],
};
```

and maybe tsconfig.json:

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "@builder.io/mitosis"
  }
}
```

and then finally to generate code for the target frameworks:

```sh
npm exec mitosis build
```

And finally use the files in the `/output` folder.
