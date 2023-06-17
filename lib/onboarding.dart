import 'package:flutter/material.dart';
import 'package:introduction_screen/introduction_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:synfinpay/colors.dart';
import 'package:synfinpay/login.dart';

class OnBoarding extends StatelessWidget {
  const OnBoarding({super.key});
  @override
  Widget build(BuildContext context) {
    final List<PageViewModel> pages = [
      PageViewModel(
        title: "Welcome to SynfinPay",
        body:
            'Our community of creatives is ready for your next big thing. Let’s go creatively wild!',
        image: Image.asset('images/onboardone.png'),
        decoration: const PageDecoration(
          titleTextStyle: TextStyle(
              fontFamily: 'Gbold',
              fontSize: 34,
              color: Colors.black,
              fontWeight: FontWeight.bold),
        ),
      ),
      PageViewModel(
        title: "Design Templates are Simple and Easy",
        body:
            'Create a unique emotional story that describes better than words',
        image: Image.asset('images/onboardone.png'),
        decoration: const PageDecoration(
          titleTextStyle: TextStyle(
              fontFamily: 'Gbold',
              fontSize: 34,
              color: Colors.black,
              fontWeight: FontWeight.bold),
        ),
      ),
      PageViewModel(
        title: "Lorem ipsum dolor sit amet consectetur.",
        body:
            'Create a unique emotional story that describes better than words',
        image: Image.asset('images/onboardthree.png'),
        footer: Container(
          padding: const EdgeInsets.all(40.0),
          child: ElevatedButton(
            onPressed: () async {
              final prefs = await SharedPreferences.getInstance();
              await prefs.setBool('ON_BOARDING', false);
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const LoginPage()),
              );
            },
            style: ElevatedButton.styleFrom(
              padding: const EdgeInsets.all(16.0),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(36), // Radius value
              ),
            ),
            child: const Text('Sign In'),
          ),
        ),
        decoration: const PageDecoration(
          titleTextStyle: TextStyle(
              fontFamily: 'Gbold',
              fontSize: 34,
              color: Colors.black,
              fontWeight: FontWeight.bold),
        ),
      )
    ];
    return Scaffold(
      backgroundColor: splash,
      body: SafeArea(
        child: IntroductionScreen(
          globalBackgroundColor: splash,
          isTopSafeArea: true,
          pages: pages,
          dotsDecorator: const DotsDecorator(
            size: Size(8, 8),
            color: synblue,
          ),
          showSkipButton: true,
          skip: const Text(
            "Skip",
            style: TextStyle(fontSize: 20),
          ),
          showDoneButton: false,
          showNextButton: true,
          next: const Text(
            "Next",
            style: TextStyle(fontSize: 20),
          ),
        ),
      ),
    );
  }
}
