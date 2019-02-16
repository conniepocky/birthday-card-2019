// Compiled by ClojureScript 1.10.238 {}
goog.provide('env.expo.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('my_cool_mobile_app.core');
goog.require('figwheel.client');
goog.require('env.dev');
cljs.core.enable_console_print_BANG_.call(null);
env.expo.main.cnt = reagent.core.atom.call(null,(0));
env.expo.main.reloader = (function env$expo$main$reloader(){
cljs.core.deref.call(null,env.expo.main.cnt);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_cool_mobile_app.core.app_root], null);
});
env.expo.main.root_el = reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env.expo.main.reloader], null));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(env.dev.ip),":3449/figwheel-ws"].join(''),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),false,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return cljs.core.swap_BANG_.call(null,env.expo.main.cnt,cljs.core.inc);
}));
my_cool_mobile_app.core.init.call(null);

//# sourceMappingURL=main.js.map?rel=1549711608850
