import 'package:flutter/material.dart';
import 'package:synfinpay/colors.dart';
import 'package:synfinpay/forgot.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: synblue,
      appBar: AppBar(
        toolbarHeight: 80,
        centerTitle: false,
        elevation: 0,
        title: const Text('Sign in'),
      ),
      body: Container(
          width: double.infinity,
          height: double.maxFinite,
          padding: const EdgeInsets.all(25.0),
          decoration: const BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(30.0),
              topRight: Radius.circular(30.0),
            ),
          ),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                const Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Text(
                      'Welcome Back,',
                      textAlign: TextAlign.left,
                      style: TextStyle(
                          color: synblue,
                          fontSize: 25,
                          fontFamily: 'pSemibold',
                          fontWeight: FontWeight.w700),
                    ),
                    Text(
                      'Sign in to continue',
                      textAlign: TextAlign.left,
                      style: (TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.w500,
                          fontFamily: 'pMedium')),
                    ),
                  ],
                ),
                const SizedBox(
                  height: 20.0,
                ),
                Image.asset(
                  'images/login.png',
                  width: 213.0,
                  height: 165.0,
                ),
                const SizedBox(
                  height: 20.0,
                ),
                TextFormField(
                  keyboardType: TextInputType.emailAddress,
                  decoration: InputDecoration(
                    labelText: "Email Address",
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(30.0),
                    ),
                    contentPadding: const EdgeInsets.symmetric(
                        vertical: 16.0, horizontal: 30.0),
                  ),
                ),
                const SizedBox(
                  height: 20.0,
                ),
                TextFormField(
                  keyboardType: TextInputType.visiblePassword,
                  obscureText: true,
                  decoration: InputDecoration(
                    suffixIcon: const Icon(Icons.remove_red_eye),
                    labelText: "Password",
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(30.0),
                    ),
                    contentPadding: const EdgeInsets.symmetric(
                        vertical: 16.0, horizontal: 30.0),
                  ),
                ),
                const SizedBox(
                  height: 5.0,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    TextButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => const ForgotPage()),
                          );
                        },
                        child: Text('Forgot your password ?'))
                  ],
                ),
                const SizedBox(
                  height: 20.0,
                ),
                Container(
                  height: 50,
                  width: double.infinity,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(100.0),
                    color: splash,
                  ),
                  child: MaterialButton(
                    onPressed: () {},
                    child: Text('Sign in'),
                  ),
                ),
                const SizedBox(
                  height: 25.0,
                ),
                const Icon(
                  Icons.fingerprint_rounded,
                  size: 64.0,
                  color: synblue,
                )
              ],
            ),
          )),
    );
  }
}
