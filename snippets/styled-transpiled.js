import _JSXStyle from "styled-jsx/style";
export default () => (
  <div data-jsx='486838012'>
    Hello world
    <_JSXStyle styleId='486838012' css={`
      div[data-jsx="486838012"] {
        -webkit-transition: background 200ms;
        -moz-transition: background 200ms;
        -ms-transition: background 200ms;
        transition: background 200ms;
        background: red;
      }
      @media (max-width: 600px) {
        div[data-jsx="486838012"] {
          background: blue;
        }
      }`} />
  </div>
)