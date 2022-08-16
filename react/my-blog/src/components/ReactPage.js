import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function ReactPage() {
  // api call
  // const docs = [
  //   { id: 1, title: "1번입니다.", date: "01/12/2022" },
  //   { id: 2, title: "2번입니다.", date: "02/12/2022" },
  //   { id: 3, title: "3번입니다.", date: "03/12/2022" },
  //   { id: 4, title: "4번입니다.", date: "04/12/2022" },
  //   { id: 5, title: "5번입니다.", date: "05/12/2022" },
  // ];
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log(res);
      const result = await res.json();
      console.log(result);
      setDocs(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      {docs.map((doc) => (
        <Link to={`${doc.id}`} key={doc.id} style={{ display: "block", margin: "1rem 0", textDecoration: "none" }}>
          <h2>
            {doc.id} {doc.title}
          </h2>
        </Link>
      ))}
      {/* <Outlet /> */}
    </div>
  );
}
