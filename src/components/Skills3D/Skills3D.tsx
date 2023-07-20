import { Loader } from "@react-three/drei";
import React, { Suspense } from "react";
import "./Skills3D.scss";

const HtmlModel = React.lazy(() => import("../3DModels/HtmlModel"));
const CSSModel = React.lazy(() => import("../3DModels/CSSModel"));
const JsModel = React.lazy(() => import("../3DModels/JsModel"));
const ReactModel = React.lazy(() => import("../3DModels/ReactModel"));
const FigmaModel = React.lazy(() => import("../3DModels/FigmaModel"));
const BlenderModel = React.lazy(() => import("../3DModels/BlenderModel"));

const Skills3D = () => {
  return (
    <>
      <h2 className="section-title">Skills</h2>
      <div className="subsection skills-content">
        <div className="skills-3d-grid">
          <Suspense fallback={<Loader />}>
            <HtmlModel scale={1.5} />
            <JsModel scale={1.5} />
            <CSSModel scale={1.5} />
            <ReactModel scale={0.5} />
            <FigmaModel scale={0.65} />
            <BlenderModel scale={1} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Skills3D;
