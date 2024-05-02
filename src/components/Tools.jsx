import React from "react";
import ToolsApi from "./ToolsApi";
import Tool from "./Tool";
import "./Tool.css";

function Tools() {
  return (
    <>
    
    <h1 id="Tools" className='text-orange-600 font-bold text-4xl text-center'>
        Avinya Tools
      </h1>
    <div className="projectTools flex gap-4 flex-wrap items-center justify-around p-5">
       
      {ToolsApi.map((obj) => {
        return (
          <Tool
            key={obj.key}
            link={obj.link}
            image={obj.image}
            title={obj.title}
          />
        );
      })}
    </div>
    </>
  );
}

export default Tools;
