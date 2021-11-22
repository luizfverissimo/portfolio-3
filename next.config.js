module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/links',
        destination: 'https://lfv-bio-link.vercel.app/',
        permanent: true,
      },
    ]
  },
}
