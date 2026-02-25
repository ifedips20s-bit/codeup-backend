const { exec } = require("child_process");

function runSubmission(callback) {
  exec(
    'docker run --rm --memory="128m" --cpus="0.5" --network=none codeup-runner',
    (error, stdout, stderr) => {
      if (error) {
        return callback("FAIL", stderr);
      }
      callback("PASS", stdout);
    }
  );
}

module.exports = { runSubmission };