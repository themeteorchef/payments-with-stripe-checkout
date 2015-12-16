const publicRoutes = FlowRouter.group({
  name: 'public'
});

publicRoutes.route( '/services', {
  name: 'services',
  action() {
    BlazeLayout.render( 'default', { yield: 'services' } );
  }
});
