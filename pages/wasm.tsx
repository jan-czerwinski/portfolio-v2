// import dynamic from 'next/dynamic';
// import Head from 'next/head';
// import { useEffect } from 'react';
// // const WasmComponent = dynamic({
// // loader: async () => {
// //   const go = new Go();
// //   WebAssembly.instantiateStreaming(fetch('wasm'), go.importObject).then((result) => {
// //     go.run(result.instance);
// //   });

// //   return () => <div>henl</div>;
// // },
// // });

// export default function Index() {

//   useEffect(() => {
//     const go = new Go();
//     WebAssembly.instantiateStreaming(fetch('wasm'), go.importObject).then((result) => {
//       go.run(result.instance);
//     });

//   }, []);

//   return (
//     <div>

//       Our WASM component:
//       {/* <WasmComponent /> */}

//     </div>
//   );
// };

// import '../wasm/assets/wasm_exec';
// import '/static/wasm_exec';

import '../wasm/assets/wasmTypes.d.ts';

import React, { useEffect } from 'react';
import Head from 'next/head';

async function loadWasm(): Promise<any> {
  // const goWasm = new window.Go();

  // WebAssembly.compile();
  // const result = await WebAssembly.instantiateStreaming(
  //   fetch('main.wasm'),
  //   goWasm.importObject
  // );
  // console.log(result.instance);
  // goWasm.run(result.instance);
  if (!WebAssembly.instantiateStreaming) {
    // polyfill
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
      const source = await (await resp).arrayBuffer();
      return await WebAssembly.instantiate(source, importObject);
    };
  }

  const go = new window.Go();

  const result = await WebAssembly.instantiateStreaming(
    fetch('main.wasm'),
    go.importObject
  );

  async function run() {
    await go.run(result.instance);

    result.instance = await WebAssembly.instantiate(
      result.module,
      go.importObject
    ); // reset instance
  }
  run();

  return result;
}

const LoadWasm = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const load = async () => {
      const result = await loadWasm();
      setIsLoading(false);
      console.log('main wasm loaded');

      console.log('add from golang: ');
      console.log(window?.Add(1, 2));
    };
    load();
  }, []);

  return (
    <div>
      <Head>
        <script
          async
          type="text/javascript"
          src="/static/wasm_exec.js"
        ></script>
      </Head>
    </div>
  );
};

export default LoadWasm;
