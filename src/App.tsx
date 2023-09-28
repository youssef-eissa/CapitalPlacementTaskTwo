import React from 'react';
import { OptionOne } from './components/OptionOne';
import { CandidatesData } from './components/fakeData';



function App() {

  return (
    <div >
      <OptionOne Candidates={CandidatesData}  />
    </div>
  );
}

export default App;


    