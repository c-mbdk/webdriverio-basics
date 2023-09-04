import { When } from "@cucumber/cucumber";
import duckSearch from "../../support/actions/search";

When(/^the user enters "(.*)" into the search bar$/, keyword => {
    duckSearch(keyword);
});