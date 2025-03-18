import { useState } from "react";
import './App.css';
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";



export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);


  export default function ContactRow({ setSelectedContactId, contact }) {
    return (
      <tr
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
  
  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );
}