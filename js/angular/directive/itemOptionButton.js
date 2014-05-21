var ITEM_TPL_OPTION_BUTTONS_LEFT =
  '<div class="item-options invisible left">' +
  '</div>';
var ITEM_TPL_OPTION_BUTTONS =
  '<div class="item-options invisible">' +
  '</div>';

/**
* @ngdoc directive
* @name ionOptionButton
* @parent ionic.directive:ionItem
* @module ionic
* @restrict E
* Creates an option button inside a list item, that is visible when the item is swiped
* to the left by the user.  Swiped open option buttons can be hidden with
* {@link ionic.service:$ionicListDelegate#closeOptionButtons $ionicListDelegate#closeOptionButtons}.
*
* Can be assigned any button class.
*
* See {@link ionic.directive:ionList} for a complete example & explanation.
*
* @usage
*
* ```html
* <ion-list>
*   <ion-item>
*     I love kittens!
*     <ion-option-button class="button-positive">Share</ion-option-button>
*     <ion-option-button class="button-assertive">Edit</ion-option-button>
*   </ion-item>
* </ion-list>
* ```
*/

IonicModule.directive('ionOptionButton', ['$compile', function($compile) {
  return {
    restrict: 'E',
    require: '^ionItem',
    priority: Number.MAX_VALUE,
    compile: function($element, $attr) {

      $attr.$set('class', ($attr['class'] || '') + ' button', true);
      return function($scope, $element, $attr, itemCtrl) {
        v
        if($element.hasClass('.left-hidden')){
          if (!itemCtrl.leftOptionsContainer) {
            itemCtrl.leftOptionsContainer = angular.element(ITEM_TPL_OPTION_BUTTONS_LEFT);
            itemCtrl.$element.prepend(itemCtrl.optionsContainer);
          }
          itemCtrl.leftOptionsContainer.append($element);
        }else{
          if (!itemCtrl.rightOptionsContainer) {
            itemCtrl.rightOptionsContainer = angular.element(ITEM_TPL_OPTION_BUTTONS);
            itemCtrl.$element.append(itemCtrl.optionsContainer);
          }
          itemCtrl.rightOptionsContainer.append($element);
        }
        $element.on('click',function(e){
          e.stopPropagation();
        });
      };
    }
  };
}]);