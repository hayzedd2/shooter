## What is this?

- A simple shooting game


## Who cares? why did you build this?

To show how easy you can manage keyboard events while focusing on the main logic of your game.

## Show me

- See for instance, how this game control is being set up

```tsx
 useKeys({
    keys: ["ArrowLeft", "ArrowRight"," "],
    triggerOnAnyKey: true,
    enableKeyRepeatOnHold: true,
    callback: (e) => {
      if (e.key == "ArrowRight") movePlayer("right");
      if (e.key == "ArrowLeft") movePlayer("left");
      if (e.key == " ") shoot()
    },
  });
```

- You can use something like this by installing a simple npm package i built 
- **NPM Package**: [use-keys-bindings](https://www.npmjs.com/package/use-keys-bindings)