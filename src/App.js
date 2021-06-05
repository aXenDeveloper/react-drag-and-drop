import Block from './components/Block';
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <Block id="block1">
        <Card id="card1">card1</Card>
        <Card id="card2">card2</Card>
      </Block>

      <Block id="block2">
        <Card id="card3">card3</Card>
      </Block>

      <Block id="block3">
        <Card id="card4">card4</Card>
      </Block>
    </div>
  );
}

export default App;
