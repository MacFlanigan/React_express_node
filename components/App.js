import BookList from './BookList';
class App extends React.Component {
  state = { answer: 42 };
  render() {
    return (
      <div>
        <h2>Hello components {this.state.answer}</h2>
        <p>{this.props.name}</p>
        <BookList />
      </div>
    );
  }
}

export default App;
