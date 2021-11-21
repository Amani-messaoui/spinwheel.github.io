import Wheel from "./components/wheel"
function App() {
  // const places = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const Places = [
    {
    name: 1,
    Video: "./Videos/v1.mp4"
  },
  {
    name: 2,
    Video: "./Videos/v2.mp4"
  },
  {
    name: 3,
    Video: "./Videos/v3.mp4"
  },
  {
    name: 4,
    Video: "./Videos/v4.mp4"
  },
  {
    name: 5,
    Video: "./Videos/v5.mp4"
  },
  {
    name: 6,
    Video: "./Videos/v5c1.mp4"
  },
  {
    name: 7,
    Video: "./Videos/v6.mp4"
  },
  {
    name: 8,
    Video: "./Videos/v6c1.mp4"
  },
  {
    name: 9,
    Video: "./Videos/v7.mp4"
  },
  {
    name: 10,
    Video: "./Videos/v8.mp4"
  },
  {
    name: 11,
    Video: "./Videos/v9.mp4"
  },
  {
    name: 12,
    Video: "./Videos/v10.mp4"
  },
  {
    name: 13,
    Video: "./Videos/v11.mp4"
  },
  {
    name: 14,
    Video: "./Videos/v12.mp4"
  },
];

  return (
    <div className="App">
      <h1>Spin the wheel and try your luck</h1>
        <Wheel items={Places} />
    </div>
  );
}

export default App;
