const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'src/event-coord-app-ui', shell: true };
require('child_process').spawn('npm run', args, opts);