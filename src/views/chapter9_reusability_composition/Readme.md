## Composition API
- setup() 메소드 안에서 한 덩어리로 코드를 구현하여 관리를 쉽게 할 수 있음  
- 특정 기능을 갖는 함수를 정의하고 API 처럼 사용할 수 있게 해주는 것  

## Setup
- 컴포지션 API를 구현하는 곳
- 컴포넌트 라이프 사이클 중 `beforeCreate` 와 `created` 훅 사이에서 실행됨
    - 따라서 onBeforeCreate, onCreated 훅은 필요 없고 setup() 안에서 코드를 작성하면 됨
- 훅 순서
```
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeUnmount
- unmounted
- errorCaptured
- renderTracked
- renderTriggered
```
- setup()에서 onMounted() 훅을 적용한 예시 코드
```vue
export default {
    setup() {
        // mounted
        onMounted(() => {
            console.log('Component is mounted')
        })
    }
}
```

## 믹스인(Mixins)
- 공통 모듈 파일. 자주 사용되는 기능을 메소드로 만들어 등록해놓고, 각 화면에서 import 하여 사용
- vue의 라이프사이클 훅까지 사용 가능
- Mixin은 기능을 따로 구현하고, 필요할 떄마다 믹스인 파일을 컴포넌츠에 결합해서 사용하는 방법.

## Custom Directives
- v-model, v-show 디렉티브 같은 기본 디렉티브 외에 사용작 직접 정의해서 사용할 수 있는 디렉티브
- e.g) 특정 페이지에서 페이지가 열림과 동시에 input text 창에 마우스 포커스가 위치하는 경우 
- custom directives도 특정 컴포넌트 안에서만 사용하도록 등록할 수도 있고, 전역에서 사용하도록 등록할 수도 있음.
- 전역 custom directives 등록
    - src/main.js
    - ./BroadCustomDirectives.vue
- 특정 컴포넌트 custom directives 등록
    - CustomDirectives.vue


## 코드
- CalculatorBasic.vue
    - composition API를 사용하지 않고 구현한 베이직 코드
- CalculatorCompositionApi.vue
    - composition api의 reactive를 사용한 코드
- CalculatorCompositionApi2.vue
    - composition api 의 reactive와 compute를 사용한 코드
    - 해당 컴포넌트 내에서만 사용이 가능함
- CalculatorCompositionApi2.vue
    - composition api 의 reactive, compute, toRefs를 사용한 코드
    - 여러 번 반복해서 사용할 수 있도록 재사용 가능한 코드로 작성
    - 재사용 가능하도록 함수를 분리
    - toRefs: 외부 function에서 반응형 변수를 사용하기 위함
        - v-model 디렉티브를 사용하면 함수를 컴포넌트 밖으로 빼면 사용자가 입력한 값에 대한 반응형 처리가 불가능해짐 
        - toRefs 함수를 사용하면 컴포넌트 밖에서도 반응형 처리가 가능해짐
- Common.js & CalculatorCompositionAPI4
    - Common.js: 컴포넌트 내에서 정의된 코드를 다른 컴포넌트에서도 사용할 수 있도록 컴포넌트 밖으로 분리
    - CalculatorCompositionAPI4: Common.js를 사용
- CompositionApiProvide & CompositionApiInject
    - Provide/Inject를 이용해 값을 전달하는 코드
- API 이용하는 Mixin 예시는 src/mixin.js와 /src/ServerDataRendering/ 참고
    - mixin 파일 전역으로 등록하는 법도 여기에 포함
- mixin.js & ComponentMixinHook.vue
    - mixin.js에서 mounted(), unmounted() 구현
    - ComponentMixinHook.vue에서 mounted(), unmounted() 구현
    - ComponentMixinHook.vue에서 mixins에 mixin.js 내용 포함
    - 결과로 페이지가 Mount 될 때 mixin의 mounted() 먼저 실행됨, unmounted 경우에도 mixin 부터 실행됨.
- BroadCustomDirectives.vue, src/main.js
    - 전역으로 등록한 custom directive인 v-focus
    - 적용된 element에 mount 시점에 focus를 줌 -> 페이지 열면 해당 element에 focus
- CustomDirectives.vue
    - 컴포넌트에 적용한 custom directive
    - 특정 element에 바인딩할 데이터와 함께 적용.
    - 바인딩된 데이터에 정의된 top, left 값을 토대로 해당 요소를 페이지의 top, left px에 맞춰 위치시킴