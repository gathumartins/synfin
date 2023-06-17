import 'package:flutter/material.dart';

const MaterialColor splash = MaterialColor(_splashPrimaryValue, <int, Color>{
  50: Color(0xFFF8F9FC),
  100: Color(0xFFEDF1F8),
  200: Color(0xFFE1E8F3),
  300: Color(0xFFD4DEEE),
  400: Color(0xFFCBD7EB),
  500: Color(_splashPrimaryValue),
  600: Color(0xFFBCCBE4),
  700: Color(0xFFB4C4E0),
  800: Color(0xFFACBEDD),
  900: Color(0xFF9FB3D7),
});
const int _splashPrimaryValue = 0xFFC2D0E7;

const MaterialColor splashAccent =
    MaterialColor(_splashAccentValue, <int, Color>{
  100: Color(0xFFFFFFFF),
  200: Color(_splashAccentValue),
  400: Color(0xFFFFFFFF),
  700: Color(0xFFFCFDFF),
});
const int _splashAccentValue = 0xFFFFFFFF;

const MaterialColor synblue = MaterialColor(_synbluePrimaryValue, <int, Color>{
  50: Color(0xFFE8EAF6),
  100: Color(0xFFC5CBE9),
  200: Color(0xFF9FA8DA),
  300: Color(0xFF7985CB),
  400: Color(0xFF5C6BC0),
  500: Color(_synbluePrimaryValue),
  600: Color(0xFF394AAE),
  700: Color(0xFF3140A5),
  800: Color(0xFF29379D),
  900: Color(0xFF1B278D),
});
const int _synbluePrimaryValue = 0xFF3F51B5;

const MaterialColor synblueAccent =
    MaterialColor(_synblueAccentValue, <int, Color>{
  100: Color(0xFFC6CBFF),
  200: Color(_synblueAccentValue),
  400: Color(0xFF606EFF),
  700: Color(0xFF4757FF),
});
const int _synblueAccentValue = 0xFF939DFF;
