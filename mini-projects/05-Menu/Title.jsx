/* eslint-disable react/prop-types */
function Title({ text }) {
  return (
    <div className="title">
      <h2>{text || 'Defeult Title'}</h2>
      <div className="title-underline"></div>
    </div>
  )
}
export default Title
