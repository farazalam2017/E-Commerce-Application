import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { StaticRouter } from "react-router-dom/server";
test("logo should load on rendering header", () => {
  //load the header
  const header = render(
    <StaticRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </StaticRouter>
  );
  console.log(header);
  //check if logo is loaded
});
