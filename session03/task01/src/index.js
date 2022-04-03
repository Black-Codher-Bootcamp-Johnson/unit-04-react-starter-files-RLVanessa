

import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Vanessa';

function Profile(name){
  //  if(){
    return <main id="content" role="main" class="base">
            <h1>{name}'s React Page</h1>
              <p>I'm 20 years old!</p>
            </main>
  //  }
  //  else {
  //    return <main id="content" role="main" class="base">
  //      <h1>Just a React Page</h1>
  //      <p>Nothing to see here!</p>
  //    </main>  
  //  }
}

ReactDOM.render(Profile(),document.getElementById('root'));
