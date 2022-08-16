// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getEmojiList } from '../../lib/sheets';

export default async function handler(req, res) {
  const emojis = await getEmojiList();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(emojis));
  
}
