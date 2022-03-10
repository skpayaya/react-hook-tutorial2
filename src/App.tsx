import "./App.css";
import ParentComponent from "./components-useCallback/ParentComponent";
import Counter from "./components-useMemo/Counter";
import FocusInput from "./components-useRef/FocusInput";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import HookTimer from "./components-useRef/HookTimer";
import DocTitleOne from "./components-cutom-hooks/DocTitleOne";
import CounterCustomHook from "./components-cutom-hooks/CounterCustomHook";
import UserForm from "./components-cutom-hooks/UserForm";

function App() {
    return (
        <div className="App">
            <UserForm></UserForm>
        </div>
    );
}

export default App;
