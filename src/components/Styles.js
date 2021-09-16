import styled, {createGlobalStyle} from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
  padding-right: 30px;
  padding-left: 50px;
}
`;

export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`
export const Image = styled.img`
  width: 100%;
  padding-right: 0;
  border: 0;
  max-width: 100%fit-content;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;





export const  NasaPhotoE = styled.div`
  width: 100%;
  display: flex;
  align-content: flex-start;
  background-color: white;
  padding: 40px;
  margin: 0 auto;
  max-height: 100%;
  padding-right: 30px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
  padding-right: 50px;
  padding-left: 50px;
}
`;



export default GlobalStyle

