class Home {
    get url() {
        return "/";
    }

    get searchField() {
        return $(".searchbox_input__bEGm3");
    }

    get searchButton() {
        return $(".searchbox_searchButton__F5Bwq .iconButton_button__6x_9C");
    }

    search(keyword) {
        this.searchField.waitForDisplayed(5000);
        this.searchField.click();
        this.searchField.setValue(keyword);
        this.searchButton.waitForDisplayed(5000);
        this.searchButton.click();
    }
}

module.exports = new Home();