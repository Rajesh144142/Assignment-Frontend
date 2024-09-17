import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header";
import SuggestionList from "./components/SuggestionList";
import { fetchSuggestions } from "./redux/suggestionSlice";
import ResponseModal from "./utilities/modals/ResponseModal";
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react'; // Changed to use Authenticator directly
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';

Amplify.configure(config);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSuggestions());
  }, [dispatch]);

  return (
    <div className="container">
      <Authenticator>
        {({ signOut }) => (
          <>
            <Header />
            <SuggestionList />
            <ResponseModal />
            <button onClick={signOut}>Sign out</button> {/* Example of a sign out button */}
          </>
        )}
      </Authenticator>
    </div>
  );
};

export default App;
