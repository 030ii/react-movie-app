import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* a 태그의 href 속성은 페이지 전체를 다시 그린다 (렌더링 x) 
            => 따라서 a 태그 대신 Link 컴포넌트 활용 
            => Link, Router 컴포넌트는 HashRouter 안에 포함되어야 한다
        */}
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
    </div>
  );
}

export default Navigation;
