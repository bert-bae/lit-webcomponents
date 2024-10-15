import "./App.css";
import { BaeAccordionReact } from "@bae/lit-components";

function App() {
  return (
    <div>
      <h3>This is an experiment with lit components in turborepo</h3>
      <BaeAccordionReact title="Yay!" open>
        <p slot="content">This is the content</p>
        <button
          slot="icon"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          Icon
        </button>
      </BaeAccordionReact>
    </div>
  );
}

export default App;
