import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>HOME</h1>
      <h2>유니스 프론트엔드 실습</h2>
      <Link to="/about">
        <button>About</button>
      </Link>
    </>
  );
}

export default Home;
