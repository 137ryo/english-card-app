import { CommonButton } from "../atoms/button/CommonButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";
import { memo } from "react";

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 10px;
`;
// const SButtonArea = styled.div`
//   display: flex;
//   align-items: center;
// `;

export const AddInputArea = memo(() => {
  return (
    <SContainer>
      <SButtonWrapper>
        <Input placeholder="英単語を入力" />
        <br />
        <Input placeholder="答えを入力" />
        <br />
        <CommonButton>追加</CommonButton>
      </SButtonWrapper>
    </SContainer>
  );
});
