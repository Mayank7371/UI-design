function App() {
  return (
    <>
      <h1 className="bg-blue-950 text-yellow-500 grid place-content-center text-xl p-5 ">
        Learning tailwindCSS
      </h1>
      <div className="max-w-sm mx-auto p-6 shadow-2xl flex items-center space-x-4 rounded-2xl">
        <img
          className="rounded-4xl w-40 h-20"
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*__f27S-qQF2CAASt5bOwqg.png"
          alt="Profile Pic"
        />
        <div className="grid place-content-center font-bold text-xl text-slate-900">
          I am learning tailwindcss
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
