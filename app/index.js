var React = require('react');
var ReactDOM = reaquire('react-dom');



var HelloWorld = React.createClass({

render: function ()  {

     return (


        <div> Hello World </div>


     	)

}


});


ReactDOM.render(

<HelloWorld />,
document.getElementByid('app')

	); 

