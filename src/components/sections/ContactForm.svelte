<form method="post" action="https://formsubmit.co/el/wobowe">
  <label for="name"> Name </label>
  <input type="text" id="name" name="name" required />
  <label for="email"> Email </label>
  <input type="email" id="email" name="email" required />
  <label for="message"> Message </label>
  <textarea id="message" name="message" required />
  <button>Send</button>
</form>

<style>
  form {
    display: grid;
    border-radius: 8px;
    background: var(--color-bg-light);
    gap: 1rem;
    padding: 2rem;
  }

  :is(label, input, textarea, button) {
    appearance: none;
    background: inherit;
    border: none;
    color: var(--color-text-dark);
    font-family: var(--font-family);
    outline: none;
  }

  :is(input, textarea) {
    background-color: var(--color-text);
    border: 1px solid var(--color-text-dark);
    border-radius: 4px;
    padding: 0.5rem;
  }

  :is(input, textarea):hover,
  :is(input, textarea):focus {
    outline: 1px solid var(--color-text-dark);
    outline-offset: 0px;
  }

  button {
    background: var(--color-bg);
    border-radius: 4px;
    color: var(--color-text-light);
    padding: 1rem 2rem;
    width: fit-content;
  }

  button:hover,
  button:focus {
    cursor: pointer;
    outline: 2px solid green;
  }
</style>
