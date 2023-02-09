import { writeFile } from 'fs/promises';
import { join } from 'path';
import { distDir } from '../constants';

export const buildPagesIndex = async () =>
  Promise.all([
    writeFile(
      join(distDir, 'index.html'),
      ` <!DOCTYPE html>
        <html lang="en">
          <meta charset="UTF-8">
          <title>simplelogin-client</title>
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <style>
            body {
              font-family: sans-serif;
              line-height: 1.5;
            }
            li {
              font-size: 24px;
            }
          </style>
          <body>
            <h1>simplelogin-client</h1>
            <ul>
              ${[
                ['Documentation', 'typedoc'],
                ['SimpleLogin API Specification', 'redoc'],
              ]
                .map(([label, href]) => `<li><a href="${join(href, 'index.html')}">${label}</a></li>`)
                .join('\n')}
              <li><a href="https://github.com/KennethWussmann/simplelogin-client">GitHub</a></li>
            </ul>
          </body>
        </html>
      `,
      'utf-8',
    ),
    writeFile(join(distDir, '.nojekyll'), '', 'utf-8'),
  ]);
