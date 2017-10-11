import React from 'react'
import FilterLink from '../../containers/FilterLink'

const Filter = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {', '}
    <FilterLink filter="SHOW_INACTIVE">Inactive</FilterLink>
    {', '}
    <FilterLink filter="SHOW_IN_PROGRESS">In progress</FilterLink>
    {', '}
    <FilterLink filter="SHOW_NICE_TO_HAVE">Nice to have</FilterLink>
  </p>
)

export default Filter