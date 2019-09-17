export default function (context) {
  const defaultUserAgent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36'
  context.userAgent = process.server ? context.req.headers['user-agent'] : defaultUserAgent
}