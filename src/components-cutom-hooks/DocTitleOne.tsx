import React, { useEffect, useState } from "react";

const DocTitleOne = () => {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return <button onClick={() => setCount(count + 1)}>Count - {count}</button>;
};

const useDocumentTitle = (count: number) => {
    useEffect(() => {
        document.title = "Count - " + count;
    }, [count]);
};
export default DocTitleOne;
