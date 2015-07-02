if Meteor.isClient
  Meteor.startup ->
    style = {width:'100%'}

    React.render((
      <div style={style}> 
        <h2>It Works!</h2>
      </div>
    ), document.body)