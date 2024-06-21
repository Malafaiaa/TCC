
const nextConfig = {
  images: {
    domains: ['utfs.io', 'i.pinimg.com', 'www.bing.com', 'p2.trrsf.com'], // Adicione aqui todos os hostnames que você deseja permitir para o componente next/image
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
