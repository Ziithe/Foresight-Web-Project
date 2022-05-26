import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3 text-light' style={{ backgroundColor: 'rgba(33,137,126)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='#'>
          Foresight Agricultural Insights
        </a>
      </div>
    </MDBFooter>
  );
}