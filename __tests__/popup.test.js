import fs from 'fs';
import path from 'path';

describe('Popup Module', () => {
  let popupContent;
  
  beforeAll(() => {
    // Read the popup.js file
    popupContent = fs.readFileSync(path.resolve(__dirname, '../popup.js'), 'utf8');
  });

  test('popup.js should exist', () => {
    expect(popupContent).toBeTruthy();
  });

  test('popup.js contains essential chrome extension functions', () => {
    expect(popupContent).toMatch(/chrome\.tabs/);
    expect(popupContent).toMatch(/chrome\.runtime/);
  });
});