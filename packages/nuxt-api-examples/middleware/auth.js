import Cookies from 'universal-cookie'

export default ({ req, route, redirect }) => {
  if (['/'].includes(route.path)) {
    return
  }

  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookies.get('credential')

  if (credential && route.path === '/login') {
    return redirect('/')
  }
  if (!credential && route.path !== '/login') {
    return redirect('/login')
  }
}
