declare global {
    var BINDING: any;
}
export declare function invokeMethod(fqn: number, thisArg: number, signature: string, args: any[]): any;
export declare function getMethodInfo(classPtr: number, methodFqn: string, parametersCount: number): number;
export interface IWasmResource {
    /** @internal */
    readonly gcHandle: number;
}
export declare class WasmHelper {
    private static _assemblyPtr;
    private static _classPtr;
    private static _freePtr;
    private static get assemblyPtr();
    private static get classPtr();
    private static get freePtr();
    static free(wasmResource: IWasmResource): void;
}
