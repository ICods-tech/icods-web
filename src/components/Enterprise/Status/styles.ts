
import styled from 'styled-components';


export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

export const StatusText = styled.p<{ status }>`
  font-size: 1rem;
  font-weight: 700;
  // alterar a cor de acordo com o status
  color: ${({ status }) => {
    if (status === 'ACTIVE') {
      return '##0FB016';
    } else if (status === 'INACTIVE') {
      return '##2B90D9';
    } else if (status === 'IN_PROGRESS') {
      return '##929292';
    }
  }};
`

export const ActiveIcon = styled.img`
  width: 3rem;
  height: 2rem;
`

