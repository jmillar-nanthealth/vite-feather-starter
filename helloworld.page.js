import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HelloWorldPage extends Page {
  /**
   * define selectors using getter methods
   */
  get normalButtonNoop() {
    return $("#testing1 > button.no-op");
  }
  get normalButtonAction() {
    return $("#testing1 > button.action");
  }
  get featherButtonNoop() {
    return $("#testing2 > button.no-op");
  }
  get featherButtonAction() {
    return $("#testing2 > button.action");
  }
  get result1() {
    return $("#testing1 > span.result1");
  }
  get result2() {
    return $("#testing2 > span.result2");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async clickNormal() {
    await this.normalButtonNoop.click();
    await this.normalButtonAction.click();
  }
  async clickFeather() {
    await this.featherButtonNoop.click();
    await this.featherButtonAction.click();
  }
}

export default new HelloWorldPage();
