import React, { useEffect } from "react";

const UseTitle = (title) => {
   useEffect(()=>{
    document.title = `${title}-BABY TOY`
   },[title])
};

export default UseTitle;