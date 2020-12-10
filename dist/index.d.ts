import { ElementHandle } from 'playwright';
declare type BrowserType = 'chromium' | 'firefox' | 'webkit';
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
declare class BrowserClient {
    private browser?;
    private context?;
    private page?;
    constructor();
    launch(type: BrowserType, option?: LaunchOption): Promise<void>;
    goto(url: string): Promise<void>;
    screenshot(option: ScreenshotOptions): Promise<void>;
    getSelector(selector: string): Promise<ElementHandle<SVGElement | HTMLElement> | null | undefined>;
    getAllSelector(selector: string): Promise<ElementHandle<SVGElement | HTMLElement>[] | undefined>;
    getContent(selector: string): Promise<string | null | undefined>;
    getText(item: ElementHandle | BrowserClient, selector: string): Promise<any>;
    getAllText(item: ElementHandle | BrowserClient, selector: string): Promise<any>;
    getImgUrl(item: ElementHandle | BrowserClient, selector: string): Promise<any>;
    getHref(item: ElementHandle | BrowserClient, selector: string): Promise<any>;
    close(): Promise<void>;
}
declare const _default: BrowserClient;
export default _default;
