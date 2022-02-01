import React, { VFC } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { CommonButton } from "../atoms/button/CommonButton";
import { AddInputArea } from "../molecules/AddInputArea";
import { WordCard } from "../organisms/WordCard";
import { userState } from "../../hooks/userState";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUsersArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

export const Cards: VFC = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>英単語カード一覧</h2>
      <AddInputArea />
      <br />
      <CommonButton onClick={onClickSwitch}>切り替え</CommonButton>
      <SUsersArea>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {word.map((card) => {
            return (
              
            );
          })}
        </ul>
      </div>



        <WordCard word="aaa"/>
      </SUsersArea>
    </SContainer>
  );
};
