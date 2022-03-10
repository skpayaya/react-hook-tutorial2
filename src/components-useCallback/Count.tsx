import React from "react";

const Count = ({ prop, text }: any) => {
    console.log("Rendering ", text);
    return <div>{prop}</div>;
};

export default React.memo(Count);
