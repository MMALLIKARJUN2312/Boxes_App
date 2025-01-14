const Box = props => {
  //  Write your code here.
  const {className, text} = props
  return (
    <div className={className}>
      <p className='text'>{text}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div>
    <h1>Boxes</h1>
    <div className='boxesContainer'>
      <Box className='box1' text='Small' />
      <Box className='box2' text='Medium' />
      <Box className='box3' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
