import RegisterAccount from "./Register";
import "./Register.css";

function App() {
  return (
    <div className="reg_body">
      {/* <Navbar bg="dark" variant="dark">
        <Container> 
          <Navbar.Brand>Koobecaf</Navbar.Brand>
        </Container>s
      </Navbar> */}
      <div className="reg_page">
        <RegisterAccount/>
      </div>
    </div>
  );
}

export default App;


// import Friends from "./Friends";
// import "./Friends.css";

// function App() {
//   return (
//     <div className="page">
//       <Friends />
//     </div>
//   );
// }

// export default App;
