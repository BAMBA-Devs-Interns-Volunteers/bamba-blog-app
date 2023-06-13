// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   images: {
// 	domains: ['cdn.sanity.io'],
// 	loader: 'custom'
// }
// }


// module.exports = nextConfig

// module.exports = {
//   async rewrites() {
//       return [
//         {
//           source: '/api/:path*',
//           destination: 'https:/:path*',
//         },
//       ]
//     },
// };
require('dotenv').config()


module.exports = {
  // ... other configuration options
  // add the following option
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/index.html': { page: '/' }
    };
  }
};
