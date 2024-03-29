// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6vWNYa83fUnb1xHLwQwj6w
// Component: aMBO0vTjkqh
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import * as pp from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_timelyne.module.css" // plasmic-import: 6vWNYa83fUnb1xHLwQwj6w/projectcss
import * as sty from "./PlasmicSwitch.module.css" // plasmic-import: aMBO0vTjkqh/css

export const PlasmicSwitch__VariantProps = new Array(
  "noLabel",
  "isDisabled",
  "isChecked"
)

export const PlasmicSwitch__ArgProps = new Array(
  "children",
  "name",
  "value",
  "aria-label",
  "aria-labelledby"
)

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn())

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise
  })

function PlasmicSwitch__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = {
    ...args,
    ...variants,
  }

  const currentUser = p.useCurrentUser?.() || {}
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "noLabel",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.noLabel : undefined,
      },

      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.isDisabled
          : undefined,
      },

      {
        path: "isChecked",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.isChecked : undefined,
      },
    ],

    [$props, $ctx]
  )

  const $state = p.useDollarState(stateSpecs, $props, $ctx)
  const [$queries, setDollarQueries] = React.useState({})
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false,
    })

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin,
  }

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
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootnoLabel]: hasVariant($state, "noLabel", "noLabel"),
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"toggle"}
        data-plasmic-override={overrides.toggle}
        className={classNames(projectcss.all, sty.toggle, {
          [sty.toggle___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.toggleisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.toggleisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
        })}
      >
        <div
          data-plasmic-name={"track"}
          data-plasmic-override={overrides.track}
          className={classNames(projectcss.all, sty.track, {
            [sty.track___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.trackisChecked]: hasVariant($state, "isChecked", "isChecked"),
            [sty.trackisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
          })}
        >
          <div
            data-plasmic-name={"thumb"}
            data-plasmic-override={overrides.thumb}
            className={classNames(projectcss.all, sty.thumb, {
              [sty.thumb___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.thumbisChecked]: hasVariant(
                $state,
                "isChecked",
                "isChecked"
              ),
            })}
          />
        </div>
      </div>

      {(hasVariant($state, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(projectcss.all, sty.labelContainer, {
            [sty.labelContainer___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.labelContainernoLabel]: hasVariant(
              $state,
              "noLabel",
              "noLabel"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Switch me",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.slotTargetChildrenisChecked]: hasVariant(
                $state,
                "isChecked",
                "isChecked"
              ),

              [sty.slotTargetChildrennoLabel]: hasVariant(
                $state,
                "noLabel",
                "noLabel"
              ),
            }),
          })}
        </div>
      ) : null}
    </div>
  )
}

function useBehavior(props, ref) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: "Switch me",
    }
  }
  return pp.useSwitch(
    PlasmicSwitch,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root",
    },

    ref
  )
}

const PlasmicDescendants = {
  root: ["root", "toggle", "track", "thumb", "labelContainer"],
  toggle: ["toggle", "track", "thumb"],
  track: ["track", "thumb"],
  thumb: ["thumb"],
  labelContainer: ["labelContainer"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSwitch__ArgProps,
          internalVariantPropNames: PlasmicSwitch__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicSwitch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicSwitch"
  } else {
    func.displayName = `PlasmicSwitch.${nodeName}`
  }
  return func
}

export const PlasmicSwitch = Object.assign(
  // Top-level PlasmicSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    toggle: makeNodeComponent("toggle"),
    track: makeNodeComponent("track"),
    thumb: makeNodeComponent("thumb"),
    labelContainer: makeNodeComponent("labelContainer"),
    // Metadata about props expected for PlasmicSwitch
    internalVariantProps: PlasmicSwitch__VariantProps,
    internalArgProps: PlasmicSwitch__ArgProps,
    useBehavior,
  }
)

export default PlasmicSwitch
/* prettier-ignore-end */
