import Router from './routes';
import './styles/filter.css';
import './styles/topNav.css';
import './styles/leftNav.css';
import './styles/App.css';
import './styles/input.css';
import './styles/mainFeed.css';
import './styles/theme.css';
import './styles/srollbar.css';
import './styles/animation.css';
import './styles/line.css';
import 'react-tippy/dist/tippy.css';
import 'tippy.js/dist/tippy.css';

import { store } from './app/store';
import { Provider } from 'react-redux';

function App() {
	return (
		<>
			{''}
			<Provider store={store}>
				<Router /> {''}
			</Provider>
		</>
	);
}

export default App;
