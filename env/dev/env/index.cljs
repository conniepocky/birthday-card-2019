(ns env.index
  (:require [env.dev :as dev]))

;; undo main.js goog preamble hack
(set! js/window.goog js/undefined)

(-> (js/require "figwheel-bridge")
    (.withModules #js {"./assets/icons/loading.png" (js/require "../../../assets/icons/loading.png"), "expo" (js/require "expo"), "./assets/images/cljs.png" (js/require "../../../assets/images/cljs.png"), "./assets/icons/app.png" (js/require "../../../assets/icons/app.png"), "react-native" (js/require "react-native"), "react" (js/require "react"), "./assets/images/bobbin.jpeg" (js/require "../../../assets/images/bobbin.jpeg"), "create-react-class" (js/require "create-react-class"), "@expo/vector-icons" (js/require "@expo/vector-icons"), "./assets/images/jimin.jpg" (js/require "../../../assets/images/jimin.jpg")}
)
    (.start "main" "expo" "192.168.1.92"))
