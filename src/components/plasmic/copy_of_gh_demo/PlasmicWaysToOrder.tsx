// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gjjqSKbRqXuaUimkLf8eMG
// Component: 5mYxTbVRgYbrch

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { Tabs } from "@plasmicpkgs/antd/skinny/registerTabs"; // plasmic-import: Hb-DVgvuk3/codeComponent
import { TabPane } from "@plasmicpkgs/antd/skinny/registerTabs"; // plasmic-import: p3HNI5RglT/codeComponent
import WaysToOrderCard from "../../WaysToOrderCard"; // plasmic-import: GZ5tzhYSkuywVI/component

import { useScreenVariants as useScreenVariantssE0Ngbim2HoNtM } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: sE0Ngbim2HONtM/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_gh_demo.module.css"; // plasmic-import: gjjqSKbRqXuaUimkLf8eMG/projectcss
import sty from "./PlasmicWaysToOrder.module.css"; // plasmic-import: 5mYxTbVRgYbrch/css

import ezgif4D40088E46FjpgSI9B2P5Zhkir from "./images/ezgif4D40088E46Fjpg.jpg"; // plasmic-import: S__i9b2p5zhkir/picture
import ezgif4D59718C94AjpgFuDgNrTiwpOXhB from "./images/ezgif4D59718C94Ajpg.jpg"; // plasmic-import: FuDGNrTiwpOXhB/picture
import exportsCardCateringjpg2ARquB1I55O4Xc from "./images/exportsCardCateringjpg.jpg"; // plasmic-import: 2ARquB1i55o4xc/picture
import hybridTeamsjpg6Zee6ISfgMigm from "./images/hybridTeamsjpg.jpg"; // plasmic-import: 6Zee6iSfg-Migm/picture
import exportsCard1ImagesDigitalEventsjpg5Bt5Sr3GR0Dp8 from "./images/exportsCard1ImagesDigitalEventsjpg.jpg"; // plasmic-import: 5-bt5sr3gR0DP8/picture
import exportsCard1ImagesRemoteEmployeesjpgPqNDzpiufEzFm from "./images/exportsCard1ImagesRemoteEmployeesjpg.jpg"; // plasmic-import: pqNDzpiufEZ-FM/picture

export type PlasmicWaysToOrder__VariantMembers = {};
export type PlasmicWaysToOrder__VariantsArgs = {};
type VariantPropType = keyof PlasmicWaysToOrder__VariantsArgs;
export const PlasmicWaysToOrder__VariantProps = new Array<VariantPropType>();

export type PlasmicWaysToOrder__ArgsType = {};
type ArgPropType = keyof PlasmicWaysToOrder__ArgsType;
export const PlasmicWaysToOrder__ArgProps = new Array<ArgPropType>();

export type PlasmicWaysToOrder__OverridesType = {
  root?: p.Flex<"div">;
  antdTabs?: p.Flex<typeof Tabs>;
};

export interface DefaultWaysToOrderProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicWaysToOrder__RenderFunc(props: {
  variants: PlasmicWaysToOrder__VariantsArgs;
  args: PlasmicWaysToOrder__ArgsType;
  overrides: PlasmicWaysToOrder__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssE0Ngbim2HoNtM()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__d2VN
        )}
      >
        {"The most ways to order"}
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__fTuuB
        )}
      >
        {
          "Easy ordering. Delicious food. Reliable delivery to wherever your team sits, with dedicated support every step of the way."
        }
      </div>
      <Tabs
        data-plasmic-name={"antdTabs"}
        data-plasmic-override={overrides.antdTabs}
        centered={true}
        className={classNames("__wab_instance", sty.antdTabs)}
        defaultActiveKey={"1" as const}
      >
        <TabPane
          className={classNames("__wab_instance", sty.antdTabPane___2YdVy)}
          key={"1" as const}
          tab={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qQ3JH
              )}
            >
              {"Ways to order"}
            </div>
          }
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__dqDkY)}
          >
            <WaysToOrderCard
              className={classNames(
                "__wab_instance",
                sty.waysToOrderCard___2U54R
              )}
              slot={"Individual Meals"}
              slot2={
                "Employees can order—in the office or at home—with budgets and rules to control spend."
              }
            />

            <WaysToOrderCard
              className={classNames(
                "__wab_instance",
                sty.waysToOrderCard___27Wnx
              )}
              slot={"Group Ordering"}
              slot2={
                "Send out restaurant choices and let your team order what they want. Or, let employees add food to a shared cart. Any way you order, meals are delivered together and everyone gets something they love."
              }
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__rUfr)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"200px" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: ezgif4D59718C94AjpgFuDgNrTiwpOXhB,
                  fullWidth: 600,
                  fullHeight: 400,
                  aspectRatio: undefined
                }}
              />
            </WaysToOrderCard>
            <WaysToOrderCard
              className={classNames(
                "__wab_instance",
                sty.waysToOrderCard__jcsah
              )}
              slot={"Catering"}
              slot2={
                "Feed your next team meeting and promote social distancing with individually boxed catering meals."
              }
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__cHqX7)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"200px" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: exportsCardCateringjpg2ARquB1I55O4Xc,
                  fullWidth: 600,
                  fullHeight: 400,
                  aspectRatio: undefined
                }}
              />
            </WaysToOrderCard>
          </p.Stack>
        </TabPane>
        <TabPane
          className={classNames("__wab_instance", sty.antdTabPane___154Td)}
          key={"2" as const}
          tab={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3EPbs
              )}
            >
              {"Ordering occasions"}
            </div>
          }
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__uf6Vq)}
          >
            <WaysToOrderCard
              className={classNames(
                "__wab_instance",
                sty.waysToOrderCard___29QOp
              )}
              slot={"Hybrid Teams"}
              slot2={
                "Keep your hungry teams happy, whether they're in the office, at home or both."
              }
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__kpyl)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"200px" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: hybridTeamsjpg6Zee6ISfgMigm,
                  fullWidth: 900,
                  fullHeight: 440,
                  aspectRatio: undefined
                }}
              />
            </WaysToOrderCard>
            <WaysToOrderCard
              className={classNames(
                "__wab_instance",
                sty.waysToOrderCard__kXkuc
              )}
              slot={"Digital Events"}
              slot2={
                "Make your digital lunch and learns, webinars and client meetings more delicious with food!"
              }
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__zDJsf)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"200px" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: exportsCard1ImagesDigitalEventsjpg5Bt5Sr3GR0Dp8,
                  fullWidth: 600,
                  fullHeight: 400,
                  aspectRatio: undefined
                }}
              />
            </WaysToOrderCard>
            <WaysToOrderCard
              className={classNames(
                "__wab_instance",
                sty.waysToOrderCard__khyte
              )}
              slot={"Remote Employees"}
              slot2={
                "Show your remote team you care with customizable meal plans from Grubhub."
              }
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__gjUa)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"200px" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: exportsCard1ImagesRemoteEmployeesjpgPqNDzpiufEzFm,
                  fullWidth: 600,
                  fullHeight: 400,
                  aspectRatio: undefined
                }}
              />
            </WaysToOrderCard>
          </p.Stack>
        </TabPane>
      </Tabs>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "antdTabs"],
  antdTabs: ["antdTabs"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  antdTabs: typeof Tabs;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWaysToOrder__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWaysToOrder__VariantsArgs;
    args?: PlasmicWaysToOrder__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWaysToOrder__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWaysToOrder__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicWaysToOrder__ArgProps,
          internalVariantPropNames: PlasmicWaysToOrder__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWaysToOrder__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWaysToOrder";
  } else {
    func.displayName = `PlasmicWaysToOrder.${nodeName}`;
  }
  return func;
}

export const PlasmicWaysToOrder = Object.assign(
  // Top-level PlasmicWaysToOrder renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    antdTabs: makeNodeComponent("antdTabs"),

    // Metadata about props expected for PlasmicWaysToOrder
    internalVariantProps: PlasmicWaysToOrder__VariantProps,
    internalArgProps: PlasmicWaysToOrder__ArgProps
  }
);

export default PlasmicWaysToOrder;
/* prettier-ignore-end */
