import 'package:flutter/material.dart';

class RoundedButton extends StatelessWidget {
  final String btnName;
  final Icon? icon;
  final TextStyle? textStyle;
  final VoidCallback? callback;
  final Color? color;

  const RoundedButton(
      {super.key,
      required this.btnName,
      this.icon,
      this.textStyle,
      this.callback,
      this.color=Colors.lightGreen});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        onPressed: () {
          callback!();
        },
        child: icon != null
            ? Row(
              mainAxisAlignment: MainAxisAlignment.center,
                children: [icon!,Text(
                btnName,
                style: textStyle,
              )],
              )
            : Text(
                btnName,
                style: textStyle,
              ),
            style: ElevatedButton.styleFrom(
              foregroundColor: Colors.purple,
              backgroundColor:color,
              shadowColor: color,
              shape: RoundedRectangleBorder(
                borderRadius:BorderRadius.all(Radius.circular(20)),
              ),
               
            ), 
              );
  }
}
