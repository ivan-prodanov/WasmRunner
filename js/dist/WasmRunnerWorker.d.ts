export default interface WasmRunnerWorker {
    executeAssembly(assembly: Uint8Array): Promise<void>;
    free(): Promise<void>;
}
