import app from './app';
import database from './database';

database.sync();
console.log('rodando banco');

app.listen(3001);
console.log('servidor rodando na porta 3001');