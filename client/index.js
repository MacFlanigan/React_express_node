import App from '../client/components/App';
import axios from 'axios';

ReactDOM.render(<App initialData={window.__initialData__} />, document.getElementById("root"));
