import _ from 'lodash'

class MenuCtrl {
  constructor($scope, $timeout, menuService) {
    "ngInject"

    $scope.searchBar = {
      query: ''
    }
    $scope.filterOptions = [
      {
        name: 'breads',
        selected: false
      },
      {
        name: 'brownies',
        selected: false
      },
      {
        name: 'cakes',
        selected: false
      },
      {
        name: 'cookies',
        selected: false
      },
      {
        name: 'candy',
        selected: false
      },
      {
        name: 'vegan',
        selected: false
      }
    ]

    menuService.getMenuItems()
      .then((menuItems) => {
        $scope.menuItems = menuItems
        $scope.searchResults = menuItems
      })

    $scope.search = () => {
      $timeout(() => {
        if (!$scope.searchBar.query.length) $scope.reset()
        else {
          const regex = new RegExp($scope.searchBar.query, 'i')
          $scope.searchResults = _.filter($scope.searchResults, (item) => (regex.test(item.title) || regex.test(item.type) || regex.test(item.description) || (regex.test('vegan') && item.is_vegan)))
        }
      })
    }

    $scope.reset = () => {
      $timeout(() => {
        $scope.searchResults = $scope.menuItems
      })
    }

    $scope.sort = (name) => {
      $timeout(() => {
        _.forEach($scope.filterOptions, (option) => {
            if (option.name === name) {
              if (option.selected === true) option.selected = false
              else option.selected = true
            }
        })
        let selectedOptions = _.filter($scope.filterOptions, { selected: true })
        if (!selectedOptions.length) $scope.reset()
        else $scope.searchResults = _.filter($scope.menuItems, (item) => (_.find(selectedOptions, { name: item.type }) || (_.find(selectedOptions, { name: 'vegan', selected: true }) && item.is_vegan)))
      })
    }
  }
}

export default {MenuCtrl};
