import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "contact");

    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      setContactInfo(data);
    });
  }, []);

  return (
    <section className="contact-info fadeIn">
      <h3>Contact Me:</h3>
      <ul>
        <li>
          <i className="fas fa-envelope" /> {contactInfo.email}
        </li>
        <li>
          <i className="fas fa-phone-alt" /> {contactInfo.phone}
        </li>
        <li>
          <i className="fas fa-map-marker-alt" /> {contactInfo.address}
        </li>
      </ul>
    </section>
  );
};

export default Contact;
