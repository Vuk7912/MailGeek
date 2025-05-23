import fs from 'fs';
import path from 'path';

describe('Content Script', () => {
  let contentScriptContent;
  
  beforeAll(() => {
    // Read the content.js file
    contentScriptContent = fs.readFileSync(path.resolve(__dirname, '../content.js'), 'utf8');
  });

  test('content.js should exist', () => {
    expect(contentScriptContent).toBeTruthy();
  });

  test('content.js appears to handle DOM interactions', () => {
    expect(contentScriptContent).toMatch(/document\./);
    expect(contentScriptContent).toMatch(/querySelector/);
  });
});