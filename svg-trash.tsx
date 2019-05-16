import * as React from 'react';

interface ISvgTrash {
  fill: string;
}

const SvgTrash: React.SFC<ISvgTrash> = (props) => {
  return (
    <svg
      {...props}
      className="trash-img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
    <path
      id="a"
      d="M 10 2 L 9 3 L 5 3 C 4.448 3 4 3.448 4 4 C 4 4.552
      4.448 5 5 5 L 7 5 L 17 5 L 19 5 C 19.552 5 20 4.552 20
      4 C 20 3.448 19.552 3 19 3 L 15 3 L 14 2 L 10 2 z M 5
      7 L 5 20 C 5 21.105 5.895 22 7 22 L 17 22 C 18.105 22
      19 21.105 19 20 L 19 7 L 5 7 z"
    />
    </svg>

  );
};

export default SvgTrash;
