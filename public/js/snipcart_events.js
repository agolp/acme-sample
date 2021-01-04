function itemAdded(item) {
  alert("Item added");
}


// From https://github.com/snipcart/snipcart-gtm/blob/master/snipcart.gtm.js
document.addEventListener('snipcart.ready', function() {
  //Subscribing to different events
  Snipcart.subscribe('item.added', function(item) {
    itemAdded(item);
  });

  Snipcart.subscribe('item.removed', function(item) {
    itemRemoved(item);
  });

  Snipcart.subscribe('order.completed', function(order) {
    orderCompleted(order);
  });

  Snipcart.subscribe('cart.opened', function() {
    cartOpened();
  });

  Snipcart.subscribe('cart.closed', function() {
    cartClosed();
  });

  Snipcart.subscribe('page.change', function(page) {
    pageChanged(page);
  });
});
