import "./App.css";

import { Suspense, lazy, useState } from "react";

function App() {
  const [Btn, setBtn] = useState(null);
  return (
    <>
      <h2>Main Component</h2>
      <button
        onClick={() => {
          setBtn(lazy(() => import("./components/Button.jsx")));
        }}
      >
        get button
      </button>
      <Suspense fallback={<div>loading..</div>}>
        <h2>Preview</h2>
        {Btn ? <Btn /> : "no preview"}
      </Suspense>
    </>
  );
}

export default App;
