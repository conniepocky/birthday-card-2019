// Compiled by ClojureScript 1.10.238 {}
goog.provide('my_cool_mobile_app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('oops.core');
goog.require('my_cool_mobile_app.handlers');
goog.require('my_cool_mobile_app.subs');
my_cool_mobile_app.core.ReactNative = require("react-native");
my_cool_mobile_app.core.expo = require("expo");
my_cool_mobile_app.core.AtExpo = require("@expo/vector-icons");
my_cool_mobile_app.core.ionicons = my_cool_mobile_app.core.AtExpo.Ionicons;
my_cool_mobile_app.core.ic = reagent.core.adapt_react_class.call(null,my_cool_mobile_app.core.ionicons);
my_cool_mobile_app.core.text = reagent.core.adapt_react_class.call(null,my_cool_mobile_app.core.ReactNative.Text);
my_cool_mobile_app.core.view = reagent.core.adapt_react_class.call(null,my_cool_mobile_app.core.ReactNative.View);
my_cool_mobile_app.core.image = reagent.core.adapt_react_class.call(null,my_cool_mobile_app.core.ReactNative.Image);
my_cool_mobile_app.core.touchable_highlight = reagent.core.adapt_react_class.call(null,my_cool_mobile_app.core.ReactNative.TouchableHighlight);
my_cool_mobile_app.core.Alert = my_cool_mobile_app.core.ReactNative.Alert;
my_cool_mobile_app.core.alert = (function my_cool_mobile_app$core$alert(title){
return my_cool_mobile_app.core.Alert.alert(title);
});
my_cool_mobile_app.core.app_root = (function my_cool_mobile_app$core$app_root(){
var greeting = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-greeting","get-greeting",-320717747)], null));
return ((function (greeting){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_cool_mobile_app.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#FFE400",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"margin","margin",-995903681),(40),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_cool_mobile_app.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"100",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"HAPPY BIRTHDAY MUMMY!!!!!!!!!!!!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_cool_mobile_app.core.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),require("./assets/images/jimin.jpg"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_cool_mobile_app.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_cool_mobile_app.core.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),require("./assets/images/bobbin.jpeg"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_cool_mobile_app.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_cool_mobile_app.core.touchable_highlight,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#6B78D5",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (greeting){
return (function (){
return my_cool_mobile_app.core.alert.call(null,"HAPPY BIRTHDAY 2019! LOVE FROM CONNIE!!! :D");
});})(greeting))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_cool_mobile_app.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),"Show message! :)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_cool_mobile_app.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null)], null)], null);
});
;})(greeting))
});
my_cool_mobile_app.core.init = (function my_cool_mobile_app$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

var target_obj_32558 = my_cool_mobile_app.core.expo;
var _STAR_runtime_state_STAR_32562 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_32558,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_32560 = [target_obj_32558,(function (){var next_obj_32561 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_32558,(0),"registerRootComponent",true))?(target_obj_32558["registerRootComponent"]):null);
return next_obj_32561;
})()];
var fn_32559 = (call_info_32560[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_32559,oops.state.get_last_access_modifier.call(null))){
if(!((fn_32559 == null))){
return fn_32559.call((call_info_32560[(0)]),reagent.core.reactify_component.call(null,my_cool_mobile_app.core.app_root));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_32562;
}});

//# sourceMappingURL=core.js.map?rel=1549711608829
