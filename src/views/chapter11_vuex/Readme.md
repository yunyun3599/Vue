# Vuex
- vuex: vue 애플리케이션을 위한 상태관리 패턴 + 라이브러리
- 모든 컴포넌트에 대한 중앙집중식 저장소 역할을 하며 예측 가능한 방식으로 상태를 변경 가능  
- 데이터를 storeㅇ 저장하고, 프로젝트 전체에서 사용할 수 있도록 해줌으로써, 컴포넌트간에 데이터를 주고 받는 것을 간편하게 해줌  

## Vuex 설치
```sh
npm install vuex@next --save
```


## Vuex store 특징
- 반응형이므로 저장소의 상태를 검색 시에 저장소 상태에 정의된 변수 값의 변경 여부를 바로 알 수 있음
- 저장소 상태를 직접 변경할 수 잆고, 변경할 수 있는 유일한 방법은 명시적인 커밋을 이용한 변경.

### state
- 프로젝트 전체에서 공통으로 사용할 변수를 정의하는 곳
- 모든 컴포넌트에서 사용 가능
- 각 Vue component에서는 computed 속성을 이용해서 변경사항을 추적할 수 있음
```vue
computed: {
    count() {
        return this.$store.state.count;
    }
}
```

### getters
- store 내의 state 변수의 정보를 관리중이라면, 해당 정보에 대한 추가 정보들을 정의해둘 수 있음
- 다른 컴포넌트에서 `this.$store.getters.[getter내 데이터명]`으로 접근 간ㅇ

### mutations
- state에 정의된 정보를 직접 변경하는 것은 허용되지 않으므로 state 내의 변수를 변경하기 위해 mutationsfmf tkdyd
- 비동기가 아니라 동기 처리를 통해 state에 정의된 변수의 변경 사항을 추적할 수 있게 해줌
- mutations에 정의된 함수를 commit을 통해 호출하여 저장소의 state에 정의된 변수의 값을 변경
```vue
methods: {
    increment() {
        this.$store.commit('increment')
    }
}
```

### actions
- mutation과 유사한 역할울 수행
- 단, actions에 정의된 함수에서는 여러 개의 mutations를 실행 가능
- actions에서는 비동기 작업이 가능하므로 비동기 처리 후 mutations를 커밋할 수 있어서 저장소에서 비동기 처리 로직을 관리할 수 있게 해줌
```vue
actions: {
    increment(context) {
        // 비동기 처리 로직 수행 가능
        context.commit('increment')
    }
}
```

## 코드
- /src/store.js: 단순한 store를 구현한 코드
- ./VuexComponent.vue: vuex 관련 예시 코드들을 한 군데에 모아둔 코드
- ./StoreAccess.vue: store를 이용하는 component
- ./store.js: 사용자 로그인에 대한 state 관리. (실제로 사용되는 컴포넌트는 생성 X, 예시 코드 참고용)
