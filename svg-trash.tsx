import * as React from 'react';

interface ISvgTrash {
  fill: string;
}

const SvgTrash: React.SFC<ISvgTrash> = (props) => {
  return (
    // <svg
    //   {...props}
    //   className="redirect-img"
    // >
    //   <defs>
    //     <path
    //       id="a"
    //       // tslint:disable-next-line:max-line-length
    //       d="M200.942 638.933h4.69v4.456c0 .198.207.292.336.174l7.406-6.8a.24.24 0 0 0 0-.345l-7.406-6.799c-.13-.119-.336-.025-.336.173v4.457h-5.472a8.586 8.586 0 0 0-8.104 5.729 8.421 8.421 0 0 0-.488 3.18 12.473 12.473 0 0 1 9.374-4.225zm3.12-6.244v-2.896c0-1.546 1.816-2.372 2.957-1.324l7.402 6.803c.772.71.772 1.938 0 2.647l-7.403 6.805c-1.14 1.047-2.955.22-2.955-1.325v-2.897h-3.125a10.899 10.899 0 0 0-8.197 3.699c-.936 1.062-2.684.437-2.734-.974a9.99 9.99 0 0 1 .576-3.766 10.144 10.144 0 0 1 9.573-6.772z"
    //     />
    //     <path
    //       id="c"
    //       d="M182 621a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v34a3 3 0 0 1-3 3h-34a3 3 0 0 1-3-3z"
    //     />
    //     <clipPath id="b">
    //       <use xlinkHref="#a" />
    //     </clipPath>
    //   </defs>
    //   <g opacity="0.9" transform="translate(-182 -618)">
    //     <use fill="#cbcfd7" xlinkHref="#a" opacity="0.9" />
    //     <g clipPath="url(#b)" opacity="1">
    //       <use  data-fill={true} xlinkHref="#c" opacity="0.9" />
    //     </g>
    //   </g>
    // </svg>
    <svg
      {...props}
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
    <g opacity="0.9" transform="translate(-182 -618)">
      <use fill="#cbcfd7" xlinkHref="#a" opacity="0.9" />
      <g clipPath="url(#b)" opacity="1">
      <use  data-fill={true} xlinkHref="#c" opacity="0.9" />
      </g>
    </g>
    </svg>

  );
};

export default SvgTrash;
