import { expect, test } from 'vitest';

import Tag from '../Tag';

test('tag br', () => {
  const actual = new Tag('br');

  expect(actual.toString()).toBe('<br>');
});

test('tag img', () => {
  const actual = new Tag('img',  { src: "path/to/image" });

  expect(actual.toString()).toBe('<img src="path/to/image">');
});

test('tag input', () => {
  const actual = new Tag('input',  { type: "submit", value: "Save" });

  expect(actual.toString()).toBe('<input type="submit" value="Save">');
});

test('tag label', () => {
  const actual = new Tag('label',  {}, "Email");

  expect(actual.toString()).toBe('<label>Email</label>');
});
