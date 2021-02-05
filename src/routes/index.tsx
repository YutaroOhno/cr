import { FC } from 'react'
import { makeTop, makeTodos } from '../factories/pages'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/top" exact component={makeTop} />
        <Route path="/todos" exact component={makeTodos} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
