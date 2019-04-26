const args = [ 'build' ];
const opts = { stdio: 'inherit', cwd: 'src/event-coord-app-ui', shell: true };
require('child_process').spawn('npm', args, opts);