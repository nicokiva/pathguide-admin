import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const MainWrapper = styled.div`
  position: relative;
`;
const CircularProgressWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;

  & > div {
    position: absolute;
    top: calc(50% - 20px);
  }
`;

type PGLoadingProps = {
  isLoading: boolean;
};

export const withLoading = <P extends object>(
  Component: React.ComponentType<P>
) =>
  class WithLoading extends React.Component<P & PGLoadingProps> {
    render() {
      const { isLoading, ...props } = this.props;

      return isLoading ? (
        <MainWrapper className="Main">
          <CircularProgressWrapper className="CP">
            <CircularProgress />
          </CircularProgressWrapper>
          <Component {...props as P} />
        </MainWrapper>
      ) : (
        <Component {...props as P} />
      );
    }
  };
