import styled from "styled-components";
import { textStyles } from "../../abstracts/Mixins";

const Button = styled.a`
  ${textStyles}
  font-size: var(--xxs);
  color: var(--white);
  background: linear-gradient(to right, var(--limeGreen), var(--brightCyan));
  padding: 1rem 2rem;
  border-radius: var(--mainRadius);
  cursor: pointer;
  display: inline-block;
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export default Button;
