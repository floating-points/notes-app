# Task 2

## Task 2.0

자신이 작업했던 1주차 브랜치에서 아래 명령어를 사용하여 2주차 브랜치를 만들고, 2주차 브랜치에서 진행해주세요.

```bash
git switch -c [GitHub ID]-task2

# 예시
git switch -c blurfx-task2
```

## Task 2.1
지난번에 만들었던 Note를 다른 컴포넌트로 분리합니다. (이미 분리하여 작업하신 분은 2.2로 넘어가주세요.)

일반적으로 컴포넌트는 `src/components` 폴더 아래에 만들어 사용합니다.


폴더 구조 예시:
```
src
  └ components
     └ Note.jsx
```

## Task 2.2
Note 컴포넌트의 배치를 inline이 아닌 block으로 변경해주세요.

예시:

![Block element](/images/task-02/task2.1.png)

## Task 2.3
CSS를 사용하여 Note 컴포넌트를 스타일링합니다. CSS 파일은 Note 컴포넌트가 위치한 폴더에 만들고, 컴포넌트에서 css파일을 불러와 사용하는 방식으로 진행해주세요.

폴더 구조 예시:
```
src
  └ components
     └ Note.jsx
     └ Note.css
```

스타일 예시: (이것보다는 더 예쁘게 해주세요)
![Styled elements](/images/task-02/task2.3.png)

## Task 2.4

Note 컴포넌트에 삭제 버튼을 추가하고, 삭제 버튼을 클릭하면 해당 Note가 삭제되도록 해주세요.

<details>
<summary>Hint</summary>
<p>1주차에서는 state를 사용했으니 이번에는 props를 이용해보세요</p>
</details>
