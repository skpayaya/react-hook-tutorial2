import React, { useEffect, useRef } from "react";

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text"></input>
        </div>
    );
};

export default FocusInput;
