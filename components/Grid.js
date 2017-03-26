export const Grid = ({children}) => (
  <div>
    {children}
    <div style={{clear: 'left'}} />
  </div>
)

export const Span = ({children}) => (
  <div style={{float: 'left', width: '50%'}}>
    {children}
  </div>
)
