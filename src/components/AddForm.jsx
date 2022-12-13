import React from 'react';

function AddForm() {
  return (
    <div>
      <div className="capitalize">
        Sign Up
      </div>
      <div className="inputs">
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name.."
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name.."
          />

          <input
            type="text"
            name="email"
            placeholder="Email.."
          />

          <input
            type="text"
            name="age"
            placeholder="Age.."
          />

          <input
            type="text"
            name="password"
            placeholder="Password.."
          />

          <input
            type="submit"
            id="submit"
          />

        </form>
      </div>
    </div>
  );
}
export default AddForm;
