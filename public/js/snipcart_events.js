function itemAdded(item) {
  window.dataLayer.push({
    'event': 'Add to Cart',
    'product': item.name,
  });
}

// From https://github.com/snipcart/snipcart-gtm/blob/master/snipcart.gtm.js
document.addEventListener('snipcart.ready', function() {
  //Subscribing to different events
  Snipcart.subscribe('item.added', itemAdded);

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
