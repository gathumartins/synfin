import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:synfinpay/colors.dart';
import 'package:flutter/services.dart';
import 'package:synfinpay/login.dart';
import 'package:synfinpay/splash.dart';
import 'onboarding.dart';

bool show = true;
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
  ]);
  final prefs = await SharedPreferences.getInstance();
  show = prefs.getBool('ON_BOARDING') ?? true;
  runApp(const SynfinApp());
}

class SynfinApp extends StatelessWidget {
  const SynfinApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: synblue),
      home: show ? const OnBoarding() : const SplashPage(),
    );
  }
}

//show ? const OnBoarding() : const LoginPage()
