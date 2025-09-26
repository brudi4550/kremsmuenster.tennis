"use client";

import { JSX } from "react";

export default function AnimationSpinner(): JSX.Element {

  return (
    <div className="flex items-center justify-center p-8">
      <svg
        width="480"
        height="240"
        viewBox="0 0 480 240"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Tennis Ball */}
        <g>
          {/* Main ball circle */}
          <circle
            cx="240"
            cy="120"
            r="66"
            fill="#FFFF33"
            stroke="#FFF"
            strokeWidth="4"
          />

          {/* Tennis ball seam - creates sideways spinning effect */}
          <g>
            {/* Left seam curve */}
            <path
              d="M 192 78 Q 222 120 192 162"
              fill="none"
              stroke="#FFF"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="1"
            >
              <animate
                attributeName="d"
                values="M 192 78 Q 222 120 192 162;M 180 90 Q 240 120 180 150;M 192 78 Q 222 120 192 162"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>

            {/* Right seam curve */}
            <path
              d="M 288 78 Q 258 120 288 162"
              fill="none"
              stroke="#FFF"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="1"
            >
              <animate
                attributeName="d"
                values="M 288 78 Q 258 120 288 162;M 300 90 Q 240 120 300 150;M 288 78 Q 258 120 288 162"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>


          </g>
        </g>

        {/* Spin lines on the right side */}
        <g opacity="0">
          <path
            d="M 312 90 L 336 82"
            stroke="#888"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 317 120 L 348 120"
            stroke="#888"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 312 150 L 336 158"
            stroke="#888"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Lines appear during spin */}
          <animate
            attributeName="opacity"
            values="0;0;1;1;0;0"
            dur="3s"
            repeatCount="indefinite"
          />
        </g>

        {/* Cursor */}
        <g>
          {/* Cursor pointer */}
          <path
            d="M 0 0 L 0 38 L 10 29 L 19 38 L 24 34 L 14 24 L 29 24 Z"
            fill="#333"
            stroke="#FFF"
            strokeWidth="2"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="384 107;168 107;384 107"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          {/* Cursor click effect */}
          <circle
            r="8"
            fill="rgba(51,51,51,0.3)"
            opacity="0"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="384 107;168 107;384 107"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0;0.7;0;0;0"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="8;8;19;8;8;8"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};
