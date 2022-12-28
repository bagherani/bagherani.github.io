import React from "react";
import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src="/images/mohammad-bagherani.jpg"
      width={288}
      height={288}
      priority
      alt={"mohammad bagherani"}
    />
  );
}
