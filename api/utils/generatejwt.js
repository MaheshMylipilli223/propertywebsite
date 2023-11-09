import crypto from 'crypto';

const keyLength = 512; // Key length in bits
const algorithm = 'sha256'; // Key generation algorithm

const key = crypto.randomBytes(keyLength).toString('hex');
console.log('JWT Secret Key:', key);

