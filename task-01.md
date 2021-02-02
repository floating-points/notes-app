# Task 1

Notes 앱을 만드는 첫 번째 시간입니다.


먼저, `src` 폴더 아래에 `components`라는 폴더를 생성해주세요. 그 다음, `components` 폴더 아래에 `Note`라는 폴더를 만들고, `Note` 폴더 내에 `index.js` 파일을 생성해주세요. 이 파일이 `Note` 컴포넌트의 코드가 들어갈 파일입니다.

최종적으로 아래와 같은 구조로 파일이 만들어집니다.
```
notes-app
⎿ src
  ⎿ components
    ⎿ Note
      ⎿ index.js 
  ⎿ App.js
  ⎿ ...
⎿ node_modules
⎿ ...
```

## Task 1.1

노트를 작성할 수 있는 요소가 필요합니다.

Note 컴포넌트가 `<textarea>` 태그를 포함하도록 작성해주세요. Props와 State는 아직 사용하지 않습니다.

## Task 1.2

`App.js`에 Note를 추가하는 버튼을 만들어줍시다. 

`<button>` 태그를 사용하여 버튼이 클릭되면 Note 컴포넌트를 화면에 하나 더 추가하도록 해주세요.

## Summary

최종적으로 원하는 동작은 아래와 같습니다.

- 첫 페이지에 노트를 추가하는 버튼이 있습니다.
- 버튼을 클릭하면 버튼 아래에 노트(Note 컴포넌트)가 추가됩니다.
- 레퍼런스: https://codepen.io/nickmoreton/pen/gbyygq

## Git works
- `main` 브랜치가 아닌 본인의 브랜치에서 작업해주세요.
- Git Commit은 적당히 작은 작업 단위로 해주세요.
  - 예시) Note 컴포넌트 구현
  - 예시) Button 클릭 시 Note 추가
  - 나쁜 예시) Note 컴포넌트 구현 및 Button 클릭 시 Note 추가

## Pull Request

1. GitHub notes-app 레포지터리의 [Pull Request 메뉴](https://github.com/floating-points/notes-app/pulls)로 이동합니다.

2. 첫 번째 Pull Request는 `main <- 자신의 브랜치(GitHub ID)` 형태로 만듭니다.

![Pull Request Guide Image](/images/task-01/pr.png)

3. Pull Request 설명에 어떻게 기능을 구현했는지 설명해주세요.

4. Reviewer에 다른 분들을 모두 추가해주세요.
