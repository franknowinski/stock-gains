(function(){
  describe('Owned Stock', function () {
    beforeEach(module('app'));

    var element;
    var scope;

    beforeEach(inject(function($rootScope, $compile){
      scope = $rootScope.$new();
      element = angular.element('<owned-stock stock="stock"></owned-stock>');
      element = $compile(element)(scope);
      scope.stock = {
        Name: 'Apple Inc.',
        Ask: '100.00',
        symbol: 'appl',
        shares: 3,
        dailyReturn: '$10.00'
      };
      scope.$apply();
    }));

    it('should render the stocks name', function() {
      var name = element.find('.stock-table-column');
      expect(name.text()).toBe('100.00');
    });
  });
})();
