// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gjjqSKbRqXuaUimkLf8eMG
// Component: pZh-DpiaEeKpLU

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_gh_demo.module.css"; // plasmic-import: gjjqSKbRqXuaUimkLf8eMG/projectcss
import sty from "./PlasmicLogoFooter.module.css"; // plasmic-import: pZh-DpiaEeKpLU/css

import ezgif436B7A4B30Fpng00SRvKl76C3Xnv from "./images/ezgif436B7A4B30Fpng.png"; // plasmic-import: 00SRvKL76C3XNV/picture

export type PlasmicLogoFooter__VariantMembers = {
  _50Opaque: "_50Opaque";
  smallLogo: "smallLogo";
};
export type PlasmicLogoFooter__VariantsArgs = {
  _50Opaque?: SingleBooleanChoiceArg<"_50Opaque">;
  smallLogo?: SingleBooleanChoiceArg<"smallLogo">;
};
type VariantPropType = keyof PlasmicLogoFooter__VariantsArgs;
export const PlasmicLogoFooter__VariantProps = new Array<VariantPropType>(
  "_50Opaque",
  "smallLogo"
);

export type PlasmicLogoFooter__ArgsType = {};
type ArgPropType = keyof PlasmicLogoFooter__ArgsType;
export const PlasmicLogoFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicLogoFooter__OverridesType = {
  root?: p.Flex<"a">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultLogoFooterProps {
  _50Opaque?: SingleBooleanChoiceArg<"_50Opaque">;
  smallLogo?: SingleBooleanChoiceArg<"smallLogo">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicLogoFooter__RenderFunc(props: {
  variants: PlasmicLogoFooter__VariantsArgs;
  args: PlasmicLogoFooter__ArgsType;
  overrides: PlasmicLogoFooter__OverridesType;
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "_50Opaque",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props._50Opaque
      },
      {
        path: "smallLogo",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.smallLogo
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.root_50Opaque]: hasVariant($state, "_50Opaque", "_50Opaque") }
      )}
      href={`/`}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={"" as const}
        className={classNames(sty.img, {
          [sty.img_50Opaque]: hasVariant($state, "_50Opaque", "_50Opaque"),
          [sty.imgsmallLogo]: hasVariant($state, "smallLogo", "smallLogo")
        })}
        displayHeight={
          hasVariant($state, "smallLogo", "smallLogo")
            ? ("50px" as const)
            : ("100%" as const)
        }
        displayMaxHeight={"none" as const}
        displayMaxWidth={
          hasVariant($state, "smallLogo", "smallLogo")
            ? ("183px" as const)
            : ("none" as const)
        }
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={
          hasVariant($state, "smallLogo", "smallLogo")
            ? ("100%" as const)
            : ("100%" as const)
        }
        src={
          hasVariant($state, "smallLogo", "smallLogo")
            ? {
                src: ezgif436B7A4B30Fpng00SRvKl76C3Xnv,
                fullWidth: 392,
                fullHeight: 115,
                aspectRatio: undefined
              }
            : {
                src: ezgif436B7A4B30Fpng00SRvKl76C3Xnv,
                fullWidth: 392,
                fullHeight: 115,
                aspectRatio: undefined
              }
        }
      />
    </a>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogoFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogoFooter__VariantsArgs;
    args?: PlasmicLogoFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogoFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLogoFooter__ArgsType,
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
          internalArgPropNames: PlasmicLogoFooter__ArgProps,
          internalVariantPropNames: PlasmicLogoFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogoFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogoFooter";
  } else {
    func.displayName = `PlasmicLogoFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicLogoFooter = Object.assign(
  // Top-level PlasmicLogoFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicLogoFooter
    internalVariantProps: PlasmicLogoFooter__VariantProps,
    internalArgProps: PlasmicLogoFooter__ArgProps
  }
);

export default PlasmicLogoFooter;
/* prettier-ignore-end */
