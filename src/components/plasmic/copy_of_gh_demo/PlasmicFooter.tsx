// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gjjqSKbRqXuaUimkLf8eMG
// Component: P0rkc9qKlFLeYl

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
import LogoFooter from "../../LogoFooter"; // plasmic-import: pZh-DpiaEeKpLU/component
import Button from "../../Button"; // plasmic-import: lAIq-HXeA0fOM/component

import { useScreenVariants as useScreenVariantssE0Ngbim2HoNtM } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: sE0Ngbim2HONtM/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_gh_demo.module.css"; // plasmic-import: gjjqSKbRqXuaUimkLf8eMG/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: P0rkc9qKlFLeYl/css

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
  slot6?: React.ReactNode;
  slot7?: React.ReactNode;
  slot8?: React.ReactNode;
  slot9?: React.ReactNode;
  slot10?: React.ReactNode;
};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4",
  "slot5",
  "slot6",
  "slot7",
  "slot8",
  "slot9",
  "slot10"
);

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
};

export interface DefaultFooterProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
  slot6?: React.ReactNode;
  slot7?: React.ReactNode;
  slot8?: React.ReactNode;
  slot9?: React.ReactNode;
  slot10?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__rrvUf)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          hasGap={true}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column___7Iw3L)}>
            <div className={classNames(projectcss.all, sty.freeBox__e1Bub)}>
              {p.renderPlasmicSlot({
                defaultContents: (
                  <LogoFooter
                    className={classNames(
                      "__wab_instance",
                      sty.logoFooter__uaczy
                    )}
                  />
                ),

                value: args.children
              })}
              <div className={classNames(projectcss.all, sty.freeBox___4Xku4)}>
                {p.renderPlasmicSlot({
                  defaultContents: "© 2022 Grubhub All rights reserved",
                  value: args.slot,
                  className: classNames(sty.slotTargetSlot)
                })}
              </div>
              <p.Stack
                as={"a"}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__xh1Ji
                )}
              >
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__eOgzg
                  )}
                  href={"https://www.plasmic.app/" as const}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ry3XQ
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#EFEFEF" }}
                          >
                            {"Terms of use"}
                          </span>
                        </React.Fragment>
                      </div>
                    ),
                    value: args.slot2,
                    className: classNames(sty.slotTargetSlot2)
                  })}
                </a>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__rUeU3
                  )}
                  href={"https://www.plasmic.app/" as const}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__cTL6
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#EFEFEF" }}
                          >
                            {"Privacy policy"}
                          </span>
                        </React.Fragment>
                      </div>
                    ),
                    value: args.slot3,
                    className: classNames(sty.slotTargetSlot3)
                  })}
                </a>
              </p.Stack>
              <div className={classNames(projectcss.all, sty.freeBox__lkHcv)}>
                {p.renderPlasmicSlot({
                  defaultContents:
                    "*supporting documentation is required \n**Based on an internal survey of Grubhub Corporate clients",
                  value: args.slot4,
                  className: classNames(sty.slotTargetSlot4)
                })}
              </div>
            </div>
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.column__faxlz)}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox___0RP9A)}>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    sty.h4___0GdFr
                  )}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "Learn more",
                    value: args.slot5,
                    className: classNames(sty.slotTargetSlot5)
                  })}
                </h4>
                <Button
                  className={classNames("__wab_instance", sty.button__w5KfC)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__hmd5C)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__hld9)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mcDl
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__qkZ4T)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__zWp2O)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__q0Zt)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___9Ci1V
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__o6Vp)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__iXTpV)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg___7U7Pi)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tZjYd
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button___3AuNk)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__oXdI)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__cVhCs)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bbNuz
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__uPk1)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__xqBq0)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__dzhKd)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tn0WD
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__v2CMj)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__eboKb)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__qVkuJ)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vzx13
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
              </div>
            ) : null}
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__qgp9)}>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    sty.h4__ayUm7
                  )}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "Partner with us",
                    value: args.slot6,
                    className: classNames(sty.slotTargetSlot6)
                  })}
                </h4>
                <Button
                  className={classNames("__wab_instance", sty.button__fuyU9)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__dnRxg)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__umC6)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vr18W
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__mxljj)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__jh1Lg)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__sy5B0)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__db0Qg
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__nBMy)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__y8CT6)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg___4QZyW)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tDNaO
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
              </div>
            ) : null}
          </p.Stack>
          <div className={classNames(projectcss.all, sty.column__z5Ggy)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__fqvN)}>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    sty.h4__ceoDh
                  )}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "Ways to order",
                    value: args.slot8,
                    className: classNames(sty.slotTargetSlot8)
                  })}
                </h4>
                <Button
                  className={classNames("__wab_instance", sty.button__ktZ3L)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__sRnPm)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__bOq6P)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qoJru
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__a4OqF)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__zugas)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__p5GGk)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pcCe
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__iA0T)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__rt9Zw)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg___7HiYb)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4W5K
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
              </div>
            ) : null}
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__uNTlo)}>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    sty.h4__bUgTn
                  )}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "Ordering Occasions",
                    value: args.slot7,
                    className: classNames(sty.slotTargetSlot7)
                  })}
                </h4>
                <Button
                  className={classNames("__wab_instance", sty.button__bQxnv)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__ue35X)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__gAUyH)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__q6OqC
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__wc9TB)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg___10La)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__cIli9)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mn6Pz
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__dqqwl)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__qLLt5)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__daUsr)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cVCaQ
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.column__inFsK)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__ny6Gk)}>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    sty.h4__pxd32
                  )}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "Trending blog posts",
                    value: args.slot9,
                    className: classNames(sty.slotTargetSlot9)
                  })}
                </h4>
                <Button
                  className={classNames("__wab_instance", sty.button__m5CsC)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__kr37D)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__sRzsQ)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4YtY
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__qAywH)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__h1Efk)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__lZih3)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pyKhu
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__uCxeX)}
                  color={"footerButton" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__paM1E)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__jLfw)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zwsGe
                    )}
                  >
                    {"Label"}
                  </div>
                </Button>
              </div>
            ) : null}
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__sLUcq)}>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    sty.h4__udXyk
                  )}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "Cities we serve",
                    value: args.slot10,
                    className: classNames(sty.slotTargetSlot10)
                  })}
                </h4>
              </div>
            ) : null}
          </div>
        </p.Stack>
      </p.Stack>
      <Button
        className={classNames("__wab_instance", sty.button__i3Zk3)}
        color={"footerButton" as const}
        endIcon={
          <svg
            className={classNames(projectcss.all, sty.svg__asAj8)}
            role={"img"}
          />
        }
        link={"#" as const}
        startIcon={
          <svg
            className={classNames(projectcss.all, sty.svg__uYcu)}
            role={"img"}
          />
        }
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__aa9Fa
          )}
        >
          {"Label"}
        </div>
      </Button>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */