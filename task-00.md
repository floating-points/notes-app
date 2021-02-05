# Task 0

이번 Task에서는 Git 레포지터리를 내려받고 React.js 프로젝트를 생성합니다.

## 레포지터리 Clone 하기
가장 먼저 이 레포지터리를 `git clone` 명령어를 통해 각자 컴퓨터에 내려받아주세요. 아래 두 명령어 중 자신의 환경에 맞는 명령어를 선택해주세요.

```bash
git clone git@github.com:floating-points/notes-app.git

# 혹은

git clone https://github.com/floating-points/notes-app.git
```

## 각자 작업할 브랜치 만들기
먼저 `cd` 명령어를 사용해 앞에서 clone했던 notes-app 레포지터리 폴더로 이동합니다.
```bash
cd notes-app
```

그 다음 각자의 GitHub 아이디로 브랜치를 만들어줍니다.
```bash
git switch -c <GitHub ID>

# 예시) git switch -c blurfx
```

브랜치가 만들어지면, 자동적으로 새로 만든 브랜치로 변경됩니다.

새로 만든 브랜치에 main 레포지터리의 파일들(tasks-*.md와 images 폴더)이 딸려옵니다. 불편하시다면 지우셔도 무방합니다!

## React App 생성하기

각자 React.js를 공부하는 과정에서 Node.js를 이미 설치하셨을거라 생각됩니다. 아직 설치가 되어있지 않다면 [Node.js 홈페이지](https://nodejs.org/en/)를 통해 설치해주세요.

그 다음 `create-react-app`을 사용하여 Notes 애플리케이션을 만드는데 사용할 React.js 프로젝트를 생성합니다.
```bash
# notes-app 폴더 내에서 아래 명령어를 사용해 React.js 프로젝트를 생성합니다.
npx create-react-app .
```

프로젝트 생성이 끝나면 아래와 같은 파일과 폴더들이 만들어져 있는지 확인해봅니다.
```
README.md
package.json
package-lock.json 혹은 yarn.lock
node_modules/
public/
src/
```


### Troubleshooting
 
 만약 `We no longer support global installation of Create React App`오류가 나온다면 아래 방법을 따라해보세요
- `npm uninstall -g create-react-app` 후 다시 `npx create-react-app .`

그래도 진행이 안된다면
- `git switch main` 명령어로 `main` 브랜치로 이동해주세요.
- `git branch -D [GitHub ID]` 명령어로 앞에서 생성했던 브랜치를 삭제해줍니다.
- 그 다음 `git switch project-template` 명령어로 `project-template` 브랜치로 이동해주세요.
- `git switch -c [GitHub ID]` 명령어로 자신의 GitHub ID 브랜치를 만들어주세요.
- 미리 만들어진 프로젝트 파일들이 잘 보인다면 `npm install` 명령어로 의존성 패키지들을 설치하신 뒤 작업하시면 됩니다.


## .gitignore 파일 만들기

`git`을 사용하다보면 종종 올리고싶지 않은 파일들이 생깁니다.

Node.js 환경에서는 `node_modules`와 같은 폴더들이 해당되는데 이럴때 `.gitignore` 라는 파일을 만들어 `git`에게 특정 파일과 폴더들을 무시하도록 할 수 있습니다.

프로젝트 루트 폴더(`notes-app/`)에 `.gitignore`라는 파일을 만들고 아래 내용을 입력합니다.

```gitignore
node_modules/
```

## 마무리

이것으로 기본적인 프로젝트 생성과 설정은 완료되었습니다. 이제 Task 1을 진행하며 본격적으로 개발을 시작해봅시다.
