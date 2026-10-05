# V1 빠른 테스트

이 프로젝트는 **Minecraft MakeCode 바닐라 블록을 그대로 사용**합니다.

커스텀 블록은 `custom.ts`에만 정의되어 있습니다.
명령 실행, 채팅 이벤트, 문자열 `연결` 블록은 MakeCode의 기존 바닐라 블록을 사용하세요.

## 핵심 규칙

- 각 토큰 블록은 화면에 보이는 문자열만 반환합니다.
- 숨겨진 공백을 붙이지 않습니다.
- 띄어쓰기가 필요한 곳에는 반드시 `[공백]` 블록을 직접 넣습니다.
- `[`, `]`, `=`, `,`도 학생이 직접 조립합니다.

## Effect 테스트

블록 순서:

```text
[effect]
[공백]
[@e]
[[]
[type]
[=]
[zombie]
[,]
[c]
[=]
[1]
[]]
[공백]
[speed]
[공백]
[10]
[공백]
[1]
[공백]
[false]
```

완성 문자열:

```text
effect @e[type=zombie,c=1] speed 10 1 false
```

## Summon 테스트

블록 순서:

```text
[summon]
[공백]
[villager]
[공백]
[~]
[공백]
[~]
[공백]
[~]
[공백]
[minecraft:become_farmer]
```

완성 문자열:

```text
summon villager ~ ~ ~ minecraft:become_farmer
```

## 한국어 현지화

기본 블록 텍스트는 영어이며 한국어는 다음 JSON 파일로 제공합니다.

```text
_locales/ko/command-learning-blocks-strings.json
```

기존 `pxt.json`을 이미 사용 중이라면 통째로 덮어쓰지 말고 아래 두 파일이 `files` 목록에 들어있는지만 확인하세요.

```json
"custom.ts",
"_locales/ko/command-learning-blocks-strings.json"
```
