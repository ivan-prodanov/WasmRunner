//--------------------------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by Wasm.SDK.
//
//     Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
// </auto-generated>
//--------------------------------------------------------------------------------------------------


export default interface WasmRunnerWorker {
  executeAssembly(assembly: Uint8Array) : Promise<void>;
  
  free() : Promise<void>;
}