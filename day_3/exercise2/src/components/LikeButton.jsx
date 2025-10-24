import React, { useState } from "react";
import "./LikeButton.css";
function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    setDisabled(true);
    if (liked) {
      setLiked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setCount(count + 1);
    }
    // Disable for 1 second to prevent spam clicks
    setTimeout(() => setDisabled(false), 1000);
  };
  return (
    <div className="like-button">
      <button
        onClick={handleClick}
        disabled={disabled}
        className={liked ? "liked" : "unliked"}
      >
        {liked ? ":heart: Liked" : " Like"}
      </button>
      <p>
        {count} {count === 1 ? "like" : "likes"}
      </p>
    </div>
  );
}
export default LikeButton;






