const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

export function localizeNumbers(value: string | number, language: string) {
  if (language !== 'hi') {
    return String(value);
  }

  return String(value).replace(/\d/g, (digit) => devanagariDigits[Number(digit)]);
}
