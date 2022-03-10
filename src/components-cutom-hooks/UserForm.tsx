import React, { FormEvent, FormEventHandler, useState } from "react";

const UserForm = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput("");
    const [lastname, bindLastname, resetLastname] = useInput("");
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastname}`);
        resetFirstName();
        resetLastname();
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>First Name</label>
                <input {...bindFirstName} type="text"></input>
                <label>Last Name</label>
                <input {...bindLastname}></input>
                <button>Submit</button>
            </form>
        </div>
    );
};

const useInput = (initialValue: string): [string, any, any] => {
    const [value, setValue] = useState(initialValue);
    const reset = (): void => {
        setValue(initialValue);
    };
    const bind = {
        value,
        onChange: (e: { target: { value: React.SetStateAction<string> } }) => {
            setValue(e.target.value);
        },
    };

    return [value, bind, reset];
};
export default UserForm;
