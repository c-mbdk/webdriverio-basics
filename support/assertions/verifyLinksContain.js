import assert from "assert";
import SearchResults from "../../pages/SearchResult";

/**
 * Verifies links contain keyword
 * 
 * @param {Array.Object} links List of WebdriverIO elements
 * @param {String} keyword
 */

export default (keyword) => {
    SearchResults.searchResultsLinks.forEach(link => {
       const linkText = link.getText().toLowerCase();
       if (linkText) {
        assert(
            linkText.includes(keyword),
            `Link ${linkText} does not include ${keyword}`
        );
       }
    });
};