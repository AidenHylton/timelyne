// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6vWNYa83fUnb1xHLwQwj6w
// Component: Cw2jS9gr3z
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import Tilt from "@plasmicpkgs/react-parallax-tilt" // plasmic-import: PfY466VIuq/codeComponent
import Button from "../../Button" // plasmic-import: Rnk6lkY_vgm/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_timelyne.module.css" // plasmic-import: 6vWNYa83fUnb1xHLwQwj6w/projectcss
import * as sty from "./PlasmicSourceCodeView.module.css" // plasmic-import: Cw2jS9gr3z/css

export const PlasmicSourceCodeView__VariantProps = new Array()

export const PlasmicSourceCodeView__ArgProps = new Array()

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn())

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise
  })

export function Head() {
  return <></>
}

function PlasmicSourceCodeView__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = {
    ...args,
    ...variants,
  }

  const currentUser = p.useCurrentUser?.() || {}
  const [$queries, setDollarQueries] = React.useState({})
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
            reset={false}
          >
            <Button
              className={classNames("__wab_instance", sty.button__gXlPn)}
              link={`/settings`}
            >
              {"back"}
            </Button>
          </Tilt>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__tj3U
            )}
          >
            {"check out the source code of this app"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___0Qx6C
            )}
          >
            {
              "to view this you need to be on a computer than press and hold the left mouse button then drag the link onto a new tab."
            }
          </div>

          <Button
            className={classNames("__wab_instance", sty.button___0EUty)}
            color={"softGreen"}
            endIcon={null}
            link={"https://github.com/AidenHylton/timelyne"}
            showEndIcon={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hu8Me
              )}
            >
              {"view code"}
            </div>
          </Button>
        </div>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: ["root", "tilt"],
  tilt: ["tilt"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSourceCodeView__ArgProps,
          internalVariantPropNames: PlasmicSourceCodeView__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicSourceCodeView__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicSourceCodeView"
  } else {
    func.displayName = `PlasmicSourceCodeView.${nodeName}`
  }
  return func
}

export const PlasmicSourceCodeView = Object.assign(
  // Top-level PlasmicSourceCodeView renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tilt: makeNodeComponent("tilt"),
    // Metadata about props expected for PlasmicSourceCodeView
    internalVariantProps: PlasmicSourceCodeView__VariantProps,
    internalArgProps: PlasmicSourceCodeView__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: "",
    },
  }
)

export default PlasmicSourceCodeView
/* prettier-ignore-end */
