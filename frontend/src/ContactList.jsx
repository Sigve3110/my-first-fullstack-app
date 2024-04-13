import React from "react"

const ContactList = ({ contacts }) => {
    return (
        <div>
        <h1>Contacts</h1>
        <div>
            <button>Add Contact</button>
            <button>Delete Contact</button>
        </div>
        <ul>
            {contacts.map((contact) => (
            <li key={contact.id}>
                {contact.first_name} {contact.last_name}
            </li>
            ))}
        </ul>
        </div>
    )
    }
export default ContactList