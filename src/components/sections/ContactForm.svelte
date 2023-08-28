<form name="contact" method="post" netlify>
  <div class="row">
    <label id="namefield" for="name">
      Name
      <br />
      <input type="text" id="name" name="name" required />
    </label>
    <label id="emailfield" for="email">
      Email <br />
      <input type="email" id="email" name="email" required />
    </label>
  </div>
  <label id="messagefield" for="message">
    Message
    <br />
    <textarea id="message" name="message" required />
  </label>
  <button id="button">Send</button>
</form>

<style>
  form {
    background: var(--color-bg-light);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }

  .row {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  :is(label, input, textarea, button) {
    appearance: none;
    background: inherit;
    border: none;
    color: var(--color-text-dark);
    flex: 1;
    font-family: var(--font-family);
    outline: none;
  }

  :is(input, textarea) {
    background-color: var(--color-text);
    border: 1px solid var(--color-text-dark);
    border-radius: 4px;
    padding: 0.5rem;
    width: calc(100% - 1rem);
  }

  :is(input, textarea):hover,
  :is(input, textarea):focus {
    outline: 1px solid var(--color-text-dark);
    outline-offset: 0px;
  }

  textarea {
    height: 150px;
  }

  button {
    background: var(--color-bg);
    border-radius: 4px;
    color: var(--color-text-light);
    padding: 1rem 2rem;
    margin-inline: auto;
    width: fit-content;
  }

  button:hover,
  button:focus {
    cursor: pointer;
    outline: 2px solid green;
  }
</style>
