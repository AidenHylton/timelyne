// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6vWNYa83fUnb1xHLwQwj6w
// Component: sZ5tR8uREH
import * as React from "react"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import Tilt from "@plasmicpkgs/react-parallax-tilt" // plasmic-import: PfY466VIuq/codeComponent
import Button from "../../Button" // plasmic-import: Rnk6lkY_vgm/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_timelyne.module.css" // plasmic-import: 6vWNYa83fUnb1xHLwQwj6w/projectcss
import * as sty from "./PlasmicMyTimelyne.module.css" // plasmic-import: sZ5tR8uREH/css
import ReshotIconSettingsWryhdvpgjQsvgIcon from "./icons/PlasmicIcon__ReshotIconSettingsWryhdvpgjQsvg" // plasmic-import: W5Fg7djZ3c/icon

export const PlasmicMyTimelyne__VariantProps = new Array()

export const PlasmicMyTimelyne__ArgProps = new Array()

export const defaultMyTimelyne__Args = {}

function PlasmicMyTimelyne__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const args = Object.assign({}, defaultMyTimelyne__Args, props.args)
  const $props = args
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
          <Tilt
            data-plasmic-name={"tilt"}
            data-plasmic-override={overrides.tilt}
            className={classNames("__wab_instance", sty.tilt)}
            gyroscope={true}
            trackOnWindow={true}
            transitionSpeed={700}
          >
            {true ? (
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
                color={"blue"}
                link={"/settings"}
                size={"minimal"}
              >
                <ReshotIconSettingsWryhdvpgjQsvgIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              </Button>
            ) : null}
          </Tilt>
        </div>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: ["root", "tilt", "button", "svg"],
  tilt: ["tilt", "button", "svg"],
  button: ["button", "svg"],
  svg: ["svg"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMyTimelyne__ArgProps,
      internalVariantPropNames: PlasmicMyTimelyne__VariantProps,
    })

    return PlasmicMyTimelyne__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicMyTimelyne"
  } else {
    func.displayName = `PlasmicMyTimelyne.${nodeName}`
  }
  return func
}

export const PlasmicMyTimelyne = Object.assign(
  // Top-level PlasmicMyTimelyne renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tilt: makeNodeComponent("tilt"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicMyTimelyne
    internalVariantProps: PlasmicMyTimelyne__VariantProps,
    internalArgProps: PlasmicMyTimelyne__ArgProps,
  }
)

export default PlasmicMyTimelyne
/* prettier-ignore-end */
