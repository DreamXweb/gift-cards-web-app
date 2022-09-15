import React from "react";
import styled from "styled-components";
import { InterNormalSonicSilver16px } from "../../styledMixins";


function Group8115(props) {
  const { className } = props;

  return (
    <Group81151 className={`group-8115 ${className || ""}`}>
      <Text2 className="text-2">+123</Text2>
      <Number className="number-5">800</Number>
      <Number1 className="number-6">2738</Number1>
      <Number2 className="number-7">9700</Number2>
    </Group81151>
  );
}

const Group81151 = styled.div`
  ${InterNormalSonicSilver16px}
  height: 16px;
  align-self: flex-end;
  margin-left: 56px;
  display: flex;
  align-items: flex-start;
  min-width: 166px;

  &.group-8115.group-8118 {
    position: absolute;
    top: 12px;
    left: 16px;
    align-self: unset;
    margin-left: unset;
  }
`;

const Text2 = styled.div`
  min-height: 16px;
  min-width: 38px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Number = styled.div`
  min-height: 16px;
  margin-left: 4px;
  min-width: 30px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Number1 = styled.div`
  min-height: 16px;
  margin-left: 4px;
  min-width: 39px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Number2 = styled.div`
  min-height: 16px;
  margin-left: 4px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

export default Group8115;
