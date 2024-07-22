import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  const contacts = JSON.parse(data);
  if (contacts.length >= 1) {
    contacts.pop();
  }
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
};

removeLastContact();
