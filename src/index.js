import app from './app';

import { connect } from './database';
connect();

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

