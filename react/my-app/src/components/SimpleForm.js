// import React, { useState } from "react";

// export default function SimpleForm() {
//   const [nickname, setNickname] = useState("");
//   const [password, setPassword] = useState("");

//   const handleChange = (e) => {
//     if (e.target.name === "nickname") return setNickname(e.target.value);
//     return setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`nickname : ${nickname}, password : ${password}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>닉네임 :</label>
//       <input type="text" name="nickname" onChange={handleChange} value={nickname} />
//       <br />
//       <label>패스워드 :</label>
//       <input type="text" name="password" onChange={handleChange} value={password} />
//       <input type="submit" value="제출" />
//     </form>
//   );
// }

import React, { useState } from "react";

export default function SimpleForm() {
  // const [nickname, setNickname] = useState("");
  // const [password, setPassword] = useState("");
  const [userInputs, setUserInputs] = useState({
    nickname: "1",
    password: "",
  });
  console.log(userInputs);

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nickname, password } = userInputs;
    console.log(userInputs);
    console.log(nickname);
    console.log(password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>닉네임: </label>
        <input type="text" name="nickname" onChange={handleChange} value={userInputs.nickname} />
        <br />
        <label>비밀번호: </label>
        <input type="text" name="password" onChange={handleChange} value={userInputs.password} />

        <input type="submit" value="제출" />
      </form>
    </div>
  );
}
