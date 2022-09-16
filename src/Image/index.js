import React from "react";
import styled from "styled-components";


function Image(props) {
  const { className } = props;

  return (
    <Image1 className={`image-2 ${className || ""}`}>
      <Image2 className="image-3" />
    </Image1>
  );
}

const Image1 = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  top: 233px;
  left: 13px;
  display: flex;
  align-items: flex-start;
  background-color: var(--geyser);
  border-radius: 25px;
  overflow: hidden;

  &.image-2.image-4 {
    top: 317px;
  }

  &.image-2.image-5 {
    top: 401px;
  }

  &.image-2.image-6 {
    top: 485px;
  }

  &.image-2.image-7 {
    top: 569px;
  }

  &.image-2.image-8 {
    top: 653px;
  }
`;

const Image2 = styled.div`
  width: 44px;
  height: 44px;
  background-color: var(--mist-gray);
  border-radius: 100px;
`;

export default Image;
