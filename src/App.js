import CssBaseline from "@material-ui/core/CssBaseline";
import NavigatorBar from "../src/Components/NavigatorBar";
import GridLayout from "./Components/GridLayout";
import Container from "@material-ui/core/Container";
import SideBar from "../src/Components/SideBar";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <SideBar />
      <NavigatorBar />
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
    </div>
  );
}

export default App;
