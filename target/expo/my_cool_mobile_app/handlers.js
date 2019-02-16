// Compiled by ClojureScript 1.10.238 {}
goog.provide('my_cool_mobile_app.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.spec.alpha');
goog.require('my_cool_mobile_app.db');
/**
 * Throw an exception if db doesn't have a valid spec.
 */
my_cool_mobile_app.handlers.check_and_throw = (function my_cool_mobile_app$handlers$check_and_throw(spec,db){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec,db))){
return null;
} else {
var explain_data = cljs.spec.alpha.explain_data.call(null,spec,db);
throw cljs.core.ex_info.call(null,["Spec check failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(explain_data)].join(''),explain_data);
}
});
my_cool_mobile_app.handlers.validate_spec = (cljs.core.truth_(goog.DEBUG)?re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"validate-spec","validate-spec",-202873800),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var db = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
my_cool_mobile_app.handlers.check_and_throw.call(null,new cljs.core.Keyword("my-cool-mobile-app.db","app-db","my-cool-mobile-app.db/app-db",848995297),db);

return context;
})):re_frame.core.__GT_interceptor);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_cool_mobile_app.handlers.validate_spec], null),(function (_,___$1){
return my_cool_mobile_app.db.app_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-greeting","set-greeting",-653540063),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_cool_mobile_app.handlers.validate_spec], null),(function (db,p__25333){
var vec__25334 = p__25333;
var _ = cljs.core.nth.call(null,vec__25334,(0),null);
var value = cljs.core.nth.call(null,vec__25334,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"greeting","greeting",462222107),value);
}));

//# sourceMappingURL=handlers.js.map?rel=1549663078910
