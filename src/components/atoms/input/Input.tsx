import { VFC } from "react";
import styled from "styled-components";

const SInput = styled.input`
  padding: 6px 30px;
  border-radius: 9999px;
`;

type Props = {
  placeholder: string;
};

export const Input: VFC<Props> = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder}></SInput>;
};
