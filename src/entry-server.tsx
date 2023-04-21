import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export function render(url: string, context: RenderToPipeableStreamOptions) {
  return ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    context
  );
}
