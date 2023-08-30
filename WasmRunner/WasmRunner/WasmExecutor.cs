using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace WasmRunner
{
    public static class WasmExecutor
    {
        [MethodImpl(MethodImplOptions.NoInlining)]
        public static WeakReference ExecuteAndUnload(byte[] assembly, Action<Assembly> action)
        {
            var alc = new WasmExecutionLoadContext();
            var alcWeakRef = new WeakReference(alc, trackResurrection: true);
            try
            {
                using var ms = new MemoryStream(assembly);
                Assembly a = alc.LoadFromStream(ms);

                action(a);
            }
            finally
            {
                alc.Unload();
            }

            return alcWeakRef;
        }
    }
}
