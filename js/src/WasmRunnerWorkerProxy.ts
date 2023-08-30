//--------------------------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by Wasm.SDK.
//
//     Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
// </auto-generated>
//--------------------------------------------------------------------------------------------------

import { default as WasmRunnerWorker } from "./WasmRunnerWorker"
import { default as WasmRunner } from "./WasmRunner"

export default class WasmRunnerWorkerProxy implements WasmRunnerWorker {
  _controller!: WasmRunner;

  set controller(value: WasmRunner) {
    this._controller = value;
  }

  public static CreateProxy<T extends WasmRunnerWorkerProxy>(type: {
    new(): T
  }): { proxy: WasmRunnerWorker; _instance: T }  {
    const _instance = new type();

    const proxy = {
      executeAssembly: _instance.executeAssembly.bind(_instance),
      free: _instance.free.bind(_instance),
    }

    return {
        proxy,
        _instance
    };
  }

  private ensureControllerSet(): void {
    if (!this._controller) {
      throw new Error("The Controller WasmRunner is not initialized");
    }
  }

  async executeAssembly(assembly: Uint8Array) : Promise<void> {
    this.ensureControllerSet();
    return await this._controller.executeAssembly(assembly);
  }

  async free() : Promise<void> {
    this.ensureControllerSet();
    await this._controller.free();
  }
}