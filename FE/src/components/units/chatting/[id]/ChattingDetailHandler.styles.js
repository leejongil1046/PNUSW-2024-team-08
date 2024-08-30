import styled from "@emotion/styled";

export const WrapperHeader = styled.div`
  width: 390px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  background-color: white;
`;

export const Header = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 23px;
  padding-bottom: 1px;
`;

export const LeftArrowTitleContainer = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-left: 10px;
`;

export const WrapperCommunityHandler = styled.div`
  width: 390px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

export const CommunityMenuContainer = styled.div`
  width: 390px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
`;

export const CommunityMenu = styled.div`
  width: 75px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  color: ${(props) => (props.active ? "black" : "#c3c3c3")};
  font-weight: ${(props) => (props.active ? 600 : "normal")};
  border-bottom: ${(props) => (props.active ? "4px solid #ff6636" : "none")};
  padding-bottom: ${(props) => (props.active ? "8px" : "12px")};

  :hover {
    cursor: pointer;
  }
`;

export const CommunityCenterLine = styled.div`
  width: 1px;
  height: 22px;
  background-color: #dbdbdb;
`;
