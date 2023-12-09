import Link from "next/link";
import React, { Fragment } from "react";

export const BreadCrumbs = ({
  links,
}: {
  links?: { path: string; name: string }[];
}) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {links?.map((link, index) => (
          <Fragment key={index}>
            {index === links.length - 1 ? (
              <li>{link.name}</li>
            ) : (
              <li>
                <Link href={link.path}>{link.name}</Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
