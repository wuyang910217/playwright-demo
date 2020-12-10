import {
  chromium,
  firefox,
  webkit,
  Browser,
  BrowserContext,
  Page,
  ElementHandle
} from 'playwright';

type BrowserType = 'chromium' | 'firefox' | 'webkit';

interface LaunchOption {
  headless?: boolean;
  slowMo?: number;
}

interface ScreenshotOptions {
  path?: string;
  type?: 'jpeg' | 'png';
  fullPage?: boolean;
  width?: number;
  height?: number;
  positionX?: number;
  positionY?: number;
}

class BrowserClient {
  private browser?: Browser;
  private context?: BrowserContext;
  private page?: Page;
  constructor() {}

  async launch(type: BrowserType, option: LaunchOption = {}) {
    if (type === 'chromium') {
      this.browser = await chromium.launch(option);
    } else if (type === 'firefox') {
      this.browser = await firefox.launch(option);
    } else {
      this.browser = await webkit.launch(option);
    }
    this.context = await this.browser.newContext();
  }

  async goto(url: string) {
    this.page = await this.context?.newPage();
    await this.page?.goto(url);
  }

  async screenshot(option: ScreenshotOptions) {
    this.page?.screenshot({ ...option });
  }

  async getSelector(selector: string) {
    return await this.page?.$(selector);
  }

  async getAllSelector(selector: string) {
    return await this.page?.$$(selector);
  }

  async getContent(selector: string) {
    return await this.page?.textContent(selector);
  }

  async getText(item: ElementHandle | BrowserClient, selector: string) {
    if (item instanceof BrowserClient) {
      return await this.page?.$eval(selector, (node: any) => node.innerText);
    }

    return await item.$eval(selector, (node: any) => node.innerText);
  }

  async getAllText(item: ElementHandle | BrowserClient, selector: string) {
    if (item instanceof BrowserClient) {
      return await this.page?.$$eval(selector, (node: any) => node.innerText);
    }

    return await item.$$eval(selector, (node: any) => node.innerText);
  }

  async getImgUrl(item: ElementHandle | BrowserClient, selector: string) {
    if (item instanceof BrowserClient) {
      return await this.page?.$eval(selector, (node: any) => node.src);
    }
    return await item.$eval(selector, (node: any) => node.src);
  }

  async getHref(item: ElementHandle | BrowserClient, selector: string) {
    if (item instanceof BrowserClient) {
      return await this.page?.$eval(selector, (node: any) => node.href);
    }
    return await item.$eval(selector, (node: any) => node.href);
  }

  async close() {
    await this.browser?.close();
  }
}

export default new BrowserClient();
