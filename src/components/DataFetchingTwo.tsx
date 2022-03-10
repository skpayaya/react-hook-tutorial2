import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
    loading: true,
    error: "",
    post: {},
};

const reducer = (state: any, action: { type: string; payload?: any }): any => {
    switch (action.type) {
        case "SUCCESS":
            return {
                loading: false,
                error: "",
                post: action.payload,
            };
        case "FAILURE":
            return { loading: false, error: "Something Went Wrong!", post: {} };
        default:
            return state;
    }
};
const DataFetchingTwo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => {
                dispatch({ type: "SUCCESS", payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: "FAILURE" });
            });
    }, []);

    return (
        <div>
            {state.loading ? "Loading" : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
};

export default DataFetchingTwo;
