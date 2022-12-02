import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts";
import EditContact from "./EditContact";


// HOOKS

function App() {
  const [contacts, setContacts] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");
  const [SearchResults, setSearchResults] = useState([]);

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/users", request);
    setContacts([...contacts, response.data]);
  };

  // UPDATE CONTACT
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/users/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  // FOR DELETING THE ITEMS
  const removeContactHandler = async (id) => {
    await api.delete(`/users/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // RETRIVE CONTACTS
  const retriveContacts = async () => {
    const response = await api.get("/users");
    return response.data;
  };

  // SEARCH
  const searchHandler = (SearchTerm) => {
    setSearchTerm(SearchTerm);
    if (SearchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(SearchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={SearchTerm.length < 1 ? contacts : SearchResults}
                getContactId={removeContactHandler}
                term={SearchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/edit"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
