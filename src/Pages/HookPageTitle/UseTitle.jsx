import React, { useEffect } from "react";

const UseTitle = (title) => {
   useEffect(()=>{
    document.title = `BABY TOY | ${title}`
   },[title])
};

export default UseTitle;