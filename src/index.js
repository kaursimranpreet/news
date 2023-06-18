import ReactDOM from 'react-dom';
import registerServiceWorker from './ui/registerServiceWorker';
import './styles/index.css';
import {routes} from './routes';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
