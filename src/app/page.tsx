// 'use client';
// import Image from "next/image";
// import ConnectButton from "./context/ConnectButton";

// export default function Home() {
//   return (
//     <div>
//       {/* <w3m-button /> */}
//       <ConnectButton/>
//     </div>
//   );
// }


import Image from "next/image";
// import ConnectButton from "./context/ConnectButton";

export default function Home() {
  return (
    <div>
      {/* <h1>Muhammad Sufyan Azam</h1> */}
      <w3m-button balance="hide" size="sm"/>
      <w3m-network-button />
    </div>
  );
}