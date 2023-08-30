using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.Loader;
using System.Threading.Tasks;

namespace WasmRunner
{
    class WasmExecutionLoadContext : AssemblyLoadContext
    {
        public WasmExecutionLoadContext() : base(isCollectible: true)
        {
        }

        protected override Assembly Load(AssemblyName assemblyName)
        {
            if (!AssemblyLoadContext.Default.Assemblies.Any(a => a.FullName == assemblyName.FullName))
            {
                Console.WriteLine($"Couldn't find assembly {assemblyName}");
            }

            return null;
        }
    }
}
