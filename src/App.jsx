import Navbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div
      className="d-flex flex-column position-relative align-items-center text-white"
      style={{ paddingBottom: "10vh" }}
    >
      <Navbar />
      <h1 style={{ paddingTop: "15vh" }}>Home Page</h1>

      <Container style={{ paddingTop: "15vh" }}>
        <Row>
          <Col>
            <p>
              Hei, jeg heter Gustav og studerer dataingeniør ved NTNU i
              Trondheim. Jeg utvikler programvare og har erfaring med
              programmeringsspråk som C, C++, Python, Java, Lua, Rust, Html, CSS
              og JavaScript. I tillegg har jeg erfaring med
              versjonskontrollsystemer som Git, GitLab og GitHub. Andre verktøy
              jeg bruker er blant annet Ghidra, Ida Pro og Cheat Engine som jeg
              bruker til reversering av programvare. På videregående hadde jeg
              musikk, dans og drama med dans på Create Videregående skole på i
              Lillehammer. Etter videregående hadde jeg et årstudium med forkurs
              for ingeniørutdanninger. I fremtiden ønsker jeg å jobbe med
              programvareutvikling innenfor området programvaresikkerhet.
              Prosjekter jeg jobber på akkurat nå er minne manipulasjon av
              eksterne prosesser ved bruk av mach og programmeringsspråket C på
              MacOS. Jeg jobber også på en DLL (Dynamic Link Library) injektor
              med C++ og Windows.h på Windows. Jeg planlegger å lage en dylib
              injektor med C eller C++ for MacOS.
            </p>
          </Col>
          <Col>
            <img src="/Github.png"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
