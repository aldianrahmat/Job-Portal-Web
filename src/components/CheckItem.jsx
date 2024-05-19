import { useEffect, useState } from "react";

const CheckItem = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const clickCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex gap-2 my-2">
      <button
        onClick={clickCheck}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isChecked ? (
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.86499"
              width="19"
              height="19"
              rx="5.5"
              fill="#F9F5FF"
            />
            <rect
              x="0.5"
              y="0.86499"
              width="19"
              height="19"
              rx="5.5"
              stroke="#2F88FF"
            />
            <path
              d="M14.6668 6.86499L8.25016 13.2817L5.3335 10.365"
              stroke="#2F88FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : isHovered ? (
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.86499"
              width="19"
              height="19"
              rx="5.5"
              fill="#E9E4EF"
            />
            <rect
              x="0.5"
              y="0.86499"
              width="19"
              height="19"
              rx="5.5"
              stroke="#2F88FF"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.86499"
              width="19"
              height="19"
              rx="5.5"
              fill="#F9F5FF"
            />
            <rect
              x="0.5"
              y="0.86499"
              width="19"
              height="19"
              rx="5.5"
              stroke="#2F88FF"
            />
          </svg>
        )}
      </button>
      <p>{title}</p>
    </div>
  );
};

export default CheckItem;
