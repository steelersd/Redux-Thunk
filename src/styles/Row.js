import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;


export const Header = Row.extend`
  font-size: 25px;
`;


export default Row
