import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newMailbox = {
      ...formData,
      _id: mailboxes.length + 1
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path="/" 
          element={<main>
            <h1>Mailbox</h1>
            </main>} 
        />
        <Route 
          path="/mailboxes" 
          element={<MailboxList mailboxes={mailboxes} />} 
        />
        <Route 
          path="/new-mailbox" 
          element={<MailboxForm addBox={addBox} />} 
        />
        <Route 
          path="/mailboxes/:mailboxId" 
          element={<MailboxDetails mailboxes={mailboxes} />} 
        />
      </Routes>
    </>
  );
};

export default App;