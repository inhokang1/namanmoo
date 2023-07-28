import styled from 'styled-components'

function Picture (props){
  return(
    <Pic>{props.name}</Pic>
  );
}
const Pic = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid white;
  border-radius: 10px;
`;
export default Picture;