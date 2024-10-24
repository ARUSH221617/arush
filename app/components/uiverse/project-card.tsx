import React, { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children?: ReactNode;
  className?: string;
  [key: string]: any;
}

const Card: React.FC<CardProps> = ({ children, className, title, thumbnail, types, ...props }) => {
  return (
    <StyledWrapper className={className} {...props}>
      <article className="article-wrapper">
        <div className="rounded-lg container-project">
          {thumbnail}
        </div>
        <div className="project-info">
          <div className="flex-pr">
            <div className="project-title text-nowrap">{title}</div>
            <div className="project-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                color="black"
                strokeLinejoin="round"
                strokeLinecap="round"
                viewBox="0 0 24 24"
                strokeWidth={2}
                fill="none"
                stroke="currentColor"
              >
                <line y2="12" x2="19" y1="12" x1="5" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
          <div className="types">
            {types.map((type, index)=><span key={index} className="project-type">&bullet; {type}</span>)}
            {/* <span
              style={{
                backgroundColor: "rgba(165, 96, 247, 0.43)",
                color: "rgb(85, 27, 177)",
              }}
              className="project-type"
            >
              &bullet; Analytics
            </span> */}
          </div>
        </div>
      </article>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .article-wrapper {
    width: 250px;
    transition: 0.15s all ease-in-out;
    border-radius: 10px;
    padding: 5px;
    border: 4px solid transparent;
    cursor: pointer;
    background-color: white;
  }

  .article-wrapper:hover {
    box-shadow: 10px 10px 0 #4e84ff, 20px 20px 0 #4444bd;
    border-color: #0578c5;
    transform: translate(-20px, -20px);
  }

  .article-wrapper:active {
    box-shadow: none;
    transform: translate(0, 0);
  }

  .types {
    gap: 10px;
    display: flex;
    justify-content: flex-start;
  }

  .rounded-lg {
    border-radius: 10px;
  }

  .article-wrapper:hover .project-hover {
    transform: rotate(-45deg);
    background-color: #a6c2f0;
  }

  .project-info {
    padding-top: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .project-title {
    font-size: 2em;
    margin: 0;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: black;
  }

  .flex-pr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-type {
    background: #b2b2fd;
    color: #1a41cd;
    font-weight: bold;
    padding: 0.3em 0.7em;
    border-radius: 15px;
    font-size: 12px;
    letter-spacing: -0.6px;
  }

  .project-hover {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 9px;
    transition: all 0.3s ease;
  }

  .container-project {
    width: 100%;
    height: 170px;
    background: gray;
  }
`;

export default Card;
