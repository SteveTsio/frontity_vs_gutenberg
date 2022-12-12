import react from 'react';
import { connect, styled } from 'frontity';
import Link from './link';


const MyComponent = ({ state }) => {
  return (
    <>
        <MyComponentInside>
        <h1>My Component</h1>
        <img src="https://picsum.photos/200/300" />
        </MyComponentInside>

    </>
  );
}

export default connect(MyComponent);

const MyComponentInside = styled.div`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;