// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuOutlinesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuOutlinesvgIcon(props: MenuOutlinesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <g data-name={"menu"}>
          <rect
            x={"3"}
            y={"11"}
            width={"18"}
            height={"2"}
            rx={".95"}
            ry={".95"}
          ></rect>

          <rect
            x={"3"}
            y={"16"}
            width={"18"}
            height={"2"}
            rx={".95"}
            ry={".95"}
          ></rect>

          <rect
            x={"3"}
            y={"6"}
            width={"18"}
            height={"2"}
            rx={".95"}
            ry={".95"}
          ></rect>
        </g>
      </g>
    </svg>
  );
}

export default MenuOutlinesvgIcon;
/* prettier-ignore-end */
