import React from "react";
import { Link } from "react-router-dom";

export default function Mainpage() {
  return (
    <div>
      <h1>MainPage</h1>
      {/* a태그를 사용해도 가능하지만 a태그를 사용하면 문서를 불러오고 새로고침되어 페이지가 깜빡거림 */}
      <Link to={"/blog"}>Blog</Link> | <Link to={"/tech"}>Tech</Link>
    </div>
  );
}
