import React from "react";
import { Editor } from "amis-editor";
import "amis/lib/themes/cxd.css";
import "amis/lib/helper.css";
import "amis/sdk/iconfont.css";

import * as ReactLib from "react";
import * as ReactDOMLib from "react-dom";
import * as Mobx from "mobx";
import * as MobxReact from "mobx-react";

(window as any).React = ReactLib;
(window as any).ReactDOM = ReactDOMLib;
(window as any).mobx = Mobx;
(window as any).mobxReact = MobxReact;

const AmisEditorPage: React.FC = () => {
  const handleChange = (schema: any) => {
    localStorage.setItem("amis_editor_schema", JSON.stringify(schema));
  };

  const getInitialSchema = () => {
    const saved = localStorage.getItem("amis_editor_schema");
    return saved ? JSON.parse(saved) : { type: "page", body: [] };
  };

  return (
    <div style={{ height: "100vh" }}>
      <Editor
        theme="cxd"
        preview={false}
        onChange={handleChange}
        value={getInitialSchema()}
      />
    </div>
  );
};

export default AmisEditorPage;
