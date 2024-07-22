import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  const contacts = JSON.parse(data);
  const contact = createFakeContact();
  contacts.push(contact);
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
};

addOneContact();
