# 컴포넌트 심화학습
## 내용
- 컴포넌트에서 다른 컴포넌트를 사용하는 방법에 대해 알아봅니다.  
- 컴포넌트 간의 데이터 및 이벤트 전달 방법 및 컴포넌트의 재활용성을 높여주는 기능 중 하나인 Slot을 이용해서 일관성 있는 UI를 개발하는 방법을 알아봅니다.  

## 코드
- /components: import 될 자식 컴포넌트들이 위치한 폴더
    - NestedComponent.vue: 컴포넌트 Import 기본
    - DynamicDataPrpos.vue: 동적 props 전달
    - ParentComponent1.vue: 자식 컴포넌트의 이벤트 직접 발생시키기 + 부모 컴포넌트에서 자식 컴포넌트의 data 변경하기
    - ParentComponent2.vue: 자식 컴포넌트의 함수 직접 호출하기
    - ParentComponent3.vue: 자식 컴포넌트에서 부모 컴포넌트로 이벤트 전달하기
    - ParentComponent4.vue: 자식 컴포넌트의 데이터 옵션 값 동기화
- /views: 부모 컴포넌트들이 위치한 폴더
    - SubComponent.vue: 동적 props 중 v-bind를 이용해 전달해야하는 자료형들을 받아 렌더링
        - object, list, boolean 등
    - ChildComponent{n}.vue: ParentComponent{n}.vue 에 대응
