// Type definitions for non-npm package duo_web_sdk-browser 2.7
// Project: https://github.com/duosecurity/duo_web_sdk
// Definitions by: Low Heok Hong <https://github.com/lhhong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Duo;

export interface InitOptions {
    host: string;
    sig_request: string;
    iframe?: string | HTMLIFrameElement | undefined;
    iframeContainer?: string | HTMLElement | undefined;
    iframeAttributes?: object | undefined;
    post_action?: string | undefined;
    post_argument?: string | undefined;
    submit_callback?: ((duo_form: HTMLFormElement) => void) | undefined;
}

export interface ParsedSig {
    sigRequest: string;
    duoSig: string;
    appSig: string;
}

export function init(options: InitOptions): void;

export function _onReady(callback: () => void): void;
export function _parseSigRequest(sig: string): ParsedSig;
export function _isDuoMessage(event: MessageEvent): boolean;
export function _doPostBack(response: string): void;
