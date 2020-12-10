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
    getText(item: ElementHandle | null, selector: string): Promise<any>;
    getAllText(item: ElementHandle | null, selector: string): Promise<any>;
    getImgUrl(item: ElementHandle | null, selector: string): Promise<any>;
    getHref(item: ElementHandle | null, selector: string): Promise<any>;
    click(selector: string): Promise<void | undefined>;
    rightClick(selector: string): Promise<void | undefined>;
    doubleClick(selector: string): Promise<void | undefined>;
    fillInput(selector: string, text: string): Promise<void | undefined>;
    close(): Promise<void>;
}
declare const _default: BrowserClient;
export default _default;
