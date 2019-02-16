// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__24871 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__24872 = null;
var count__24873 = (0);
var i__24874 = (0);
while(true){
if((i__24874 < count__24873)){
var vec__24875 = cljs.core._nth.call(null,chunk__24872,i__24874);
var effect_k = cljs.core.nth.call(null,vec__24875,(0),null);
var value = cljs.core.nth.call(null,vec__24875,(1),null);
var temp__5455__auto___24881 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__5455__auto___24881)){
var effect_fn_24882 = temp__5455__auto___24881;
effect_fn_24882.call(null,value);
} else {
}


var G__24883 = seq__24871;
var G__24884 = chunk__24872;
var G__24885 = count__24873;
var G__24886 = (i__24874 + (1));
seq__24871 = G__24883;
chunk__24872 = G__24884;
count__24873 = G__24885;
i__24874 = G__24886;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24871);
if(temp__5457__auto__){
var seq__24871__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24871__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24871__$1);
var G__24887 = cljs.core.chunk_rest.call(null,seq__24871__$1);
var G__24888 = c__4319__auto__;
var G__24889 = cljs.core.count.call(null,c__4319__auto__);
var G__24890 = (0);
seq__24871 = G__24887;
chunk__24872 = G__24888;
count__24873 = G__24889;
i__24874 = G__24890;
continue;
} else {
var vec__24878 = cljs.core.first.call(null,seq__24871__$1);
var effect_k = cljs.core.nth.call(null,vec__24878,(0),null);
var value = cljs.core.nth.call(null,vec__24878,(1),null);
var temp__5455__auto___24891 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__5455__auto___24891)){
var effect_fn_24892 = temp__5455__auto___24891;
effect_fn_24892.call(null,value);
} else {
}


var G__24893 = cljs.core.next.call(null,seq__24871__$1);
var G__24894 = null;
var G__24895 = (0);
var G__24896 = (0);
seq__24871 = G__24893;
chunk__24872 = G__24894;
count__24873 = G__24895;
i__24874 = G__24896;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__24897 = cljs.core.seq.call(null,value);
var chunk__24898 = null;
var count__24899 = (0);
var i__24900 = (0);
while(true){
if((i__24900 < count__24899)){
var map__24901 = cljs.core._nth.call(null,chunk__24898,i__24900);
var map__24901__$1 = ((((!((map__24901 == null)))?(((((map__24901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24901):map__24901);
var effect = map__24901__$1;
var ms = cljs.core.get.call(null,map__24901__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24901__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24897,chunk__24898,count__24899,i__24900,map__24901,map__24901__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24897,chunk__24898,count__24899,i__24900,map__24901,map__24901__$1,effect,ms,dispatch))
,ms);
}


var G__24905 = seq__24897;
var G__24906 = chunk__24898;
var G__24907 = count__24899;
var G__24908 = (i__24900 + (1));
seq__24897 = G__24905;
chunk__24898 = G__24906;
count__24899 = G__24907;
i__24900 = G__24908;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24897);
if(temp__5457__auto__){
var seq__24897__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24897__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24897__$1);
var G__24909 = cljs.core.chunk_rest.call(null,seq__24897__$1);
var G__24910 = c__4319__auto__;
var G__24911 = cljs.core.count.call(null,c__4319__auto__);
var G__24912 = (0);
seq__24897 = G__24909;
chunk__24898 = G__24910;
count__24899 = G__24911;
i__24900 = G__24912;
continue;
} else {
var map__24903 = cljs.core.first.call(null,seq__24897__$1);
var map__24903__$1 = ((((!((map__24903 == null)))?(((((map__24903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24903):map__24903);
var effect = map__24903__$1;
var ms = cljs.core.get.call(null,map__24903__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24903__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24897,chunk__24898,count__24899,i__24900,map__24903,map__24903__$1,effect,ms,dispatch,seq__24897__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24897,chunk__24898,count__24899,i__24900,map__24903,map__24903__$1,effect,ms,dispatch,seq__24897__$1,temp__5457__auto__))
,ms);
}


var G__24913 = cljs.core.next.call(null,seq__24897__$1);
var G__24914 = null;
var G__24915 = (0);
var G__24916 = (0);
seq__24897 = G__24913;
chunk__24898 = G__24914;
count__24899 = G__24915;
i__24900 = G__24916;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__24917 = cljs.core.seq.call(null,value);
var chunk__24918 = null;
var count__24919 = (0);
var i__24920 = (0);
while(true){
if((i__24920 < count__24919)){
var event = cljs.core._nth.call(null,chunk__24918,i__24920);
re_frame.router.dispatch.call(null,event);


var G__24921 = seq__24917;
var G__24922 = chunk__24918;
var G__24923 = count__24919;
var G__24924 = (i__24920 + (1));
seq__24917 = G__24921;
chunk__24918 = G__24922;
count__24919 = G__24923;
i__24920 = G__24924;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24917);
if(temp__5457__auto__){
var seq__24917__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24917__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24917__$1);
var G__24925 = cljs.core.chunk_rest.call(null,seq__24917__$1);
var G__24926 = c__4319__auto__;
var G__24927 = cljs.core.count.call(null,c__4319__auto__);
var G__24928 = (0);
seq__24917 = G__24925;
chunk__24918 = G__24926;
count__24919 = G__24927;
i__24920 = G__24928;
continue;
} else {
var event = cljs.core.first.call(null,seq__24917__$1);
re_frame.router.dispatch.call(null,event);


var G__24929 = cljs.core.next.call(null,seq__24917__$1);
var G__24930 = null;
var G__24931 = (0);
var G__24932 = (0);
seq__24917 = G__24929;
chunk__24918 = G__24930;
count__24919 = G__24931;
i__24920 = G__24932;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__24933 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__24934 = null;
var count__24935 = (0);
var i__24936 = (0);
while(true){
if((i__24936 < count__24935)){
var event = cljs.core._nth.call(null,chunk__24934,i__24936);
clear_event.call(null,event);


var G__24937 = seq__24933;
var G__24938 = chunk__24934;
var G__24939 = count__24935;
var G__24940 = (i__24936 + (1));
seq__24933 = G__24937;
chunk__24934 = G__24938;
count__24935 = G__24939;
i__24936 = G__24940;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24933);
if(temp__5457__auto__){
var seq__24933__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24933__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24933__$1);
var G__24941 = cljs.core.chunk_rest.call(null,seq__24933__$1);
var G__24942 = c__4319__auto__;
var G__24943 = cljs.core.count.call(null,c__4319__auto__);
var G__24944 = (0);
seq__24933 = G__24941;
chunk__24934 = G__24942;
count__24935 = G__24943;
i__24936 = G__24944;
continue;
} else {
var event = cljs.core.first.call(null,seq__24933__$1);
clear_event.call(null,event);


var G__24945 = cljs.core.next.call(null,seq__24933__$1);
var G__24946 = null;
var G__24947 = (0);
var G__24948 = (0);
seq__24933 = G__24945;
chunk__24934 = G__24946;
count__24935 = G__24947;
i__24936 = G__24948;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1549663078537
