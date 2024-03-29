export default function (req, res, next) {
  const redirects = [
    {
      from: '/categories/poissons-et-crustaces',
      to: '/categories/poissons'
    },
    {
      from: '/categories/burgers-et-tartines',
      to: '/categories/burgers'
    }
  ]
  const redirect = redirects.find((r) => r.from === req.url)
  if (redirect) {
    res.writeHead(301, { Location: redirect.to })
    res.end()
  } else {
    next()
  }
}
