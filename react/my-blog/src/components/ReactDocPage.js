import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ReactDocPage() {
  const params = useParams();
  console.log(params);

  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.docId}`);
      console.log(res);
      const result = await res.json();
      console.log(result.body);
      setParagraph(result.body);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>ReactDocPage #{params.docId}</h1>
      <p>{paragraph}</p>
    </div>
  );
}
