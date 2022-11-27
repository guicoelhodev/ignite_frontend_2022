import styled from 'styled-components';

export const Container = styled.div`
  
  width:100%;
  background-color: var(--gray-700);

  header {
    margin:0 auto;
    max-width:74rem;
    width:100%;
    height:12rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const LogoImage = styled.img`
  height:3rem;
  margin-bottom: 2rem;
`