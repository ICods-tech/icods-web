import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: none;
  
  object-fit: cover;
  scroll-snap-align: start;

  pointer-events: none;

  margin-bottom: 5.54125rem;
  @media (max-width: 769px) {
    margin-bottom: 5.125rem;
  }

 h1 {
   font-size: 3rem;
   line-height: 4.125rem;
   text-align: center;
   color: #282C37;
   
   margin: 5.563rem auto;

   @media (max-width: 769px) {
     font-size: 1.875rem;
     line-height: 120%;
   }
 }

 img {
   @media (max-width: 500px) {
     width: 80%;;
   }
 }

 p {
   font-size: 1.25rem;
   font-weight: normal;
   line-height: 1.688rem;
   text-align: center;
   
   color: #282C37;
   max-width: 25%;   
   margin-top: 3.56rem;
   margin-bottom: 5.;
   @media (max-width: 769px) {
     min-width: 75%;
   }
 }
`;