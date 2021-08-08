const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
// module.exports = {
//     sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   webpack(config, { isServer }) {
//     if (isServer) {
//       return {
//         ...config,
//         entry() {
//           return config.entry().then((entry) => ({
//             ...entry,
//             // your custom entry points
//             worker: path.resolve(process.cwd(), 'src/worker.js'),
//             run: path.resolve(process.cwd(), 'src/run.js'),
//           }));
//         }
//       };
//     }
//     return config;
//   },
// };