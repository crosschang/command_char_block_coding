# 🧱 Command Block Assembly Lesson — Effect & Summon

```template
player.onChat("1", function () {
})
```

## Introduction @showdialog

In this lesson, we will use **Minecraft Education MakeCode vanilla blocks** together with the **Command Parts custom blocks** to assemble real Minecraft commands.

Instead of typing long commands directly, we will connect each command component **one block at a time**.

This tutorial loads the `command_char_block_coding` extension so that the `Command Parts` examples can appear as proper custom blocks.

For coordinates, we will **not** use custom coordinate blocks. We will use the standard **Minecraft MakeCode Position blocks**.

Today we will learn two commands:

- `effect`
- `summon`

We will also learn:

- target selectors: `@s`, `@e`
- selector syntax: `[ ] = ,`
- selector conditions: `type`, `c`, `name`
- `spawnEvent`
- relative positions

### Important rule

You will also assemble the **spaces between command arguments** yourself.

Example:

```text
effect @s speed 10 1 false
```

In blocks, this is assembled like this:

```text
[effect] [space] [@s] [space] [speed] [space] [10] [space] [1] [space] [false]
```

The `[space]` block returns exactly one space: `" "`.

---

## Step 1. Give yourself Speed

Let's begin with a simple `effect` command.

Target command:

```text
effect @s speed 10 1 false
```

Meaning:

- `effect` : effect command
- `@s` : yourself
- `speed` : Speed effect
- `10` : 10 seconds
- `1` : effect amplifier
- `false` : do not hide particles

From **Command Parts**, connect the pieces in order inside the vanilla string-join structure.

```blocks
player.onChat("1", function () {
    player.execute(
        commandParts.effect() +
        commandParts.space() +
        commandParts.selectorSelf() +
        commandParts.space() +
        commandParts.speed() +
        commandParts.space() +
        commandParts.ten() +
        commandParts.space() +
        commandParts.one() +
        commandParts.space() +
        commandParts.falseValue()
    )
})
```

### Check

Run the code and type `1` in Minecraft chat.

If your player receives the Speed effect, you succeeded.

---

## Step 2. Build a selector yourself

Now let's select **one cow from all entities**.

Selector to build:

```text
@e[type=cow,c=1]
```

The selector is not created automatically.

Assemble it in this order:

```text
[@e]
[[]
[type]
[=]
[cow]
[,]
[c]
[=]
[1]
[]]
```

Target command:

```text
effect @e[type=cow,c=1] slowness 10 1 false
```

```blocks
player.onChat("2", function () {
    player.execute(
        commandParts.effect() +
        commandParts.space() +
        commandParts.selectorEntities() +
        commandParts.openBracket() +
        commandParts.typeKeyword() +
        commandParts.equals() +
        commandParts.cow() +
        commandParts.comma() +
        commandParts.countKeyword() +
        commandParts.equals() +
        commandParts.one() +
        commandParts.closeBracket() +
        commandParts.space() +
        commandParts.slowness() +
        commandParts.space() +
        commandParts.ten() +
        commandParts.space() +
        commandParts.one() +
        commandParts.space() +
        commandParts.falseValue()
    )
})
```

### Think

In this part:

```text
type=cow
```

what happens if you replace `cow` with `pig`, `chicken`, `sheep`, or `zombie`?

---

## Step 3. Summon a cow with a Position block

Now let's build a `summon` command.

**Do not use a custom block for the coordinates.**

Use the standard **Minecraft MakeCode Position block**.

Relative position:

```text
~0 ~0 ~2
```

means a position 2 blocks away on the Z axis relative to the player.

To use the Position block in a command string, convert it to text.

In JavaScript it looks like this:

```text
pos(0, 0, 2).toString()
```

Target command:

```text
summon cow ~0 ~0 ~2
```

```blocks
player.onChat("3", function () {
    player.execute(
        commandParts.summon() +
        commandParts.space() +
        commandParts.cow() +
        commandParts.space() +
        pos(0, 0, 2).toString()
    )
})
```

### Check

Type `3` in chat.

If a cow appears near the player, you succeeded.

---

## Step 4. Use spawnEvent to summon a baby cow

A `spawnEvent` can change the state of an entity when it is summoned.

This time, use:

```text
minecraft:entity_born
```

Target command:

```text
summon cow ~0 ~0 ~2 minecraft:entity_born
```

```blocks
player.onChat("4", function () {
    player.execute(
        commandParts.summon() +
        commandParts.space() +
        commandParts.cow() +
        commandParts.space() +
        pos(0, 0, 2).toString() +
        commandParts.space() +
        commandParts.entityBorn()
    )
})
```

### Check

If typing `4` summons a **baby cow**, you succeeded.

### Try changing the entity

Replace `cow` with:

- `chicken`
- `pig`
- `sheep`
- `villager`

Compare what is summoned.

---

## Step 5. Summon a baby zombie

For zombies, use this spawnEvent:

```text
minecraft:as_baby
```

Target command:

```text
summon zombie ~0 ~0 ~2 minecraft:as_baby
```

```blocks
player.onChat("5", function () {
    player.execute(
        commandParts.summon() +
        commandParts.space() +
        commandParts.zombie() +
        commandParts.space() +
        pos(0, 0, 2).toString() +
        commandParts.space() +
        commandParts.asBaby()
    )
})
```

### Check

If typing `5` summons a baby zombie, you succeeded.

---

## Step 6. Choose a villager profession

Now let's apply a spawnEvent to a villager.

Available villager profession events:

```text
minecraft:become_farmer
minecraft:become_librarian
minecraft:become_armorer
minecraft:become_fisherman
```

First, summon a farmer villager.

Target command:

```text
summon villager ~0 ~0 ~2 minecraft:become_farmer
```

```blocks
player.onChat("6", function () {
    player.execute(
        commandParts.summon() +
        commandParts.space() +
        commandParts.villager() +
        commandParts.space() +
        pos(0, 0, 2).toString() +
        commandParts.space() +
        commandParts.becomeFarmer()
    )
})
```

### Challenge

Change only the final block and summon each profession.

- Farmer: `minecraft:become_farmer`
- Librarian: `minecraft:become_librarian`
- Armorer: `minecraft:become_armorer`
- Fisherman: `minecraft:become_fisherman`

Notice that the beginning of the command stays the same and only the final `spawnEvent` changes.

---

## Step 7. Build it yourself

Now complete the commands without copying the finished block code.

### Mission A

Use an `@e` selector to give **one pig Speed**.

Command structure:

```text
effect @e[type=pig,c=1] speed 30 1 false
```

### Mission B

Summon a **baby chicken** at `~0 ~0 ~3` relative to the player.

Command structure:

```text
summon chicken ~0 ~0 ~3 minecraft:entity_born
```

For the coordinates, use the standard **Position block**.

---

## Summary @showdialog

Today, we did not type Minecraft commands as one long line.

Instead, we assembled each syntax element one block at a time.

Effect structure:

```text
effect
→ target
→ effect
→ duration
→ amplifier
→ particle setting
```

Summon structure:

```text
summon
→ entity
→ position
→ spawnEvent
```

Selector structure:

```text
@e[type=cow,c=1]
```

was assembled from:

```text
@e
[
type
=
cow
,
c
=
1
]
```

Now try typing the same commands directly into Minecraft chat.

If you can look at the blocks and understand how the command line is built, you have completed the lesson.

---

```package
command_char_block_coding=github:crosschang/command_char_block_coding
```
