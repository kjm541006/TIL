import React from "react";
function FollowButton() {
  const [following, setFollowing] = React.useState(false);

  return React.createElement(
    "div",
    {
      onClick: () => setFollowing(!following),
    },
    following ? "following" : "Follow"
  );
}

export default FollowButton;
