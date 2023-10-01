import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { api } from '../API/RTKQuery';

export async function render(
  url: string | Partial<Location>,
  context: RenderToPipeableStreamOptions
) {
  const store = setupStore();
  store.dispatch(api.endpoints.getCharacters.initiate({ query: '', page: 1 }));
  await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));

  return [
    ReactDOMServer.renderToPipeableStream(
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>,
      context
    ),
    store.getState(),
  ] as const;
}
