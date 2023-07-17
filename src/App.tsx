import React, { createContext, useState, useContext, useEffect } from "react";
import ExampleComponent from "./components/common/ExampleComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index";
import Foo from "./pages/Foo/index";
import Bar from "./pages/Bar/index";

// store
const storeData = {
  message: "Hello World",
};
const SampleContext = createContext({});

// route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/foo",
    element: <Foo />,
  },
  {
    path: "/bar",
    element: <Bar />,
  },
]);

const App: React.FC = () => {
  const [text, setText] = useState("ExampleComponent");
  const [context, setContext] = useState(storeData);
  console.log(context.message);
  useEffect(() => {
    setContext({ message: "state updated" });
  }, []);
  return (
    <>
      <SampleContext.Provider value={{ context, setContext }}>
        /** ヘッダーにする予定のコンポーネント */
        <ExampleComponent message={text} />
        <RouterProvider router={router} />
      </SampleContext.Provider>
    </>
  );
};

export function useSampleContext() {
  return useContext(SampleContext);
}

export default App;
