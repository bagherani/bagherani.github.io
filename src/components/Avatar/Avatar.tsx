import React from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: red;
`;

export function Avatar() {
  return (
    <>
      <StyledSpan>Mohammad</StyledSpan>
      <Image
        src="/images/mohammad-bagherani.jpg"
        width={288}
        height={288}
        priority
        alt={"mohammad bagherani"}
      />
    </>
  );
}
