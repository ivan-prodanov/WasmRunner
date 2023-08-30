using System;
using System.Runtime.InteropServices;
using System.Runtime.InteropServices.JavaScript;
using Wasm.Sdk;

namespace WasmRunner
{
    [Wasm]
    public class WasmRunner
    {
        private readonly string baseUri;

        public WasmRunner(string baseUri)
        {
            this.baseUri = baseUri;
        }
        public void ExecuteAssembly(byte[] assembly)
        {
            var weakRef = WasmExecutor.ExecuteAndUnload(assembly, asm =>
            {
                var type = asm.GetType("ConsoleApp1.Program");
                var methodInfo = type.GetMethod("Main", System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Static);
                var method = methodInfo.CreateDelegate<Action<string[]>>();
                method(new string[] { "You love easter eggs, don't you? There are two WASM instances running", "One for the C# compiler", "And one for execution", "Each instance is running in its own web worker (thread)" });
            });
        }
    }
}
