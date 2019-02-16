// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31709){if((e31709 instanceof Error)){
var e = e31709;
return "Error: Unable to stringify";
} else {
throw e31709;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31712 = arguments.length;
switch (G__31712) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31710_SHARP_){
if(typeof p1__31710_SHARP_ === 'string'){
return p1__31710_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31710_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31715 = arguments.length;
var i__4500__auto___31716 = (0);
while(true){
if((i__4500__auto___31716 < len__4499__auto___31715)){
args__4502__auto__.push((arguments[i__4500__auto___31716]));

var G__31717 = (i__4500__auto___31716 + (1));
i__4500__auto___31716 = G__31717;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31714){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31714));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31719 = arguments.length;
var i__4500__auto___31720 = (0);
while(true){
if((i__4500__auto___31720 < len__4499__auto___31719)){
args__4502__auto__.push((arguments[i__4500__auto___31720]));

var G__31721 = (i__4500__auto___31720 + (1));
i__4500__auto___31720 = G__31721;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31718){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31718));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31722){
var map__31723 = p__31722;
var map__31723__$1 = ((((!((map__31723 == null)))?(((((map__31723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31723):map__31723);
var message = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27079__auto___31802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___31802,ch){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___31802,ch){
return (function (state_31774){
var state_val_31775 = (state_31774[(1)]);
if((state_val_31775 === (7))){
var inst_31770 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31776_31803 = state_31774__$1;
(statearr_31776_31803[(2)] = inst_31770);

(statearr_31776_31803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (1))){
var state_31774__$1 = state_31774;
var statearr_31777_31804 = state_31774__$1;
(statearr_31777_31804[(2)] = null);

(statearr_31777_31804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (4))){
var inst_31727 = (state_31774[(7)]);
var inst_31727__$1 = (state_31774[(2)]);
var state_31774__$1 = (function (){var statearr_31778 = state_31774;
(statearr_31778[(7)] = inst_31727__$1);

return statearr_31778;
})();
if(cljs.core.truth_(inst_31727__$1)){
var statearr_31779_31805 = state_31774__$1;
(statearr_31779_31805[(1)] = (5));

} else {
var statearr_31780_31806 = state_31774__$1;
(statearr_31780_31806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (15))){
var inst_31734 = (state_31774[(8)]);
var inst_31749 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31734);
var inst_31750 = cljs.core.first.call(null,inst_31749);
var inst_31751 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31750);
var inst_31752 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31751)].join('');
var inst_31753 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31752);
var state_31774__$1 = state_31774;
var statearr_31781_31807 = state_31774__$1;
(statearr_31781_31807[(2)] = inst_31753);

(statearr_31781_31807[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (13))){
var inst_31758 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31782_31808 = state_31774__$1;
(statearr_31782_31808[(2)] = inst_31758);

(statearr_31782_31808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (6))){
var state_31774__$1 = state_31774;
var statearr_31783_31809 = state_31774__$1;
(statearr_31783_31809[(2)] = null);

(statearr_31783_31809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (17))){
var inst_31756 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31784_31810 = state_31774__$1;
(statearr_31784_31810[(2)] = inst_31756);

(statearr_31784_31810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (3))){
var inst_31772 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31774__$1,inst_31772);
} else {
if((state_val_31775 === (12))){
var inst_31733 = (state_31774[(9)]);
var inst_31747 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31733,opts);
var state_31774__$1 = state_31774;
if(cljs.core.truth_(inst_31747)){
var statearr_31785_31811 = state_31774__$1;
(statearr_31785_31811[(1)] = (15));

} else {
var statearr_31786_31812 = state_31774__$1;
(statearr_31786_31812[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (2))){
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31774__$1,(4),ch);
} else {
if((state_val_31775 === (11))){
var inst_31734 = (state_31774[(8)]);
var inst_31739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31740 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31734);
var inst_31741 = cljs.core.async.timeout.call(null,(1000));
var inst_31742 = [inst_31740,inst_31741];
var inst_31743 = (new cljs.core.PersistentVector(null,2,(5),inst_31739,inst_31742,null));
var state_31774__$1 = state_31774;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31774__$1,(14),inst_31743);
} else {
if((state_val_31775 === (9))){
var inst_31734 = (state_31774[(8)]);
var inst_31760 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31761 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31734);
var inst_31762 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31761);
var inst_31763 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31762)].join('');
var inst_31764 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31763);
var state_31774__$1 = (function (){var statearr_31787 = state_31774;
(statearr_31787[(10)] = inst_31760);

return statearr_31787;
})();
var statearr_31788_31813 = state_31774__$1;
(statearr_31788_31813[(2)] = inst_31764);

(statearr_31788_31813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (5))){
var inst_31727 = (state_31774[(7)]);
var inst_31729 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31730 = (new cljs.core.PersistentArrayMap(null,2,inst_31729,null));
var inst_31731 = (new cljs.core.PersistentHashSet(null,inst_31730,null));
var inst_31732 = figwheel.client.focus_msgs.call(null,inst_31731,inst_31727);
var inst_31733 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31732);
var inst_31734 = cljs.core.first.call(null,inst_31732);
var inst_31735 = figwheel.client.autoload_QMARK_.call(null);
var state_31774__$1 = (function (){var statearr_31789 = state_31774;
(statearr_31789[(9)] = inst_31733);

(statearr_31789[(8)] = inst_31734);

return statearr_31789;
})();
if(cljs.core.truth_(inst_31735)){
var statearr_31790_31814 = state_31774__$1;
(statearr_31790_31814[(1)] = (8));

} else {
var statearr_31791_31815 = state_31774__$1;
(statearr_31791_31815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (14))){
var inst_31745 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31792_31816 = state_31774__$1;
(statearr_31792_31816[(2)] = inst_31745);

(statearr_31792_31816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (16))){
var state_31774__$1 = state_31774;
var statearr_31793_31817 = state_31774__$1;
(statearr_31793_31817[(2)] = null);

(statearr_31793_31817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (10))){
var inst_31766 = (state_31774[(2)]);
var state_31774__$1 = (function (){var statearr_31794 = state_31774;
(statearr_31794[(11)] = inst_31766);

return statearr_31794;
})();
var statearr_31795_31818 = state_31774__$1;
(statearr_31795_31818[(2)] = null);

(statearr_31795_31818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (8))){
var inst_31733 = (state_31774[(9)]);
var inst_31737 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31733,opts);
var state_31774__$1 = state_31774;
if(cljs.core.truth_(inst_31737)){
var statearr_31796_31819 = state_31774__$1;
(statearr_31796_31819[(1)] = (11));

} else {
var statearr_31797_31820 = state_31774__$1;
(statearr_31797_31820[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27079__auto___31802,ch))
;
return ((function (switch__26989__auto__,c__27079__auto___31802,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26990__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26990__auto____0 = (function (){
var statearr_31798 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31798[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26990__auto__);

(statearr_31798[(1)] = (1));

return statearr_31798;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26990__auto____1 = (function (state_31774){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_31774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e31799){if((e31799 instanceof Object)){
var ex__26993__auto__ = e31799;
var statearr_31800_31821 = state_31774;
(statearr_31800_31821[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31822 = state_31774;
state_31774 = G__31822;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26990__auto__ = function(state_31774){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26990__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26990__auto____1.call(this,state_31774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26990__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26990__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___31802,ch))
})();
var state__27081__auto__ = (function (){var statearr_31801 = f__27080__auto__.call(null);
(statearr_31801[(6)] = c__27079__auto___31802);

return statearr_31801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___31802,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31823_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31823_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31825 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31825){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31824){if((e31824 instanceof Error)){
var e = e31824;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31825], null));
} else {
var e = e31824;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31825))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31826){
var map__31827 = p__31826;
var map__31827__$1 = ((((!((map__31827 == null)))?(((((map__31827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31827):map__31827);
var opts = map__31827__$1;
var build_id = cljs.core.get.call(null,map__31827__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31827,map__31827__$1,opts,build_id){
return (function (p__31829){
var vec__31830 = p__31829;
var seq__31831 = cljs.core.seq.call(null,vec__31830);
var first__31832 = cljs.core.first.call(null,seq__31831);
var seq__31831__$1 = cljs.core.next.call(null,seq__31831);
var map__31833 = first__31832;
var map__31833__$1 = ((((!((map__31833 == null)))?(((((map__31833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31833):map__31833);
var msg = map__31833__$1;
var msg_name = cljs.core.get.call(null,map__31833__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31831__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31830,seq__31831,first__31832,seq__31831__$1,map__31833,map__31833__$1,msg,msg_name,_,map__31827,map__31827__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31830,seq__31831,first__31832,seq__31831__$1,map__31833,map__31833__$1,msg,msg_name,_,map__31827,map__31827__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31827,map__31827__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31835){
var vec__31836 = p__31835;
var seq__31837 = cljs.core.seq.call(null,vec__31836);
var first__31838 = cljs.core.first.call(null,seq__31837);
var seq__31837__$1 = cljs.core.next.call(null,seq__31837);
var map__31839 = first__31838;
var map__31839__$1 = ((((!((map__31839 == null)))?(((((map__31839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31839):map__31839);
var msg = map__31839__$1;
var msg_name = cljs.core.get.call(null,map__31839__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31837__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31841){
var map__31842 = p__31841;
var map__31842__$1 = ((((!((map__31842 == null)))?(((((map__31842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31842):map__31842);
var on_compile_warning = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31842,map__31842__$1,on_compile_warning,on_compile_fail){
return (function (p__31844){
var vec__31845 = p__31844;
var seq__31846 = cljs.core.seq.call(null,vec__31845);
var first__31847 = cljs.core.first.call(null,seq__31846);
var seq__31846__$1 = cljs.core.next.call(null,seq__31846);
var map__31848 = first__31847;
var map__31848__$1 = ((((!((map__31848 == null)))?(((((map__31848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31848):map__31848);
var msg = map__31848__$1;
var msg_name = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31846__$1;
var pred__31850 = cljs.core._EQ_;
var expr__31851 = msg_name;
if(cljs.core.truth_(pred__31850.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31851))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31850.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31851))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31842,map__31842__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto__,msg_hist,msg_names,msg){
return (function (state_31940){
var state_val_31941 = (state_31940[(1)]);
if((state_val_31941 === (7))){
var inst_31860 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31860)){
var statearr_31942_31989 = state_31940__$1;
(statearr_31942_31989[(1)] = (8));

} else {
var statearr_31943_31990 = state_31940__$1;
(statearr_31943_31990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (20))){
var inst_31934 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31944_31991 = state_31940__$1;
(statearr_31944_31991[(2)] = inst_31934);

(statearr_31944_31991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (27))){
var inst_31930 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31945_31992 = state_31940__$1;
(statearr_31945_31992[(2)] = inst_31930);

(statearr_31945_31992[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (1))){
var inst_31853 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31853)){
var statearr_31946_31993 = state_31940__$1;
(statearr_31946_31993[(1)] = (2));

} else {
var statearr_31947_31994 = state_31940__$1;
(statearr_31947_31994[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (24))){
var inst_31932 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31948_31995 = state_31940__$1;
(statearr_31948_31995[(2)] = inst_31932);

(statearr_31948_31995[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (4))){
var inst_31938 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31940__$1,inst_31938);
} else {
if((state_val_31941 === (15))){
var inst_31936 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31949_31996 = state_31940__$1;
(statearr_31949_31996[(2)] = inst_31936);

(statearr_31949_31996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (21))){
var inst_31889 = (state_31940[(2)]);
var inst_31890 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31891 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31890);
var state_31940__$1 = (function (){var statearr_31950 = state_31940;
(statearr_31950[(7)] = inst_31889);

return statearr_31950;
})();
var statearr_31951_31997 = state_31940__$1;
(statearr_31951_31997[(2)] = inst_31891);

(statearr_31951_31997[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (31))){
var inst_31919 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31919)){
var statearr_31952_31998 = state_31940__$1;
(statearr_31952_31998[(1)] = (34));

} else {
var statearr_31953_31999 = state_31940__$1;
(statearr_31953_31999[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (32))){
var inst_31928 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31954_32000 = state_31940__$1;
(statearr_31954_32000[(2)] = inst_31928);

(statearr_31954_32000[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (33))){
var inst_31915 = (state_31940[(2)]);
var inst_31916 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31917 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31916);
var state_31940__$1 = (function (){var statearr_31955 = state_31940;
(statearr_31955[(8)] = inst_31915);

return statearr_31955;
})();
var statearr_31956_32001 = state_31940__$1;
(statearr_31956_32001[(2)] = inst_31917);

(statearr_31956_32001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (13))){
var inst_31874 = figwheel.client.heads_up.clear.call(null);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31940__$1,(16),inst_31874);
} else {
if((state_val_31941 === (22))){
var inst_31895 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31896 = figwheel.client.heads_up.append_warning_message.call(null,inst_31895);
var state_31940__$1 = state_31940;
var statearr_31957_32002 = state_31940__$1;
(statearr_31957_32002[(2)] = inst_31896);

(statearr_31957_32002[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (36))){
var inst_31926 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31958_32003 = state_31940__$1;
(statearr_31958_32003[(2)] = inst_31926);

(statearr_31958_32003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (29))){
var inst_31906 = (state_31940[(2)]);
var inst_31907 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31908 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31907);
var state_31940__$1 = (function (){var statearr_31959 = state_31940;
(statearr_31959[(9)] = inst_31906);

return statearr_31959;
})();
var statearr_31960_32004 = state_31940__$1;
(statearr_31960_32004[(2)] = inst_31908);

(statearr_31960_32004[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (6))){
var inst_31855 = (state_31940[(10)]);
var state_31940__$1 = state_31940;
var statearr_31961_32005 = state_31940__$1;
(statearr_31961_32005[(2)] = inst_31855);

(statearr_31961_32005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (28))){
var inst_31902 = (state_31940[(2)]);
var inst_31903 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31904 = figwheel.client.heads_up.display_warning.call(null,inst_31903);
var state_31940__$1 = (function (){var statearr_31962 = state_31940;
(statearr_31962[(11)] = inst_31902);

return statearr_31962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31940__$1,(29),inst_31904);
} else {
if((state_val_31941 === (25))){
var inst_31900 = figwheel.client.heads_up.clear.call(null);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31940__$1,(28),inst_31900);
} else {
if((state_val_31941 === (34))){
var inst_31921 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31940__$1,(37),inst_31921);
} else {
if((state_val_31941 === (17))){
var inst_31880 = (state_31940[(2)]);
var inst_31881 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31882 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31881);
var state_31940__$1 = (function (){var statearr_31963 = state_31940;
(statearr_31963[(12)] = inst_31880);

return statearr_31963;
})();
var statearr_31964_32006 = state_31940__$1;
(statearr_31964_32006[(2)] = inst_31882);

(statearr_31964_32006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (3))){
var inst_31872 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31872)){
var statearr_31965_32007 = state_31940__$1;
(statearr_31965_32007[(1)] = (13));

} else {
var statearr_31966_32008 = state_31940__$1;
(statearr_31966_32008[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (12))){
var inst_31868 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31967_32009 = state_31940__$1;
(statearr_31967_32009[(2)] = inst_31868);

(statearr_31967_32009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (2))){
var inst_31855 = (state_31940[(10)]);
var inst_31855__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31940__$1 = (function (){var statearr_31968 = state_31940;
(statearr_31968[(10)] = inst_31855__$1);

return statearr_31968;
})();
if(cljs.core.truth_(inst_31855__$1)){
var statearr_31969_32010 = state_31940__$1;
(statearr_31969_32010[(1)] = (5));

} else {
var statearr_31970_32011 = state_31940__$1;
(statearr_31970_32011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (23))){
var inst_31898 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31898)){
var statearr_31971_32012 = state_31940__$1;
(statearr_31971_32012[(1)] = (25));

} else {
var statearr_31972_32013 = state_31940__$1;
(statearr_31972_32013[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (35))){
var state_31940__$1 = state_31940;
var statearr_31973_32014 = state_31940__$1;
(statearr_31973_32014[(2)] = null);

(statearr_31973_32014[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (19))){
var inst_31893 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31893)){
var statearr_31974_32015 = state_31940__$1;
(statearr_31974_32015[(1)] = (22));

} else {
var statearr_31975_32016 = state_31940__$1;
(statearr_31975_32016[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (11))){
var inst_31864 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31976_32017 = state_31940__$1;
(statearr_31976_32017[(2)] = inst_31864);

(statearr_31976_32017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (9))){
var inst_31866 = figwheel.client.heads_up.clear.call(null);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31940__$1,(12),inst_31866);
} else {
if((state_val_31941 === (5))){
var inst_31857 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31940__$1 = state_31940;
var statearr_31977_32018 = state_31940__$1;
(statearr_31977_32018[(2)] = inst_31857);

(statearr_31977_32018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (14))){
var inst_31884 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31884)){
var statearr_31978_32019 = state_31940__$1;
(statearr_31978_32019[(1)] = (18));

} else {
var statearr_31979_32020 = state_31940__$1;
(statearr_31979_32020[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (26))){
var inst_31910 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31910)){
var statearr_31980_32021 = state_31940__$1;
(statearr_31980_32021[(1)] = (30));

} else {
var statearr_31981_32022 = state_31940__$1;
(statearr_31981_32022[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (16))){
var inst_31876 = (state_31940[(2)]);
var inst_31877 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31878 = figwheel.client.heads_up.display_exception.call(null,inst_31877);
var state_31940__$1 = (function (){var statearr_31982 = state_31940;
(statearr_31982[(13)] = inst_31876);

return statearr_31982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31940__$1,(17),inst_31878);
} else {
if((state_val_31941 === (30))){
var inst_31912 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31913 = figwheel.client.heads_up.display_warning.call(null,inst_31912);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31940__$1,(33),inst_31913);
} else {
if((state_val_31941 === (10))){
var inst_31870 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31983_32023 = state_31940__$1;
(statearr_31983_32023[(2)] = inst_31870);

(statearr_31983_32023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (18))){
var inst_31886 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31887 = figwheel.client.heads_up.display_exception.call(null,inst_31886);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31940__$1,(21),inst_31887);
} else {
if((state_val_31941 === (37))){
var inst_31923 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31984_32024 = state_31940__$1;
(statearr_31984_32024[(2)] = inst_31923);

(statearr_31984_32024[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (8))){
var inst_31862 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31940__$1,(11),inst_31862);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27079__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26989__auto__,c__27079__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26990__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26990__auto____0 = (function (){
var statearr_31985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31985[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26990__auto__);

(statearr_31985[(1)] = (1));

return statearr_31985;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26990__auto____1 = (function (state_31940){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_31940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e31986){if((e31986 instanceof Object)){
var ex__26993__auto__ = e31986;
var statearr_31987_32025 = state_31940;
(statearr_31987_32025[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32026 = state_31940;
state_31940 = G__32026;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26990__auto__ = function(state_31940){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26990__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26990__auto____1.call(this,state_31940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26990__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26990__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto__,msg_hist,msg_names,msg))
})();
var state__27081__auto__ = (function (){var statearr_31988 = f__27080__auto__.call(null);
(statearr_31988[(6)] = c__27079__auto__);

return statearr_31988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto__,msg_hist,msg_names,msg))
);

return c__27079__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27079__auto___32055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___32055,ch){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___32055,ch){
return (function (state_32041){
var state_val_32042 = (state_32041[(1)]);
if((state_val_32042 === (1))){
var state_32041__$1 = state_32041;
var statearr_32043_32056 = state_32041__$1;
(statearr_32043_32056[(2)] = null);

(statearr_32043_32056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (2))){
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32041__$1,(4),ch);
} else {
if((state_val_32042 === (3))){
var inst_32039 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32041__$1,inst_32039);
} else {
if((state_val_32042 === (4))){
var inst_32029 = (state_32041[(7)]);
var inst_32029__$1 = (state_32041[(2)]);
var state_32041__$1 = (function (){var statearr_32044 = state_32041;
(statearr_32044[(7)] = inst_32029__$1);

return statearr_32044;
})();
if(cljs.core.truth_(inst_32029__$1)){
var statearr_32045_32057 = state_32041__$1;
(statearr_32045_32057[(1)] = (5));

} else {
var statearr_32046_32058 = state_32041__$1;
(statearr_32046_32058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (5))){
var inst_32029 = (state_32041[(7)]);
var inst_32031 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32029);
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32041__$1,(8),inst_32031);
} else {
if((state_val_32042 === (6))){
var state_32041__$1 = state_32041;
var statearr_32047_32059 = state_32041__$1;
(statearr_32047_32059[(2)] = null);

(statearr_32047_32059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (7))){
var inst_32037 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
var statearr_32048_32060 = state_32041__$1;
(statearr_32048_32060[(2)] = inst_32037);

(statearr_32048_32060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (8))){
var inst_32033 = (state_32041[(2)]);
var state_32041__$1 = (function (){var statearr_32049 = state_32041;
(statearr_32049[(8)] = inst_32033);

return statearr_32049;
})();
var statearr_32050_32061 = state_32041__$1;
(statearr_32050_32061[(2)] = null);

(statearr_32050_32061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27079__auto___32055,ch))
;
return ((function (switch__26989__auto__,c__27079__auto___32055,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26990__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26990__auto____0 = (function (){
var statearr_32051 = [null,null,null,null,null,null,null,null,null];
(statearr_32051[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26990__auto__);

(statearr_32051[(1)] = (1));

return statearr_32051;
});
var figwheel$client$heads_up_plugin_$_state_machine__26990__auto____1 = (function (state_32041){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_32041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e32052){if((e32052 instanceof Object)){
var ex__26993__auto__ = e32052;
var statearr_32053_32062 = state_32041;
(statearr_32053_32062[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32063 = state_32041;
state_32041 = G__32063;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26990__auto__ = function(state_32041){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26990__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26990__auto____1.call(this,state_32041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26990__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26990__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___32055,ch))
})();
var state__27081__auto__ = (function (){var statearr_32054 = f__27080__auto__.call(null);
(statearr_32054[(6)] = c__27079__auto___32055);

return statearr_32054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___32055,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto__){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto__){
return (function (state_32069){
var state_val_32070 = (state_32069[(1)]);
if((state_val_32070 === (1))){
var inst_32064 = cljs.core.async.timeout.call(null,(3000));
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32069__$1,(2),inst_32064);
} else {
if((state_val_32070 === (2))){
var inst_32066 = (state_32069[(2)]);
var inst_32067 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32069__$1 = (function (){var statearr_32071 = state_32069;
(statearr_32071[(7)] = inst_32066);

return statearr_32071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32069__$1,inst_32067);
} else {
return null;
}
}
});})(c__27079__auto__))
;
return ((function (switch__26989__auto__,c__27079__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26990__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26990__auto____0 = (function (){
var statearr_32072 = [null,null,null,null,null,null,null,null];
(statearr_32072[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26990__auto__);

(statearr_32072[(1)] = (1));

return statearr_32072;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26990__auto____1 = (function (state_32069){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_32069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e32073){if((e32073 instanceof Object)){
var ex__26993__auto__ = e32073;
var statearr_32074_32076 = state_32069;
(statearr_32074_32076[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32077 = state_32069;
state_32069 = G__32077;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26990__auto__ = function(state_32069){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26990__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26990__auto____1.call(this,state_32069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26990__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26990__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto__))
})();
var state__27081__auto__ = (function (){var statearr_32075 = f__27080__auto__.call(null);
(statearr_32075[(6)] = c__27079__auto__);

return statearr_32075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto__))
);

return c__27079__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto__,figwheel_version,temp__5457__auto__){
return (function (state_32084){
var state_val_32085 = (state_32084[(1)]);
if((state_val_32085 === (1))){
var inst_32078 = cljs.core.async.timeout.call(null,(2000));
var state_32084__$1 = state_32084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32084__$1,(2),inst_32078);
} else {
if((state_val_32085 === (2))){
var inst_32080 = (state_32084[(2)]);
var inst_32081 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32082 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32081);
var state_32084__$1 = (function (){var statearr_32086 = state_32084;
(statearr_32086[(7)] = inst_32080);

return statearr_32086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32084__$1,inst_32082);
} else {
return null;
}
}
});})(c__27079__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26989__auto__,c__27079__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26990__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26990__auto____0 = (function (){
var statearr_32087 = [null,null,null,null,null,null,null,null];
(statearr_32087[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26990__auto__);

(statearr_32087[(1)] = (1));

return statearr_32087;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26990__auto____1 = (function (state_32084){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_32084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e32088){if((e32088 instanceof Object)){
var ex__26993__auto__ = e32088;
var statearr_32089_32091 = state_32084;
(statearr_32089_32091[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32092 = state_32084;
state_32084 = G__32092;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26990__auto__ = function(state_32084){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26990__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26990__auto____1.call(this,state_32084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26990__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26990__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27081__auto__ = (function (){var statearr_32090 = f__27080__auto__.call(null);
(statearr_32090[(6)] = c__27079__auto__);

return statearr_32090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto__,figwheel_version,temp__5457__auto__))
);

return c__27079__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32093){
var map__32094 = p__32093;
var map__32094__$1 = ((((!((map__32094 == null)))?(((((map__32094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32094):map__32094);
var file = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32096 = "";
var G__32096__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32096),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32096);
var G__32096__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32096__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32096__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32096__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32096__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32097){
var map__32098 = p__32097;
var map__32098__$1 = ((((!((map__32098 == null)))?(((((map__32098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32098):map__32098);
var ed = map__32098__$1;
var formatted_exception = cljs.core.get.call(null,map__32098__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32098__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32098__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32100_32104 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32101_32105 = null;
var count__32102_32106 = (0);
var i__32103_32107 = (0);
while(true){
if((i__32103_32107 < count__32102_32106)){
var msg_32108 = cljs.core._nth.call(null,chunk__32101_32105,i__32103_32107);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32108);


var G__32109 = seq__32100_32104;
var G__32110 = chunk__32101_32105;
var G__32111 = count__32102_32106;
var G__32112 = (i__32103_32107 + (1));
seq__32100_32104 = G__32109;
chunk__32101_32105 = G__32110;
count__32102_32106 = G__32111;
i__32103_32107 = G__32112;
continue;
} else {
var temp__5457__auto___32113 = cljs.core.seq.call(null,seq__32100_32104);
if(temp__5457__auto___32113){
var seq__32100_32114__$1 = temp__5457__auto___32113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32100_32114__$1)){
var c__4319__auto___32115 = cljs.core.chunk_first.call(null,seq__32100_32114__$1);
var G__32116 = cljs.core.chunk_rest.call(null,seq__32100_32114__$1);
var G__32117 = c__4319__auto___32115;
var G__32118 = cljs.core.count.call(null,c__4319__auto___32115);
var G__32119 = (0);
seq__32100_32104 = G__32116;
chunk__32101_32105 = G__32117;
count__32102_32106 = G__32118;
i__32103_32107 = G__32119;
continue;
} else {
var msg_32120 = cljs.core.first.call(null,seq__32100_32114__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32120);


var G__32121 = cljs.core.next.call(null,seq__32100_32114__$1);
var G__32122 = null;
var G__32123 = (0);
var G__32124 = (0);
seq__32100_32104 = G__32121;
chunk__32101_32105 = G__32122;
count__32102_32106 = G__32123;
i__32103_32107 = G__32124;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32125){
var map__32126 = p__32125;
var map__32126__$1 = ((((!((map__32126 == null)))?(((((map__32126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32126):map__32126);
var w = map__32126__$1;
var message = cljs.core.get.call(null,map__32126__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/expo/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/expo/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32128 = cljs.core.seq.call(null,plugins);
var chunk__32129 = null;
var count__32130 = (0);
var i__32131 = (0);
while(true){
if((i__32131 < count__32130)){
var vec__32132 = cljs.core._nth.call(null,chunk__32129,i__32131);
var k = cljs.core.nth.call(null,vec__32132,(0),null);
var plugin = cljs.core.nth.call(null,vec__32132,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32138 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32128,chunk__32129,count__32130,i__32131,pl_32138,vec__32132,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32138.call(null,msg_hist);
});})(seq__32128,chunk__32129,count__32130,i__32131,pl_32138,vec__32132,k,plugin))
);
} else {
}


var G__32139 = seq__32128;
var G__32140 = chunk__32129;
var G__32141 = count__32130;
var G__32142 = (i__32131 + (1));
seq__32128 = G__32139;
chunk__32129 = G__32140;
count__32130 = G__32141;
i__32131 = G__32142;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32128);
if(temp__5457__auto__){
var seq__32128__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32128__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32128__$1);
var G__32143 = cljs.core.chunk_rest.call(null,seq__32128__$1);
var G__32144 = c__4319__auto__;
var G__32145 = cljs.core.count.call(null,c__4319__auto__);
var G__32146 = (0);
seq__32128 = G__32143;
chunk__32129 = G__32144;
count__32130 = G__32145;
i__32131 = G__32146;
continue;
} else {
var vec__32135 = cljs.core.first.call(null,seq__32128__$1);
var k = cljs.core.nth.call(null,vec__32135,(0),null);
var plugin = cljs.core.nth.call(null,vec__32135,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32147 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32128,chunk__32129,count__32130,i__32131,pl_32147,vec__32135,k,plugin,seq__32128__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32147.call(null,msg_hist);
});})(seq__32128,chunk__32129,count__32130,i__32131,pl_32147,vec__32135,k,plugin,seq__32128__$1,temp__5457__auto__))
);
} else {
}


var G__32148 = cljs.core.next.call(null,seq__32128__$1);
var G__32149 = null;
var G__32150 = (0);
var G__32151 = (0);
seq__32128 = G__32148;
chunk__32129 = G__32149;
count__32130 = G__32150;
i__32131 = G__32151;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32153 = arguments.length;
switch (G__32153) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32154_32159 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32155_32160 = null;
var count__32156_32161 = (0);
var i__32157_32162 = (0);
while(true){
if((i__32157_32162 < count__32156_32161)){
var msg_32163 = cljs.core._nth.call(null,chunk__32155_32160,i__32157_32162);
figwheel.client.socket.handle_incoming_message.call(null,msg_32163);


var G__32164 = seq__32154_32159;
var G__32165 = chunk__32155_32160;
var G__32166 = count__32156_32161;
var G__32167 = (i__32157_32162 + (1));
seq__32154_32159 = G__32164;
chunk__32155_32160 = G__32165;
count__32156_32161 = G__32166;
i__32157_32162 = G__32167;
continue;
} else {
var temp__5457__auto___32168 = cljs.core.seq.call(null,seq__32154_32159);
if(temp__5457__auto___32168){
var seq__32154_32169__$1 = temp__5457__auto___32168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32154_32169__$1)){
var c__4319__auto___32170 = cljs.core.chunk_first.call(null,seq__32154_32169__$1);
var G__32171 = cljs.core.chunk_rest.call(null,seq__32154_32169__$1);
var G__32172 = c__4319__auto___32170;
var G__32173 = cljs.core.count.call(null,c__4319__auto___32170);
var G__32174 = (0);
seq__32154_32159 = G__32171;
chunk__32155_32160 = G__32172;
count__32156_32161 = G__32173;
i__32157_32162 = G__32174;
continue;
} else {
var msg_32175 = cljs.core.first.call(null,seq__32154_32169__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32175);


var G__32176 = cljs.core.next.call(null,seq__32154_32169__$1);
var G__32177 = null;
var G__32178 = (0);
var G__32179 = (0);
seq__32154_32159 = G__32176;
chunk__32155_32160 = G__32177;
count__32156_32161 = G__32178;
i__32157_32162 = G__32179;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32184 = arguments.length;
var i__4500__auto___32185 = (0);
while(true){
if((i__4500__auto___32185 < len__4499__auto___32184)){
args__4502__auto__.push((arguments[i__4500__auto___32185]));

var G__32186 = (i__4500__auto___32185 + (1));
i__4500__auto___32185 = G__32186;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32181){
var map__32182 = p__32181;
var map__32182__$1 = ((((!((map__32182 == null)))?(((((map__32182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32182):map__32182);
var opts = map__32182__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32180){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32180));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32187){if((e32187 instanceof Error)){
var e = e32187;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32187;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32188){
var map__32189 = p__32188;
var map__32189__$1 = ((((!((map__32189 == null)))?(((((map__32189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32189):map__32189);
var msg_name = cljs.core.get.call(null,map__32189__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1549663084286
