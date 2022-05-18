// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6vWNYa83fUnb1xHLwQwj6w
// Component: X73VYgl5Ildg
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import Button from "../../Button" // plasmic-import: Rnk6lkY_vgm/component
import { useScreenVariants as useScreenVariants_2NLjRmJv2LDoH } from "./PlasmicGlobalVariant__Screen" // plasmic-import: 2nLJRmJv2lDoH/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_timelyne.module.css" // plasmic-import: 6vWNYa83fUnb1xHLwQwj6w/projectcss
import * as sty from "./PlasmicHomepage.module.css" // plasmic-import: X73VYgl5Ildg/css

export const PlasmicHomepage__VariantProps = new Array()

export const PlasmicHomepage__ArgProps = new Array()

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const $props = props.args
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_2NLjRmJv2LDoH(),
  })

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Button className={classNames("__wab_instance", sty.button__rw3B)}>
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {hasVariant(globalVariants, "screen", "desktopOnly") ? (
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__lYxio
                    )}
                  >
                    {"login to timelyne"}
                  </h2>
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__xk15M
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <h4
                        data-plasmic-name={"h4"}
                        data-plasmic-override={overrides.h4}
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.h4
                        )}
                      >
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#0093FD" }}
                          >
                            {"login to timelyne"}
                          </span>
                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      </h4>
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </h2>
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              )}
            </div>
          </Button>

          <Button className={classNames("__wab_instance", sty.button__snEIc)}>
            {"sign up"}
          </Button>
        </p.Stack>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: ["root", "text", "h4"],
  text: ["text", "h4"],
  h4: ["h4"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps,
    })

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage"
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`
  }
  return func
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    h4: makeNodeComponent("h4"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
  }
)

export default PlasmicHomepage
/* prettier-ignore-end */
