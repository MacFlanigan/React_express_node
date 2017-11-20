import App from '../client/components/App';

ReactDOM.hydrate(<App initialData={window.__initialData__} />, document.getElementById("root"));
