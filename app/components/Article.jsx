import { h } from 'hyperapp'
import { setInnerHtml } from 'lib/helpers'

const Author = ({ author }) =>
  author
    ? <div class='author' oncreate={setInnerHtml(author)} />
    : null

const Date = ({ date }) =>
  date
    ? <div class='date'>{date.format('MMMM Do, Y')}</div>
    : null

const Display = ({ display }) =>
  display
    ? <div class='display'><img src={display} /></div>
    : null

export default defaults => params => {
  return (
    <article>
      <header>
        {Display(defaults)}
        <div class='meta'>
          <div class='author'>{Author(defaults)}</div>
          {Date(params)}
          <div class='duration'>{Math.ceil(params.duration)} min read</div>
        </div>
      </header>
      <h1 class='title'>
        <a href={`?page=${params.name}`}>
          {params.title}
        </a>
      </h1>
      <div
        class='body'
        oncreate={setInnerHtml(params.body)}
        onupdate={setInnerHtml(params.body)}
      />
    </article>
  )
}
