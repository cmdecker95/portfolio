<nav>
  <div class="left">
    <a href="#top">
      <h1>^,^</h1>
    </a>
  </div>
  <div class="right">
    <ul>
      <a href="#projects">
        <li>Projects</li>
      </a>
      <a href="#experience">
        <li>Experience</li>
      </a>
      <a href="#blog">
        <li>Blog</li>
      </a>
      <a href="#contact">
        <li>Contact</li>
      </a>
    </ul>
  </div>
</nav>

<style>
  nav {
    align-items: center;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text);
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: var(--color-accent);
  }

  h1 {
    background: var(--color-border);
    border-radius: 8px;
    color: var(--color-bg);
    padding: 0.5rem 1rem;
    transition: 100ms ease;
  }

  h1:hover {
    background: var(--color-accent);
    color: var(--color-text);
    transform: translateY(-3px);
    transition: 100ms ease;
  }

  ul {
    display: flex;
    gap: 1.5rem;
  }
</style>
