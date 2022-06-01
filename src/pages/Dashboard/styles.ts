import styled from "styled-components";
import Scrollbar from "react-perfect-scrollbar";

export const DashboardWrapper = styled.div`
  margin: 0 -15px;

  .center {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .horizontal-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .prev {
    background-color: lightblue;
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 20px;
  }
  .next {
    background-color: lightblue;
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 20px;
  }
`;

export const ScrollableBody = styled(Scrollbar)`
  @media screen and (max-width: 1440px) {
    height: calc(100vh - 250px);
    max-height: calc(100vh - 250px);
  }
  @media screen and (max-width: 1920px) {
    max-height: calc(100vh - 250px);
  }
`;
