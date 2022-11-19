import React from "react";
import { useMatch } from "react-router-dom";

export function withURLDataComponent<T>(Component: React.ComponentType<T>) {
  const URLDataContainerComponent = (props: any) => {
    // @ts-ignore
    let match = useMatch("/Profile/:userId").params.userId;
    return <Component match={match} {...props} />;
  };

  return URLDataContainerComponent;
}
