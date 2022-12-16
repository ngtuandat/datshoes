import Head from "next/head";
import React, { ReactNode } from "react";

export const CustomHeader = ({
  children,
  title,
}: {
  children?: ReactNode;
  title?: string;
}): JSX.Element => {
  return (
    <div>
      {title ? (
        <div className="px-4 sm:px-6 py-5 text-xl font-bold">{title}</div>
      ) : null}
      <Head>{children}</Head>
    </div>
  );
};
