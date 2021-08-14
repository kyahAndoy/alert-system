import React from 'react';
import './App.css';
import UserPage from './UserPage';

function App() {
  return (
    <Router>
            <Switch>
              <Route exact path="/" component={UserPage} />
              {/* <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/welcome" component={TransactionType} />
              <Route path="/bir-transactions" component={BIRTransactions} />
              <Route path="/profiles" component={Profiles} />
              <Route path="/profile-creation" component={ProfileCreationForm} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/tax-filing" component={TaxFilingForm} />
              <Route path="/payment" component={Payment} />
              <Route path="/*" component={Page404} /> */}
            </Switch>
          </Router>
  );
}

export default App;
