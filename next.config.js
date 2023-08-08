/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'res.cloundinary.com',
      'lh3.googleusercontent.com'
    ], // Adicionar domínios permitidos para carregar imagens
  },
}

module.exports = nextConfig
