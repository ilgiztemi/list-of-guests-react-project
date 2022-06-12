import Input from "./components/Input";
import List from "./components/List";
import "./styles.css";
import { GeustsProvider } from "./context/Context";

export default function App() {
  return (
    <GeustsProvider>
      <div className="App">
        <img
          className="img"
          src="https://images.unsplash.com/photo-1651211305258-0c08f09097b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80"
          alt="i"
        />
        <h1>List of Invited Guests!</h1>
        <Input />
        <List />
      </div>
    </GeustsProvider>
  );
}
