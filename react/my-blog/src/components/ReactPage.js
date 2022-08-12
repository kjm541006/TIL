import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function ReactPage() {
  const docs = [
    { id: 1, title: "1번입니다.", date: "01/12/2022" },
    { id: 2, title: "2번입니다.", date: "02/12/2022" },
    { id: 3, title: "3번입니다.", date: "03/12/2022" },
    { id: 4, title: "4번입니다.", date: "04/12/2022" },
    { id: 5, title: "5번입니다.", date: "05/12/2022" },
  ];

  return (
    <div>
      {docs.map((doc) => (
        <Link to={`${doc.id}`} key={doc.id} style={{ display: "block", margin: "1rem 0" }}>
          {doc.title}
        </Link>
      ))}
      {/* <Outlet /> */}
    </div>
  );
}
