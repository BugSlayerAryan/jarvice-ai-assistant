import { toast } from 'react-toastify';

function escapeHtml(value = '') {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function formatLanguage(language = 'text') {
  const normalizedLanguage = language.toLowerCase();

  if (!normalizedLanguage || normalizedLanguage === 'text') return 'Code';

  const names = {
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript',
    javascript: 'JavaScript',
    jsx: 'React / JSX',
    react: 'React',
    tsx: 'React / TSX',
    ts: 'TypeScript',
    typescript: 'TypeScript',
    python: 'Python',
    py: 'Python',
    java: 'Java',
    cpp: 'C++',
    c: 'C',
    json: 'JSON',
    bash: 'Bash',
  };

  return (
    names[normalizedLanguage] ||
    normalizedLanguage.charAt(0).toUpperCase() + normalizedLanguage.slice(1)
  );
}

function showPopupBlockedToast() {
  toast.error('Popup blocked. Please allow popups for this site.', {
    icon: '🚫',
  });
}

export function OpenCodeViewer(code, language = 'text') {
  const newWindow = window.open('', '_blank');

  if (!newWindow) {
    showPopupBlockedToast();
    return;
  }

  const title = formatLanguage(language);
  const safeTitle = escapeHtml(title);
  const safeCode = escapeHtml(code);

  newWindow.document.open();
  newWindow.document.write(`
    <!doctype html>
    <html>
      <head>
        <title>${safeTitle} Code Viewer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <style>
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            min-height: 100vh;
            background:
              radial-gradient(circle at 12% 8%, rgba(56, 189, 248, 0.16), transparent 28%),
              radial-gradient(circle at 88% 18%, rgba(20, 184, 166, 0.10), transparent 24%),
              #0b0f19;
            color: #e5e7eb;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            padding: 32px;
          }

          .shell {
            width: min(1120px, 100%);
            margin: 0 auto;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.10);
            border-radius: 22px;
            background: #111827;
            box-shadow: 0 24px 80px rgba(0,0,0,0.42);
          }

          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 16px 20px;
            border-bottom: 1px solid rgba(255,255,255,0.10);
            background: rgba(255,255,255,0.03);
          }

          .title {
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
            font-size: 14px;
            font-weight: 800;
            color: white;
          }

          .badge {
            border: 1px solid rgba(56,189,248,0.22);
            border-radius: 999px;
            background: rgba(56,189,248,0.10);
            padding: 6px 10px;
            color: #bae6fd;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.06em;
            text-transform: uppercase;
          }

          button {
            height: 36px;
            border: 1px solid rgba(255,255,255,0.10);
            border-radius: 10px;
            background: rgba(255,255,255,0.06);
            color: white;
            padding: 0 12px;
            cursor: pointer;
            font-weight: 700;
          }

          button:hover {
            background: rgba(255,255,255,0.10);
          }

          pre {
            margin: 0;
            min-height: 420px;
            max-height: calc(100vh - 160px);
            padding: 22px;
            overflow: auto;
            background: #0b1020;
            color: #e5e7eb;
            font-size: 14px;
            line-height: 1.7;
            tab-size: 2;
          }

          code {
            white-space: pre;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          }

          @media (max-width: 640px) {
            body {
              padding: 16px;
            }

            .header {
              align-items: flex-start;
              flex-direction: column;
            }

            button {
              width: 100%;
            }

            pre {
              min-height: 360px;
              max-height: calc(100vh - 170px);
              padding: 16px;
              font-size: 13px;
            }
          }
        </style>
      </head>

      <body>
        <div class="shell">
          <div class="header">
            <div class="title">
              <span>&lt;/&gt;</span>
              <span class="badge">${safeTitle}</span>
            </div>

            <button id="copyTop">Copy code</button>
          </div>

          <pre><code id="code">${safeCode}</code></pre>
        </div>

        <script>
          const copyButton = document.getElementById('copyTop');
          const codeBlock = document.getElementById('code');

          copyButton.addEventListener('click', async () => {
            try {
              await navigator.clipboard.writeText(codeBlock.innerText);
              copyButton.innerText = 'Copied';

              setTimeout(() => {
                copyButton.innerText = 'Copy code';
              }, 1200);
            } catch (error) {
              copyButton.innerText = 'Copy failed';

              setTimeout(() => {
                copyButton.innerText = 'Copy code';
              }, 1200);
            }
          });
        </script>
      </body>
    </html>
  `);
  newWindow.document.close();
}

export function runCodePreview(code, language = 'text') {
  const normalizedLanguage = language.toLowerCase();

  const canRun =
    normalizedLanguage === 'html' ||
    normalizedLanguage === 'css' ||
    normalizedLanguage === 'js' ||
    normalizedLanguage === 'javascript';

  if (!canRun) {
    toast.warning(
      `Run is only available for HTML, CSS, and JavaScript. ${formatLanguage(
        normalizedLanguage
      )} cannot be run in browser preview.`,
      {
        icon: '⚡',
      }
    );
    return;
  }

  const newWindow = window.open('', '_blank');

  if (!newWindow) {
    showPopupBlockedToast();
    return;
  }

  let html = '';

  if (normalizedLanguage === 'html') {
    html = code;
  }

  if (normalizedLanguage === 'css') {
    html = `
      <!doctype html>
      <html>
        <head>
          <title>CSS Preview</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <style>
            body {
              margin: 0;
              min-height: 100vh;
              background: #0b0f19;
              color: white;
              font-family: system-ui, sans-serif;
              padding: 32px;
            }

            .preview-card {
              max-width: 520px;
              border: 1px solid rgba(255,255,255,0.12);
              border-radius: 20px;
              background: #111827;
              padding: 24px;
              box-shadow: 0 24px 80px rgba(0,0,0,0.35);
            }

            ${code}
          </style>
        </head>

        <body>
          <div class="preview-card">
            <h1>CSS Preview</h1>
            <p>Your CSS is applied to this preview page.</p>
            <button>Sample Button</button>
          </div>
        </body>
      </html>
    `;
  }

  if (normalizedLanguage === 'js' || normalizedLanguage === 'javascript') {
    html = `
      <!doctype html>
      <html>
        <head>
          <title>JavaScript Preview</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <style>
            body {
              margin: 0;
              min-height: 100vh;
              background: #0b0f19;
              color: white;
              font-family: system-ui, sans-serif;
              padding: 32px;
            }

            pre {
              background: #111827;
              border: 1px solid rgba(255,255,255,0.12);
              border-radius: 16px;
              padding: 18px;
              white-space: pre-wrap;
              line-height: 1.7;
              box-shadow: 0 24px 80px rgba(0,0,0,0.35);
            }
          </style>
        </head>

        <body>
          <h1>JavaScript Preview</h1>
          <p>Console output appears below.</p>
          <pre id="output">Running...</pre>

          <script>
            const output = document.getElementById('output');

            const originalLog = console.log;
            console.log = (...args) => {
              originalLog(...args);
              output.textContent += args.map(String).join(' ') + '\\n';
            };

            try {
              output.textContent = '';
              ${code}

              if (!output.textContent.trim()) {
                output.textContent = 'Code ran successfully. No console output.';
              }
            } catch (error) {
              output.textContent = error.stack || error.message;
            }
          </script>
        </body>
      </html>
    `;
  }

  newWindow.document.open();
  newWindow.document.write(html);
  newWindow.document.close();
}