import { IWasmResource } from "./wasmShared";
interface WasmRunnerCtorArgSet0 extends Record<string, any> {
    baseUri: string;
}
type WasmRunnerCtorArgs = WasmRunnerCtorArgSet0;
export default class WasmRunner implements IWasmResource {
    private static _ctor1Ptr;
    private static _executeAssemblyPtr;
    private static _assemblyPtr;
    private static _classPtr;
    private gcHandlePtr;
    /** @internal */
    get gcHandle(): number;
    private static get assemblyPtr();
    private static get classPtr();
    private static get ctor1Ptr();
    private static get executeAssemblyPtr();
    constructor(args: WasmRunnerCtorArgs);
    executeAssembly(assembly: Uint8Array): void;
    free(): void;
}
export {};
