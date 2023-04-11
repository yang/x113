// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import * as p from "@plasmicapp/react-web";

export type Experiment2Value = "override";
export const Experiment2Context = React.createContext<
  Experiment2Value | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);

export function useExperiment2() {
  return React.useContext(Experiment2Context);
}

export default Experiment2Context;
/* prettier-ignore-end */
