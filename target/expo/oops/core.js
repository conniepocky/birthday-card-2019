// Compiled by ClojureScript 1.10.238 {}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__31284 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__31284)){
throw oops.state.prepare_error_from_call_site.call(null,msg,(function (){var data__31031__auto__ = data;
var or__3922__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5455__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var devtools__31032__auto__ = temp__5455__auto__;
var temp__5455__auto____$1 = (devtools__31032__auto__["toolbox"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var toolbox__31033__auto__ = temp__5455__auto____$1;
var temp__5455__auto____$2 = (toolbox__31033__auto__["envelope"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var envelope__31034__auto__ = temp__5455__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__31034__auto__)){
return envelope__31034__auto__.call(null,data__31031__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return data__31031__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__31284)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,(function (){var data__31031__auto__ = data;
var or__3922__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5455__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var devtools__31032__auto__ = temp__5455__auto__;
var temp__5455__auto____$1 = (devtools__31032__auto__["toolbox"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var toolbox__31033__auto__ = temp__5455__auto____$1;
var temp__5455__auto____$2 = (toolbox__31033__auto__["envelope"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var envelope__31034__auto__ = temp__5455__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__31034__auto__)){
return envelope__31034__auto__.call(null,data__31031__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return data__31031__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,false,G__31284)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31284)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__31285 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__31285)){
throw oops.state.prepare_error_from_call_site.call(null,msg,(function (){var data__31031__auto__ = data;
var or__3922__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5455__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var devtools__31032__auto__ = temp__5455__auto__;
var temp__5455__auto____$1 = (devtools__31032__auto__["toolbox"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var toolbox__31033__auto__ = temp__5455__auto____$1;
var temp__5455__auto____$2 = (toolbox__31033__auto__["envelope"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var envelope__31034__auto__ = temp__5455__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__31034__auto__)){
return envelope__31034__auto__.call(null,data__31031__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return data__31031__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__31285)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,(function (){var data__31031__auto__ = data;
var or__3922__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5455__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var devtools__31032__auto__ = temp__5455__auto__;
var temp__5455__auto____$1 = (devtools__31032__auto__["toolbox"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var toolbox__31033__auto__ = temp__5455__auto____$1;
var temp__5455__auto____$2 = (toolbox__31033__auto__["envelope"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var envelope__31034__auto__ = temp__5455__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__31034__auto__)){
return envelope__31034__auto__.call(null,data__31031__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return data__31031__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,false,G__31285)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31285)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31293 = arguments.length;
var i__4500__auto___31294 = (0);
while(true){
if((i__4500__auto___31294 < len__4499__auto___31293)){
args__4502__auto__.push((arguments[i__4500__auto___31294]));

var G__31295 = (i__4500__auto___31294 + (1));
i__4500__auto___31294 = G__31295;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__31288){
var vec__31289 = p__31288;
var info = cljs.core.nth.call(null,vec__31289,(0),null);

if(!(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id))){
var G__31292_31296 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__31292_31296)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__31292_31296)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__31292_31296)){
} else {
if(cljs.core._EQ_.call(null,null,G__31292_31296)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31292_31296)].join('')));

}
}
}
}
} else {
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq31286){
var G__31287 = cljs.core.first.call(null,seq31286);
var seq31286__$1 = cljs.core.next.call(null,seq31286);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31287,seq31286__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_31298 = oops.config.get_child_factory.call(null);
var child_factory_31298__$1 = (function (){var G__31299 = child_factory_31298;
var G__31299__$1 = (((G__31299 instanceof cljs.core.Keyword))?G__31299.fqn:null);
switch (G__31299__$1) {
case "js-obj":
return ((function (G__31299,G__31299__$1,child_factory_31298){
return (function (){
return {};
});
;})(G__31299,G__31299__$1,child_factory_31298))

break;
case "js-array":
return ((function (G__31299,G__31299__$1,child_factory_31298){
return (function (){
return [];
});
;})(G__31299,G__31299__$1,child_factory_31298))

break;
default:
return child_factory_31298;

}
})();

var child_obj_31297 = child_factory_31298__$1.call(null,obj,key);
(obj[key] = child_obj_31297);

return child_obj_31297;
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,check_key_QMARK_){
if(((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);

if(cljs.core.truth_(check_key_QMARK_)){
if(((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not.call(null,goog.object.containsKey(obj,key))))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;
}
} else {
return true;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_31303 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_31303);

return selector_path_31303;
} else {
var selector_path_31304 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_31304);

return selector_path_31304;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5455__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if(cljs.core.truth_(temp__5455__auto__)){
var issue_31305 = temp__5455__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_31305);
} else {
return null;
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_31314 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_31314,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_31307 = (function (){var path_31306 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_31306,(0));

return path_31306;
})();
var len_31308 = path_31307.length;
var i_31309 = (0);
var obj_31310 = obj;
while(true){
if((i_31309 < len_31308)){
var mode_31311 = (path_31307[i_31309]);
var key_31312 = (path_31307[(i_31309 + (1))]);
var next_obj_31313 = oops.core.get_key_dynamically.call(null,obj_31310,key_31312,mode_31311);
var G__31315 = mode_31311;
switch (G__31315) {
case (0):
var G__31317 = (i_31309 + (2));
var G__31318 = next_obj_31313;
i_31309 = G__31317;
obj_31310 = G__31318;
continue;

break;
case (1):
if(!((next_obj_31313 == null))){
var G__31319 = (i_31309 + (2));
var G__31320 = next_obj_31313;
i_31309 = G__31319;
obj_31310 = G__31320;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_31313 == null))){
var G__31321 = (i_31309 + (2));
var G__31322 = next_obj_31313;
i_31309 = G__31321;
obj_31310 = G__31322;
continue;
} else {
var G__31323 = (i_31309 + (2));
var G__31324 = oops.core.punch_key_dynamically_BANG_.call(null,obj_31310,key_31312);
i_31309 = G__31323;
obj_31310 = G__31324;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31315)].join('')));

}
} else {
return obj_31310;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_31350 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_31350,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_31326 = (function (){var path_31325 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_31325,(0));

return path_31325;
})();
var len_31327 = path_31326.length;
if((len_31327 < (4))){
return [obj,(function (){var path_31329 = path_31326;
var len_31330 = path_31329.length;
var i_31331 = (0);
var obj_31332 = obj;
while(true){
if((i_31331 < len_31330)){
var mode_31333 = (path_31329[i_31331]);
var key_31334 = (path_31329[(i_31331 + (1))]);
var next_obj_31335 = oops.core.get_key_dynamically.call(null,obj_31332,key_31334,mode_31333);
var G__31351 = mode_31333;
switch (G__31351) {
case (0):
var G__31355 = (i_31331 + (2));
var G__31356 = next_obj_31335;
i_31331 = G__31355;
obj_31332 = G__31356;
continue;

break;
case (1):
if(!((next_obj_31335 == null))){
var G__31357 = (i_31331 + (2));
var G__31358 = next_obj_31335;
i_31331 = G__31357;
obj_31332 = G__31358;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_31335 == null))){
var G__31359 = (i_31331 + (2));
var G__31360 = next_obj_31335;
i_31331 = G__31359;
obj_31332 = G__31360;
continue;
} else {
var G__31361 = (i_31331 + (2));
var G__31362 = oops.core.punch_key_dynamically_BANG_.call(null,obj_31332,key_31334);
i_31331 = G__31361;
obj_31332 = G__31362;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31351)].join('')));

}
} else {
return obj_31332;
}
break;
}
})()];
} else {
var target_obj_31328 = (function (){var path_31336 = path_31326.slice((0),(len_31327 - (2)));
var len_31337 = path_31336.length;
var i_31338 = (0);
var obj_31339 = obj;
while(true){
if((i_31338 < len_31337)){
var mode_31340 = (path_31336[i_31338]);
var key_31341 = (path_31336[(i_31338 + (1))]);
var next_obj_31342 = oops.core.get_key_dynamically.call(null,obj_31339,key_31341,mode_31340);
var G__31352 = mode_31340;
switch (G__31352) {
case (0):
var G__31364 = (i_31338 + (2));
var G__31365 = next_obj_31342;
i_31338 = G__31364;
obj_31339 = G__31365;
continue;

break;
case (1):
if(!((next_obj_31342 == null))){
var G__31366 = (i_31338 + (2));
var G__31367 = next_obj_31342;
i_31338 = G__31366;
obj_31339 = G__31367;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_31342 == null))){
var G__31368 = (i_31338 + (2));
var G__31369 = next_obj_31342;
i_31338 = G__31368;
obj_31339 = G__31369;
continue;
} else {
var G__31370 = (i_31338 + (2));
var G__31371 = oops.core.punch_key_dynamically_BANG_.call(null,obj_31339,key_31341);
i_31338 = G__31370;
obj_31339 = G__31371;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31352)].join('')));

}
} else {
return obj_31339;
}
break;
}
})();
return [target_obj_31328,(function (){var path_31343 = [(path_31326[(len_31327 - (2))]),(path_31326[(len_31327 - (1))])];
var len_31344 = path_31343.length;
var i_31345 = (0);
var obj_31346 = target_obj_31328;
while(true){
if((i_31345 < len_31344)){
var mode_31347 = (path_31343[i_31345]);
var key_31348 = (path_31343[(i_31345 + (1))]);
var next_obj_31349 = oops.core.get_key_dynamically.call(null,obj_31346,key_31348,mode_31347);
var G__31353 = mode_31347;
switch (G__31353) {
case (0):
var G__31373 = (i_31345 + (2));
var G__31374 = next_obj_31349;
i_31345 = G__31373;
obj_31346 = G__31374;
continue;

break;
case (1):
if(!((next_obj_31349 == null))){
var G__31375 = (i_31345 + (2));
var G__31376 = next_obj_31349;
i_31345 = G__31375;
obj_31346 = G__31376;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_31349 == null))){
var G__31377 = (i_31345 + (2));
var G__31378 = next_obj_31349;
i_31345 = G__31377;
obj_31346 = G__31378;
continue;
} else {
var G__31379 = (i_31345 + (2));
var G__31380 = oops.core.punch_key_dynamically_BANG_.call(null,obj_31346,key_31348);
i_31345 = G__31379;
obj_31346 = G__31380;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31353)].join('')));

}
} else {
return obj_31346;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_31395 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_31395,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_31382 = (function (){var path_31381 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_31381,(1));

return path_31381;
})();
var len_31385 = path_31382.length;
var parent_obj_path_31386 = path_31382.slice((0),(len_31385 - (2)));
var key_31383 = (path_31382[(len_31385 - (1))]);
var mode_31384 = (path_31382[(len_31385 - (2))]);
var parent_obj_31387 = (function (){var path_31388 = parent_obj_path_31386;
var len_31389 = path_31388.length;
var i_31390 = (0);
var obj_31391 = obj;
while(true){
if((i_31390 < len_31389)){
var mode_31392 = (path_31388[i_31390]);
var key_31393 = (path_31388[(i_31390 + (1))]);
var next_obj_31394 = oops.core.get_key_dynamically.call(null,obj_31391,key_31393,mode_31392);
var G__31396 = mode_31392;
switch (G__31396) {
case (0):
var G__31398 = (i_31390 + (2));
var G__31399 = next_obj_31394;
i_31390 = G__31398;
obj_31391 = G__31399;
continue;

break;
case (1):
if(!((next_obj_31394 == null))){
var G__31400 = (i_31390 + (2));
var G__31401 = next_obj_31394;
i_31390 = G__31400;
obj_31391 = G__31401;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_31394 == null))){
var G__31402 = (i_31390 + (2));
var G__31403 = next_obj_31394;
i_31390 = G__31402;
obj_31391 = G__31403;
continue;
} else {
var G__31404 = (i_31390 + (2));
var G__31405 = oops.core.punch_key_dynamically_BANG_.call(null,obj_31391,key_31393);
i_31390 = G__31404;
obj_31391 = G__31405;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31396)].join('')));

}
} else {
return obj_31391;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_31387,key_31383,val,mode_31384);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1549663083649
