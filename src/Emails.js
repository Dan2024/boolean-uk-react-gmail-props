import Email from "./Email";

export default function Emails({ filteredEmails, toggleRead, toggleStar }) {
  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email) => (
          <Email
            key={email.id}
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
          />
        ))}
      </ul>
    </main>
  );
}
