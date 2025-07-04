import { Page } from '@shopify/polaris'
import React from 'react'
import { TodoApp } from '../components/TodoContainer/TodoContainer'

const Homepage = () => {
  return (
    <Page>
        <TodoApp></TodoApp>
        {/* sth new here */}
    </Page>
  )
}

export default Homepage
