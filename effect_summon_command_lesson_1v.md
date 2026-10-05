# 🧱 커맨드 블록 조립 수업 — Effect & Summon

```template
player.onChat("1", function () {
})
```

## 시작하기 @showdialog

이번 수업에서는 **Minecraft Education MakeCode의 바닐라 블록**과  
**Command Parts 커스텀 블록**을 함께 사용해 실제 Minecraft 커맨드를 조립합니다.

직접 긴 명령어를 입력하지 않고, 커맨드의 각 부분을 **하나씩 블록으로 연결**합니다.

오늘 배울 커맨드는 두 가지입니다.

- `effect`
- `summon`

그리고 다음 문법도 함께 배웁니다.

- 대상 선택자 `@s`, `@e`
- Selector 문법 `[ ] = ,`
- 조건 `type`, `c`, `name`
- `spawnEvent`
- 상대 위치 좌표

### 중요한 규칙

커맨드 사이의 **띄어쓰기까지 직접 조립**합니다.

예:

```text
effect @s speed 10 1 false
```

블록에서는 다음처럼 만듭니다.

```text
[effect] [공백] [@s] [공백] [speed] [공백] [10] [공백] [1] [공백] [false]
```

`[공백]` 블록은 실제로 `" "` 한 칸을 만듭니다.

---

## Step 1. 나에게 신속 효과 주기

먼저 가장 간단한 `effect` 커맨드를 만들어 봅시다.

완성할 명령어:

```text
effect @s speed 10 1 false
```

의미:

- `effect` : 효과 명령어
- `@s` : 나 자신
- `speed` : 신속
- `10` : 10초
- `1` : 효과 강도
- `false` : 입자를 숨기지 않음

`Command Parts`에서 필요한 조각을 가져와 **바닐라 연결 블록**에 순서대로 넣습니다.

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

### 확인하기

코드를 실행한 뒤 Minecraft 채팅창에 `1`을 입력하세요.

내 캐릭터에게 신속 효과가 적용되면 성공입니다.

---

## Step 2. Selector를 직접 조립하기

이번에는 모든 엔티티 중에서 **소 1마리만 선택**해 봅시다.

만들 Selector:

```text
@e[type=cow,c=1]
```

Selector도 자동으로 만들어 주지 않습니다.

다음 순서로 직접 조립합니다.

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

완성할 명령어:

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

### 생각하기

아래 부분에서:

```text
type=cow
```

`cow`를 `pig`, `chicken`, `sheep`, `zombie`로 바꾸면 어떤 대상이 선택될까요?

---

## Step 3. 위치 블록으로 소 소환하기

이번에는 `summon` 명령어를 만들어 봅시다.

**좌표는 Command Parts에서 만들지 않습니다.**

Minecraft MakeCode의 **위치(Position) 바닐라 블록**을 사용합니다.

상대 위치:

```text
~0 ~0 ~2
```

는 플레이어를 기준으로 Z 방향 2블록 떨어진 위치입니다.

위치 블록은 커맨드에 넣기 위해 **문자열로 변환**합니다.

JavaScript에서는 다음 형태입니다.

```text
pos(0, 0, 2).toString()
```

완성할 명령어:

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

### 확인하기

채팅창에 `3`을 입력하세요.

플레이어 근처에 소가 소환되면 성공입니다.

---

## Step 4. spawnEvent로 아기 소 만들기

`spawnEvent`는 엔티티가 소환될 때 특별한 상태를 적용할 수 있습니다.

이번에는:

```text
minecraft:entity_born
```

을 사용합니다.

완성할 명령어:

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

### 확인하기

채팅창에 `4`를 입력했을 때 **아기 소**가 나오면 성공입니다.

### 바꾸어 보기

`cow` 대신 다음 엔티티 블록을 사용해 보세요.

- `chicken`
- `pig`
- `sheep`
- `villager`

어떤 모습으로 소환되는지 비교합니다.

---

## Step 5. 아기 좀비 만들기

좀비는 다음 spawnEvent를 사용합니다.

```text
minecraft:as_baby
```

완성할 명령어:

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

### 확인하기

채팅창에 `5`를 입력했을 때 아기 좀비가 나오면 성공입니다.

---

## Step 6. 주민의 직업 정하기

이번에는 주민에게 spawnEvent를 적용합니다.

사용할 수 있는 주민 직업 이벤트:

```text
minecraft:become_farmer
minecraft:become_librarian
minecraft:become_armorer
minecraft:become_fisherman
```

먼저 농부 주민을 만들어 봅시다.

완성할 명령어:

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

### 도전하기

마지막 블록 하나만 바꾸어 각각 소환해 보세요.

- 농부 `minecraft:become_farmer`
- 사서 `minecraft:become_librarian`
- 갑옷 제작자 `minecraft:become_armorer`
- 어부 `minecraft:become_fisherman`

커맨드의 앞부분은 그대로이고 **마지막 spawnEvent만 바뀐다**는 점을 확인합니다.

---

## Step 7. 직접 조립 도전

이번에는 완성 코드를 보지 않고 블록만 이용해 만들어 봅시다.

### 미션 A

가장 가까운 조건 대신 `@e` Selector를 사용하여  
**돼지 1마리에게 신속 효과**를 적용하세요.

필요한 문법:

```text
effect @e[type=pig,c=1] speed 30 1 false
```

### 미션 B

플레이어 기준 `~0 ~0 ~3` 위치에 **아기 닭**을 소환하세요.

필요한 문법:

```text
summon chicken ~0 ~0 ~3 minecraft:entity_born
```

좌표는 반드시 **위치(Position) 바닐라 블록**을 사용하세요.

---

## 마무리 @showdialog

오늘은 Minecraft 커맨드를 통째로 입력하지 않고  
각 문법 요소를 블록으로 하나씩 조립했습니다.

배운 구조:

```text
effect
→ 대상
→ 효과
→ 시간
→ 강도
→ 입자 설정
```

```text
summon
→ 엔티티
→ 위치
→ spawnEvent
```

Selector 구조:

```text
@e[type=cow,c=1]
```

를 다음 요소로 직접 나누어 보았습니다.

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

이제 실제 Minecraft 채팅창에서 같은 커맨드를 직접 입력해 보세요.

블록을 보고 줄 커맨드의 구조가 떠오르면 성공입니다.

```package
command_char_block_coding=github:crosschang/command_char_block_coding
```
