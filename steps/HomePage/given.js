import { Given } from "@cucumber/cucumber";
import Home from "../../pages/Home";
import goToURL from "../../support/actions/goToURL";

Given("a web browser is at the DuckDuckGo home page", () => {
    goToURL(Home.url);
});