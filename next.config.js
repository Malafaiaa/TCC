const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/create_preference',
        destination: '/api/create_preference.ts', // Caminho completo para o arquivo create_preference.ts
      },
    ];
  },
};

module.exports = nextConfig;
