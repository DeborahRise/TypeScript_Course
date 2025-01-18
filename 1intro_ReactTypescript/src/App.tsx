
import Counter from "./components/Counter"
import GenericList from "./components/GenericList"
import Hello from "./components/Hello"
import Section from "./components/Section"

function App() {
  const item: string[] = ["rice", "beans", "dodo"];
  

  return (
    <>
      <Hello title="What's good"/>
      <Section title="was default. Now altered">
        This is what a "children is. View browser to see"
      </Section>
      <Counter />
      <GenericList title={"Generic Lists"} items={item} render={(it: string) => <span className="gold">
        {it}
      </span>} />
    </>
  )
}

export default App
