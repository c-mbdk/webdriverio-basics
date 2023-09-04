import Home from "../../pages/Home";

/**
 * Search for a keyword 
 * 
 * @param {String} keyword keyword to search for
 * @param {object} inputField WebdriverIO input field
 * @param {object} submitButton WebdriverIO submit button
 */
export default keyword => {
    Home.search(keyword);
};