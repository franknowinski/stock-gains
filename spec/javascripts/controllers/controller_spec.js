// describe("reddit api service", function () {
//   var redditService, httpBackend;
//
//   beforeEach(module("app"));
//
//   beforeEach(inject(function (_StockService_, $httpBackend) {
//     StockService = _StockService_;
//     httpBackend = $httpBackend;
//   }));
//
//   it("should do something", function () {
//     // httpBackend.whenGET("http://api.reddit.com/user/yoitsnate/submitted.json").respond({
//     //     data: {
//     //       children: [
//     //         {
//     //           data: {
//     //             subreddit: "golang"
//     //           }
//     //         },
//     //         {
//     //           data: {
//     //             subreddit: "javascript"
//     //           }
//     //         },
//     //         {
//     //           data: {
//     //             subreddit: "golang"
//     //           }
//     //         },
//     //         {
//     //           data: {
//     //             subreddit: "javascript"
//     //           }
//     //         }
//     //       ]
//     //     }
//     // });
//     StockService.getStocks("aapl").then(function(subreddits) {
//       expect(subreddits).toEqual({symbol: 'appl'});
//     });
//     httpBackend.flush();
//   });
//
// });
