import styled from "styled-components";

export const Container = styled.div`

width:100%;
flex:1;
padding-top: 2rem;

  main {
    padding: 1rem;
    margin:0 auto;
    max-width:50rem;
    width:100%;

  }
`;

export const ListCountInfo = styled.section`

width: 100%;
padding: 1rem 0;

display: flex;
align-items: center;
justify-content: space-between;

article {
  p {
    font-weight: 500;
    color:var(--blue);
  };

  display: flex;
  align-items: center;
  gap:0.4rem;

  span {
    display: grid;
    place-items: center;
    background-color: var(--gray-400);
    color: var(--gray-300);
    border-radius: 12px;
    padding:0.3rem 0.8rem;
  }
};

article:nth-child(2){
  p {
    color: var(--purple);
  }
}
`;

export const EmptyTask = styled.section`

padding-top:2rem;
width:100%;
heighT:100%;

display: grid;
place-items: center;
gap: 1rem;

p {
  color: var(--gray-300);
  font-size:1.2rem;
  margin-top:5px;
}

p:nth-child(1){
  font-weight: 700;
}
`