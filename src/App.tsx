import Router from "./Router";
import BackToTop from "./components/backToTop/BackToTop";
import Chat from "./components/backToTop/Chat";

function App() {
  const router = Router();
  return (
    <div className="App relative">
      <div id="top"></div>
      {router}
      <BackToTop />
      <Chat />
    </div>
  );
}

export default App;
