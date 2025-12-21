export const pagesIndexHtml = (version: string, commit: string) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>simplelogin-client</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        line-height: 1.6;
        background: #ffffff;
        color: #333;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      }

      .container {
        max-width: 600px;
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      header {
        text-align: center;
        margin-bottom: 2rem;
      }

      h1 {
        font-size: 2.5rem;
        font-weight: 400;
        color: #1a1a1a;
        margin-bottom: 0.5rem;
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
        background: #f6f8fa;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        display: inline-block;
      }

      .version {
        font-size: 1.25rem;
        font-weight: 500;
        color: #666;
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      li a {
        display: block;
        padding: 1.5rem 2rem;
        background: #ffffff;
        border: 2px solid #e5e5e5;
        border-radius: 12px;
        color: #333;
        text-decoration: none;
        font-size: 1.125rem;
        font-weight: 500;
        transition: all 0.2s ease;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      }

      li a:hover {
        border-color: #333;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      footer {
        margin-top: 2rem;
        text-align: center;
        color: #999;
        font-size: 0.875rem;
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
      }

      @media (max-width: 640px) {
        h1 {
          font-size: 2rem;
        }

        .version {
          font-size: 1rem;
        }

        li a {
          padding: 1.25rem 1.5rem;
          font-size: 1rem;
        }

        footer {
          font-size: 0.75rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <h1>simplelogin-client</h1>
        <div class="version">v${version}</div>
      </header>
      <ul>
        <li><a href="typedoc/index.html">Documentation</a></li>
        <li><a href="redoc/index.html">SimpleLogin API Specification</a></li>
        <li><a href="https://github.com/KennethWussmann/simplelogin-client">GitHub</a></li>
      </ul>
    </div>
    <footer>
      ${commit}
    </footer>
  </body>
</html>
`;
