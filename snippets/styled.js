
export default () => (
  <div>
    Hello world
    <style jsx>{`
      div {
        transition: background 200ms;
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  </div>
)