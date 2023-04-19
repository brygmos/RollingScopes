import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import AppRouter from './components/AppRouter';
import { Provider } from 'react-redux';
import { store } from './main';

export function render(url: string, context: RenderToPipeableStreamOptions) {
  return ReactDOMServer.renderToString(
    // <StaticRouter location={url} context={context}> // is for render to string
    <StaticRouter location={url}>
      {/*<App />*/}
      {/*<AppRouter />*/}
      <p>hhh</p>
      {/*<Provider store={store}>*/}
      {/*  <App />*/}
      {/*</Provider>*/}
    </StaticRouter>
    // , context
  );
}
