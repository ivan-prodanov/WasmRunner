import { default as WasmRunnerWorker } from "./WasmRunnerWorker";
import { default as WasmRunner } from "./WasmRunner";
export default class WasmRunnerWorkerProxy implements WasmRunnerWorker {
    _controller: WasmRunner;
    set controller(value: WasmRunner);
    static CreateProxy<T extends WasmRunnerWorkerProxy>(type: {
        new (): T;
    }): {
        proxy: WasmRunnerWorker;
        _instance: T;
    };
    private ensureControllerSet;
    executeAssembly(assembly: Uint8Array): Promise<void>;
    free(): Promise<void>;
}
