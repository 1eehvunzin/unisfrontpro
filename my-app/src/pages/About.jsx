function About() {
  return (
    <>
      <h1>About</h1>
      <h2>React Router 개념 학습 및 실습</h2>
      <ul style={{ textAlign: "left" }}>
        <li>React Router Dom 설치</li>
        <li>최소 2개 이상의 페이지 생성 (예: Home.jsx, About.jsx)</li>
        <li>Link 컴포넌트/ useNavigate 훅 사용해 페이지 이동 구현</li>
        <li>“Home → About 이동하기” 버튼 구현</li>
        <li>
          블로그에 “React Router 기본 사용법” 정리 (라우트 설정 코드, 화면 전환
          캡처 포함)
        </li>
      </ul>
    </>
  );
}

export default About;
