(ns my-cool-mobile-app.core
    (:require [reagent.core :as r :refer [atom]]
              [re-frame.core :refer [subscribe dispatch dispatch-sync]]
              [oops.core :refer [ocall]]
              [my-cool-mobile-app.handlers]
              [my-cool-mobile-app.subs]))

(def ReactNative (js/require "react-native"))
(def expo (js/require "expo"))
(def AtExpo (js/require "@expo/vector-icons"))
(def ionicons (.-Ionicons AtExpo))
(def ic (r/adapt-react-class ionicons))

(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))
(def Alert (.-Alert ReactNative))

(defn alert [title]
  (.alert Alert title))

(defn app-root []
  (let [greeting (subscribe [:get-greeting])]
    (fn []
      [view {:style {:background-color "#FFE400":flex-direction "column" :margin 40 :align-items "center"}}
       [text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} "HAPPY BIRTHDAY MUMMY!!!!!!!!!!!!"]
       [image {:source (js/require "./assets/images/jimin.jpg")
               :style {:width 200
                       :height 200}}]
       [text {:style {:margin-bottom 10}}]

       [image {:source (js/require "./assets/images/bobbin.jpeg")
               :style {:width 200
                       :height 200}}]
       [text {:style {:margin-bottom 10}}]
       [touchable-highlight {:style {:background-color "#6B78D5" :padding 10 :border-radius 5}
                             :on-press #(alert "HAPPY BIRTHDAY 2019! LOVE FROM CONNIE!!! :D")}
        [text {:style {:color "white" :text-align "center" :font-weight "bold"}} "Show message! :)"]]

       [text {:style {:margin-bottom 10}}]])))


(defn init []
  (dispatch-sync [:initialize-db])
  (ocall expo "registerRootComponent" (r/reactify-component app-root)))
