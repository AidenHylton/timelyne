// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6vWNYa83fUnb1xHLwQwj6w
// Component: 5qSewSMVf0
import * as React from "react"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import Tilt from "@plasmicpkgs/react-parallax-tilt" // plasmic-import: PfY466VIuq/codeComponent
import Switch from "../../Switch" // plasmic-import: aMBO0vTjkqh/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_timelyne.module.css" // plasmic-import: 6vWNYa83fUnb1xHLwQwj6w/projectcss
import * as sty from "./PlasmicSettings.module.css" // plasmic-import: 5qSewSMVf0/css
import ReshotIconSettingsWryhdvpgjQsvgIcon from "./icons/PlasmicIcon__ReshotIconSettingsWryhdvpgjQsvg" // plasmic-import: W5Fg7djZ3c/icon

export const PlasmicSettings__VariantProps = new Array()

export const PlasmicSettings__ArgProps = new Array()

function PlasmicSettings__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const $props = props.args
  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <ReshotIconSettingsWryhdvpgjQsvgIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />

          <Tilt className={classNames("__wab_instance", sty.tilt__u3Ori)}>
            <Switch
              className={classNames("__wab_instance", sty._switch__tRnj6)}
            >
              {"private timelyne"}
            </Switch>
          </Tilt>

          <Tilt className={classNames("__wab_instance", sty.tilt__v2Rrm)}>
            <Switch
              className={classNames("__wab_instance", sty._switch__kqCPd)}
            >
              {"hide account on search"}
            </Switch>
          </Tilt>
        </div>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSettings__ArgProps,
      internalVariantPropNames: PlasmicSettings__VariantProps,
    })

    return PlasmicSettings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicSettings"
  } else {
    func.displayName = `PlasmicSettings.${nodeName}`
  }
  return func
}

export const PlasmicSettings = Object.assign(
  // Top-level PlasmicSettings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicSettings
    internalVariantProps: PlasmicSettings__VariantProps,
    internalArgProps: PlasmicSettings__ArgProps,
  }
)

export default PlasmicSettings
/* prettier-ignore-end */
