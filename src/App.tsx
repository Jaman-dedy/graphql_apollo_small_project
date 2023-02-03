import React from 'react';
import { Suspense } from "react";
import ReactDOM from "react-dom";
import { graphql, loadQuery, useLazyLoadQuery, PreloadedQuery, useQueryLoader, RelayEnvironmentProvider, QueryRenderer, usePreloadedQuery } from "react-relay";
import { Environment, fetchQuery, Network, RecordSource, Store, type Variables } from "relay-runtime";
import Todos from './Todos'



const modernEnvironment: Environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
})
const appQuery = graphql`

query AppQuery($id: String){
   user(id: $id){
    ...Header_user
    ...Todos_user
   }
}
`;

const appQueryRef = loadQuery(modernEnvironment, appQuery, {id: 'jser1'})

function App() {
  const data = usePreloadedQuery(appQuery, appQueryRef);
  return  (<Suspense fallback={<p>...</p>}>
    <Header user={data.user} /> 
    <Todos user={data.user}/>
    <p>here we go</p>
    </Suspense> )
}

  ReactDOM.render(
    <React.StrictMode>
      <RelayEnvironmentProvider environment={modernEnvironment}>
    <App/>
  </RelayEnvironmentProvider>
    </React.StrictMode>
  , document.getElementById("root"))


export default App