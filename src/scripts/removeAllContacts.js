import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  const contacts = JSON.parse(data);
  const removeContacts = (contacts.length = []);
  await fs.writeFile(PATH_DB, JSON.stringify(removeContacts, undefined, 2));
};

removeAllContacts();
